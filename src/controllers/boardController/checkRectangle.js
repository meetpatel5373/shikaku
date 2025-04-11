const Board = require("../../model/Board");
const Rectangle = require("../../model/Rectangle");

const check = async (req, res) => {
  try {
    const { boardId } = req.params;
    const board = await Board.findById(boardId);
    if (!board) return res.status(404).json({ error: "Board not found" });

    const totalArea = board.width * board.height;
    const rectangles = await Rectangle.find({ boardId });
    const isWin = rectangles.every((rect) => rect.locked);
    const coveredArea = rectangles.reduce(
      (sum, rect) => sum + rect.width * rect.height,
      0
    );

    if (isWin && coveredArea === totalArea) {
      return res.status(200).json({ isWin: true, message: "You win!" });
    } else {
      return res.status(200).json({ isWin: false, message: "Keep going!" });
    }
  } catch (err) {
    throw err;
  }
};

module.exports.check = check;
