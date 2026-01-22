# 🛡️ Safe Sport Advisor  
### *Privacy-First AI Guidance for Athletes*

---

## 🧠 Technologies & Skills

**AI & Machine Learning**
- Large Language Models (LLMs)
- Hybrid AI Architecture (Local + External Models)
- Prompt Engineering
- Data Anonymization & Privacy Filtering

**Backend & APIs**
- Node.js
- Express.js
- RESTful API Design
- Middleware & Routing Logic

**Privacy & Security**
- Privacy-by-Design Architecture
- Sensitive Data Detection
- Secure Data Routing
- Audit Logging & Traceability

**Databases**
- MongoDB (NoSQL)
- Schema Design
- Secure Data Storage

**DevOps & Tools**
- Ollama (Local LLM Deployment)
- OpenAI API Integration
- Git & GitHub
- Environment Configuration

**Frontend**
- Web-Based Chat Interfaces
- Client–Server Communication

---
**Safe Sport Advisor** is a privacy-preserving intelligent advisory system designed to support athletes with **training optimization, injury management, recovery strategies, and health monitoring**—without compromising sensitive personal or medical data.

Unlike conventional AI-powered chat platforms, Safe Sport Advisor enforces a **trusted privacy boundary**, ensuring confidential information is **never exposed to external services**.

---

## 🌟 Why Safe Sport Advisor?

- 🧠 Intelligent, athlete-focused AI guidance  
- 🔒 Privacy-first architecture  
- 🔀 Hybrid AI reasoning (local + external models)  
- 📈 Scalable and modular system design  
- 🗂️ Full auditability and traceability  

---

## 🔑 Key Features

### 🔐 Privacy-First Design
Sensitive personal, medical, and sports-related data is **detected and analyzed locally**. Only anonymized information is ever sent outside the trusted environment.

### 🤖 Hybrid LLM Architecture
- **Local LLM (Llama 3.1 via Ollama)**  
  Handles sensitive queries and privacy checks  
- **External LLM (OpenAI API)**  
  Processes only anonymized, complex queries

### 🗄️ Scalable NoSQL Storage
- **MongoDB** stores:
  - User messages  
  - Anonymized data  
  - Routing decisions  
  - Audit and compliance logs  

### 🧩 Modular & Extensible
Backend and frontend components are designed for easy extension, maintenance, and future model upgrades.

---

## 🏗️ System Architecture

The system consists of:

1. **Frontend**  
   Web-based chat interface for athlete interaction

2. **Backend (Node.js + Express)**  
   - Message validation  
   - Privacy enforcement  
   - Intelligent routing  
   - Database operations  

3. **Local LLM (Trusted Zone)**  
   - Sensitive data detection  
   - Local response generation  
   - Data anonymization  

4. **External LLM**  
   - Receives anonymized input only  
   - Generates advanced advisory responses  

5. **Database (MongoDB)**  
   - Secure message storage  
   - Full audit trail  

🛡️ A strict **privacy boundary** ensures sensitive information never leaves the controlled environment.

---

## ⚙️ Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/safe-sport-advisor.git
cd safe-sport-advisor
````

### 2️⃣ Install Backend Dependencies

```bash
cd backend
npm install
```

### 3️⃣ Set Up MongoDB

* Ensure MongoDB is running locally
* Or configure a MongoDB connection URI in the backend settings

### 4️⃣ Run the Backend

```bash
npm start
```

### 5️⃣ Run the Frontend

Navigate to the frontend directory and start your preferred frontend server
(e.g., React, Vue, or plain HTML/JavaScript).

---

## 🚀 Usage

1. Open the web-based chat interface
2. Enter a sports, injury, or health-related query
3. The system will:

   * 🔍 Analyze sensitive data locally
   * ✂️ Anonymize private information if required
   * 🔀 Route the query to the appropriate LLM
   * 🧠 Generate a secure, privacy-preserving response

---

## 🔒 Privacy & Security

* Sensitive data never leaves the local environment
* External LLMs receive anonymized input only
* Full audit trail maintained in MongoDB
* All routing and responses are logged for transparency

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch

   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes

   ```bash
   git commit -m "Add feature"
   ```
4. Push to your branch

   ```bash
   git push origin feature-name
   ```
5. Open a pull request 🎉

---

## 📄 License

This project is licensed under the **MIT License**.
See the [LICENSE](LICENSE) file for details.

---

## 📬 Contact

📧 **[s.afreen@studenti.unipi.it](mailto:s.afreen@studenti.unipi.it)**
