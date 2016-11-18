var gulp = require('gulp');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');

var cachebust = require('gulp-cache-bust');

var paths = {
  scripts: ['dev/bower_components/tiny.js/dist/tiny.js', 'dev/bower_components/chico/dist/ui/chico.js', 'dev/assets/js/load.js', ],
  images: ['dev/assets/images/**/*'],
  css: ['dev/bower_components/chico/dist/ui/chico.css', 'dev/assets/css/mercado-livre.css'],
  html: ['dev/*.html'],
  chico:['dev/bower_components/chico/dist/assets/*']
};

gulp.task('clean', function() {
  return del(['build']);
});

gulp.task('scripts', ['clean'], function() {  
  return gulp.src(paths.scripts)
    .pipe(sourcemaps.init())      
    .pipe(uglify())
    .pipe(concat('all.js'))
    .pipe(gulp.dest('build/assets/js'))
    .pipe(gulp.dest('dev/assets/js'));
});

gulp.task('css', ['clean'], function() {  
  return gulp.src(paths.css)
    .pipe(sourcemaps.init())      
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
    .pipe(concat('ml.css'))
    .pipe(gulp.dest('build/assets/css'))
    .pipe(gulp.dest('dev/assets/css'));
});

gulp.task('html', ['clean'], function() {  
  return gulp.src(paths.html)
    .pipe(sourcemaps.init())      
      .pipe(htmlmin({collapseWhitespace: true}))      
  .pipe(cachebust({
		type: 'timestamp'
	}))
    .pipe(gulp.dest('build'));
});

gulp.task('images', ['clean'], function() {
  return gulp.src(paths.images)   
    .pipe(imagemin({
        optimizationLevel: 5,
        progressive: true
    }))
  
    .pipe(gulp.dest('build/assets/images'));
});

gulp.task('chico', ['clean'], function() {
  return gulp.src(paths.chico)   
  
    .pipe(gulp.dest('build/assets/assets'))
    .pipe(gulp.dest('dev/assets/assets'));
});

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.images, ['images']);
  gulp.watch(paths.css, ['css']);
  gulp.watch(paths.html, ['html']);
  gulp.watch(paths.html, ['chico']);
});

gulp.task('default', ['watch', 'scripts', 'images', 'css', 'html', 'chico']);