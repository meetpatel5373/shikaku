const Rectangle = require("../../model/Rectangle");

const resetGame = async (req, res) => {
  try {
    const { boardId } = req.params;
    await Rectangle.deleteMany({ boardId });
    res
      .status(200)
      .json({ message: "Game reset. Please generate new rectangles." });
  } catch (err) {
    res.status(500).json({ error: "Failed to reset game" });
  }
};

module.exports.resetGame = resetGame;
