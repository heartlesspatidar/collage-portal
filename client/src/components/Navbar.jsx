import { Link } from "react-router-dom";
import "../css/Navbar.css";

function Navbar({ isLoggedIn, onLogout, userEmail }) {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <Link to="/" className="logo-link">ICS Portal</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        {!isLoggedIn ? (
          <>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/signup" className="nav-link">Signup</Link>
          </>
        ) : (
          <>
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
            <Link to="/profile" className="nav-link">Profile</Link>
            {userEmail === "heartlesspatidar@gmail.com" && (
              <Link to="/admin" className="nav-link admin-link">Admin</Link>
            )}
            <button onClick={onLogout} className="logout-button">Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
