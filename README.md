# Safe Sport Advisor

## Overview

**Safe Sport Advisor** is a privacy-first intelligent advisory system designed to assist athletes with training, injury management, recovery, and health monitoring. Unlike traditional AI-powered chat systems, it ensures that sensitive personal, medical, and sports-related information is never exposed to external services.  

The system combines **local and external Large Language Models (LLMs)**, intelligent routing logic, and a **NoSQL database** for secure, scalable, and flexible data management.

---

## Features

- **Privacy-First Design**: Sensitive data is analyzed and anonymized locally before any external processing.  
- **Hybrid LLM Architecture**: Uses a local LLM for sensitive queries and an external LLM (OpenAI API) for complex, anonymized queries.  
- **Scalable Storage**: NoSQL database (MongoDB) stores messages, anonymized data, routing decisions, and audit logs.  
- **Modular Architecture**: Easily extendable and maintainable backend and frontend components.  

---

## Architecture

The system consists of:

1. **Frontend**: Web-based chat interface for user interactions.  
2. **Backend**: Node.js + Express server for message validation, privacy enforcement, routing, and database operations.  
3. **Local LLM**: Runs in a trusted environment (Llama 3.1 via Ollama) to detect and handle sensitive data.  
4. **External LLM**: OpenAI API handles complex, anonymized queries.  
5. **Database**: MongoDB stores messages, responses, anonymized data, and audit logs.  

The system enforces a **trusted privacy boundary** around the backend, local LLM, and database to ensure sensitive information never leaves the controlled environment.

---

## Installation

1. **Clone the repository**  
```bash
git clone https://github.com/yourusername/safe-sport-advisor.git
cd safe-sport-advisor
````

2. **Install backend dependencies**

```bash
cd backend
npm install
```

3. **Set up MongoDB**

* Ensure MongoDB is running locally or provide a connection URI in your backend configuration.

4. **Run the backend**

```bash
npm start
```

5. **Run the frontend**

* Navigate to the frontend folder and start your preferred frontend server (e.g., React, Vue, or plain HTML/JS).

---

## Usage

1. Open the web-based chat interface.
2. Enter your query (sports guidance, injury info, or health metrics).
3. The system will:

   * Analyze for sensitive data locally
   * Anonymize sensitive elements if required
   * Route the query to the appropriate LLM
   * Generate a secure and privacy-preserving response

---

## Privacy and Security

* Sensitive data never leaves the local environment.
* External LLMs only receive anonymized input.
* Full audit trail maintained in the NoSQL database.
* All routing and responses are logged for traceability.

---

## Technology Stack

* **Frontend**: Web-based chat interface
* **Backend**: Node.js + Express
* **Local LLM**: Llama 3.1 via Ollama
* **External LLM**: OpenAI API
* **Database**: MongoDB

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit: `git commit -m 'Add feature'`.
4. Push to your branch: `git push origin feature-name`.
5. Create a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

For questions or inquiries, reach out at: [[your-email@example.com](mailto:s.afreen@studenti.unipi.it)]

---
