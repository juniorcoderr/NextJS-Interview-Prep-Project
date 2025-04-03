# **Full Stack Real-Time AI Voice Agent Interview Platform** 🎙️🤖  

Welcome to the **Full Stack AI-Powered Real-Time Voice Interview Platform**! This project is an **innovative AI-driven mock interview system** that helps users **enhance their technical interview skills** by conducting **simulated real-time voice-based interviews** with an AI interviewer.  

Using cutting-edge **Gemini AI**, **Vapi**, and **speech recognition APIs**, this platform provides **intelligent, context-aware, and adaptive interview experiences** that mimic real-world interview scenarios. Candidates receive **instant AI feedback**, making it an essential tool for **tech interview preparation**.  

This project is built using the **Next.js, Firebase, Tailwind CSS, and TypeScript**, ensuring a **highly scalable, responsive, and real-time experience**.  

---

## **🚀 Key Features**  

### 🎤 **AI-Powered Voice Interviews**  
- Simulates **real-world technical interviews** with **human-like AI voice agents**.  
- AI-generated **context-aware** responses that adapt to user answers.  
- Supports **different interview roles** (Software Engineer, Data Scientist, etc.).  

### 🗣️ **Real-Time Voice Interaction**  
- Uses **Vapi** for **seamless voice recognition and synthesis**.  
- Users can **speak their responses**, and AI will **listen, process, and evaluate** their answers.  
- Built-in **natural language understanding (NLU)** for **accurate speech interpretation**.  

### 🎯 **Custom Interview Generation**  
- Users can **select job roles**, and the AI **dynamically generates** relevant questions.  
- Difficulty levels: **Beginner, Intermediate, Advanced**.  
- AI adapts follow-up questions based on **previous user responses**.  

### 🔑 **Secure User Authentication**  
- Firebase Authentication with **Google OAuth & Email/Password login**.  
- Ensures **secure access** and **protects user data**.  

### 📊 **Detailed Interview Feedback & Analysis**  
- AI-generated feedback based on **speech clarity, content quality, and confidence level**.  
- Provides **real-time scoring** and **progress tracking**.  
- Users can **review their past interviews** and identify improvement areas.  

### 🌍 **Scalable & Responsive UI**  
- Built using **Tailwind CSS** for a **modern, responsive design**.  
- Optimized for **desktop, tablet, and mobile devices**.  

### 🌐 **Server-Side Rendering & Optimized Performance**  
- Uses **Next.js SSR & SSG** for fast loading times.  
- Optimized API calls for **real-time data fetching** and **low latency performance**.  

---

### Use of **VAPI** in This Project  

VAPI (Voice API) is used in this **AI-powered real-time interview platform** to enable **voice-based interactions** between users and the AI interviewer. Here’s how it is integrated and its role in the project:  

1. **Real-Time AI Voice Interviews**  
   - The AI system conducts mock interviews where users can respond verbally.  
   - VAPI processes and transcribes user responses in real-time.  

2. **Speech Synthesis & Text-to-Speech (TTS)**  
   - The AI interviewer doesn’t just display questions as text—it speaks them aloud.  
   - VAPI is used to generate **lifelike AI speech**, making the interview experience more natural.  

3. **Speech Recognition & Transcription**  
   - User responses are captured via voice input.  
   - VAPI transcribes these responses into text, which is then processed by the AI for evaluation.  

4. **Seamless Integration with AI Models (Gemini AI)**  
   - The system uses **Google’s Gemini AI** for generating interview questions and analyzing responses.  
   - VAPI ensures smooth interaction by providing real-time voice communication.  

5. **Handling Interview Workflow**  
   - Users interact with the AI interviewer through voice, reducing reliance on typing.  
   - VAPI helps maintain a **structured conversation flow**, handling pauses, interruptions, and clarifications.  

6. **Multi-Agent Communication**  
   - The project allows different AI agents to handle various tasks (e.g., interview generation vs. conducting interviews).  
   - VAPI ensures the correct **voice agent** is used for the right task.  

### **Conclusion**  
VAPI is **critical** in making this interview platform **real-time, interactive, and voice-enabled**, bridging the gap between text-based AI chat and human-like conversations. 🚀

---

## **🛠️ Tech Stack & Tools Used**  

| Technology  | Usage |
|------------|------|
| **Next.js (React)** | Frontend framework for a smooth user experience |
| **TypeScript** | Type safety for reliable code |
| **Tailwind CSS** | Modern, responsive UI styling |
| **Firebase Authentication** | Secure user login & authorization |
| **Firebase Firestore** | NoSQL database for user interview history |
| **Gemini AI** | AI-powered question generation & analysis |
| **Vapi** | Voice AI agents for developers |
| **Vercel Hosting** | Seamless deployment for frontend & backend |

---

## **📂 Project Folder Structure**  

```
/ai-voice-interview-platform
  ├── /frontend
  │   ├── /components          # Reusable React components
  │   ├── /pages               # Next.js pages (Home, Interview, Profile, etc.)
  │   ├── /styles              # Tailwind CSS global styles
  │   ├── /hooks               # Custom React hooks for AI & UI
  │   ├── /utils               # Utility functions (API, auth, etc.)
  │   ├── /public              # Static assets & icons
  │   ├── next.config.js       # Next.js configuration
  │
  ├── /backend
  │   ├── /api                 # API endpoints for interview processing
  │   ├── /services            # AI question processing, database handling
  │   ├── /firebase            # Firebase authentication & Firestore setup
  │   ├── server.js            # Express server for API calls
  │
  ├── .env.local               # Environment variables (API keys, DB credentials)
  ├── package.json             # Dependencies & scripts
  ├── README.md                # Project documentation
```

---

## **🚀 Getting Started**  

### **1️⃣ Clone the Repository**  
```bash
git clone https://github.com/juniorcoderr/NEXTJS-Interview-Prep-Project.git
```

### **2️⃣ Install Dependencies**  
```bash
npm install
```

### **3️⃣ Set Up Environment Variables**  
Create a `.env.local` file in both **frontend** and **backend** folders and add API keys:  
```
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_GEMINI_AI_KEY=your-gemini-key
NEXT_PUBLIC_VERCEL_AI_KEY=your-vercel-key
NEXT_PUBLIC_VAPI_WEB_TOKEN=your-vapi-web-token
NEXT_PUBLIC_VAPI_WORKFLOW_ID=your-vapi-workflow-id
```

### **4️⃣ Run the Development Server**  
```bash
npm run dev
```

### **5️⃣ Open the App**  
Visit **`http://localhost:3000`** in your browser to start using the AI-powered interview platform. 🎙️  

---

## **🛠️ Roadmap & Future Enhancements**  

🔹 **AI-based Emotion Analysis** – Detect **tone, hesitation, and confidence levels** in speech.  
🔹 **Interview Role Expansion** – Add **Product Manager, Data Engineer, and more**.  
🔹 **Automated Transcripts** – Generate **real-time AI summaries** of interviews.  
🔹 **Video Interview Mode** – Enable **video-based AI mock interviews**.  
🔹 **Community Feature** – Users can **share experiences & get peer feedback**.  

---

## **🤝 Contributing**  

We ❤️ contributions!  

📌 **How to contribute:**  
1. **Fork** the repository  
2. Create a **feature branch** (`git checkout -b feature-xyz`)  
3. **Commit** changes (`git commit -m "Add new feature"`)  
4. **Push** to your fork (`git push origin feature-xyz`)  
5. Submit a **pull request** 🎉  

---

## **📧 Contact & Support**  

💬 If you have any questions or feature requests, feel free to **open an issue** or reach out! 🚀  

---

This repository serves as a **perfect portfolio project** for developers aiming to **showcase full-stack AI development skills**! 🎙️🤖  
