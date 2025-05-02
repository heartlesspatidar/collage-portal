import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/LoginForm.css";

export default function LoginForm({ onSuccess }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setMessage({ type: "error", text: "All fields are required" });
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("userEmail", data.email);
        setMessage({ type: "success", text: "Login successful" });
        onSuccess(data.email);
      } else {
        setMessage({ type: "error", text: data.message });
      }
    } catch {
      setMessage({ type: "error", text: "Login error" });
    }
  };

  return (
    <div className="login-container login-background">
      <form className="login-form login-wrapper" onSubmit={handleSubmit}>
        <label className="login-label">Email</label>
        <input
          type="email"
          name="email"
          className="login-input"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
        />

        <label className="login-label">Password</label>
        <input
          type="password"
          name="password"
          className="login-input"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
        />

        <button className="login-button" type="submit">Login</button>

        {message.text && (
          <p className={message.type === "error" ? "login-error" : "login-success"}>
            {message.text}
          </p>
        )}

<div className="login-toggle">
  <span>Don't have an account? <Link to="/signup">Signup here</Link></span>
</div>

        <div className="login-footer">© 2025 ICS Portal</div>
      </form>
    </div>
  );
}
