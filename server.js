// SAFESPORTADVISOR/backend/server.js

require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

// connect to MongoDB
const connectDB = require('./db');
connectDB();
const ChatLog = require('./models/ChatLog');

app.use(express.json());

// Enable CORS for frontend (if you open index.html directly)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// --- /chat endpoint ---
app.post('/chat', async (req, res) => {
  const { message } = req.body;
  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    // Step 1: Check if the question is easy
    const isEasy = await isQuestionEasy(message);

    let reply;
    let llmUsed;
    let safeMessage = message; // default

    if (isEasy) {
      // Easy → local LLM
      console.log('✅ Easy question → using local LLM');
      const promptText = `
You are "SAK", a world-class Safe Sport Advisor.
Always identify yourself as SAK.
Provide evidence-based, practical guidance on sports performance, injury prevention, or recovery.
Use a professional but approachable tone.
Respond concisely and confidently.
User message: ${message}
      `;
      reply = await callLocalLLM(promptText);
      llmUsed = 'local';
    } else {
      // Complex/sensitive → anonymize first
      console.log('🔒 Complex/sensitive → anonymizing...');
      safeMessage = await anonymizeMessage(message);

      const promptText = `
You are "SAK", a trusted Safe Sport Advisor.
Always identify yourself as SAK.
Provide evidence-based, practical guidance on sports performance, injury prevention, or recovery.
Use a professional but approachable tone.
Respond concisely and confidently.
User input (anonymized): ${safeMessage}
      `;

      if (process.env.OPENAI_API_KEY) {
        console.log('🌐 Sending anonymized message to external LLM');
        reply = await callExternalLLM(promptText);
        llmUsed = 'external';
      } else {
        console.log('⚠️ No OpenAI key → using local LLM with anonymized input');
        reply = await callLocalLLM(promptText);
        llmUsed = 'local';
      }
    }

    // --- Save chat to MongoDB ---
    let detectedDataTypes = [];
    if (!isEasy) {
      detectedDataTypes = extractDetectedDataTypes(safeMessage);
    }

    await ChatLog.create({
      anonymizedMessage: safeMessage,
      detectedDataTypes,
      routedTo: llmUsed,
      anonymized: !isEasy
    });

    // --- Helper to detect placeholders ---
    function extractDetectedDataTypes(text) {
      const types = [];
      const placeholders = ['AGE','HEART_RATE','WEIGHT','VO2_MAX','BLOOD_PRESSURE','NAME','METRIC'];
      placeholders.forEach(p => { if (text.includes(`[${p}]`)) types.push(p); });
      return types;
    }

    // Return reply to frontend
    res.json({ 
      reply,
      routed_to: llmUsed,
      anonymized: !isEasy
    });

  } catch (err) {
    console.error('❌ Error:', err.message);
    res.status(500).json({ error: 'Advisor unavailable. Check if Ollama is running.' });
  }
});

// --- Local LLM call ---
async function callLocalLLM(prompt) {
  const response = await axios.post('http://localhost:11434/api/generate', {
    model: process.env.LOCAL_LLM_MODEL,
    prompt,
    stream: false,
    options: { temperature: 0.7, num_predict: 512 }
  }, { timeout: 120000 });
  return response.data.response.trim();
}

// --- External LLM call (OpenAI) ---
async function callExternalLLM(prompt) {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OpenAI API key not configured');
  }
  const response = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: 'gpt-4o-mini',
      messages: [{ role: 'system', content: 'You are SAK, a trusted Safe Sport Advisor. Always identify yourself as SAK.' },
                 { role: 'user', content: prompt }],
      max_tokens: 512
    },
    {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    }
  );
  return response.data.choices[0].message.content.trim();
}

// --- Anonymize message ---
async function anonymizeMessage(text) {
  const prompt = `
You are a privacy guard for a sports health advisor. REDACT any personal, medical, or biometric data.
Use these placeholders:
- Age → [AGE]
- Heart rate → [HEART_RATE]
- Weight → [WEIGHT]
- VO2 max → [VO2_MAX]
- Blood pressure → [BLOOD_PRESSURE]
- Name → [NAME]
- Distance/time metrics → [METRIC]

Preserve context. Return only the redacted message.

Input: "${text}"
  `;
  return await callLocalLLM(prompt);
}

// --- Decide if question is easy ---
async function isQuestionEasy(text) {
  const prompt = `
You are a routing agent for a Safe Sport Advisor. Reply ONLY "yes" or "no".
Is this question simple enough to be answered by a local sports advisor without external help?
Question: "${text}"
  `;
  const response = await callLocalLLM(prompt);
  return response.toLowerCase().includes('yes');
}

// --- Start server ---
app.listen(port, () => {
  console.log(`✅ Safe Sport Advisor backend running on http://localhost:${port}`);
});
