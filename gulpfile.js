const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps')
const cleanCSS = require('gulp-clean-css')
const rtlcss = require('gulp-rtlcss')
const rename = require('gulp-rename')
// Paths
const paths = {
  scss: 'scss/*.scss', // Source SCSS files
  cssDest: 'dist/css/', // Output CSS folder
}

// Compile LTR CSS
function compileLTR() {
  return gulp
    .src(paths.scss)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError)) // Compile SCSS to CSS
    .pipe(cleanCSS()) // Minify the CSS
    .pipe(rename({ suffix: '-ltr' })) // Rename for LTR CSS
    .pipe(sourcemaps.write('.')) // Write sourcemaps
    .pipe(gulp.dest(paths.cssDest)) // Output to dist/css
}

// Compile RTL CSS
function compileRTL() {
  return gulp
    .src(paths.scss)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError)) // Compile SCSS to CSS
    .pipe(rtlcss()) // Convert to RTL
    .pipe(cleanCSS()) // Minify the CSS
    .pipe(rename({ suffix: '-rtl' })) // Rename for RTL CSS
    .pipe(sourcemaps.write('.')) // Write sourcemaps
    .pipe(gulp.dest(paths.cssDest)) // Output to dist/css
}

// Watch task
function watchFiles() {
  gulp.watch(paths.scss, gulp.series(compileLTR, compileRTL)) // Watch for changes in SCSS files
}

// Default Gulp task
gulp.task('default', gulp.series(compileLTR, compileRTL, watchFiles))
