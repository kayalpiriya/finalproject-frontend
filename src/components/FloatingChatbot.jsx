// import React, { useState } from "react";

// export default function Chatbot() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [isOpen, setIsOpen] = useState(false);

//   // Your Gemini API Key
//   const API_KEY = "AIzaSyAAgj8SzHk1QZkiMY0MCmn9w1DVnhntw3w";

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const userMsg = { role: "user", text: input };
//     setMessages((prev) => [...prev, userMsg]);
//     setInput("");

//     try {
//       const response = await fetch(
//         `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             contents: [
//               {
//                 parts: [
//                   {
//                     text: `Answer in max 2 short lines.\nUser: ${userMsg.text}`,
//                   },
//                 ],
//               },
//             ],
//           }),
//         }
//       );

//       const data = await response.json();

//       let reply =
//         data?.candidates?.[0]?.content?.parts?.[0]?.text ||
//         "⚠️ AI did not send a message";

//       const aiMsg = { role: "ai", text: reply };
//       setMessages((prev) => [...prev, aiMsg]);
//     } catch (error) {
//       setMessages((prev) => [
//         ...prev,
//         { role: "ai", text: "⚠️ Error: " + error.message },
//       ]);
//     }
//   };

//   return (
//     <>
//       {/* Floating Icon */}
//       {!isOpen && (
//         <div className="chatbot-icon" onClick={() => setIsOpen(true)}>
//           🤖
//         </div>
//       )}

//       {/* Chat Window */}
//       {isOpen && (
//         <div className="chat-container">
//           <div className="chat-header">
//             🍰 Bakery Assistant
//             <span className="close-btn" onClick={() => setIsOpen(false)}>
//               ✖
//             </span>
//           </div>

//           <div className="messages-box">
//             {messages.map((msg, i) => (
//               <div
//                 key={i}
//                 className={`msg ${msg.role === "user" ? "user-msg" : "ai-msg"}`}
//               >
//                 {msg.text}
//               </div>
//             ))}
//           </div>

//           <div className="input-box">
//             <input
//               type="text"
//               placeholder="Ask anything..."
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//             />
//             <button onClick={sendMessage}>Send</button>
//           </div>
//         </div>
//       )}

//       {/* Styles */}
//       <style>{`
//         .chatbot-icon {
//           position: fixed;
//           bottom: 20px;
//           right: 20px;
//           font-size: 40px;
//           cursor: pointer;
//           z-index: 1000;
//           transition: transform 0.2s;
//         }
//         .chatbot-icon:hover {
//           transform: scale(1.2);
//         }

//         .chat-container {
//           position: fixed;
//           bottom: 20px;
//           right: 20px;
//           width: 320px;
//           height: 400px;
//           background: white;
//           border: 1px solid #ddd;
//           border-radius: 10px;
//           display: flex;
//           flex-direction: column;
//           box-shadow: 0 4px 15px rgba(0,0,0,0.2);
//           z-index: 1000;
//           overflow: hidden;
//         }

//         .chat-header {
//           background: #111;
//           color: white;
//           padding: 10px;
//           text-align: center;
//           font-weight: bold;
//           position: relative;
//         }

//         .close-btn {
//           position: absolute;
//           right: 10px;
//           top: 5px;
//           cursor: pointer;
//         }

//         .messages-box {
//           flex: 1;
//           padding: 10px;
//           overflow-y: auto;
//           display: flex;
//           flex-direction: column;
//           gap: 5px;
//           background: #f9f9f9;
//         }

//         .msg {
//           padding: 8px 10px;
//           border-radius: 10px;
//           max-width: 80%;
//         }

//         .user-msg {
//           background: #d1e7ff;
//           align-self: flex-end;
//         }

//         .ai-msg {
//           background: #eee;
//           align-self: flex-start;
//         }

//         .input-box {
//           display: flex;
//           border-top: 1px solid #ddd;
//         }

//         input {
//           flex: 1;
//           padding: 8px;
//           border: none;
//           outline: none;
//         }

//         button {
//           padding: 8px 12px;
//           border: none;
//           background: black;
//           color: white;
//           cursor: pointer;
//         }
//       `}</style>
//     </>
//   );
// }




//hari//

// import React, { useState } from "react";

// export default function Chatbot() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [isOpen, setIsOpen] = useState(false);

//   // Your Gemini API Key
//   const API_KEY = "AIzaSyAAgj8SzHk1QZkiMY0MCmn9w1DVnhntw3w";

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const userMsg = { role: "user", text: input };
//     setMessages((prev) => [...prev, userMsg]);
//     setInput("");

//     try {
//       // Save user message to backend
//       await fetch("http://localhost:5000/api/chats", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ user: "user1", message: input, role: "user" }),
//       });

//       const response = await fetch(
//         `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             contents: [
//               {
//                 parts: [
//                   {
//                     text: `Answer in max 2 short lines.\nUser: ${userMsg.text}`,
//                   },
//                 ],
//               },
//             ],
//           }),
//         }
//       );

//       const data = await response.json();

//       let reply =
//         data?.candidates?.[0]?.content?.parts?.[0]?.text ||
//         "⚠️ AI did not send a message";

//       const aiMsg = { role: "ai", text: reply };
//       setMessages((prev) => [...prev, aiMsg]);

//       // Save AI message to backend
//       await fetch("http://localhost:5000/api/chats", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ user: "user1", message: reply, role: "ai" }),
//       });
//     } catch (error) {
//       setMessages((prev) => [
//         ...prev,
//         { role: "ai", text: "⚠️ Error: " + error.message },
//       ]);
//     }
//   };

//   return (
//     <>
//       {/* Floating Icon */}
//       {!isOpen && (
//         <div className="chatbot-icon" onClick={() => setIsOpen(true)}>
//           🤖
//         </div>
//       )}

//       {/* Chat Window */}
//       {isOpen && (
//         <div className="chat-container">
//           <div className="chat-header">
//             🍰 Bakery Assistant
//             <span className="close-btn" onClick={() => setIsOpen(false)}>
//               ✖
//             </span>
//           </div>

//           <div className="messages-box">
//             {messages.map((msg, i) => (
//               <div
//                 key={i}
//                 className={`msg ${msg.role === "user" ? "user-msg" : "ai-msg"}`}
//               >
//                 {msg.text}
//               </div>
//             ))}
//           </div>

//           <div className="input-box">
//             <input
//               type="text"
//               placeholder="Ask anything..."
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//             />
//             <button onClick={sendMessage}>Send</button>
//           </div>
//         </div>
//       )}

//       {/* Styles */}
//       <style>{`
//         .chatbot-icon {
//           position: fixed;
//           bottom: 20px;
//           right: 20px;
//           font-size: 40px;
//           cursor: pointer;
//           z-index: 1000;
//           transition: transform 0.2s;
//         }
//         .chatbot-icon:hover {
//           transform: scale(1.2);
//         }

//         .chat-container {
//           position: fixed;
//           bottom: 20px;
//           right: 20px;
//           width: 320px;
//           height: 400px;
//           background: white;
//           border: 1px solid #ddd;
//           border-radius: 10px;
//           display: flex;
//           flex-direction: column;
//           box-shadow: 0 4px 15px rgba(0,0,0,0.2);
//           z-index: 1000;
//           overflow: hidden;
//         }

//         .chat-header {
//           background: #111;
//           color: white;
//           padding: 10px;
//           text-align: center;
//           font-weight: bold;
//           position: relative;
//         }

//         .close-btn {
//           position: absolute;
//           right: 10px;
//           top: 5px;
//           cursor: pointer;
//         }

//         .messages-box {
//           flex: 1;
//           padding: 10px;
//           overflow-y: auto;
//           display: flex;
//           flex-direction: column;
//           gap: 5px;
//           background: #f9f9f9;
//         }

//         .msg {
//           padding: 8px 10px;
//           border-radius: 10px;
//           max-width: 80%;
//         }

//         .user-msg {
//           background: #d1e7ff;
//           align-self: flex-end;
//         }

//         .ai-msg {
//           background: #eee;
//           align-self: flex-start;
//         }

//         .input-box {
//           display: flex;
//           border-top: 1px solid #ddd;
//         }

//         input {
//           flex: 1;
//           padding: 8px;
//           border: none;
//           outline: none;
//         }

//         button {
//           padding: 8px 12px;
//           border: none;
          
//           color: white;
//           cursor: pointer;
//         }
//       `}</style>
//     </>
//   );
// }


// import React, { useState } from "react";




// export default function Chatbot() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [isOpen, setIsOpen] = useState(false);


//   // const API_KEY = process.env.GEMINI_API_KEY;
//   const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;


//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const userMsg = { role: "user", text: input };
//     setMessages((prev) => [...prev, userMsg]);
//     setInput("");

//     try {
//       await fetch("http://localhost:5000/chats", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ user: "user1", message: input, role: "user" }),
//       });

//       const response = await fetch(
//         `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             contents: [
//               {
//                 parts: [
//                   {
//                     text: `Answer in max 2 short lines.\nUser: ${userMsg.text}`,
//                   },
//                 ],
//               },
//             ],
//           }),
//         }
//       );

//       const data = await response.json();

//       let reply =
//         data?.candidates?.[0]?.content?.parts?.[0]?.text ||
//         "⚠️ AI did not send a message";

//       const aiMsg = { role: "ai", text: reply };
//       setMessages((prev) => [...prev, aiMsg]);

//       await fetch("http://localhost:5000/chats", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ user: "user1", message: reply, role: "ai" }),
//       });
//     } catch (error) {
//       setMessages((prev) => [
//         ...prev,
//         { role: "ai", text: "⚠️ Error: " + error.message },
//       ]);
//     }
//   };

//   return (
//     <>
//       {/* Floating Icon */}
//       {!isOpen && (
//         <div
//           className="fixed bottom-5 right-5 text-4xl cursor-pointer z-50 hover:scale-110 transition-transform"
//           onClick={() => setIsOpen(true)}
//         >
//           🤖
//         </div>
//       )}

//       {/* Chat Window */}
//       {isOpen && (
//         <div className="fixed bottom-5 right-5 w-80 h-[400px] bg-white border border-gray-300 rounded-xl flex flex-col shadow-lg z-50 overflow-hidden">
//           <div className="bg-black text-black font-bold text-center p-2 relative">
//             🍰 Bakery Assistant
//             <span
//               className="absolute right-2 top-1 cursor-pointer"
//               onClick={() => setIsOpen(false)}
//             >
//               ✖
//             </span>
//           </div>

//           <div className="flex-1 p-2 flex flex-col gap-1 overflow-y-auto bg-gray-100">
//             {messages.map((msg, i) => (
//               <div
//                 key={i}
//                 className={`px-2 py-1 rounded-lg max-w-[80%] ${
//                   msg.role === "user" ? "bg-blue-200 self-end" : "bg-gray-200 self-start"
//                 }`}
//               >
//                 {msg.text}
//               </div>
//             ))}
//           </div>

//           <div className="flex border-t border-gray-300">
//             <input
//               type="text"
//               placeholder="Ask anything..."
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//               className="flex-1 p-2 outline-none border-none"
//             />
//             <button
//               onClick={sendMessage}
//               className="bg-black text-white px-3 py-2 cursor-pointer"
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }


// import React, { useState, useRef, useEffect } from "react";
// import { FiMessageCircle, FiX, FiSend, FiCpu, FiUser } from "react-icons/fi";

// export default function Chatbot() {
//   const [messages, setMessages] = useState([
//     { role: "ai", text: "Hello! I'm your Bakery Assistant. How can I help you today? 🍰" }
//   ]);
//   const [input, setInput] = useState("");
//   const [isOpen, setIsOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   // Auto-scroll to bottom of chat
//   const messagesEndRef = useRef(null);
//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };
  
//   useEffect(() => {
//     scrollToBottom();
//   }, [messages, isOpen]);

//   // Access Env Variable
//   const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

//   // Helper: Get Logged-in User Name
//   const getCurrentUser = () => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//         try {
//             const parsed = JSON.parse(storedUser);
//             // Return name, or email, or 'Guest'
//             return parsed.name || parsed.email || "Guest";
//         } catch (e) {
//             return "Guest";
//         }
//     }
//     return "Guest";
//   };

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const userText = input;
//     setInput(""); // Clear input immediately
    
//     // 1. Update UI with User Message
//     const userMsg = { role: "user", text: userText };
//     setMessages((prev) => [...prev, userMsg]);
//     setIsLoading(true);

//     // Get real user name for the DB
//     const userName = getCurrentUser();

//     try {
//       // 2. Save User Message to Backend (So Admin can see it)
//       try {
//         await fetch("http://localhost:5000/chats", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ user: userName, message: userText, role: "user" }),
//         });
//       } catch (err) {
//         console.warn("Backend save failed (User):", err);
//       }

//       // 3. Call Google Gemini AI
//       const response = await fetch(
//         `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             contents: [
//               {
//                 parts: [{ text: `You are a helpful assistant for a Bakery shop. Answer in max 2 sentences. User says: ${userText}` }],
//               },
//             ],
//           }),
//         }
//       );

//       const data = await response.json();
//       const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "⚠️ I'm having trouble baking an answer right now.";

//       // 4. Update UI with AI Reply
//       const aiMsg = { role: "ai", text: reply };
//       setMessages((prev) => [...prev, aiMsg]);

//       // 5. Save AI Reply to Backend (So Admin sees the context)
//       try {
//         await fetch("http://localhost:5000/chats", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ user: userName, message: reply, role: "ai" }),
//         });
//       } catch (err) { 
//         console.warn("Backend save failed (AI)"); 
//       }

//     } catch (error) {
//       console.error(error);
//       setMessages((prev) => [...prev, { role: "ai", text: "Sorry, I can't connect to the server right now." }]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // --- THEME COLORS ---
//   const theme = {
//     main: "#2D2424",    // Espresso
//     accent: "#E07A5F",  // Terracotta
//     bg: "#FDFCF8",      // Cream
//     userBubble: "#E07A5F",
//     aiBubble: "#F0F0F0",
//   };

//   return (
//     <>
//       <style>{`
//         /* Chatbot CSS */
//         .chatbot-container {
//           font-family: 'DM Sans', sans-serif;
//           z-index: 9999;
//         }

//         .toggle-btn {
//           position: fixed;
//           bottom: 30px;
//           right: 30px;
//           width: 60px;
//           height: 60px;
//           background-color: ${theme.accent};
//           color: white;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           box-shadow: 0 10px 25px rgba(224, 122, 95, 0.4);
//           transition: transform 0.3s ease;
//           z-index: 10000;
//         }
//         .toggle-btn:hover { transform: scale(1.1); }

//         .chat-window {
//           position: fixed;
//           bottom: 100px;
//           right: 30px;
//           width: 340px;
//           height: 480px;
//           background-color: white;
//           border-radius: 20px;
//           box-shadow: 0 20px 50px rgba(0,0,0,0.15);
//           display: flex;
//           flex-direction: column;
//           overflow: hidden;
//           border: 1px solid #EAE0D5;
//           z-index: 10000;
//           animation: slideUp 0.3s ease-out;
//         }

//         @keyframes slideUp {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         .chat-header {
//           background-color: ${theme.main};
//           color: white;
//           padding: 15px 20px;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           font-family: 'Playfair Display', serif;
//         }

//         .messages-area {
//           flex: 1;
//           padding: 20px;
//           overflow-y: auto;
//           background-color: ${theme.bg};
//           display: flex;
//           flex-direction: column;
//           gap: 15px;
//         }

//         .msg-row {
//           display: flex;
//           align-items: flex-end;
//           gap: 10px;
//         }

//         .msg-bubble {
//           padding: 12px 16px;
//           border-radius: 15px;
//           font-size: 0.9rem;
//           line-height: 1.4;
//           max-width: 80%;
//           box-shadow: 0 2px 5px rgba(0,0,0,0.05);
//         }

//         .msg-ai {
//           background-color: ${theme.aiBubble};
//           color: ${theme.main};
//           border-bottom-left-radius: 2px;
//         }

//         .msg-user {
//           background-color: ${theme.userBubble};
//           color: white;
//           border-bottom-right-radius: 2px;
//           margin-left: auto;
//         }

//         .typing-indicator {
//           font-size: 0.8rem;
//           color: #999;
//           margin-left: 10px;
//           font-style: italic;
//         }

//         .input-area {
//           padding: 15px;
//           border-top: 1px solid #eee;
//           display: flex;
//           gap: 10px;
//           background: white;
//         }

//         .chat-input {
//           flex: 1;
//           border: 1px solid #ddd;
//           border-radius: 25px;
//           padding: 10px 15px;
//           outline: none;
//           font-size: 0.95rem;
//           transition: border 0.3s;
//         }
//         .chat-input:focus { border-color: ${theme.accent}; }

//         .send-btn {
//           background-color: ${theme.main};
//           color: white;
//           border: none;
//           width: 40px;
//           height: 40px;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           transition: background 0.2s;
//         }
//         .send-btn:hover { background-color: ${theme.accent}; }

//         .avatar {
//           width: 28px;
//           height: 28px;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 14px;
//         }
//         .av-ai { background: #eee; color: #555; }
//         .av-user { background: #E07A5F; color: white; }
//       `}</style>

//       <div className="chatbot-container">
//         {/* Floating Button */}
//         {!isOpen && (
//           <div className="toggle-btn" onClick={() => setIsOpen(true)}>
//             <FiMessageCircle size={28} />
//           </div>
//         )}

//         {/* Chat Window */}
//         {isOpen && (
//           <div className="chat-window">
//             {/* Header */}
//             <div className="chat-header">
//               <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
//                 <FiCpu size={20} />
//                 <span style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Bakery Assistant</span>
//               </div>
//               <FiX 
//                 size={24} 
//                 style={{ cursor: 'pointer' }} 
//                 onClick={() => setIsOpen(false)} 
//               />
//             </div>

//             {/* Messages */}
//             <div className="messages-area">
//               {messages.map((msg, i) => (
//                 <div key={i} className="msg-row" style={{ flexDirection: msg.role === 'user' ? 'row-reverse' : 'row' }}>
//                   <div className={`avatar ${msg.role === 'user' ? 'av-user' : 'av-ai'}`}>
//                     {msg.role === 'user' ? <FiUser /> : <FiCpu />}
//                   </div>
//                   <div className={`msg-bubble ${msg.role === 'user' ? 'msg-user' : 'msg-ai'}`}>
//                     {msg.text}
//                   </div>
//                 </div>
//               ))}
//               {isLoading && <div className="typing-indicator">Baking a response... 🍪</div>}
//               <div ref={messagesEndRef} />
//             </div>

//             {/* Input */}
//             <div className="input-area">
//               <input
//                 type="text"
//                 className="chat-input"
//                 placeholder="Ask about cakes..."
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//               />
//               <button className="send-btn" onClick={sendMessage} disabled={isLoading}>
//                 <FiSend size={18} />
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }





// // frontend/src/components/FloatingChatBot.jsx
// import React, { useState, useEffect, useRef } from "react";
// import API from "../api/axiosClient";
// import { FaRobot } from "react-icons/fa";

// export default function FloatingChatbot() {
//   const [open, setOpen] = useState(false);
//   const [history, setHistory] = useState([]);
//   const [msg, setMsg] = useState("");
//   const [loading, setLoading] = useState(false);
//   const chatEndRef = useRef(null);
// import React, { useState } from "react";

// export default function Chatbot() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [isOpen, setIsOpen] = useState(false);

//   // Your Gemini API Key
//   const API_KEY = "AIzaSyAAgj8SzHk1QZkiMY0MCmn9w1DVnhntw3w";

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const userMsg = { role: "user", text: input };
//     setMessages((prev) => [...prev, userMsg]);
//     setInput("");

//     try {
//       const response = await fetch(
//         `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             contents: [
//               {
//                 parts: [
//                   {
//                     text: `Answer in max 2 short lines.\nUser: ${userMsg.text}`,
//                   },
//                 ],
//               },
//             ],
//           }),
//         }
//       );

//       const data = await response.json();

//       let reply =
//         data?.candidates?.[0]?.content?.parts?.[0]?.text ||
//         "⚠️ AI did not send a message";

//       const aiMsg = { role: "ai", text: reply };
//       setMessages((prev) => [...prev, aiMsg]);
//     } catch (error) {
//       setMessages((prev) => [
//         ...prev,
//         { role: "ai", text: "⚠️ Error: " + error.message },
//       ]);
//     }
//   };

//   return (
//     <>
//       {/* Floating Icon */}
//       {!isOpen && (
//         <div className="chatbot-icon" onClick={() => setIsOpen(true)}>
//           🤖
//         </div>
//       )}

//       {/* Chat Window */}
//       {isOpen && (
//         <div className="chat-container">
//           <div className="chat-header">
//             🍰 Bakery Assistant
//             <span className="close-btn" onClick={() => setIsOpen(false)}>
//               ✖
//             </span>
//           </div>

//           <div className="messages-box">
//             {messages.map((msg, i) => (
//               <div
//                 key={i}
//                 className={`msg ${msg.role === "user" ? "user-msg" : "ai-msg"}`}
//               >
//                 {msg.text}
//               </div>
//             ))}
//           </div>

//           <div className="input-box">
//             <input
//               type="text"
//               placeholder="Ask anything..."
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//             />
//             <button onClick={sendMessage}>Send</button>
//           </div>
//         </div>
//       )}

//       {/* Styles */}
//       <style>{`
//         .chatbot-icon {
//           position: fixed;
//           bottom: 20px;
//           right: 20px;
//           font-size: 40px;
//           cursor: pointer;
//           z-index: 1000;
//           transition: transform 0.2s;
//         }
//         .chatbot-icon:hover {
//           transform: scale(1.2);
//         }

//         .chat-container {
//           position: fixed;
//           bottom: 20px;
//           right: 20px;
//           width: 320px;
//           height: 400px;
//           background: white;
//           border: 1px solid #ddd;
//           border-radius: 10px;
//           display: flex;
//           flex-direction: column;
//           box-shadow: 0 4px 15px rgba(0,0,0,0.2);
//           z-index: 1000;
//           overflow: hidden;
//         }

//         .chat-header {
//           background: #111;
//           color: white;
//           padding: 10px;
//           text-align: center;
//           font-weight: bold;
//           position: relative;
//         }

//         .close-btn {
//           position: absolute;
//           right: 10px;
//           top: 5px;
//           cursor: pointer;
//         }

//         .messages-box {
//           flex: 1;
//           padding: 10px;
//           overflow-y: auto;
//           display: flex;
//           flex-direction: column;
//           gap: 5px;
//           background: #f9f9f9;
//         }

//         .msg {
//           padding: 8px 10px;
//           border-radius: 10px;
//           max-width: 80%;
//         }

//         .user-msg {
//           background: #d1e7ff;
//           align-self: flex-end;
//         }

//         .ai-msg {
//           background: #eee;
//           align-self: flex-start;
//         }

//         .input-box {
//           display: flex;
//           border-top: 1px solid #ddd;
//         }

//         input {
//           flex: 1;
//           padding: 8px;
//           border: none;
//           outline: none;
//         }

//         button {
//           padding: 8px 12px;
//           border: none;
//           background: black;
//           color: white;
//           cursor: pointer;
//         }
//       `}</style>
//     </>
//   );
// }




//hari//

// import React, { useState } from "react";

// export default function Chatbot() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [isOpen, setIsOpen] = useState(false);

//   // Your Gemini API Key
//   const API_KEY = "AIzaSyAAgj8SzHk1QZkiMY0MCmn9w1DVnhntw3w";

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const userMsg = { role: "user", text: input };
//     setMessages((prev) => [...prev, userMsg]);
//     setInput("");

//     try {
//       // Save user message to backend
//       await fetch("http://localhost:5000/api/chats", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ user: "user1", message: input, role: "user" }),
//       });

//       const response = await fetch(
//         `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             contents: [
//               {
//                 parts: [
//                   {
//                     text: `Answer in max 2 short lines.\nUser: ${userMsg.text}`,
//                   },
//                 ],
//               },
//             ],
//           }),
//         }
//       );

//       const data = await response.json();

//       let reply =
//         data?.candidates?.[0]?.content?.parts?.[0]?.text ||
//         "⚠️ AI did not send a message";

//       const aiMsg = { role: "ai", text: reply };
//       setMessages((prev) => [...prev, aiMsg]);

//       // Save AI message to backend
//       await fetch("http://localhost:5000/api/chats", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ user: "user1", message: reply, role: "ai" }),
//       });
//     } catch (error) {
//       setMessages((prev) => [
//         ...prev,
//         { role: "ai", text: "⚠️ Error: " + error.message },
//       ]);
//     }
//   };

//   return (
//     <>
//       {/* Floating Icon */}
//       {!isOpen && (
//         <div className="chatbot-icon" onClick={() => setIsOpen(true)}>
//           🤖
//         </div>
//       )}

//       {/* Chat Window */}
//       {isOpen && (
//         <div className="chat-container">
//           <div className="chat-header">
//             🍰 Bakery Assistant
//             <span className="close-btn" onClick={() => setIsOpen(false)}>
//               ✖
//             </span>
//           </div>

//           <div className="messages-box">
//             {messages.map((msg, i) => (
//               <div
//                 key={i}
//                 className={`msg ${msg.role === "user" ? "user-msg" : "ai-msg"}`}
//               >
//                 {msg.text}
//               </div>
//             ))}
//           </div>

//           <div className="input-box">
//             <input
//               type="text"
//               placeholder="Ask anything..."
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//             />
//             <button onClick={sendMessage}>Send</button>
//           </div>
//         </div>
//       )}

//       {/* Styles */}
//       <style>{`
//         .chatbot-icon {
//           position: fixed;
//           bottom: 20px;
//           right: 20px;
//           font-size: 40px;
//           cursor: pointer;
//           z-index: 1000;
//           transition: transform 0.2s;
//         }
//         .chatbot-icon:hover {
//           transform: scale(1.2);
//         }

//         .chat-container {
//           position: fixed;
//           bottom: 20px;
//           right: 20px;
//           width: 320px;
//           height: 400px;
//           background: white;
//           border: 1px solid #ddd;
//           border-radius: 10px;
//           display: flex;
//           flex-direction: column;
//           box-shadow: 0 4px 15px rgba(0,0,0,0.2);
//           z-index: 1000;
//           overflow: hidden;
//         }

//         .chat-header {
//           background: #111;
//           color: white;
//           padding: 10px;
//           text-align: center;
//           font-weight: bold;
//           position: relative;
//         }

//         .close-btn {
//           position: absolute;
//           right: 10px;
//           top: 5px;
//           cursor: pointer;
//         }

//         .messages-box {
//           flex: 1;
//           padding: 10px;
//           overflow-y: auto;
//           display: flex;
//           flex-direction: column;
//           gap: 5px;
//           background: #f9f9f9;
//         }

//         .msg {
//           padding: 8px 10px;
//           border-radius: 10px;
//           max-width: 80%;
//         }

//         .user-msg {
//           background: #d1e7ff;
//           align-self: flex-end;
//         }

//         .ai-msg {
//           background: #eee;
//           align-self: flex-start;
//         }

//         .input-box {
//           display: flex;
//           border-top: 1px solid #ddd;
//         }

//         input {
//           flex: 1;
//           padding: 8px;
//           border: none;
//           outline: none;
//         }

//         button {
//           padding: 8px 12px;
//           border: none;
          
//           color: white;
//           cursor: pointer;
//         }
//       `}</style>
//     </>
//   );
// }


// import React, { useState } from "react";




// export default function Chatbot() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [isOpen, setIsOpen] = useState(false);


//   // const API_KEY = process.env.GEMINI_API_KEY;
//   const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;


//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const userMsg = { role: "user", text: input };
//     setMessages((prev) => [...prev, userMsg]);
//     setInput("");

//     try {
//       await fetch("http://localhost:5000/chats", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ user: "user1", message: input, role: "user" }),
//       });

//       const response = await fetch(
//         `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             contents: [
//               {
//                 parts: [
//                   {
//                     text: `Answer in max 2 short lines.\nUser: ${userMsg.text}`,
//                   },
//                 ],
//               },
//             ],
//           }),
//         }
//       );

//       const data = await response.json();

//       let reply =
//         data?.candidates?.[0]?.content?.parts?.[0]?.text ||
//         "⚠️ AI did not send a message";

//       const aiMsg = { role: "ai", text: reply };
//       setMessages((prev) => [...prev, aiMsg]);

//       await fetch("http://localhost:5000/chats", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ user: "user1", message: reply, role: "ai" }),
//       });
//     } catch (error) {
//       setMessages((prev) => [
//         ...prev,
//         { role: "ai", text: "⚠️ Error: " + error.message },
//       ]);
//     }
//   };

//   return (
//     <>
//       {/* Floating Icon */}
//       {!isOpen && (
//         <div
//           className="fixed bottom-5 right-5 text-4xl cursor-pointer z-50 hover:scale-110 transition-transform"
//           onClick={() => setIsOpen(true)}
//         >
//           🤖
//         </div>
//       )}

//       {/* Chat Window */}
//       {isOpen && (
//         <div className="fixed bottom-5 right-5 w-80 h-[400px] bg-white border border-gray-300 rounded-xl flex flex-col shadow-lg z-50 overflow-hidden">
//           <div className="bg-black text-black font-bold text-center p-2 relative">
//             🍰 Bakery Assistant
//             <span
//               className="absolute right-2 top-1 cursor-pointer"
//               onClick={() => setIsOpen(false)}
//             >
//               ✖
//             </span>
//           </div>

//           <div className="flex-1 p-2 flex flex-col gap-1 overflow-y-auto bg-gray-100">
//             {messages.map((msg, i) => (
//               <div
//                 key={i}
//                 className={`px-2 py-1 rounded-lg max-w-[80%] ${
//                   msg.role === "user" ? "bg-blue-200 self-end" : "bg-gray-200 self-start"
//                 }`}
//               >
//                 {msg.text}
//               </div>
//             ))}
//           </div>

//           <div className="flex border-t border-gray-300">
//             <input
//               type="text"
//               placeholder="Ask anything..."
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//               className="flex-1 p-2 outline-none border-none"
//             />
//             <button
//               onClick={sendMessage}
//               className="bg-black text-white px-3 py-2 cursor-pointer"
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }


// import React, { useState, useRef, useEffect } from "react";
// import { FiMessageCircle, FiX, FiSend, FiCpu, FiUser } from "react-icons/fi";

// export default function Chatbot() {
//   const [messages, setMessages] = useState([
//     { role: "ai", text: "Hello! I'm your Bakery Assistant. How can I help you today? 🍰" }
//   ]);
//   const [input, setInput] = useState("");
//   const [isOpen, setIsOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   // Auto-scroll to bottom of chat
//   const messagesEndRef = useRef(null);
//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };
  
//   useEffect(() => {
//     scrollToBottom();
//   }, [messages, isOpen]);

//   // Access Env Variable
//   const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

//   // Helper: Get Logged-in User Name
//   const getCurrentUser = () => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//         try {
//             const parsed = JSON.parse(storedUser);
//             // Return name, or email, or 'Guest'
//             return parsed.name || parsed.email || "Guest";
//         } catch (e) {
//             return "Guest";
//         }
//     }
//     return "Guest";
//   };

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const userText = input;
//     setInput(""); // Clear input immediately
    
//     // 1. Update UI with User Message
//     const userMsg = { role: "user", text: userText };
//     setMessages((prev) => [...prev, userMsg]);
//     setIsLoading(true);

//     // Get real user name for the DB
//     const userName = getCurrentUser();

//     try {
//       // 2. Save User Message to Backend (So Admin can see it)
//       try {
//         await fetch("http://localhost:5000/chats", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ user: userName, message: userText, role: "user" }),
//         });
//       } catch (err) {
//         console.warn("Backend save failed (User):", err);
//       }

//       // 3. Call Google Gemini AI
//       const response = await fetch(
//         `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             contents: [
//               {
//                 parts: [{ text: `You are a helpful assistant for a Bakery shop. Answer in max 2 sentences. User says: ${userText}` }],
//               },
//             ],
//           }),
//         }
//       );

//       const data = await response.json();
//       const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "⚠️ I'm having trouble baking an answer right now.";

//       // 4. Update UI with AI Reply
//       const aiMsg = { role: "ai", text: reply };
//       setMessages((prev) => [...prev, aiMsg]);

//       // 5. Save AI Reply to Backend (So Admin sees the context)
//       try {
//         await fetch("http://localhost:5000/chats", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ user: userName, message: reply, role: "ai" }),
//         });
//       } catch (err) { 
//         console.warn("Backend save failed (AI)"); 
//       }

//     } catch (error) {
//       console.error(error);
//       setMessages((prev) => [...prev, { role: "ai", text: "Sorry, I can't connect to the server right now." }]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // --- THEME COLORS ---
//   const theme = {
//     main: "#2D2424",    // Espresso
//     accent: "#E07A5F",  // Terracotta
//     bg: "#FDFCF8",      // Cream
//     userBubble: "#E07A5F",
//     aiBubble: "#F0F0F0",
//   };

//   return (
//     <>
//       <style>{`
//         /* Chatbot CSS */
//         .chatbot-container {
//           font-family: 'DM Sans', sans-serif;
//           z-index: 9999;
//         }

//         .toggle-btn {
//           position: fixed;
//           bottom: 30px;
//           right: 30px;
//           width: 60px;
//           height: 60px;
//           background-color: ${theme.accent};
//           color: white;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           box-shadow: 0 10px 25px rgba(224, 122, 95, 0.4);
//           transition: transform 0.3s ease;
//           z-index: 10000;
//         }
//         .toggle-btn:hover { transform: scale(1.1); }

//         .chat-window {
//           position: fixed;
//           bottom: 100px;
//           right: 30px;
//           width: 340px;
//           height: 480px;
//           background-color: white;
//           border-radius: 20px;
//           box-shadow: 0 20px 50px rgba(0,0,0,0.15);
//           display: flex;
//           flex-direction: column;
//           overflow: hidden;
//           border: 1px solid #EAE0D5;
//           z-index: 10000;
//           animation: slideUp 0.3s ease-out;
//         }

//         @keyframes slideUp {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         .chat-header {
//           background-color: ${theme.main};
//           color: white;
//           padding: 15px 20px;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           font-family: 'Playfair Display', serif;
//         }

//         .messages-area {
//           flex: 1;
//           padding: 20px;
//           overflow-y: auto;
//           background-color: ${theme.bg};
//           display: flex;
//           flex-direction: column;
//           gap: 15px;
//         }

//         .msg-row {
//           display: flex;
//           align-items: flex-end;
//           gap: 10px;
//         }

//         .msg-bubble {
//           padding: 12px 16px;
//           border-radius: 15px;
//           font-size: 0.9rem;
//           line-height: 1.4;
//           max-width: 80%;
//           box-shadow: 0 2px 5px rgba(0,0,0,0.05);
//         }

//         .msg-ai {
//           background-color: ${theme.aiBubble};
//           color: ${theme.main};
//           border-bottom-left-radius: 2px;
//         }

//         .msg-user {
//           background-color: ${theme.userBubble};
//           color: white;
//           border-bottom-right-radius: 2px;
//           margin-left: auto;
//         }

//         .typing-indicator {
//           font-size: 0.8rem;
//           color: #999;
//           margin-left: 10px;
//           font-style: italic;
//         }

//         .input-area {
//           padding: 15px;
//           border-top: 1px solid #eee;
//           display: flex;
//           gap: 10px;
//           background: white;
//         }

//         .chat-input {
//           flex: 1;
//           border: 1px solid #ddd;
//           border-radius: 25px;
//           padding: 10px 15px;
//           outline: none;
//           font-size: 0.95rem;
//           transition: border 0.3s;
//         }
//         .chat-input:focus { border-color: ${theme.accent}; }

//         .send-btn {
//           background-color: ${theme.main};
//           color: white;
//           border: none;
//           width: 40px;
//           height: 40px;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           transition: background 0.2s;
//         }
//         .send-btn:hover { background-color: ${theme.accent}; }

//         .avatar {
//           width: 28px;
//           height: 28px;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 14px;
//         }
//         .av-ai { background: #eee; color: #555; }
//         .av-user { background: #E07A5F; color: white; }
//       `}</style>

//       <div className="chatbot-container">
//         {/* Floating Button */}
//         {!isOpen && (
//           <div className="toggle-btn" onClick={() => setIsOpen(true)}>
//             <FiMessageCircle size={28} />
//           </div>
//         )}

//         {/* Chat Window */}
//         {isOpen && (
//           <div className="chat-window">
//             {/* Header */}
//             <div className="chat-header">
//               <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
//                 <FiCpu size={20} />
//                 <span style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Bakery Assistant</span>
//               </div>
//               <FiX 
//                 size={24} 
//                 style={{ cursor: 'pointer' }} 
//                 onClick={() => setIsOpen(false)} 
//               />
//             </div>

//             {/* Messages */}
//             <div className="messages-area">
//               {messages.map((msg, i) => (
//                 <div key={i} className="msg-row" style={{ flexDirection: msg.role === 'user' ? 'row-reverse' : 'row' }}>
//                   <div className={`avatar ${msg.role === 'user' ? 'av-user' : 'av-ai'}`}>
//                     {msg.role === 'user' ? <FiUser /> : <FiCpu />}
//                   </div>
//                   <div className={`msg-bubble ${msg.role === 'user' ? 'msg-user' : 'msg-ai'}`}>
//                     {msg.text}
//                   </div>
//                 </div>
//               ))}
//               {isLoading && <div className="typing-indicator">Baking a response... 🍪</div>}
//               <div ref={messagesEndRef} />
//             </div>

//             {/* Input */}
//             <div className="input-area">
//               <input
//                 type="text"
//                 className="chat-input"
//                 placeholder="Ask about cakes..."
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//               />
//               <button className="send-btn" onClick={sendMessage} disabled={isLoading}>
//                 <FiSend size={18} />
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }





// // frontend/src/components/FloatingChatBot.jsx
// import React, { useState, useEffect, useRef } from "react";
// import API from "../api/axiosClient";
// import { FaRobot } from "react-icons/fa";

// export default function FloatingChatbot() {
//   const [open, setOpen] = useState(false);
//   const [history, setHistory] = useState([]);
//   const [msg, setMsg] = useState("");
//   const [loading, setLoading] = useState(false);
//   const chatEndRef = useRef(null);

//   // Load chat history
//   const load = async () => {
//     try {
//       const res = await API.get("/chats");
//       setHistory(res.data);
//     } catch {
//       setHistory([]);
//     }
//   };

//   useEffect(() => {
//     if (open) load(); // Load only when chatbox opens
//   }, [open]);

//   // Auto scroll to bottom
//   useEffect(() => {
//     if (chatEndRef.current) {
//       chatEndRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [history, loading]);

//   const send = async (e) => {
//     e.preventDefault();
//     if (!msg) return;

//     setLoading(true);
//     try {
//       await API.post("/chats", { message: msg });
//       setMsg("");
//       setLoading(false);
//       load();
//     } catch (err) {
//       setLoading(false);
//       console.error(err);
//     }
//   };

//   return (
//     <>
//       {/* Floating Bot Icon */}
//       <div className="fixed bottom-5 right-5 z-50">
//         <button
//           onClick={() => setOpen(!open)}
//           className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300"
//           title="Open Chat"
//         >
//           <FaRobot size={28} className="text-white animate-bounce-slow" />
//         </button>
//       </div>

//       {/* Chat Box as Milk Soda Bottle Animation */}
//       <div
//         className={`fixed bottom-24 right-5 z-50 w-80 max-w-[90vw] bg-white rounded-xl shadow-2xl border flex flex-col transform transition-all duration-700 origin-bottom
//           ${open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}`}
//         style={{
//           transformOrigin: "bottom center",
//           transitionTimingFunction: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
//         }}
//       >
//         {/* Header */}
//         <div className="flex justify-between items-center bg-blue-600 text-white px-4 py-2 rounded-t-xl">
//           <h3 className="font-bold">Support Chat</h3>
//           <button
//             onClick={() => setOpen(false)}
//             className="text-white font-bold hover:text-gray-200 transition"
//           >
//             ✕
//           </button>
//         </div>

//         {/* Chat Content */}
//         <div className="flex-1 p-3 overflow-y-auto bg-gray-50 space-y-3 max-h-96">
//           {history.map((h) => (
//             <div key={h._id} className="flex flex-col space-y-1">
//               <div className="flex justify-end">
//                 <div className="bg-blue-600 text-white px-3 py-2 rounded-xl max-w-[70%] shadow-md transform hover:scale-105 transition duration-200">
//                   {h.message}
//                 </div>
//               </div>

//               <div className="flex justify-start">
//                 <div className="bg-gray-200 px-3 py-2 rounded-xl max-w-[70%] shadow-inner transform hover:scale-105 transition duration-200">
//                   {h.response}
//                 </div>
//               </div>

//               <div className="text-xs text-gray-500 mt-1 self-end">
//                 {new Date(h.createdAt).toLocaleTimeString()}
//               </div>
//             </div>
//           ))}

//           {loading && (
//             <div className="flex items-center gap-2 mt-2 text-gray-500">
//               <span className="font-medium">COW is typing</span>
//               <div className="flex gap-1">
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></div>
//               </div>
//             </div>
//           )}
//           <div ref={chatEndRef} />
//         </div>

//         {/* Input */}
//         <form onSubmit={send} className="flex gap-2 p-3 border-t bg-white">
//           <input
//             value={msg}
//             onChange={(e) => setMsg(e.target.value)}
//             placeholder="Type your message..."
//             className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
//           />
//           <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
//             Send
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }


// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import { FaBreadSlice } from "react-icons/fa"; // bakery themed icon

// export default function FloatingChatbot() {
//   const [open, setOpen] = useState(false);
//   const [history, setHistory] = useState([]);
//   const [msg, setMsg] = useState("");
//   const [loading, setLoading] = useState(false);
//   const chatEndRef = useRef(null);

//   // Axios instance
//   const API = axios.create({
//     baseURL: "http://localhost:5000/chats", // backend chat routes
//     headers: { "Content-Type": "application/json" },
//   });

//   // Load chat history
//   const load = async () => {
//     try {
//       const token = localStorage.getItem("token"); // optional JWT
//       const res = await API.get("/history", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setHistory(res.data);
//     } catch {
//       setHistory([]);
//     }
//   };

//   useEffect(() => {
//     if (open) load();
//   }, [open]);

//   // Auto scroll to bottom
//   useEffect(() => {
//     if (chatEndRef.current) {
//       chatEndRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [history, loading]);

//   const send = async (e) => {
//     e.preventDefault();
//     if (!msg) return;

//     setLoading(true);
//     try {
//       const token = localStorage.getItem("token");
//       await API.post(
//         "/send",
//         { message: msg },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setMsg("");
//       setLoading(false);
//       load();
//     } catch (err) {
//       console.error(err);
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       {/* Floating Bot Icon */}
//       <div className="fixed bottom-5 right-5 z-50">
//         <button
//           onClick={() => setOpen(!open)}
//           className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300"
//           title="Bakery AI Chat"
//         >
//           <FaBreadSlice size={28} className="text-white animate-bounce-slow" />
//         </button>
//       </div>

//       {/* Chat Box */}
//       <div
//         className={`fixed bottom-24 right-5 z-50 w-80 max-w-[90vw] bg-white rounded-xl shadow-2xl border flex flex-col transform transition-all duration-700 origin-bottom
//           ${open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}`}
//         style={{
//           transformOrigin: "bottom center",
//           transitionTimingFunction: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
//         }}
//       >
//         {/* Header */}
//         <div className="flex justify-between items-center bg-yellow-500 text-white px-4 py-2 rounded-t-xl">
//           <h3 className="font-bold">Bakery AI Assistant</h3>
//           <button
//             onClick={() => setOpen(false)}
//             className="text-white font-bold hover:text-gray-200 transition"
//           >
//             ✕
//           </button>
//         </div>

//         {/* Chat Messages */}
//         <div className="flex-1 p-3 overflow-y-auto bg-amber-50 space-y-3 max-h-96">
//           {history.map((h) => (
//             <div key={h._id} className="flex flex-col space-y-1">
//               {/* User Message */}
//               <div className="flex justify-end">
//                 <div className="bg-yellow-400 text-white px-3 py-2 rounded-xl max-w-[70%] shadow-md">
//                   {h.message}
//                 </div>
//               </div>

//               {/* Bot Response */}
//               <div className="flex justify-start">
//                 <div className="bg-gray-200 px-3 py-2 rounded-xl max-w-[70%] shadow-inner">
//                   {h.response || "🍰 Fresh bakery treats are ready for you!"}
//                 </div>
//               </div>

//               {/* Time */}
//               <div className="text-xs text-gray-500 mt-1 self-end">
//                 {new Date(h.createdAt).toLocaleTimeString()}
//               </div>
//             </div>
//           ))}

//           {loading && (
//             <div className="flex items-center gap-2 mt-2 text-gray-500">
//               <span className="font-medium">Bakery AI is preparing your answer</span>
//               <div className="flex gap-1">
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></div>
//               </div>
//             </div>
//           )}
//           <div ref={chatEndRef} />
//         </div>

//         {/* Input */}
//         <form onSubmit={send} className="flex gap-2 p-3 border-t bg-white">
//           <input
//             value={msg}
//             onChange={(e) => setMsg(e.target.value)}
//             placeholder="Ask me about our bakery..."
//             className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
//           />
//           <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-colors">
//             Send
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }



// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import { FaBreadSlice } from "react-icons/fa";

// export default function FloatingChatbot() {
//   const [open, setOpen] = useState(false);
//   const [history, setHistory] = useState([]);
//   const [msg, setMsg] = useState("");
//   const [loading, setLoading] = useState(false);
//   const chatEndRef = useRef(null);

//   // Axios instance
//   const API = axios.create({
//     baseURL: "http://localhost:5000/chats",
//     headers: { "Content-Type": "application/json" },
//   });

//   // Load chat history
//   const loadHistory = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const res = await API.get("/history", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setHistory(res.data);
//     } catch (err) {
//       console.error("Load history error:", err);
//       setHistory([]);
//     }
//   };

//   useEffect(() => {
//     if (open) loadHistory();
//   }, [open]);

//   // Auto scroll to bottom
//   useEffect(() => {
//     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [history, loading]);

//   const sendMessage = async (e) => {
//     e.preventDefault();
//     if (!msg) return;

//     setLoading(true);
//     try {
//       const token = localStorage.getItem("token");
//       await API.post(
//         "/send",
//         { message: msg },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setMsg("");
//       setLoading(false);
//       loadHistory();
//     } catch (err) {
//       console.error("Send message error:", err);
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       {/* Floating Button */}
//       <div className="fixed bottom-5 right-5 z-[9999]">
//         <button
//           onClick={() => setOpen(!open)}
//           className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300"
//           title="Bakery AI Chat"
//         >
//           <FaBreadSlice size={28} className="text-white animate-bounce-slow" />
//         </button>
//       </div>

//       {/* Chat Box */}
//       <div
//         className={`fixed bottom-24 right-5 z-[9998] w-80 max-w-[90vw] bg-white rounded-xl shadow-2xl border flex flex-col transform transition-all duration-500 origin-bottom ${
//           open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-0 pointer-events-none"
//         }`}
//         style={{
//           transformOrigin: "bottom center",
//           transitionTimingFunction: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
//         }}
//       >
//         {/* Header */}
//         <div className="flex justify-between items-center bg-yellow-500 text-white px-4 py-2 rounded-t-xl">
//           <h3 className="font-bold">Bakery AI Assistant</h3>
//           <button
//             onClick={() => setOpen(false)}
//             className="text-white font-bold hover:text-gray-200 transition"
//           >
//             ✕
//           </button>
//         </div>

//         {/* Chat Messages */}
//         <div className="flex-1 p-3 overflow-y-auto bg-amber-50 space-y-3 max-h-96">
//           {history.map((h) => (
//             <div key={h._id} className="flex flex-col space-y-1">
//               {/* User Message */}
//               <div className="flex justify-end">
//                 <div className="bg-yellow-400 text-white px-3 py-2 rounded-xl max-w-[70%] shadow-md">
//                   {h.message}
//                 </div>
//               </div>

//               {/* Bot Response */}
//               <div className="flex justify-start">
//                 <div className="bg-gray-200 px-3 py-2 rounded-xl max-w-[70%] shadow-inner">
//                   {h.response || "🍰 Fresh bakery treats are ready for you!"}
//                 </div>
//               </div>

//               {/* Timestamp */}
//               <div className="text-xs text-gray-500 mt-1 self-end">
//                 {new Date(h.createdAt).toLocaleTimeString()}
//               </div>
//             </div>
//           ))}

//           {loading && (
//             <div className="flex items-center gap-2 mt-2 text-gray-500">
//               <span className="font-medium">Bakery AI is preparing your answer</span>
//               <div className="flex gap-1">
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></div>
//               </div>
//             </div>
//           )}
//           <div ref={chatEndRef} />
//         </div>

//         {/* Input */}
//         <form onSubmit={sendMessage} className="flex gap-2 p-3 border-t bg-white">
//           <input
//             value={msg}
//             onChange={(e) => setMsg(e.target.value)}
//             placeholder="Ask me about our bakery..."
//             className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
//           />
//           <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-colors">
//             Send
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }




// // src/components/FloatingChatbot.jsx

// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import { FaBreadSlice } from "react-icons/fa";

// export default function FloatingChatbot() {
//   const [open, setOpen] = useState(false);
//   const [history, setHistory] = useState([]);
//   const [msg, setMsg] = useState("");
//   const [loading, setLoading] = useState(false);
//   const chatEndRef = useRef(null);

//   // Axios API Setup
//   const API = axios.create({
//     baseURL: "http://localhost:5000/chats",
//     headers: { "Content-Type": "application/json" },
//   });

//   // Load History
//   const loadHistory = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const res = await API.get("/history", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setHistory(res.data);
//     } catch (err) {
//       console.error("History Load Error:", err);
//       setHistory([]);
//     }
//   };

//   // Open → Load history
//   useEffect(() => {
//     if (open) loadHistory();
//   }, [open]);

//   // Auto scroll
//   useEffect(() => {
//     if (chatEndRef.current) {
//       chatEndRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [history, loading]);

//   // Send message
//   const sendMessage = async (e) => {
//     e.preventDefault();
//     if (!msg.trim()) return;

//     setLoading(true);
//     try {
//       const token = localStorage.getItem("token");
//       await API.post(
//         "/send",
//         { message: msg },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       setMsg("");
//       setLoading(false);
//       loadHistory();
//     } catch (err) {
//       console.error("Send Error:", err);
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       {/* Floating Button */}
//       {/* <div className="fixed bottom-5 right-5 z-50"> */}
//       {/* <div className="fixed bottom-5 right-5 z-50 pointer-events-auto">

//         <button
//           onClick={() => setOpen(!open)}
//           className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center shadow-xl hover:scale-110 transition duration-300"
//         >
//           <FaBreadSlice className="text-white" size={30} />
//         </button>
//       </div> */}
// {/* 
// <div className="fixed bottom-5 right-5 z-[9999] pointer-events-auto">
//   <button
//     onClick={() => setOpen(!open)}
//     className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300"
//     title="Bakery AI Chat"
//   >
//     <FaBreadSlice size={28} className="text-white animate-bounce-slow" />
//   </button>
// </div> */}

// <div
//   className="fixed bottom-5 right-5"
//   style={{
//     zIndex: 999999999,      // always top
//     pointerEvents: "auto",  // click enabled
//   }}
// >
//   <button
//     onClick={() => {
//       console.log("BOT CLICKED");  // TEST log
//       setOpen((prev) => !prev);
//     }}
//     style={{
//       zIndex: 999999999,
//       pointerEvents: "auto",
//     }}
//     className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300"
//   >
//     <FaBreadSlice size={28} className="text-white" />
//   </button>
// </div>

//       {/* Chat Box */}
//       {/* <div
//         className={`fixed bottom-24 right-5 w-80 bg-white rounded-xl shadow-2xl border overflow-hidden transition-all duration-500 z-50 ${
//           open ? "opacity-100 scale-100" : "opacity-0 scale-0"
//         }`}
//       > */}
//       <div
//   className={`fixed bottom-24 right-5 z-50 w-80 max-w-[90vw] bg-white rounded-xl shadow-2xl border flex flex-col transform transition-all duration-700 origin-bottom
//   ${open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"} pointer-events-auto`}
// >
//         {/* Header */}
//         <div className="bg-yellow-500 text-white px-4 py-3 flex justify-between items-center">
//           <h3 className="font-bold">Bakery AI Assistant 🍞</h3>
//           <button className="font-bold" onClick={() => setOpen(false)}>
//             ✕
//           </button>
//         </div>

//         {/* Messages */}
//         <div className="p-3 h-80 overflow-y-auto bg-amber-50 space-y-4">
//           {history.map((h) => (
//             <div key={h._id}>
//               {/* User */}
//               <div className="flex justify-end mb-1">
//                 <div className="bg-yellow-400 text-white px-3 py-2 rounded-xl max-w-[70%]">
//                   {h.message}
//                 </div>
//               </div>

//               {/* Bot */}
//               <div className="flex justify-start">
//                 <div className="bg-gray-200 px-3 py-2 rounded-xl max-w-[70%]">
//                   {h.response}
//                 </div>
//               </div>

//               <div className="text-[10px] text-right text-gray-400">
//                 {new Date(h.createdAt).toLocaleTimeString()}
//               </div>
//             </div>
//           ))}

//           {loading && (
//             <div className="text-gray-600 flex items-center gap-2">
//               <span>Preparing answer…</span>
//               <div className="flex gap-1">
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></div>
//               </div>
//             </div>
//           )}

//           <div ref={chatEndRef} />
//         </div>

//         {/* Input */}
//         <form onSubmit={sendMessage} className="p-3 bg-white flex gap-2 border-t">
//           <input
//             className="flex-1 border rounded px-3 py-2"
//             placeholder="Ask about our bakery…"
//             value={msg}
//             onChange={(e) => setMsg(e.target.value)}
//           />
//           <button className="bg-yellow-500 text-white px-4 py-2 rounded">
//             Send
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }
//   // Load chat history
//   const load = async () => {
//     try {
//       const res = await API.get("/chats");
//       setHistory(res.data);
//     } catch {
//       setHistory([]);
//     }
//   };

//   useEffect(() => {
//     if (open) load(); // Load only when chatbox opens
//   }, [open]);

//   // Auto scroll to bottom
//   useEffect(() => {
//     if (chatEndRef.current) {
//       chatEndRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [history, loading]);

//   const send = async (e) => {
//     e.preventDefault();
//     if (!msg) return;

//     setLoading(true);
//     try {
//       await API.post("/chats", { message: msg });
//       setMsg("");
//       setLoading(false);
//       load();
//     } catch (err) {
//       setLoading(false);
//       console.error(err);
//     }
//   };

//   return (
//     <>
//       {/* Floating Bot Icon */}
//       <div className="fixed bottom-5 right-5 z-50">
//         <button
//           onClick={() => setOpen(!open)}
//           className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300"
//           title="Open Chat"
//         >
//           <FaRobot size={28} className="text-white animate-bounce-slow" />
//         </button>
//       </div>

//       {/* Chat Box as Milk Soda Bottle Animation */}
//       <div
//         className={`fixed bottom-24 right-5 z-50 w-80 max-w-[90vw] bg-white rounded-xl shadow-2xl border flex flex-col transform transition-all duration-700 origin-bottom
//           ${open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}`}
//         style={{
//           transformOrigin: "bottom center",
//           transitionTimingFunction: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
//         }}
//       >
//         {/* Header */}
//         <div className="flex justify-between items-center bg-blue-600 text-white px-4 py-2 rounded-t-xl">
//           <h3 className="font-bold">Support Chat</h3>
//           <button
//             onClick={() => setOpen(false)}
//             className="text-white font-bold hover:text-gray-200 transition"
//           >
//             ✕
//           </button>
//         </div>

//         {/* Chat Content */}
//         <div className="flex-1 p-3 overflow-y-auto bg-gray-50 space-y-3 max-h-96">
//           {history.map((h) => (
//             <div key={h._id} className="flex flex-col space-y-1">
//               <div className="flex justify-end">
//                 <div className="bg-blue-600 text-white px-3 py-2 rounded-xl max-w-[70%] shadow-md transform hover:scale-105 transition duration-200">
//                   {h.message}
//                 </div>
//               </div>

//               <div className="flex justify-start">
//                 <div className="bg-gray-200 px-3 py-2 rounded-xl max-w-[70%] shadow-inner transform hover:scale-105 transition duration-200">
//                   {h.response}
//                 </div>
//               </div>

//               <div className="text-xs text-gray-500 mt-1 self-end">
//                 {new Date(h.createdAt).toLocaleTimeString()}
//               </div>
//             </div>
//           ))}

//           {loading && (
//             <div className="flex items-center gap-2 mt-2 text-gray-500">
//               <span className="font-medium">COW is typing</span>
//               <div className="flex gap-1">
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></div>
//               </div>
//             </div>
//           )}
//           <div ref={chatEndRef} />
//         </div>

//         {/* Input */}
//         <form onSubmit={send} className="flex gap-2 p-3 border-t bg-white">
//           <input
//             value={msg}
//             onChange={(e) => setMsg(e.target.value)}
//             placeholder="Type your message..."
//             className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
//           />
//           <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
//             Send
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }


// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import { FaBreadSlice } from "react-icons/fa"; // bakery themed icon

// export default function FloatingChatbot() {
//   const [open, setOpen] = useState(false);
//   const [history, setHistory] = useState([]);
//   const [msg, setMsg] = useState("");
//   const [loading, setLoading] = useState(false);
//   const chatEndRef = useRef(null);

//   // Axios instance
//   const API = axios.create({
//     baseURL: "http://localhost:5000/chats", // backend chat routes
//     headers: { "Content-Type": "application/json" },
//   });

//   // Load chat history
//   const load = async () => {
//     try {
//       const token = localStorage.getItem("token"); // optional JWT
//       const res = await API.get("/history", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setHistory(res.data);
//     } catch {
//       setHistory([]);
//     }
//   };

//   useEffect(() => {
//     if (open) load();
//   }, [open]);

//   // Auto scroll to bottom
//   useEffect(() => {
//     if (chatEndRef.current) {
//       chatEndRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [history, loading]);

//   const send = async (e) => {
//     e.preventDefault();
//     if (!msg) return;

//     setLoading(true);
//     try {
//       const token = localStorage.getItem("token");
//       await API.post(
//         "/send",
//         { message: msg },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setMsg("");
//       setLoading(false);
//       load();
//     } catch (err) {
//       console.error(err);
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       {/* Floating Bot Icon */}
//       <div className="fixed bottom-5 right-5 z-50">
//         <button
//           onClick={() => setOpen(!open)}
//           className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300"
//           title="Bakery AI Chat"
//         >
//           <FaBreadSlice size={28} className="text-white animate-bounce-slow" />
//         </button>
//       </div>

//       {/* Chat Box */}
//       <div
//         className={`fixed bottom-24 right-5 z-50 w-80 max-w-[90vw] bg-white rounded-xl shadow-2xl border flex flex-col transform transition-all duration-700 origin-bottom
//           ${open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}`}
//         style={{
//           transformOrigin: "bottom center",
//           transitionTimingFunction: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
//         }}
//       >
//         {/* Header */}
//         <div className="flex justify-between items-center bg-yellow-500 text-white px-4 py-2 rounded-t-xl">
//           <h3 className="font-bold">Bakery AI Assistant</h3>
//           <button
//             onClick={() => setOpen(false)}
//             className="text-white font-bold hover:text-gray-200 transition"
//           >
//             ✕
//           </button>
//         </div>

//         {/* Chat Messages */}
//         <div className="flex-1 p-3 overflow-y-auto bg-amber-50 space-y-3 max-h-96">
//           {history.map((h) => (
//             <div key={h._id} className="flex flex-col space-y-1">
//               {/* User Message */}
//               <div className="flex justify-end">
//                 <div className="bg-yellow-400 text-white px-3 py-2 rounded-xl max-w-[70%] shadow-md">
//                   {h.message}
//                 </div>
//               </div>

//               {/* Bot Response */}
//               <div className="flex justify-start">
//                 <div className="bg-gray-200 px-3 py-2 rounded-xl max-w-[70%] shadow-inner">
//                   {h.response || "🍰 Fresh bakery treats are ready for you!"}
//                 </div>
//               </div>

//               {/* Time */}
//               <div className="text-xs text-gray-500 mt-1 self-end">
//                 {new Date(h.createdAt).toLocaleTimeString()}
//               </div>
//             </div>
//           ))}

//           {loading && (
//             <div className="flex items-center gap-2 mt-2 text-gray-500">
//               <span className="font-medium">Bakery AI is preparing your answer</span>
//               <div className="flex gap-1">
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></div>
//               </div>
//             </div>
//           )}
//           <div ref={chatEndRef} />
//         </div>

//         {/* Input */}
//         <form onSubmit={send} className="flex gap-2 p-3 border-t bg-white">
//           <input
//             value={msg}
//             onChange={(e) => setMsg(e.target.value)}
//             placeholder="Ask me about our bakery..."
//             className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
//           />
//           <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-colors">
//             Send
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }



// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import { FaBreadSlice } from "react-icons/fa";

// export default function FloatingChatbot() {
//   const [open, setOpen] = useState(false);
//   const [history, setHistory] = useState([]);
//   const [msg, setMsg] = useState("");
//   const [loading, setLoading] = useState(false);
//   const chatEndRef = useRef(null);

//   // Axios instance
//   const API = axios.create({
//     baseURL: "http://localhost:5000/chats",
//     headers: { "Content-Type": "application/json" },
//   });

//   // Load chat history
//   const loadHistory = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const res = await API.get("/history", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setHistory(res.data);
//     } catch (err) {
//       console.error("Load history error:", err);
//       setHistory([]);
//     }
//   };

//   useEffect(() => {
//     if (open) loadHistory();
//   }, [open]);

//   // Auto scroll to bottom
//   useEffect(() => {
//     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [history, loading]);

//   const sendMessage = async (e) => {
//     e.preventDefault();
//     if (!msg) return;

//     setLoading(true);
//     try {
//       const token = localStorage.getItem("token");
//       await API.post(
//         "/send",
//         { message: msg },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setMsg("");
//       setLoading(false);
//       loadHistory();
//     } catch (err) {
//       console.error("Send message error:", err);
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       {/* Floating Button */}
//       <div className="fixed bottom-5 right-5 z-[9999]">
//         <button
//           onClick={() => setOpen(!open)}
//           className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300"
//           title="Bakery AI Chat"
//         >
//           <FaBreadSlice size={28} className="text-white animate-bounce-slow" />
//         </button>
//       </div>

//       {/* Chat Box */}
//       <div
//         className={`fixed bottom-24 right-5 z-[9998] w-80 max-w-[90vw] bg-white rounded-xl shadow-2xl border flex flex-col transform transition-all duration-500 origin-bottom ${
//           open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-0 pointer-events-none"
//         }`}
//         style={{
//           transformOrigin: "bottom center",
//           transitionTimingFunction: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
//         }}
//       >
//         {/* Header */}
//         <div className="flex justify-between items-center bg-yellow-500 text-white px-4 py-2 rounded-t-xl">
//           <h3 className="font-bold">Bakery AI Assistant</h3>
//           <button
//             onClick={() => setOpen(false)}
//             className="text-white font-bold hover:text-gray-200 transition"
//           >
//             ✕
//           </button>
//         </div>

//         {/* Chat Messages */}
//         <div className="flex-1 p-3 overflow-y-auto bg-amber-50 space-y-3 max-h-96">
//           {history.map((h) => (
//             <div key={h._id} className="flex flex-col space-y-1">
//               {/* User Message */}
//               <div className="flex justify-end">
//                 <div className="bg-yellow-400 text-white px-3 py-2 rounded-xl max-w-[70%] shadow-md">
//                   {h.message}
//                 </div>
//               </div>

//               {/* Bot Response */}
//               <div className="flex justify-start">
//                 <div className="bg-gray-200 px-3 py-2 rounded-xl max-w-[70%] shadow-inner">
//                   {h.response || "🍰 Fresh bakery treats are ready for you!"}
//                 </div>
//               </div>

//               {/* Timestamp */}
//               <div className="text-xs text-gray-500 mt-1 self-end">
//                 {new Date(h.createdAt).toLocaleTimeString()}
//               </div>
//             </div>
//           ))}

//           {loading && (
//             <div className="flex items-center gap-2 mt-2 text-gray-500">
//               <span className="font-medium">Bakery AI is preparing your answer</span>
//               <div className="flex gap-1">
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></div>
//               </div>
//             </div>
//           )}
//           <div ref={chatEndRef} />
//         </div>

//         {/* Input */}
//         <form onSubmit={sendMessage} className="flex gap-2 p-3 border-t bg-white">
//           <input
//             value={msg}
//             onChange={(e) => setMsg(e.target.value)}
//             placeholder="Ask me about our bakery..."
//             className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
//           />
//           <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-colors">
//             Send
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }




// // src/components/FloatingChatbot.jsx

// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import { FaBreadSlice } from "react-icons/fa";

// export default function FloatingChatbot() {
//   const [open, setOpen] = useState(false);
//   const [history, setHistory] = useState([]);
//   const [msg, setMsg] = useState("");
//   const [loading, setLoading] = useState(false);
//   const chatEndRef = useRef(null);

//   // Axios API Setup
//   const API = axios.create({
//     baseURL: "http://localhost:5000/chats",
//     headers: { "Content-Type": "application/json" },
//   });

//   // Load History
//   const loadHistory = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const res = await API.get("/history", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setHistory(res.data);
//     } catch (err) {
//       console.error("History Load Error:", err);
//       setHistory([]);
//     }
//   };

//   // Open → Load history
//   useEffect(() => {
//     if (open) loadHistory();
//   }, [open]);

//   // Auto scroll
//   useEffect(() => {
//     if (chatEndRef.current) {
//       chatEndRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [history, loading]);

//   // Send message
//   const sendMessage = async (e) => {
//     e.preventDefault();
//     if (!msg.trim()) return;

//     setLoading(true);
//     try {
//       const token = localStorage.getItem("token");
//       await API.post(
//         "/send",
//         { message: msg },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       setMsg("");
//       setLoading(false);
//       loadHistory();
//     } catch (err) {
//       console.error("Send Error:", err);
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       {/* Floating Button */}
//       {/* <div className="fixed bottom-5 right-5 z-50"> */}
//       {/* <div className="fixed bottom-5 right-5 z-50 pointer-events-auto">

//         <button
//           onClick={() => setOpen(!open)}
//           className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center shadow-xl hover:scale-110 transition duration-300"
//         >
//           <FaBreadSlice className="text-white" size={30} />
//         </button>
//       </div> */}
// {/* 
// <div className="fixed bottom-5 right-5 z-[9999] pointer-events-auto">
//   <button
//     onClick={() => setOpen(!open)}
//     className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300"
//     title="Bakery AI Chat"
//   >
//     <FaBreadSlice size={28} className="text-white animate-bounce-slow" />
//   </button>
// </div> */}

// <div
//   className="fixed bottom-5 right-5"
//   style={{
//     zIndex: 999999999,      // always top
//     pointerEvents: "auto",  // click enabled
//   }}
// >
//   <button
//     onClick={() => {
//       console.log("BOT CLICKED");  // TEST log
//       setOpen((prev) => !prev);
//     }}
//     style={{
//       zIndex: 999999999,
//       pointerEvents: "auto",
//     }}
//     className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300"
//   >
//     <FaBreadSlice size={28} className="text-white" />
//   </button>
// </div>

//       {/* Chat Box */}
//       {/* <div
//         className={`fixed bottom-24 right-5 w-80 bg-white rounded-xl shadow-2xl border overflow-hidden transition-all duration-500 z-50 ${
//           open ? "opacity-100 scale-100" : "opacity-0 scale-0"
//         }`}
//       > */}
//       <div
//   className={`fixed bottom-24 right-5 z-50 w-80 max-w-[90vw] bg-white rounded-xl shadow-2xl border flex flex-col transform transition-all duration-700 origin-bottom
//   ${open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"} pointer-events-auto`}
// >
//         {/* Header */}
//         <div className="bg-yellow-500 text-white px-4 py-3 flex justify-between items-center">
//           <h3 className="font-bold">Bakery AI Assistant 🍞</h3>
//           <button className="font-bold" onClick={() => setOpen(false)}>
//             ✕
//           </button>
//         </div>

//         {/* Messages */}
//         <div className="p-3 h-80 overflow-y-auto bg-amber-50 space-y-4">
//           {history.map((h) => (
//             <div key={h._id}>
//               {/* User */}
//               <div className="flex justify-end mb-1">
//                 <div className="bg-yellow-400 text-white px-3 py-2 rounded-xl max-w-[70%]">
//                   {h.message}
//                 </div>
//               </div>

//               {/* Bot */}
//               <div className="flex justify-start">
//                 <div className="bg-gray-200 px-3 py-2 rounded-xl max-w-[70%]">
//                   {h.response}
//                 </div>
//               </div>

//               <div className="text-[10px] text-right text-gray-400">
//                 {new Date(h.createdAt).toLocaleTimeString()}
//               </div>
//             </div>
//           ))}

//           {loading && (
//             <div className="text-gray-600 flex items-center gap-2">
//               <span>Preparing answer…</span>
//               <div className="flex gap-1">
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></div>
//               </div>
//             </div>
//           )}

//           <div ref={chatEndRef} />
//         </div>

//         {/* Input */}
//         <form onSubmit={sendMessage} className="p-3 bg-white flex gap-2 border-t">
//           <input
//             className="flex-1 border rounded px-3 py-2"
//             placeholder="Ask about our bakery…"
//             value={msg}
//             onChange={(e) => setMsg(e.target.value)}
//           />
//           <button className="bg-yellow-500 text-white px-4 py-2 rounded">
//             Send
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }


//work code //
// src/components/FloatingChatbot.jsx

// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import { FaBreadSlice } from "react-icons/fa";

// export default function FloatingChatbot() {
//   const [open, setOpen] = useState(false);
//   const [history, setHistory] = useState([]);
//   const [msg, setMsg] = useState("");
//   const [loading, setLoading] = useState(false);
//   const chatEndRef = useRef(null);

//   const API = axios.create({
//     baseURL: "https://finalproject-backend-7rqa.onrender.com/chats",
//     headers: { "Content-Type": "application/json" },
//   });

//   const loadHistory = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const res = await API.get("/history", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setHistory(res.data);
//     } catch (err) {
//       console.error("History Load Error:", err);
//       setHistory([]);
//     }
//   };

//   useEffect(() => {
//     if (open) loadHistory();
//   }, [open]);

//   useEffect(() => {
//     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [history, loading]);

//   const sendMessage = async (e) => {
//     e.preventDefault();
//     if (!msg.trim()) return;

//     setLoading(true);

//     try {
//       const token = localStorage.getItem("token");

//       await API.post(
//         "/send",
//         { message: msg },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       setMsg("");
//       setLoading(false);
//       loadHistory();
//     } catch (err) {
//       console.error("Send Error:", err);
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       {/* Floating Button */}
//       <div
//         className="fixed bottom-5 right-5"
//         style={{ zIndex: 999999999 }}
//       >
//         <button
//           onClick={() => {
//             console.log("BOT CLICKED");
//             setOpen((prev) => !prev);
//           }}
//           className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300"
//         >
//           <FaBreadSlice size={28} className="text-white" />
//         </button>
//       </div>

//       {/* Chatbox (FIXED - always renders, only hidden using display:none) */}
//       <div
//         style={{
//           position: "fixed",
//           bottom: "110px",
//           right: "20px",
//           width: "320px",
//           maxWidth: "90vw",
//           background: "white",
//           borderRadius: "12px",
//           boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
//           zIndex: 999999999,
//           display: open ? "flex" : "none", // ← FIXED
//           flexDirection: "column",
//         }}
//       >
//         {/* Header */}
//         <div className="bg-yellow-500 text-white px-4 py-3 flex justify-between items-center">
//           <h3 className="font-bold">Bakery AI Assistant 🍞</h3>
//           <button onClick={() => setOpen(false)}>✕</button>
//         </div>

//         {/* Messages */}
//         <div className="p-3 h-80 overflow-y-auto bg-amber-50 space-y-4">
//           {history.map((h) => (
//             <div key={h._id}>
//               <div className="flex justify-end mb-1">
//                 <div className="bg-yellow-400 text-white px-3 py-2 rounded-xl max-w-[70%]">
//                   {h.message}
//                 </div>
//               </div>

//               <div className="flex justify-start">
//                 <div className="bg-gray-200 px-3 py-2 rounded-xl max-w-[70%]">
//                   {h.response}
//                 </div>
//               </div>

//               <div className="text-[10px] text-right text-gray-400">
//                 {new Date(h.createdAt).toLocaleTimeString()}
//               </div>
//             </div>
//           ))}

//           {loading && (
//             <div className="text-gray-600 flex items-center gap-2">
//               <span>Preparing answer…</span>
//               <div className="flex gap-1">
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></div>
//               </div>
//             </div>
//           )}

//           <div ref={chatEndRef} />
//         </div>

//         {/* Input */}
//         <form onSubmit={sendMessage} className="p-3 bg-white flex gap-2 border-t">
//           <input
//             className="flex-1 border rounded px-3 py-2"
//             placeholder="Ask about our bakery…"
//             value={msg}
//             onChange={(e) => setMsg(e.target.value)}
//           />
//           <button className="bg-yellow-500 text-white px-4 py-2 rounded">
//             Send
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FaBreadSlice, FaMicrophone, FaStop } from "react-icons/fa"; // Added Microphone icons

export default function FloatingChatbot() {
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState([]);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [isListening, setIsListening] = useState(false); // State for microphone status
  const chatEndRef = useRef(null);

  const API = axios.create({
    baseURL: "https://finalproject-backend-7rqa.onrender.com/chats",
    headers: { "Content-Type": "application/json" },
  });

  const loadHistory = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await API.get("/history", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setHistory(res.data);
    } catch (err) {
      console.error("History Load Error:", err);
      setHistory([]);
    }
  };

  useEffect(() => {
    if (open) loadHistory();
  }, [open]);

  // Scroll to bottom when history changes
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, loading]);

  // --- VOICE LOGIC START ---

  // 1. Text-to-Speech Function (The Mouth)
  const speak = (text) => {
    if (!window.speechSynthesis) return;
    // Stop any current speaking to avoid overlap
    window.speechSynthesis.cancel(); 
    
    const utterance = new SpeechSynthesisUtterance(text);
    // Optional: Select a specific voice (e.g., Google US English)
    // const voices = window.speechSynthesis.getVoices();
    // utterance.voice = voices.find(v => v.lang === 'en-US');
    
    utterance.pitch = 1;
    utterance.rate = 1;
    window.speechSynthesis.speak(utterance);
  };

  // 2. Speech-to-Text Function (The Ear)
  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      alert("Your browser does not support voice recognition. Try Chrome or Edge.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setMsg(transcript); // Fill input with text
      handleSend(transcript); // Auto-send the message
    };

    recognition.start();
  };
  // --- VOICE LOGIC END ---

  // Refactored Send Function to handle both Button Click and Voice
  const handleSend = async (messageText) => {
    if (!messageText || !messageText.trim()) return;

    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      // Send to backend
      const res = await API.post(
        "/send",
        { message: messageText },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setMsg(""); // Clear input
      
      // Reload history to show new message
      await loadHistory(); 
      
      // SPEAK THE RESPONSE
      // We assume the API might return the answer in res.data.response 
      // If your API returns the whole object, access the AI response part:
      if (res.data && res.data.response) {
         speak(res.data.response);
      } else {
         // Fallback: If API doesn't return response directly, fetch latest from history
         // Note: This is slightly risky due to async timing, relying on API return is better
         console.log("Response sent, check history for answer.");
      }

    } catch (err) {
      console.error("Send Error:", err);
    } finally {
      setLoading(false);
    }
  };

  // Wrapper for the form submit event
  const onFormSubmit = (e) => {
    e.preventDefault();
    handleSend(msg);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-5 right-5" style={{ zIndex: 999999999 }}>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300"
        >
          <FaBreadSlice size={28} className="text-white" />
        </button>
      </div>

      {/* Chatbox */}
      <div
        style={{
          position: "fixed",
          bottom: "110px",
          right: "20px",
          width: "320px",
          maxWidth: "90vw",
          background: "white",
          borderRadius: "12px",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
          zIndex: 999999999,
          display: open ? "flex" : "none",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <div className="bg-yellow-500 text-white px-4 py-3 flex justify-between items-center rounded-t-12">
          <h3 className="font-bold">Bakery AI Assistant 🍞</h3>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        {/* Messages */}
        <div className="p-3 h-80 overflow-y-auto bg-amber-50 space-y-4">
          {history.map((h) => (
            <div key={h._id}>
              {/* User Message */}
              <div className="flex justify-end mb-1">
                <div className="bg-yellow-400 text-white px-3 py-2 rounded-xl max-w-[70%]">
                  {h.message}
                </div>
              </div>

              {/* Bot Response */}
              <div className="flex justify-start">
                <div className="bg-gray-200 px-3 py-2 rounded-xl max-w-[70%] text-sm">
                  {h.response}
                </div>
              </div>

              <div className="text-[10px] text-right text-gray-400">
                {new Date(h.createdAt).toLocaleTimeString()}
              </div>
            </div>
          ))}

          {loading && (
            <div className="text-gray-600 flex items-center gap-2 text-sm ml-2">
              <span>Baking an answer…</span>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-300"></div>
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={onFormSubmit} className="p-3 bg-white flex gap-2 border-t rounded-b-12 items-center">
          
          {/* Microphone Button */}
          <button
            type="button"
            onClick={startListening}
            className={`p-2 rounded-full transition-colors ${
              isListening ? "bg-red-500 text-white animate-pulse" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
            title="Speak"
          >
            {isListening ? <FaStop /> : <FaMicrophone />}
          </button>

          <input
            className="flex-1 border rounded px-3 py-2 text-sm focus:outline-none focus:border-yellow-500"
            placeholder={isListening ? "Listening..." : "Ask about our bakery…"}
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            disabled={isListening} 
          />
          
          <button 
            type="submit"
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-colors"
            disabled={loading || isListening}
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}
