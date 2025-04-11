// models/Board.js
const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema({
  width: { type: Number, required: true },
  height: { type: Number, required: true },
  startTime: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Board", boardSchema);
