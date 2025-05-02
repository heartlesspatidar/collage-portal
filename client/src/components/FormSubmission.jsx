import { useState } from "react";
import "../css/FormSubmission.css";

export default function FormSubmission() {
  const [formData, setFormData] = useState({
    receiptNo: "",
    receiptDate: "",
    courseType: "",
    district: "",
    collegeName: "Vikram University",
    programName: "",
    branch: "",
    admissionType: "",
    medium: "",
    firstName: "",
    lastName: "",
    nameHindi: "",
    dob: "",
    gender: "",
    fatherName: "",
    motherName: "",
    maritalStatus: "",
    husbandName: "",
    category: "",
    nationality: "",
    religion: "",
    phone: "",
    mobile: "",
    email: "",
    examPassed: "",
    universityBoard: "",
    passedYear: "",
    percentage: "",
    eligibilityNo: "",
    previousRollNo: "",
    bankAccount: "",
    correspondenceAddress: {
      house: "",
      colony: "",
      city: "",
      state: "",
      district: "",
      pincode: ""
    },
    permanentAddress: {
      house: "",
      colony: "",
      city: "",
      state: "",
      district: "",
      pincode: ""
    },
    enclosures: {
      eligibility: false,
      migration: false,
      dobProof: false,
      marksheet: false,
      gapCertificate: false,
    },
  });

  const [message, setMessage] = useState({ type: "", text: "" });


  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    if (name.startsWith("correspondenceAddress.") || name.startsWith("permanentAddress.")) {
      const [parent, child] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
    } else if (name.startsWith("enclosures.")) {
      const [, child] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        enclosures: {
          ...prev.enclosures,
          [child]: checked,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("authToken");
  
    const cleanedData = { ...formData };
    if (cleanedData.percentage) {
      cleanedData.percentage = cleanedData.percentage.replace('%', '');
    }
  
    try {
      const res = await fetch("http://localhost:5000/api/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(cleanedData),
      });
  
      const data = await res.json();
  
      if (res.ok) {
        alert("Form submitted successfully");
        setMessage({ type: "success", text: `Registration successful, Roll Number: ${data.rollNumber}` });
      } else {
        alert(data.message || "Submission failed");
        setMessage({ type: "error", text: data.message });
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("An error occurred during submission.");
      setMessage({ type: "error", text: "Error occurred during submission" });
    }
  };
  
  

  return (
    <div className="form-container">
      <div className="form-box">
        <h2 className="form-heading">New Admission Form</h2>
        <p className="form-note">Fields marked with * are mandatory</p>

        <form onSubmit={handleSubmit} className="form">
          <fieldset>
            <legend>Reference Details</legend>
            <div className="left-column">
              <input name="receiptNo" type="text" placeholder="Receipt No *" value={formData.receiptNo} onChange={handleChange} required />
              <input name="receiptDate" type="date" placeholder="Receipt Date *" value={formData.receiptDate} onChange={handleChange} required />
            </div>
          </fieldset>

          <fieldset>
            <legend>College and Course Details</legend>
            <div className="left-column">
              <input name="courseType" type="text" placeholder="Course Type *" value={formData.courseType} onChange={handleChange} required />
              <input name="district" type="text" placeholder="District *" value={formData.district} onChange={handleChange} required />
              <input name="collegeName" type="text" placeholder="College Name *" value={formData.collegeName} onChange={handleChange} required />
            </div>
            <div className="right-column">
              <input name="programName" type="text" placeholder="Program Name *" value={formData.programName} onChange={handleChange} required />
              <input name="branch" type="text" placeholder="Branch *" value={formData.branch} onChange={handleChange} required />
              <input name="admissionType" type="text" placeholder="Admission Type *" value={formData.admissionType} onChange={handleChange} required />
              <input name="medium" type="text" placeholder="Medium *" value={formData.medium} onChange={handleChange} required />
            </div>
          </fieldset>

          <fieldset>
  <legend>Personal Details</legend>
  <div className="left-column">
    <input name="firstName" type="text" placeholder="First Name *" value={formData.firstName} onChange={handleChange} required />
    <input name="dob" type="date" placeholder="DOB *" value={formData.dob} onChange={handleChange} required />
    <input name="fatherName" type="text" placeholder="Father's Name *" value={formData.fatherName} onChange={handleChange} required />
    <input name="category" type="text" placeholder="Category *" value={formData.category} onChange={handleChange} required />
    <input name="religion" type="text" placeholder="Religion *" value={formData.religion} onChange={handleChange} required />
    <select name="religion" value={formData.religion} onChange={handleChange} required>
  <option value="">Select Religion *</option>
  <option value="Hindu">Hindu</option>
  <option value="Muslim">Muslim</option>
  <option value="Christian">Christian</option>
  <option value="Other">Other</option>
</select>

  </div>
  <div className="right-column">
    <input name="lastName" type="text" placeholder="Last Name *" value={formData.lastName} onChange={handleChange} required />
    <select name="gender" value={formData.gender} onChange={handleChange} required>
      <option value="">Select Gender *</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </select>
    <input name="motherName" type="text" placeholder="Mother's Name *" value={formData.motherName} onChange={handleChange} required />
    <input name="nationality" type="text" placeholder="Nationality *" value={formData.nationality} onChange={handleChange} required />
  </div>
</fieldset>


          <fieldset>
            <legend>Address Details</legend>
            <h4>Correspondence Address</h4>
            <div className="left-column">
              <input name="correspondenceAddress.house" type="text" placeholder="House No/Village" value={formData.correspondenceAddress.house} onChange={handleChange} />
              <input name="correspondenceAddress.colony" type="text" placeholder="Colony/Post" value={formData.correspondenceAddress.colony} onChange={handleChange} />
              <input name="correspondenceAddress.city" type="text" placeholder="City/Tehsil *" value={formData.correspondenceAddress.city} onChange={handleChange} required />
              <input name="correspondenceAddress.state" type="text" placeholder="State *" value={formData.correspondenceAddress.state} onChange={handleChange} required />
            </div>
            <div className="right-column">
              <input name="correspondenceAddress.district" type="text" placeholder="District" value={formData.correspondenceAddress.district} onChange={handleChange} />
              <input name="correspondenceAddress.pincode" type="text" placeholder="Pincode" value={formData.correspondenceAddress.pincode} onChange={handleChange} />
            </div>

            <h4>Permanent Address</h4>
            <div className="left-column">
              <input name="permanentAddress.house" type="text" placeholder="House No/Village" value={formData.permanentAddress.house} onChange={handleChange} />
              <input name="permanentAddress.colony" type="text" placeholder="Colony/Post" value={formData.permanentAddress.colony} onChange={handleChange} />
            </div>
            <div className="right-column">
              <input name="permanentAddress.city" type="text" placeholder="City/Tehsil" value={formData.permanentAddress.city} onChange={handleChange} />
              <input name="permanentAddress.state" type="text" placeholder="State" value={formData.permanentAddress.state} onChange={handleChange} />
              <input name="permanentAddress.district" type="text" placeholder="District" value={formData.permanentAddress.district} onChange={handleChange} />
              <input name="permanentAddress.pincode" type="text" placeholder="Pincode" value={formData.permanentAddress.pincode} onChange={handleChange} />
            </div>
          </fieldset>

          <fieldset>
            <legend>Other Details</legend>
            <div className="left-column">
              <input name="phone" type="text" placeholder="Phone No (with STD)" value={formData.phone} onChange={handleChange} />
              <input name="mobile" type="text" placeholder="Mobile No *" value={formData.mobile} onChange={handleChange} required />
            </div>
            <div className="right-column">
              <input name="email" type="email" placeholder="Email Id *" value={formData.email} onChange={handleChange} required />
            </div>
          </fieldset>

          <fieldset>
            <legend>Previous Education Details</legend>
            <div className="left-column">
              <input name="examPassed" type="text" placeholder="Exam passed*" value={formData.examPassed} onChange={handleChange} required />
              <input name="universityBoard" type="text" placeholder="University/Board *" value={formData.universityBoard} onChange={handleChange} required />
              <input name="passedYear" type="number" placeholder="Passed/Appeared Year *" value={formData.passedYear} onChange={handleChange} required />
            </div>
            <div className="right-column">
              <input name="percentage" type="text" placeholder="Percentage *" value={formData.percentage} onChange={handleChange} required />
              <input name="eligibilityNo" type="text" placeholder="Eligibility/Migration Certificate No *" value={formData.eligibilityNo} onChange={handleChange} required />
              <input name="previousRollNo" type="text" placeholder="Vikram Univ Previous Roll No" value={formData.previousRollNo} onChange={handleChange} />
            </div>
          </fieldset>

          <fieldset>
            <legend>Bank A/C Detail</legend>
            <input name="bankAccount" type="text" placeholder="Bank A/C No" value={formData.bankAccount} onChange={handleChange} />
          </fieldset>

          <fieldset>
            <legend>Enclosures</legend>
            <div>
              <label><input type="checkbox" name="enclosures.eligibility" checked={formData.enclosures.eligibility} onChange={handleChange} /> Eligibility Certificate</label>
              <label><input type="checkbox" name="enclosures.migration" checked={formData.enclosures.migration} onChange={handleChange} /> Migration Certificate</label>
              <label><input type="checkbox" name="enclosures.dobProof" checked={formData.enclosures.dobProof} onChange={handleChange} /> Proof of DOB</label>
              <label><input type="checkbox" name="enclosures.marksheet" checked={formData.enclosures.marksheet} onChange={handleChange} /> Marksheets</label>
              <label><input type="checkbox" name="enclosures.gapCertificate" checked={formData.enclosures.gapCertificate} onChange={handleChange} /> Gap Certificate (if applicable)</label>
            </div>
          </fieldset>

          <button type="submit" className="submit-button">Submit Form</button>
        </form>
        {message.text && (
      <div className={`form-message ${message.type === "error" ? "error-message" : "success-message"}`}>{message.text}</div>
    )}
      </div>
    </div>
  );
}
