const express = require("express");
const router = express.Router();
const User = require("../models/User");
const authMiddleware = require("../middleware/authMiddleware");
const multer = require("multer");
const path = require("path");

// Set up multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save to 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Filename as timestamp + extension
  },
});

// File filter for image types only
const fileFilter = (req, file, cb) => {
  const filetypes = /jpeg|jpg|png|gif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit to 5MB
  fileFilter: fileFilter,
});

// Get profile of logged-in user
router.get("/profile", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Update user profile including image upload
router.put("/:id", authMiddleware, upload.single("profilePicture"), async (req, res) => {
  try {
    const { name, email } = req.body;
    const profilePicture = req.file ? `/uploads/${req.file.filename}` : undefined;

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { name, email, profilePicture },
      { new: true, runValidators: true }
    ).select("-password");

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Admin-only: Get all users
router.get("/", authMiddleware, async (req, res) => {
  try {
    if (req.user.email !== "heartlesspatidar@gmail.com") {
      return res.status(403).json({ message: "Access denied" });
    }
    const users = await User.find().select("-password");
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

router.put("/users/:id/fees", async (req, res) => {
  try {
    const { feesPaid } = req.body; // true/false from form
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { feesPaid: feesPaid },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(updatedUser);
  } catch (err) {
    console.error("Error updating fee status:", err);
    res.status(500).json({ message: "Error updating fee status" });
  }
});



module.exports = router;
