const Board = require("../../model/Board");

const stopTimer = async (req, res) => {
  try {
    const { boardId } = req.params;
    const board = await Board.findById(boardId);
    if (!board) return res.status(404).json({ error: "Board not found" });
    const elapsed = Math.floor((Date.now() - board.startTime.getTime()) / 1000);
    res.status(200).json({ elapsedTime: elapsed });
  } catch (err) {
    throw err;
  }
};

module.exports.stopTimer = stopTimer;
