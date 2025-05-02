const express = require("express");
const Registration = require("../models/Registration");
const verifyToken = require("../middleware/verifyToken");

const router = express.Router();

// Helper function to generate a random 10-digit roll number
const generateRollNumber = () => {
  return Math.floor(Math.random() * 10000000000); // Generates a random 10-digit number
};

// Your registration route handler
router.post('/', async (req, res) => {
  try {
    const registrationData = req.body;
    
    // Assume generateRollNumber() is defined elsewhere to generate roll number
    registrationData.rollNumber = generateRollNumber();

    // Process the registration data and save to DB (MongoDB in your case)

    res.status(200).json({ message: 'Registration successful', rollNumber: registrationData.rollNumber });
  } catch (err) {
    console.error("Error during registration submission:", err);
    res.status(500).json({ message: 'Registration failed', error: err.message });
  }
});





router.get("/all", verifyToken, async (req, res) => {
  if (req.user.email !== "heartlesspatidar@gmail.com") return res.status(403).json({ message: "Unauthorized" });
  const forms = await Registration.find();
  res.json(forms);
});

router.put("/:id/complete", verifyToken, async (req, res) => {
  if (req.user.email !== "heartlesspatidar@gmail.com") return res.status(403).json({ message: "Unauthorized" });
  await Registration.findByIdAndUpdate(req.params.id, { isCompleted: true });
  res.json({ message: "Marked as completed" });
});

module.exports = router;
