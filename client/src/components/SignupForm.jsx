import { useState } from "react";
import "../css/SignupForm.css";

export default function SignupForm({ onSuccess }) {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      setMessage({ type: "error", text: "All fields are required" });
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage({ type: "success", text: "Signup successful" });
        onSuccess();
      } else {
        setMessage({ type: "error", text: data.message });
      }
    } catch {
      setMessage({ type: "error", text: "Signup error" });
    }
  };

  return (
    <div className="signup-container signup-background">
      <form className="signup-form signup-wrapper" onSubmit={handleSubmit}>

        <label className="signup-label">Full Name</label>
        <input
          type="text"
          name="name"
          className="signup-input"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />

        <label className="signup-label">Email</label>
        <input
          type="email"
          name="email"
          className="signup-input"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
        />

        <label className="signup-label">Password</label>
        <input
          type="password"
          name="password"
          className="signup-input"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
        />

        <button className="signup-button" type="submit">Signup</button>

        {message.text && (
          <p className={message.type === "error" ? "signup-error" : "signup-success"}>
            {message.text}
          </p>
        )}

        <div className="signup-toggle">
          <span>Already have an account? <a href="/login">Login here</a></span>
        </div>

        <div className="signup-footer">© 2025 ICS Portal</div>
      </form>
    </div>
  );
}
