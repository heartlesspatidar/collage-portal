const express = require("express");
const router = express.Router();
const Fee = require('../models/Fee');


router.post("/", async (req, res) => {
    try {
      console.log("Received body:", req.body);
  
      const { rollNo, semester, status, installment, captcha } = req.body;
  
      const feeRecord = new Fee({
        rollNo,
        semester,
        status,
        installment,
        feePaid: true
      });
  
      await feeRecord.save();
  
      res.status(200).json({ message: "Fee submitted successfully", data: feeRecord });
    } catch (err) {
      console.error("Error saving fee record:", err); // 👈 see real error in terminal
      res.status(500).json({ message: "Internal server error" });
    }
  });
  
  
  

module.exports = router;
