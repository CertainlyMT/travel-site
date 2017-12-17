var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create(); /*only import a method, auto refresh the browser when change*/

gulp.task('watch', function() {

	browserSync.init({
		notify: false, /* no notify at the corner of the browser */
		server: {
			baseDir: "app"
		}
	});

	// watch file index.html. If something change, start task html
	watch('./app/index.html', function() {
		browserSync.reload();
	});

	//watch all file .css in styles or it subfolder
	watch('./app/assets/styles/**/*.css', function() {
		gulp.start('cssInject');
	});
});

/* Instead of using another browserSync.reload() for all the CSS files,
	there is a better way of browserSync that can inject CSS file without refreshing the page
	Ex: you can select a word, change the CSS and the word is still selected. It is because the browser did not reload  */
gulp.task('cssInject', ['styles'], function(){  /* before run the inject task, gulp must complete any dependency task that we list in [] */
	return gulp.src('./app/temp/styles/styles.css')
	.pipe(browserSync.stream());
});