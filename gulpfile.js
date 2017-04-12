var gulp 			= require('gulp');
var sass 			= require('gulp-sass');
var sourcemaps 		= require('gulp-sourcemaps');
var autoprefixer 	= require('gulp-autoprefixer');
var connect 		= require('gulp-connect');

gulp.task('sass', function() {
	return gulp.src('./styles/components/main.scss')
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(sourcemaps.write())
	.pipe(autoprefixer())
	.pipe(gulp.dest('./styles'));
});

gulp.task('watch', function() {
	gulp.watch('./styles/**/*.scss', ['sass']);
	gulp.watch(['./*.html'], ['html']);
});

gulp.task('connect', function() {
	connect.server()({
		root: './',
		livereload: true
	});
});

gulp.task('html', function() {
	gulp.src('./*.html')
	.pipe(connect.reload());
});

gulp.task('default', ['sass', 'connect', 'watch']);




