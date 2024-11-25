const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps')

// Paths
const paths = {
  scss: 'scss/*.scss', // Source SCSS files
  css: 'dist/css/', // Output CSS folder
}

// Compile SCSS to CSS and generate source maps
function compileSass() {
  return gulp
    .src(paths.scss) // Get all SCSS files
    .pipe(sourcemaps.init()) // Initialize sourcemaps before the compilation
    .pipe(sass().on('error', sass.logError)) // Compile SCSS to CSS
    .pipe(sourcemaps.write('./')) // Write sourcemaps to the same folder as CSS
    .pipe(gulp.dest(paths.css)) // Output the compiled CSS and map files
}

// Watch for changes in SCSS files
function watchFiles() {
  gulp.watch(paths.scss, compileSass)
}

// Default task: Compile SCSS and watch for changes
exports.default = gulp.series(compileSass, watchFiles)
