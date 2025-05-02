const express = require('express');
const {
  registerUser,
  loginUser,
  updateUser,
  updateLoginInfo
} = require('../controllers/authController');

const router = express.Router();

router.post('/signup', registerUser);
router.post('/login', loginUser);
router.put('/update/:id', updateUser);
router.put('/update-login/:id', updateLoginInfo);

module.exports = router;
