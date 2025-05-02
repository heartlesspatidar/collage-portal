
const mongoose = require('mongoose');


const feeSchema = new mongoose.Schema({
  rollNo: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['Regular', 'Ex-Student'],
    required: true,
  },
  installment: {
    type: String,
    enum: ['Full', 'First Installment', 'Second Installment'],
    required: true,
  },
  feePaid: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

const Fee = mongoose.model('Fee', feeSchema);

module.exports = Fee;
