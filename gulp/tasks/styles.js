var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars')
nested = require('postcss-nested'),
cssimport = require('postcss-import'); /* use @import in main file */

gulp.task('styles', function() {
	//manipilate source style.css through pipe() to the destination
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssimport, cssvars, nested, autoprefixer])) //postcss expect a array
		.on('error', function(errorInfo) {
			console.log(errorInfo.toString());
			this.emit('end'); // this tell the watch task that styles task have com to an end, not the gulp. However, we can not see the error message
		}) // if error happen at postcss pipe, it stop and does not reach the gulp.dest
		.pipe(gulp.dest('./app/temp/styles'));
});