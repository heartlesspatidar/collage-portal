import { Link } from "react-router-dom";
import "../css/StudentDashboard.css";

export default function StudentDashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-box">
        <h1 className="dashboard-heading">Welcome to Your Student Dashboard</h1>
        <p className="dashboard-subheading">
          Access all important resources, submit forms, check materials, and stay connected with the Institute of Computer Science, Vikram University, Ujjain.
        </p>

        <div className="dashboard-links">
          <Link to="/form-submission" className="dashboard-link">
            📄 Form Submission
          </Link>
          <Link to="/fee-upload" className="dashboard-link">
            💳 Fee Upload
          </Link>
          <Link to="/study-materials" className="dashboard-link">
            📚 Study Materials
          </Link>
          <Link to="/profile" className="dashboard-link">
            👤 Your Profile
          </Link>
          <Link to="/free-programmes" className="dashboard-link">
            🎓 Free Programmes
          </Link>
          <Link to="/download-forms" className="dashboard-link">
            📝 Download Forms
          </Link>
          <Link to="/tablesTime" className="dashboard-link">
            📝 Time Tables
          </Link>
          <Link to="/syllabus" className="dashboard-link">
            📄 Syllabus
          </Link>
        </div>
      </div>
    </div>
  );
}
