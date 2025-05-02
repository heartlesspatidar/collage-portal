const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  receiptNo: { type: String, required: true },
  receiptDate: { type: Date, required: true },
  courseType: { type: String, required: true },
  district: { type: String, required: true },
  collegeName: { type: String, required: true },
  programName: { type: String, required: true },
  branch: { type: String, required: true },
  rollNo: { type: String, required: true, unique: true },  // Keep this as the primary field for roll number
  admissionType: { type: String, required: true },
  medium: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  nameHindi: { type: String, default: null }, // Optional field with default value
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
  fatherName: { type: String, required: true },
  motherName: { type: String, required: true },
  maritalStatus: { type: String, default: null }, // Optional field with default value
  husbandName: { type: String, default: null }, // Optional field with default value
  category: { type: String, required: true },
  nationality: { type: String, required: true },
  religion: { type: String, required: false },
  phone: { 
    type: String, 
    match: /^[0-9]{10}$/, // Simple validation for 10-digit phone number
    default: null
  },
  mobile: { 
    type: String, 
    required: true,
    match: /^[0-9]{10}$/ // Mobile number validation (10-digit)
  },
  email: { 
    type: String, 
    required: true, 
    match: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/ // Email regex validation
  },
  examPassed: { type: String, required: false },
  universityBoard: { type: String, required: true },
  passedYear: { type: Number, required: true },
  percentage: { type: Number, required: true },
  eligibilityNo: { type: String, required: true },
  previousRollNo: { type: String, default: null }, // Optional field with default value
  bankAccount: { type: String, default: null }, // Optional field with default value
  correspondenceAddress: {
    house: { type: String, default: null },
    colony: { type: String, default: null },
    city: { type: String, required: true },
    state: { type: String, required: true },
    district: { type: String, default: null },
    pincode: { type: String, default: null }
  },
  permanentAddress: {
    house: { type: String, default: null },
    colony: { type: String, default: null },
    city: { type: String, required: true },
    state: { type: String, required: true },
    district: { type: String, default: null },
    pincode: { type: String, default: null }
  },
  enclosures: {
    eligibility: { type: Boolean, default: false },
    migration: { type: Boolean, default: false },
    dobProof: { type: Boolean, default: false },
    marksheet: { type: Boolean, default: false },
    gapCertificate: { type: Boolean, default: false }
  },
  isCompleted: { type: Boolean, default: false },
  userEmail: { type: String, required: true }, // to track who submitted the form
});

const Registration = mongoose.model('Registration', registrationSchema);

module.exports = Registration;
