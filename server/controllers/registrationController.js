// backend/controllers/registrationController.js
const Registration = require('../models/Registration');

exports.registerCourse = async (req, res) => {
  const { studentId, course } = req.body;
  try {
    const registration = new Registration({ studentId, course });
    await registration.save();
    res.status(201).json({ message: 'Course registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error registering course', error: err });
  }
};
