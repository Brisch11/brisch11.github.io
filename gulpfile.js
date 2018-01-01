var gulp         = require('gulp');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var postcss      = require('gulp-postcss');
var gulpif       = require('gulp-if');
var minify       = require('gulp-minify');
var autoprefixer = require('autoprefixer');
var plumber      = require('gulp-plumber');

var isDev = function() {
	return process.env.NODE_ENV === 'development';
}

var outputStyle = (isDev() ? 'expanded' : 'compressed');

gulp.task('sass', function() {
	return gulp.src('src/css/**/[^_]*.?(s)css')
		.pipe(plumber())
		.pipe(gulpif(isDev(), sourcemaps.init()))
		.pipe(sass({
			outputStyle: outputStyle,
			includePaths: ['node_modules']
		}).on('error', sass.logError))
		.pipe(postcss([
			autoprefixer({
				"browsers": [
					"> 5%",
					"last 2 versions"
				]
			})
		]))
		.pipe(gulpif(isDev(), sourcemaps.write()))
		.pipe(gulp.dest('dist/css'));
});

// gulp.task('js', function() {
// 	return gulp.src('src/js/**/*.js')
// 		.pipe(plumber())
// 		.pipe(minify({
// 			ext: {
// 				src:'.js',
// 				min:'.min.js'
// 			}
// 		}))
// 		.pipe(gulp.dest('dist/js'))
// });

gulp.task('build', ['sass']);
// gulp.task('build', ['js', 'sass']);

gulp.task('watch', function() {
	gulp.watch('src/css/**/*.scss', ['sass']);
	// gulp.watch('src/js/**/*.js', ['js']);
});

gulp.task('default', ['build', 'watch']);
