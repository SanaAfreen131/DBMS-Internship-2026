const mongoose = require('mongoose');

const ChatLogSchema = new mongoose.Schema({
  anonymizedMessage: { type: String, required: true },
  detectedDataTypes: { type: [String], default: [] },
  routedTo: { type: String, required: true },
  anonymized: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ChatLog', ChatLogSchema);
