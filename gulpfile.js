// gulpfile.js
const { src, dest } = require("gulp");
const sharpResponsive = require("gulp-sharp-responsive");

const img = () =>
  src("src/assets/imgs/*.webp")
    .pipe(
      sharpResponsive({
        formats: [
          // webp
          { width: 640, format: "webp", rename: { suffix: "-sm" } },
          { width: 768, format: "webp", rename: { suffix: "-md" } },
          { width: 1024, format: "webp", rename: { suffix: "-lg" } },
        ],
      })
    )
    .pipe(dest("src/assets/responsive-images"));
module.exports = {
  img,
};
