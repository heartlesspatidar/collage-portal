import { Link } from "react-router-dom";
import "../css/Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-200 py-10 footer-container">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="footer-section">
          <h3 className="text-xl font-bold mb-3 text-blue-400">Institute Address</h3>
          <p className="leading-relaxed">Institute of Computer Science,<br />
            Vikram University, Dewas Road,<br />
            Ujjain, Madhya Pradesh - 456010</p>
          <p className="mt-3">Phone: +91 7342511475</p>
          <p>Email: icsvikram2020@gmail.com</p>
        </div>

        <div className="footer-section">
          <h3 className="text-xl font-bold mb-3 text-blue-400">Programmes Offered</h3>
          <ul className="space-y-2">
            <li>Research</li>
            <li>Post Graduate</li>
            <li>Under Graduate</li>
            <li>PGDCSA</li>
            <li>PG Diploma</li>
            <li>UG Diploma</li>
            <li>Certificate Courses</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="text-xl font-bold mb-3 text-blue-400">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/form-submission" className="footer-link">Registration Form</Link></li>
            <li><Link to="/free-programmes" className="footer-link">Free Programmes</Link></li>
            <li><Link to="/admission-enquiry" className="footer-link">Admission Enquiry</Link></li>
            <li><Link to="/download-forms" className="footer-link">Download Forms</Link></li>
            <li><Link to="/fee-upload" className="footer-link">Fees Submission</Link></li>
            <li><Link to="/tablesTime" className="footer-link">Time-Table</Link></li>
            <li><Link to="/syllabus" className="footer-link">Syllabus</Link></li>
          </ul>
        </div>
      </div>
<br/><br/>
      <div className="text-center mt-10 text-sm text-gray-400 border-t border-gray-700 pt-5">
        <p>© {currentYear} Director, Institute of Computer Science, Vikram University Ujjain. All Rights Reserved.</p>
        <p className="italic">Designed & Developed by: Nitin Patidar - Coordinator, Website & IT Cell</p>
      </div>
      <br/><br/>
    </footer>
  );
}

export default Footer;
