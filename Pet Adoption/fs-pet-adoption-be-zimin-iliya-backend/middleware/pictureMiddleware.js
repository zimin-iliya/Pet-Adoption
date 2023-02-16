const multer = require("multer");
const path = require("path");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const pathToImg = path.resolve(__dirname, "../images");

cloudinary.config({
  cloud_name: "dcxgxpq0i",
  api_key: "146816734574463",
  api_secret: "T5EP6JfCBzw3r_9VTRa-6MMrkC4",
});

const cloudStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage: cloudStorage });


const generateUrl = (req, res, next) => {
  console.log(req.file.filename);
  console.log(req.headers.userId);
  console.log("-----------");
  const imageUrl = `http://localhost:8080/${req.file.filename}`;
  req.body.imageUrl = imageUrl;
  next();
};

module.exports = { upload, generateUrl };
