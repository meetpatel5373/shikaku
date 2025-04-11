const Rectangle = require("../../model/Rectangle");

const selectRectangle = async (req, res) => {
  try {
    const { rectangleId } = req.body;
    const rectangle = await Rectangle.findById(rectangleId);
    if (!rectangle)
      return res.status(404).json({ error: "Rectangle not found" });
    res.status(200).json({ rectangle });
  } catch (err) {
    res.status(500).json({ error: "Failed to select rectangle" });
  }
};

module.exports.selectRectangle = selectRectangle;
