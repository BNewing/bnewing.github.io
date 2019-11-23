var gulp 			= require('gulp');
var sass 			= require('gulp-sass');
var sourcemaps 		= require('gulp-sourcemaps');
var autoprefixer 	= require('gulp-autoprefixer');
var connect 		= require('gulp-connect');
var cleanCSS 		= require('gulp-clean-css');

gulp.task('sass', function() {
	return gulp.src('./styles/main.scss')
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(sourcemaps.write())
	.pipe(autoprefixer())
	.pipe(gulp.dest('./styles'));
});

gulp.task('watch', function() {
	gulp.watch('./styles/**/*.scss', gulp.series('sass'));
	gulp.watch(['./*.html'], gulp.series('html'));
});

gulp.task('connect', done => {
	connect.server({
		root: './',
		livereload: true
	});
	done();
});

gulp.task('html', function() {
	gulp.src('./*.html')
	.pipe(connect.reload());
});

gulp.task('default', gulp.series('sass', 'connect', 'watch'));




