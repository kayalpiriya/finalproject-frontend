
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