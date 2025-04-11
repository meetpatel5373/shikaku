// models/Rectangle.js
const mongoose = require("mongoose");

const rectangleSchema = new mongoose.Schema({
  boardId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Board",
    required: true,
  },
  width: { type: Number, required: true },
  height: { type: Number, required: true },
  x: { type: Number, required: true },
  y: { type: Number, required: true },
  locked: { type: Boolean, default: false },
});

module.exports = mongoose.model("Rectangle", rectangleSchema);
