const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const useref = require('gulp-useref');
const uglify = require('gulp-uglify');
const gulpIf = require('gulp-if');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const del = require('del');
const runSequence = require('run-sequence');
const coffee = require('gulp-coffee');
const webp = require('gulp-webp');

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('watch', ['browserSync', 'sass', 'coffee'], function() {
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/coffee/**/*.coffee', ['coffee']);
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});

gulp.task('useref', function() {
  return gulp.src('app/*.html')
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    // Minifies only if it's a CSS files
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

gulp.task('images', function(callback) {
  runSequence(['imagemin', 'imgwebp'],
    callback
  );
});

gulp.task('imagemin', function() {
  return gulp.src('app/img/**/*.+(png|jpg|gif|svg)')
    .pipe(imagemin({
      interlaced: true,
      pngquant: true,
      progressive: true
    }))
    .pipe(gulp.dest('dist/img'))
});

gulp.task('buildwebp', function() {
  gulp.src('app/img/**/*.+(png|jpg|gif)')
		.pipe(webp())
		.pipe(gulp.dest('app/img'))
});

gulp.task('imgwebp', function() {
  gulp.src('app/img/**/*.+(png|jpg|gif)')
		.pipe(webp())
		.pipe(gulp.dest('dist/img'))
});

gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
});

gulp.task('favicon', function() {
  return gulp.src('app/favicon.ico')
    .pipe(gulp.dest('dist/'))
});

gulp.task('clean:dist', function() {
  return del.sync('dist');
});

gulp.task('cache:clear', function(callback) {
  return cache.clearAll(callback);
});

gulp.task('coffee', function() {
  gulp.src('app/coffee/**/*.coffee')
    .pipe(coffee({bare:true}))
    .pipe(gulp.dest('app/js'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

gulp.task('build', function(callback) {
  runSequence('clean:dist',
    ['sass', 'coffee'],
    ['useref', 'images', 'fonts', 'favicon'],
    callback
  );
});

gulp.task('default', function(callback) {
  runSequence(['sass', 'coffee', 'buildwebp', 'browserSync', 'watch'],
    callback
  );
});
