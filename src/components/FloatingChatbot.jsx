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


import React, { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const API_KEY = "AIzaSyAAgj8SzHk1QZkiMY0MCmn9w1DVnhntw3w";

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    try {
      await fetch("http://localhost:5000/chats", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: "user1", message: input, role: "user" }),
      });

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `Answer in max 2 short lines.\nUser: ${userMsg.text}`,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();

      let reply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "⚠️ AI did not send a message";

      const aiMsg = { role: "ai", text: reply };
      setMessages((prev) => [...prev, aiMsg]);

      await fetch("http://localhost:5000/chats", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: "user1", message: reply, role: "ai" }),
      });
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "⚠️ Error: " + error.message },
      ]);
    }
  };

  return (
    <>
      {/* Floating Icon */}
      {!isOpen && (
        <div
          className="fixed bottom-5 right-5 text-4xl cursor-pointer z-50 hover:scale-110 transition-transform"
          onClick={() => setIsOpen(true)}
        >
          🤖
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-5 right-5 w-80 h-[400px] bg-white border border-gray-300 rounded-xl flex flex-col shadow-lg z-50 overflow-hidden">
          <div className="bg-black text-black font-bold text-center p-2 relative">
            🍰 Bakery Assistant
            <span
              className="absolute right-2 top-1 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              ✖
            </span>
          </div>

          <div className="flex-1 p-2 flex flex-col gap-1 overflow-y-auto bg-gray-100">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`px-2 py-1 rounded-lg max-w-[80%] ${
                  msg.role === "user" ? "bg-blue-200 self-end" : "bg-gray-200 self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="flex border-t border-gray-300">
            <input
              type="text"
              placeholder="Ask anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 p-2 outline-none border-none"
            />
            <button
              onClick={sendMessage}
              className="bg-black text-white px-3 py-2 cursor-pointer"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
