import { useState, useEffect } from "react";
import axios from "axios";
import "../css/ProfilePage.css";

export default function ProfilePage() {
  const [user, setUser] = useState({ name: "", email: "", profilePicture: "" });
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const [file, setFile] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/users/profile", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        setUser(res.data);
        setFormData({ name: res.data.name, email: res.data.email });
      } catch (err) {
        setError("Error fetching user data");
        console.error(err);
      }
    };
    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSave = async () => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      if (file) {
        formDataToSend.append("profilePicture", file);
      }

      const res = await axios.put(`http://localhost:5000/api/users/${user._id}`, formDataToSend, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          "Content-Type": "multipart/form-data",
        },
      });
      setUser(res.data);
      setEditing(false);
    } catch (err) {
      setError("Error updating user data");
      console.error(err);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-box">
        <h2 className="profile-heading">Profile</h2>
        {error && <p className="error-message">{error}</p>}
        <div className="profile-image-container">
          <img
            src={user.profilePicture || "/default-user.png"}
            alt="Profile"
            className="profile-image"
          />
        </div>

        <div className="profile-field">
          <label className="profile-label">Name</label>
          {editing ? (
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="profile-input"
            />
          ) : (
            <p>{user.name}</p>
          )}
        </div>

        <div className="profile-field">
          <label className="profile-label">Email</label>
          {editing ? (
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="profile-input"
            />
          ) : (
            <p>{user.email}</p>
          )}
        </div>

        <div className="profile-field">
          <label className="profile-label">Profile Picture</label>
          {editing ? (
            <input
              type="file"
              name="profilePicture"
              onChange={handleFileChange}
              className="profile-input"
            />
          ) : (
            <p>{user.profilePicture ? "Profile Picture Uploaded" : "No Profile Picture"}</p>
          )}
        </div>

        <div className="profile-action-buttons">
          {editing ? (
            <>
              <button onClick={handleSave} className="profile-save-button">Save</button>
              <button onClick={() => setEditing(false)} className="profile-cancel-button">Cancel</button>
            </>
          ) : (
            <button onClick={() => setEditing(true)} className="profile-edit-button">Edit Profile</button>
          )}
        </div>
      </div>
    </div>
  );
}
