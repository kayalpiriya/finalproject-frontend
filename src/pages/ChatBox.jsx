// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./ChatBox.css"; // ✅ import CSS
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const ChatBox = () => {
//   const [chats, setChats] = useState([]);
//   const [message, setMessage] = useState("");
//   const [sender, setSender] = useState("User"); // change dynamically if login exists

//   // ✅ Fetch all chats
//   const fetchChats = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/chats");
//       setChats(res.data);
//     } catch (err) {
//       console.error("Error fetching chats:", err);
//     }
//   };

//   // ✅ Send a new chat message
//   const sendMessage = async (e) => {
//     e.preventDefault();
//     if (!message.trim()) return;

//     try {
//       const res = await axios.post("http://localhost:5000/chats", {
//         sender,
//         message,
//       });
//       setChats((prev) => [...prev, res.data]);
//       setMessage("");
//     } catch (err) {
//       console.error("Error sending message:", err);
//     }
//   };

//   useEffect(() => {
//     fetchChats();
//   }, []);

//   return (
//     <>
//     <Navbar />
//     <br></br><br></br><br></br><br></br>
//     <div className="chat-container">
//       <h2 className="chat-title">💬 Chat Room</h2>

//       <div className="chat-box">
//         {chats.map((chat) => (
//           <div
//             key={chat._id}
//             className={`chat-message ${
//               chat.sender === sender ? "own-message" : "other-message"
//             }`}
//           >
//             <strong>{chat.sender}: </strong>
//             {chat.message}
//           </div>
//         ))}
//       </div>

//       <form onSubmit={sendMessage} className="chat-form">
//         <input
//           type="text"
//           value={message}
//           placeholder="Type a message..."
//           onChange={(e) => setMessage(e.target.value)}
//           className="chat-input"
//         />
//         <button type="submit" className="chat-button">
//           Send
//         </button>
//       </form>
//     </div>
//     <Footer />
//     </>
//   );
// };

// export default ChatBox;


// import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const ChatBox = () => {
//   const [chats, setChats] = useState([]);
//   const [message, setMessage] = useState("");
//   const [sender, setSender] = useState("User"); // logged-in user name dynamically
//   const [isTyping, setIsTyping] = useState(false); // AI typing
//   const chatEndRef = useRef(null); // scroll to latest

//   // Fetch all chats
//   const fetchChats = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/chats");
//       setChats(res.data);
//     } catch (err) {
//       console.error("Error fetching chats:", err);
//     }
//   };

//   // Scroll to bottom
//   const scrollToBottom = () => {
//     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   // Send message + get AI response
//   const sendMessage = async (e) => {
//     e.preventDefault();
//     if (!message.trim()) return;

//     try {
//       // 1️⃣ Save user message
//       const userRes = await axios.post("http://localhost:5000/chats", {
//         sender,
//         message,
//       });
//       setChats((prev) => [...prev, userRes.data]);
//       setMessage("");
//       scrollToBottom();

//       // 2️⃣ AI typing animation
//       setIsTyping(true);

//       // 3️⃣ Get AI response
//       const aiRes = await axios.post("http://localhost:5000/ai", { message });
//       setChats((prev) => [...prev, aiRes.data]);
//       setIsTyping(false);
//       scrollToBottom();
//     } catch (err) {
//       console.error("Error sending message:", err);
//       setIsTyping(false);
//     }
//   };

//   useEffect(() => {
//     fetchChats();
//   }, []);

//   useEffect(() => {
//     scrollToBottom();
//   }, [chats]);

//   return (
//     <>
//       <Navbar />
//       <br /><br /><br /><br />
//       <div className="chat-container">
//         <h2 className="chat-title">💬 Chat Room</h2>

//         <div className="chat-box">
//           {chats.map((chat) => (
//             <div
//               key={chat._id}
//               className={`chat-message ${
//                 chat.sender === sender ? "own-message" : "other-message"
//               }`}
//             >
//               <strong>{chat.sender}: </strong>
//               {chat.message}
//             </div>
//           ))}

//           {isTyping && (
//             <div className="chat-message other-message">
//               <strong>AI: </strong>
//               <em>Typing...</em>
//             </div>
//           )}

//           <div ref={chatEndRef} />
//         </div>

//         <form onSubmit={sendMessage} className="chat-form">
//           <input
//             type="text"
//             value={message}
//             placeholder="Type a message..."
//             onChange={(e) => setMessage(e.target.value)}
//             className="chat-input"
//           />
//           <button type="submit" className="chat-button">
//             Send
//           </button>
//         </form>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default ChatBox;





import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Bakery stickers
const stickers = [
  "https://images.unsplash.com/photo-1589307001572-6c55e568e2b6?auto=format&fit=crop&w=80&q=80",
  "https://images.unsplash.com/photo-1603072023087-1bde0b981e63?auto=format&fit=crop&w=80&q=80",
  "https://images.unsplash.com/photo-1612197520842-2c46f61f1b35?auto=format&fit=crop&w=80&q=80",
  "https://images.unsplash.com/photo-1599785209707-3c7a4f5df77d?auto=format&fit=crop&w=80&q=80",
];

const ChatBox = () => {
  const [chats, setChats] = useState([]);
  const [message, setMessage] = useState("");
  const [sender, setSender] = useState("You"); 
  const [isTyping, setIsTyping] = useState(false);
  const [showStickers, setShowStickers] = useState(false);
  const chatEndRef = useRef(null);

  const fetchChats = async () => {
    try {
      const res = await axios.get("http://localhost:5000/chats");
      setChats(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = async (e, sticker = null) => {
    e?.preventDefault();
    if (!message.trim() && !sticker) return;

    const msg = sticker ? sticker : message;

    try {
      const userRes = await axios.post("http://localhost:5000/chats", {
        sender,
        message: msg,
      });
      setChats((prev) => [...prev, userRes.data]);
      setMessage("");
      setShowStickers(false);
      scrollToBottom();

      setIsTyping(true);
      const aiRes = await axios.post("http://localhost:5000/ai", { message: msg });
      setChats((prev) => [...prev, aiRes.data]);
      setIsTyping(false);
      scrollToBottom();
    } catch (err) {
      console.error(err);
      setIsTyping(false);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [chats]);

  return (
    <>
      <Navbar />
      <div className="pt-24 flex justify-center items-center bg-pink-50 min-h-screen">
        <div className="w-full max-w-md flex flex-col bg-white shadow-xl rounded-3xl overflow-hidden">

          {/* Header */}
          <div className="bg-pink-500 text-white p-3 text-center font-bold text-lg rounded-t-3xl">
            💬 Mufflix Bakery Chat
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-3 overflow-y-auto flex flex-col space-y-2 h-80">
            {chats.map((chat, idx) => (
              <div
                key={idx}
                className={`max-w-[75%] px-3 py-2 rounded-2xl break-words self-${
                  chat.sender === sender ? "end bg-pink-100 text-pink-800" : "start bg-gray-200 text-gray-800"
                } relative`}
              >
                {chat.message.startsWith("http") ? (
                  <img src={chat.message} alt="sticker" className="h-16 w-16 object-cover rounded-lg" />
                ) : (
                  <>
                    <strong>{chat.sender}: </strong>
                    {chat.message}
                  </>
                )}
                <div
                  className={`absolute w-2 h-2 bg-${
                    chat.sender === sender ? "pink-100" : "gray-200"
                  } bottom-0 ${
                    chat.sender === sender ? "-right-1 rounded-l-full rounded-t-full" : "-left-1 rounded-r-full rounded-t-full"
                  }`}
                ></div>
              </div>
            ))}

            {isTyping && (
              <div className="max-w-[75%] px-3 py-2 rounded-2xl break-words self-start relative bg-gray-200 animate-pulse text-sm">
                <div className="absolute w-2 h-2 bg-gray-200 bottom-0 -left-1 rounded-r-full rounded-t-full"></div>
                <strong>AI:</strong> Baking a reply...
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input + Send Button */}
          <div className="p-2 border-t border-gray-200 bg-white flex items-center gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 px-3 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300 text-sm"
            />
            <button
              onClick={sendMessage}
              className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-2 rounded-full text-sm transition"
            >
              Send
            </button>
            <button
              type="button"
              onClick={() => setShowStickers(!showStickers)}
              className="bg-yellow-300 hover:bg-yellow-400 text-white px-3 py-2 rounded-full text-sm transition"
            >
              🍰
            </button>
          </div>

          {/* Sticker picker */}
          {showStickers && (
            <div className="flex gap-2 p-2 bg-gray-100 border-t border-gray-200 overflow-x-auto">
              {stickers.map((s, idx) => (
                <img
                  key={idx}
                  src={s}
                  alt={`sticker-${idx}`}
                  className="h-12 w-12 rounded-lg cursor-pointer hover:scale-110 transition"
                  onClick={() => sendMessage(null, s)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ChatBox;
