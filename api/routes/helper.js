const imageFilter = function (req, file, cb) {
  if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF|pdf)$/)) {
    req.fileValidationError = 'Only image and pdf files are allowed!';
    return cb(new Error('Only image and pdf files are allowed!'), false);
  }
  cb(null, true);
};
module.exports = imageFilter;
