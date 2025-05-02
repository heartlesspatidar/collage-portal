import { useState, useEffect } from "react";
import "../css/AdminDashboard.css";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingUser, setEditingUser] = useState(null); 
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    role: 'User',
    feesPaid: false,
    registrationStatus: false,
    rollNo: ''
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/users", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });

        if (res.ok) {
          const data = await res.json();
          setUsers(data);
        } else {
          const errorData = await res.json();
          setError(errorData.message || "Failed to fetch users");
        }
      } catch (err) {
        setError("Error occurred while fetching users" + `${err}`);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDeleteUser = async (userId) => {
    const res = await fetch(`http://localhost:5000/api/users/delete-user/${userId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    });

    if (res.ok) {
      setUsers(users.filter(user => user._id !== userId));
    } else {
      const error = await res.json();
      console.error("Error:", error);
    }
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
  };

  const handleUpdateUser = async (userId) => {
    const res = await fetch(`http://localhost:5000/api/users/update-user/${userId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        feesPaid: editingUser.feesPaid,
        registrationStatus: editingUser.registrationStatus,
      }),
    });

    if (res.ok) {
      const updatedUser = await res.json();
      setUsers(users.map(user => (user._id === userId ? updatedUser : user)));
      setEditingUser(null);  
    } else {
      const error = await res.json();
      console.error("Error:", error);
    }
  };

  const handleCreateUser = async () => {
    const res = await fetch('http://localhost:5000/api/admin/create-user', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser)
    });

    if (res.ok) {
      const createdUser = await res.json();
      setUsers([...users, createdUser]);
      setNewUser({
        name: '',
        email: '',
        role: 'User',
        feesPaid: false,
        registrationStatus: false,
        rollNo: ''
      });
    } else {
      const error = await res.json();
      console.error("Error:", error);
    }
  };

  if (loading) return <div>Loading users...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="admin-container flex justify-center p-8">
      <div className="admin-box w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <h2 className="admin-heading text-2xl font-bold mb-6">Admin Dashboard</h2>

        <div className="user-form mb-6">
          <h3 className="text-xl font-semibold">Create New User</h3>
          <input
            type="text"
            placeholder="Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            className="mb-2 p-2 border rounded-md w-full"
          />
          <input
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            className="mb-2 p-2 border rounded-md w-full"
          />
          <input
            type="text"
            placeholder="Roll No"
            value={newUser.rollNo}
            onChange={(e) => setNewUser({ ...newUser, rollNo: e.target.value })}
            className="mb-2 p-2 border rounded-md w-full"
          />
          <button
            onClick={handleCreateUser}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Create User
          </button>
        </div>

        <div className="user-list">
          {users.length > 0 ? (
            users.map((user) => (
              <div key={user._id} className="user-item bg-gray-100 p-4 rounded-lg shadow-md mb-4">
                <div className="user-details">
                  <p>{user.name}</p>
                  <p>{user.email}</p>
                  <p>{user.feesPaid ? "Fees Paid" : "Fees Pending"}</p>
                  <p>{user.registrationStatus ? "Registration Completed" : "Registration Pending"}</p>
                </div>

                <div className="admin-actions flex space-x-4 mt-2">
                  <button
                    onClick={() => handleEditUser(user)}
                    className="bg-yellow-400 text-white py-1 px-3 rounded-md hover:bg-yellow-500 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition-colors"
                  >
                    Delete
                  </button>
                </div>

                {editingUser && editingUser._id === user._id && (
                  <div className="mt-2">
                    <button
                      onClick={() => handleUpdateUser(user._id)}
                      className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
                    >
                      Update User
                    </button>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p>No users available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
