const mongoose = require("mongoose");
const NumbersetSchema = new mongoose.Schema({
  n1: {
    type: Number,
    required: true,
  },
  n2: {
    type: Number,
    required: true,
  },
  sum: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Numberset = mongoose.model("numberset", NumbersetSchema);
