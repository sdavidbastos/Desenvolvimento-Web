const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')
const concat = require('gulp-concat')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')


gulp.task('default', ()=>{
    return tsProject.src()
        .pipe(tsProject())
        .pipe(babel({
            comments: false,
            presets: ["env"]
        }))
        .pipe(uglify())
        .pipe(concat('teste.min.js'))
        .pipe(gulp.dest('build'))
        .on('error', (error)=>console.log(error))
})