const gulp = require('gulp')

gulp.task('default', ()=>{
    gulp.start('copiar', 'fim')
})

gulp.task('copiar', ['antes1', 'antes2'], ()=>{
    console.log('Copiar!!!')
    gulp.src('pastaA/**/*.txt')
        // .pipe(transformacao1())
        // .pipe(transformacao2())
        .pipe(gulp.dest('pastaB'))
})

gulp.task('antes1', ()=>{
    console.log('Antes 1 !!!')
})
gulp.task('antes2', ()=>{
    console.log('Antes 1 !!!')
})

gulp.task('fim', ()=>{
    console.log('Fim!!!');
})