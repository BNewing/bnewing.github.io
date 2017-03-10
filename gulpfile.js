var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
	return gulp.src('./styles/components/main.scss')
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(sourcemaps.write())
	.pipe(autoprefixer())
	.pipe(gulp.dest('./styles'));
});

gulp.task('watch', function() {
	gulp.watch('./sass/**/*.scss', ['sass']);
});
