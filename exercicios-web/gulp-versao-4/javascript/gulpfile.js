const { series } = require("gulp");
const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");
// presets: versão do js. Env equivale a versão mais recente do js.
function padrao(callback) {
  gulp
    .src("src/**.js")
    .pipe(
      babel({
        comments: false,
        presets: ["env"],
      })
    )
    .pipe(uglify())
    .on("error", (error) => console.log(error))
    .pipe(concat("app.min.js"))
    .pipe(gulp.dest("build"));
  return callback();
}

function fim(callback){
    console.log("Fim!!")
    return callback()
}

exports.default = series(padrao, fim);
