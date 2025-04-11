const Board = require("../../model/Board");

const createBoard = async (req, res) => {
  try {
    const { width, height } = req.body;
    const board = new Board({ width, height });
    await board.save();
    res.status(201).json({ boardId: board._id, boardState: board });
  } catch (err) {
    res.status(500).json({ error: "Failed to create board" });
  }
};

module.exports.createBoard = createBoard;
