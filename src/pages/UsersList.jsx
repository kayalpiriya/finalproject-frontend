// src/pages/UsersList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

// ===== ERROR BOUNDARY =====
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError)
      return (
        <h2 className="text-center mt-12 text-red-600 text-xl">
          Something went wrong in UsersList.
        </h2>
      );
    return this.props.children;
  }
}

// ===== USERS LIST COMPONENT =====
function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("token"); // your JWT token

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("https://finalproject-backend-7rqa.onrender.com/users", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to load users.");
        setLoading(false);
      }
    };
    fetchUsers();
  }, [token]);

  if (loading)
    return <p className="text-center mt-12 text-gray-500">Loading users...</p>;
  if (error)
    return <p className="text-center mt-12 text-red-600 font-semibold">{error}</p>;

  return (
    <div className="p-6 bg-cream-50 min-h-screen">
      <h1 className="text-3xl font-bold text-yellow-800 mb-6 text-center">
        Users Dashboard
      </h1>

      {users.length === 0 ? (
        <p className="text-center text-gray-500">No users found.</p>
      ) : (
        <div className="overflow-x-auto bg-white rounded-xl shadow-md p-4">
          <table className="min-w-full border-collapse">
            <thead className="bg-yellow-50 sticky top-0 text-gray-800">
              <tr>
                <th className="py-2 px-3 border-b">#</th>
                <th className="py-2 px-3 border-b">Name</th>
                <th className="py-2 px-3 border-b">Email</th>
                <th className="py-2 px-3 border-b">Role</th>
                <th className="py-2 px-3 border-b">Created At</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr
                  key={user._id}
                  className={`transition-all duration-300 ${
                    idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-yellow-50 hover:shadow-lg`}
                >
                  <td className="py-2 px-3 border-b">{idx + 1}</td>
                  <td className="py-2 px-3 border-b">{user.name}</td>
                  <td className="py-2 px-3 border-b">{user.email}</td>
                  <td className="py-2 px-3 border-b">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-bold ${
                        user.isAdmin
                          ? "bg-green-200 text-green-800"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {user.isAdmin ? "Admin" : "User"}
                    </span>
                  </td>
                  <td className="py-2 px-3 border-b">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// ===== EXPORT WITH ERROR BOUNDARY =====
export default function UsersListWithBoundary() {
  return (
    <ErrorBoundary>
      <UsersList />
    </ErrorBoundary>
  );
}
