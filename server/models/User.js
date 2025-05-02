const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  rollNo: { type: String, unique: true, required: false },
  role: { type: String, enum: ["user", "admin"], default: "user" },
  feesPaid: { type: Boolean, default: false },
  registrationStatus: { type: Boolean, default: false },
});

module.exports = mongoose.model("User", userSchema);
