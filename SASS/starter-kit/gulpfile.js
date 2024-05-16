const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer')
const browserSync = require('browser-sync')
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
// const reload = browserSync.reload;

// // PRINT NAME
// gulp.task('printName', async function() {
//     console.log('My nmae is /dapo');
// })

// gulp.task('printAge', async function() {
//     console.log('I am 20 years old');
// })

// gulp.task('default', gulp.series('printAge', 'printName'))

// Compile SCSS file to CSS and Vendor prefixes
gulp.task('sass', async function () {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('./public/css'))
        .pipe(browserSync.stream())
})

gulp.task('browser-sync', async function () {
    browserSync.init({
        server: './public',
        notify: false,
        open: true
    })
})

gulp.task('updatehtml', async function () {
    return gulp.src('./public/**/*.html')
        .pipe(browserSync.stream())
})

gulp.task('minify-css', async function () {
    return gulp.src('./public/css/**/*.css')
        .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/css'))
})

gulp.task('production', gulp.series('minify-css'))

// Watch for changes SCSS subfolders and html files
gulp.task('default', gulp.parallel('browser-sync', async function () {
    gulp.watch('./src/scss/**/*', gulp.series('sass', 'minify-css'))
    gulp.watch('./public/**/*.html', gulp.series('updatehtml'))
}))
