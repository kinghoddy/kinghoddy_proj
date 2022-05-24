const fs = require("fs/promises");
exports.saveImage = (req, res, next) => {
  const image = req.file;
  if (!image) {
    const error = new Error("Image not parsed");
    error.statusCode = 500;
    next(error);
  }
  res.status(200).json({
    message: "Image Stored",
    data: image.path,
  });
};

exports.listImages = async (req, res, next) => {
  try {
    const store = await fs.readdir("storage");
    res.status(200).json({
      message: "Fetches Store",
      data: store,
    });
  } catch (err) {
    next(err);
  }
};
