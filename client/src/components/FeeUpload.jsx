import React, { useState, useEffect } from "react";
import "../css/FeeUpload.css";

const FeeUpload = () => {
  const [rollNo, setRollNo] = useState("");
  const [semester, setSemester] = useState("");
  const [status, setStatus] = useState("");
  const [installment, setInstallment] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [generatedCaptcha, setGeneratedCaptcha] = useState("");
  const [error, setError] = useState(null);

  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let result = "";
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setGeneratedCaptcha(result);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (captcha !== generatedCaptcha) {
      setError("Captcha does not match. Please try again.");
      generateCaptcha();
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/fees", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rollNo, semester, status, installment }),
      });

      const data = await response.json();

      if (response.ok) {
        setRollNo("");
        setSemester("");
        setStatus("");
        setInstallment("");
        setCaptcha("");
        generateCaptcha();
        setError(null);
      } else {
        throw new Error(data.message || "Error occurred");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="fee-upload-container py-10 px-4 min-h-screen bg-gray-50 flex justify-center items-center">
      <div className="fee-upload-box bg-white rounded-xl shadow-2xl p-8 w-full max-w-2xl animate-fadeIn">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Fee Upload</h2>
        <p className="text-sm text-gray-500 mb-6">
          Please fill out the form below to upload your fee details.
        </p>
        {error && <div className="error-message text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="rollNo" className="form-label">
              Roll Number
            </label>
            <input
              type="text"
              id="rollNo"
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
              className="fee-input"
              required
            />
          </div>
          <div>
            <label htmlFor="semester" className="form-label">
              Semester
            </label>
            <input
              type="text"
              id="semester"
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              className="fee-input"
              required
            />
          </div>
          <div>
            <label htmlFor="status" className="form-label">
              Status
            </label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="fee-input"
              required
            >
              <option value="">Select Status</option>
              <option value="Regular">Regular</option>
              <option value="Ex-Student">Ex-Student</option>
            </select>
          </div>
          <div>
            <label htmlFor="installment" className="form-label">
              Installment
            </label>
            <select
              id="installment"
              value={installment}
              onChange={(e) => setInstallment(e.target.value)}
              className="fee-input"
              required
            >
              <option value="">Select Installment</option>
              <option value="Full">Full</option>
              <option value="First Installment">First Installment</option>
              <option value="Second Installment">Second Installment</option>
            </select>
          </div>
          <div className="captcha-group flex items-center gap-4">
            <span className="bg-gray-200 px-4 py-2 rounded font-bold text-lg">
              {generatedCaptcha}
            </span>
            <input
              type="text"
              value={captcha}
              onChange={(e) => setCaptcha(e.target.value.toUpperCase())}
              className="fee-input max-w-[150px]"
              placeholder="Type here"
              required
            />
          </div>
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="go-button bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-all"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => {
                setRollNo("");
                setSemester("");
                setStatus("");
                setInstallment("");
                setCaptcha("");
                setError(null);
                generateCaptcha();
              }}
              className="cancel-button bg-gray-300 text-gray-800 px-6 py-2 rounded hover:bg-gray-400 transition-all"
            >
              Cancel
            </button>
          </div>
        </form>
        <div className="note-section text-xs text-gray-500 mt-4">
          Note: Please ensure all fields are filled correctly before submitting.
        </div>
      </div>
    </div>
  );
};

export default FeeUpload;
