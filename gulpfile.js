var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
	return gulp.src('./styles/components/main.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./styles'));
});

gulp.task('watch', function() {
	gulp.watch('./sass/**/*.scss', ['sass']);
});