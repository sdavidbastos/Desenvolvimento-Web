const gulp = require("gulp")
const { series, parallel } = require("gulp")

const antes1 = (callback) => {
    console.log("Tarefa de antes 1")
    return callback()
}
const antes2 = (callback) => {
    console.log("Tarefa de antes 2")
    return callback()
}
const copiar = (callback) => {
    // gulp.src(["pastaA/arquivo1.txt", "pastaA/arquivo2.txt"])
    gulp.src("pastaA/**/*.txt")
        .pipe(gulp.dest("pastaB"))
    return callback()
}
const fim = (callback) => {
    console.log("Tarefa de fim")
    return callback()
}

module.exports.default = series(
    parallel(antes1,antes2),
    copiar,
    fim
    )