const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Registration = require('../models/Registration');
const Fee = require('../models/Fee');

// Sync registrationStatus and feesPaid based on registration and fees collections
router.put('/sync-status', async (req, res) => {
  try {
    const users = await User.find();

    for (const user of users) {
      const registration = await Registration.findOne({ userEmail: user.email });
      const fee = await Fee.findOne({ rollNo: user.rollNo });

      const registrationDone = registration?.isCompleted === true;
      const feeDone = fee?.feePaid === true;

      if (user.registrationStatus !== registrationDone || user.feesPaid !== feeDone) {
        await User.findByIdAndUpdate(user._id, {
          registrationStatus: registrationDone,
          feesPaid: feeDone,
        });
      }
    }

    res.status(200).json({ message: 'Status sync completed successfully.' });
  } catch (error) {
    console.error('Sync error:', error);
    res.status(500).json({ message: 'Failed to sync statuses.' });
  }
});

// Create a new user
router.post('/create-user', async (req, res) => {
  try {
    const { name, email, role, feesPaid, registrationStatus, rollNo } = req.body;

    const newUser = new User({
      name,
      email,
      role,
      feesPaid,
      registrationStatus,
      rollNo,
    });

    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create user.' });
  }
});

// Update an existing user (e.g., fees, registration status)
router.put('/update-user/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const { feesPaid, registrationStatus } = req.body;

    const updatedUser = await User.findByIdAndUpdate(userId, {
      feesPaid,
      registrationStatus,
    }, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update user.' });
  }
});

// Delete a user
router.delete('/delete-user/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res.status(200).json({ message: 'User deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete user.' });
  }
});

module.exports = router;
