const gulp = require("gulp");
const webserver = require("gulp-webserver");
const watch = require("gulp-watch");

const servidor = () =>
  gulp.src("build").pipe(
    webserver({
      port: 8080,
      open: true,
      livereload: true,
    })
  );
const monitorarArquivos = () =>
    watch("src/**/*.html", () => gulp.series("appHTML")());
    watch("src/**/*.scss", () => gulp.series("appCSS")());
    watch("src/**/*.js", ()=>gulp.series('appJS')())
    watch('src/assets/imgs/**/*.*', ()=>gulp.series('appHTML'))

module.exports = {
  monitorarArquivos,
  servidor,
};
