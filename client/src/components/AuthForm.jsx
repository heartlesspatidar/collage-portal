import { useLocation } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import "../css/AuthForm.css";

export default function AuthForm({ onLogin }) {
  const location = useLocation();
  const isLogin = location.pathname === "/login";

  return (
    <div className="auth-wrapper">
      <div className="auth-form-box">
        {isLogin ? (
          <LoginForm onSuccess={onLogin} />
        ) : (
          <SignupForm onSuccess={onLogin} />
        )}
      </div>
    </div>
  );
}
