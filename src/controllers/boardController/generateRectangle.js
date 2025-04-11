const Board = require("../../model/Board");
const Rectangle = require("../../model/Rectangle");

const generateRectangles = async (req, res) => {
  try {
    const { boardId } = req.params;
    const board = await Board.findById(boardId);
    if (!board) return res.status(404).json({ error: "Board not found" });

    const rectangles = [];
    const numRectangles = Math.floor((board.width * board.height) / 4);

    for (let i = 0; i < numRectangles; i++) {
      const width = Math.floor(Math.random() * 3) + 1;
      const height = Math.floor(Math.random() * 3) + 1;
      const x = Math.floor(Math.random() * (board.width - width + 1));
      const y = Math.floor(Math.random() * (board.height - height + 1));

      const rect = new Rectangle({
        boardId,
        width,
        height,
        x,
        y,
        locked: false,
      });
      await rect.save();
      rectangles.push(rect);
    }

    res.status(201).json({ rectangles });
  } catch (err) {
    res.status(500).json({ error: "Failed to generate rectangles" });
  }
};

module.exports.generateRectangles = generateRectangles;
