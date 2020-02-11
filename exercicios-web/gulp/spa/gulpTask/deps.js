const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

gulp.task('deps', ['deps.css', 'deps.fonts'])

gulp.task('deps.css', () => {
    return gulp.src([
        'node_modules/font-awesome/css/font-awesome.min.css'
    ])
        .pipe(uglifycss({"uglifyComments": false}))
        .pipe(concat('deps.min.css'))
        .pipe(gulp.dest('build/assets/css'))
})

gulp.task('deps.fonts', () => {
    // Se for mais de uma fonte pode-se utilizar dos colchetes e vírgula
    return gulp.src('node_modules/font-awesome/fonts/*.*')
        .pipe(gulp.dest('build/assets/fonts'))
})