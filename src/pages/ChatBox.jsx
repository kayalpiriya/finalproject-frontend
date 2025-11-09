import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ChatBox.css"; // ✅ import CSS
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ChatBox = () => {
  const [chats, setChats] = useState([]);
  const [message, setMessage] = useState("");
  const [sender, setSender] = useState("User"); // change dynamically if login exists

  // ✅ Fetch all chats
  const fetchChats = async () => {
    try {
      const res = await axios.get("http://localhost:5000/chats");
      setChats(res.data);
    } catch (err) {
      console.error("Error fetching chats:", err);
    }
  };

  // ✅ Send a new chat message
  const sendMessage = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    try {
      const res = await axios.post("http://localhost:5000/chats", {
        sender,
        message,
      });
      setChats((prev) => [...prev, res.data]);
      setMessage("");
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <>
    <Navbar />
    <br></br><br></br><br></br><br></br>
    <div className="chat-container">
      <h2 className="chat-title">💬 Chat Room</h2>

      <div className="chat-box">
        {chats.map((chat) => (
          <div
            key={chat._id}
            className={`chat-message ${
              chat.sender === sender ? "own-message" : "other-message"
            }`}
          >
            <strong>{chat.sender}: </strong>
            {chat.message}
          </div>
        ))}
      </div>

      <form onSubmit={sendMessage} className="chat-form">
        <input
          type="text"
          value={message}
          placeholder="Type a message..."
          onChange={(e) => setMessage(e.target.value)}
          className="chat-input"
        />
        <button type="submit" className="chat-button">
          Send
        </button>
      </form>
    </div>
    <Footer />
    </>
  );
};

export default ChatBox;
