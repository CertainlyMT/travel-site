var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite');

//svg sprite want its parameter to be object
var config = {
	mode: {
		css: {
			//at this point, the svg file is already made
			//tell the gulp-svg to transfer to CSS for us
			render: {
				//tell the package to use css instead of something like SASS
				css: {
					template: './gulp/templates/sprite.css'
				}
			}
		}
	}
}

gulp.task('createSprite', function() {
	return gulp.src('./app/assets/images/icons/**/*.svg')
		.pipe(svgSprite(config))
		.pipe(gulp.dest('./app/temp/sprite'));
})