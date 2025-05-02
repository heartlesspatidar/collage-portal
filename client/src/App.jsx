import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import AuthForm from "./components/AuthForm";
import StudentDashboard from "./components/StudentDashboard";
import FormSubmission from "./components/FormSubmission";
import FeeUpload from "./components/FeeUpload";
import StudyMaterialsViewer from "./components/StudyMaterialsViewer";
import ProfilePage from "./components/ProfilePage";
import AdminDashboard from "./components/AdminDashboard";
import FeePrograms from "./components/FreeProgrammes";
import DownloadForms from "./components/DownloadForms";
import Timetables from "./components/Timetables";
import SyllabusDownload from "./components/SyllabusDownload";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const email = localStorage.getItem("userEmail");
    if (token && email) {
      setIsLoggedIn(true);
      setUserEmail(email);
    }
  }, []);

  const handleLogin = (email) => {
    setIsLoggedIn(true);
    setUserEmail(email);
    localStorage.setItem("userEmail", email);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail("");
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} userEmail={userEmail} onLogout={handleLogout} />
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<AuthForm mode="login" onLogin={handleLogin} />} />
            <Route path="/signup" element={<AuthForm mode="signup" onLogin={handleLogin} />} />

            {isLoggedIn ? (
              <>
                <Route path="/dashboard" element={<StudentDashboard />} />
                <Route path="/form-submission" element={<FormSubmission />} />
                <Route path="/fee-upload" element={<FeeUpload />} />
                <Route path="/study-materials" element={<StudyMaterialsViewer />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/free-programmes" element={<FeePrograms />} />
                <Route path="/download-forms" element={<DownloadForms />} />
                <Route path="/tablesTime" element={<Timetables />} />
                <Route path="/syllabus" element={<SyllabusDownload />} />
                {userEmail === "heartlesspatidar@gmail.com" ? (
                  <Route path="/admin" element={<AdminDashboard />} />
                ) : (
                  <Route path="/admin" element={<Navigate to="/" />} />
                )}
              </>
            ) : (
              <>
                <Route path="/dashboard" element={<Navigate to="/login" />} />
                <Route path="/form-submission" element={<Navigate to="/login" />} />
                <Route path="/fee-upload" element={<Navigate to="/login" />} />
                <Route path="/study-materials" element={<Navigate to="/login" />} />
                <Route path="/profile" element={<Navigate to="/login" />} />
                <Route path="/free-programmes" element={<Navigate to="/login" />} />
                <Route path="/download-forms" element={<Navigate to="/login" />} />
                <Route path="/tablesTime" element={<Navigate to="/login" />} />
                <Route path="/syllabus" element={<Navigate to="/login" />} />
                <Route path="/admin" element={<Navigate to="/login" />} />
              </>
            )}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
