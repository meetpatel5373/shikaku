/* NPM PACKAGES */
const express = require("express");
const router = express.Router();
const {
  createBoardCtrl,
  checkRectangleCtrl,
  selectRectangleCtrl,
  generateRectangleCtrl,
  setRectangleCtrl,
  resetBoardCtrl,
  timerCtrl,
} = require("../controllers/boardController");

// Create Board
router.post("/", createBoardCtrl.createBoard);

// Generate rectangles
router.post("/:boardId/rectangles", generateRectangleCtrl.generateRectangles);

// Handle player input (select rectangle)
router.post("/:boardId/select", selectRectangleCtrl.selectRectangle);

// Snap and lock rectangle
router.post("/:boardId/snap", setRectangleCtrl.selectRectangle);

// Check win condition
router.get("/:boardId/check", checkRectangleCtrl.check);

// Reset the game
router.post("/:boardId/reset", resetBoardCtrl.resetGame);

// Track and stop timer
router.post("/:boardId/stop-timer", timerCtrl.stopTimer);

module.exports = router;
