const Rectangle = require("../../model/Rectangle");

const selectRectangle = async (req, res) => {
  try {
    const { rectangleId, x, y } = req.body;
    const rectangle = await Rectangle.findById(rectangleId);
    if (!rectangle)
      return res.status(404).json({ error: "Rectangle not found" });

    rectangle.x = x;
    rectangle.y = y;
    rectangle.locked = true;
    await rectangle.save();

    res
      .status(200)
      .json({ success: true, message: "Rectangle locked in place" });
  } catch (err) {
    throw err;
  }
};

module.exports.selectRectangle = selectRectangle;
