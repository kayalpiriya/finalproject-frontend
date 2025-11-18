import React, { useState } from "react";

const AdminSettings = () => {
  const [name, setName] = useState(localStorage.getItem("adminName") || "");
  const [email, setEmail] = useState(localStorage.getItem("adminEmail") || "");

  const handleSave = () => {
    alert("Settings saved successfully!");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Admin Settings</h2>
      <div className="space-y-4">
        <input type="text" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} className="w-full px-3 py-2 border rounded"/>
        <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full px-3 py-2 border rounded"/>
        <button onClick={handleSave} className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">Save Settings</button>
      </div>
    </div>
  );
};

export default AdminSettings;
