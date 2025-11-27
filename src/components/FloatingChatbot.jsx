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


import React, { useState, useRef, useEffect } from "react";
import { FiMessageCircle, FiX, FiSend, FiCpu, FiUser } from "react-icons/fi";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hello! I'm your Bakery Assistant. How can I help you today? 🍰" }
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Auto-scroll to bottom of chat
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Access Env Variable
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  // Helper: Get Logged-in User Name
  const getCurrentUser = () => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
        try {
            const parsed = JSON.parse(storedUser);
            // Return name, or email, or 'Guest'
            return parsed.name || parsed.email || "Guest";
        } catch (e) {
            return "Guest";
        }
    }
    return "Guest";
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userText = input;
    setInput(""); // Clear input immediately
    
    // 1. Update UI with User Message
    const userMsg = { role: "user", text: userText };
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    // Get real user name for the DB
    const userName = getCurrentUser();

    try {
      // 2. Save User Message to Backend (So Admin can see it)
      try {
        await fetch("http://localhost:5000/chats", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ user: userName, message: userText, role: "user" }),
        });
      } catch (err) {
        console.warn("Backend save failed (User):", err);
      }

      // 3. Call Google Gemini AI
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [{ text: `You are a helpful assistant for a Bakery shop. Answer in max 2 sentences. User says: ${userText}` }],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "⚠️ I'm having trouble baking an answer right now.";

      // 4. Update UI with AI Reply
      const aiMsg = { role: "ai", text: reply };
      setMessages((prev) => [...prev, aiMsg]);

      // 5. Save AI Reply to Backend (So Admin sees the context)
      try {
        await fetch("http://localhost:5000/chats", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ user: userName, message: reply, role: "ai" }),
        });
      } catch (err) { 
        console.warn("Backend save failed (AI)"); 
      }

    } catch (error) {
      console.error(error);
      setMessages((prev) => [...prev, { role: "ai", text: "Sorry, I can't connect to the server right now." }]);
    } finally {
      setIsLoading(false);
    }
  };

  // --- THEME COLORS ---
  const theme = {
    main: "#2D2424",    // Espresso
    accent: "#E07A5F",  // Terracotta
    bg: "#FDFCF8",      // Cream
    userBubble: "#E07A5F",
    aiBubble: "#F0F0F0",
  };

  return (
    <>
      <style>{`
        /* Chatbot CSS */
        .chatbot-container {
          font-family: 'DM Sans', sans-serif;
          z-index: 9999;
        }

        .toggle-btn {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 60px;
          height: 60px;
          background-color: ${theme.accent};
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 10px 25px rgba(224, 122, 95, 0.4);
          transition: transform 0.3s ease;
          z-index: 10000;
        }
        .toggle-btn:hover { transform: scale(1.1); }

        .chat-window {
          position: fixed;
          bottom: 100px;
          right: 30px;
          width: 340px;
          height: 480px;
          background-color: white;
          border-radius: 20px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.15);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border: 1px solid #EAE0D5;
          z-index: 10000;
          animation: slideUp 0.3s ease-out;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .chat-header {
          background-color: ${theme.main};
          color: white;
          padding: 15px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: 'Playfair Display', serif;
        }

        .messages-area {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
          background-color: ${theme.bg};
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .msg-row {
          display: flex;
          align-items: flex-end;
          gap: 10px;
        }

        .msg-bubble {
          padding: 12px 16px;
          border-radius: 15px;
          font-size: 0.9rem;
          line-height: 1.4;
          max-width: 80%;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }

        .msg-ai {
          background-color: ${theme.aiBubble};
          color: ${theme.main};
          border-bottom-left-radius: 2px;
        }

        .msg-user {
          background-color: ${theme.userBubble};
          color: white;
          border-bottom-right-radius: 2px;
          margin-left: auto;
        }

        .typing-indicator {
          font-size: 0.8rem;
          color: #999;
          margin-left: 10px;
          font-style: italic;
        }

        .input-area {
          padding: 15px;
          border-top: 1px solid #eee;
          display: flex;
          gap: 10px;
          background: white;
        }

        .chat-input {
          flex: 1;
          border: 1px solid #ddd;
          border-radius: 25px;
          padding: 10px 15px;
          outline: none;
          font-size: 0.95rem;
          transition: border 0.3s;
        }
        .chat-input:focus { border-color: ${theme.accent}; }

        .send-btn {
          background-color: ${theme.main};
          color: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s;
        }
        .send-btn:hover { background-color: ${theme.accent}; }

        .avatar {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
        }
        .av-ai { background: #eee; color: #555; }
        .av-user { background: #E07A5F; color: white; }
      `}</style>

      <div className="chatbot-container">
        {/* Floating Button */}
        {!isOpen && (
          <div className="toggle-btn" onClick={() => setIsOpen(true)}>
            <FiMessageCircle size={28} />
          </div>
        )}

        {/* Chat Window */}
        {isOpen && (
          <div className="chat-window">
            {/* Header */}
            <div className="chat-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FiCpu size={20} />
                <span style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Bakery Assistant</span>
              </div>
              <FiX 
                size={24} 
                style={{ cursor: 'pointer' }} 
                onClick={() => setIsOpen(false)} 
              />
            </div>

            {/* Messages */}
            <div className="messages-area">
              {messages.map((msg, i) => (
                <div key={i} className="msg-row" style={{ flexDirection: msg.role === 'user' ? 'row-reverse' : 'row' }}>
                  <div className={`avatar ${msg.role === 'user' ? 'av-user' : 'av-ai'}`}>
                    {msg.role === 'user' ? <FiUser /> : <FiCpu />}
                  </div>
                  <div className={`msg-bubble ${msg.role === 'user' ? 'msg-user' : 'msg-ai'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && <div className="typing-indicator">Baking a response... 🍪</div>}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="input-area">
              <input
                type="text"
                className="chat-input"
                placeholder="Ask about cakes..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button className="send-btn" onClick={sendMessage} disabled={isLoading}>
                <FiSend size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
