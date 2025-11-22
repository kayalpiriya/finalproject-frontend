import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext.jsx";

function MiniChat({ productId }) {
  const { user, token } = useContext(AuthContext) || {};
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState("");

  // Fetch messages for this product
  useEffect(() => {
    async function fetchMessages() {
      try {
        const res = await axios.get(`http://localhost:5000/chats/${productId}`);
        setMessages(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error(err);
      }
    }
    fetchMessages();
  }, [productId]);

  // Submit message
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user || !newMsg.trim()) return;

    try {
      const res = await axios.post(
        "http://localhost:5000/chats",
        { productId, message: newMsg },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessages([...messages, res.data]);
      setNewMsg("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-yellow-50 p-4 rounded-xl shadow mt-8">
      <h3 className="text-xl font-bold mb-2 text-yellow-700">Product Chat</h3>
      
      <div className="max-h-64 overflow-y-auto flex flex-col gap-2 mb-2">
        {messages.length === 0 && <p className="text-gray-500">No messages yet.</p>}
        {messages.map((msg) => (
          <div key={msg._id} className="p-2 rounded-md bg-white shadow">
            <span className="font-semibold text-yellow-700">{msg.user?.name || "User"}:</span>{" "}
            <span>{msg.message}</span>
          </div>
        ))}
      </div>

      {user ? (
        <form className="flex gap-2" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ask a question..."
            className="flex-1 border border-gray-300 rounded-md px-2 py-1"
            value={newMsg}
            onChange={(e) => setNewMsg(e.target.value)}
          />
          <button
            type="submit"
            className="bg-yellow-500 text-white px-4 rounded-md hover:bg-yellow-600 transition"
          >
            Send
          </button>
        </form>
      ) : (
        <p className="text-gray-500">Log in to chat about this product.</p>
      )}
    </div>
  );
}

export default MiniChat;
