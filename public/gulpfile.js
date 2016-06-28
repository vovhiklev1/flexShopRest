var gulp = require('gulp');
var mainBowerFiles = require('gulp-main-bower-files');
var filter = require('gulp-filter');
var concat = require('gulp-concat');
var ngHtml2Js = require("gulp-ng-html2js");
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var runSequence = require('run-sequence');
var inject = require('gulp-inject');


gulp.task('main_bower_files', function() {
	return gulp.src('./bower.json')
			.pipe(mainBowerFiles( ))
			.pipe(filter('**/*.js'))
			.pipe(concat("bower_lib.js"))
			.pipe(gulp.dest("./dist/bower"));
});

gulp.task('html2js', function() {
	return gulp.src("./core/views/*.html")
			.pipe(ngHtml2Js({
				moduleName: "app",
				prefix: "core/views/"
			}))
			.pipe(concat("templates.html.js"))
			.pipe(gulp.dest("./dist/templates"));
});

var scripts = [
	'dist/bower/bower_lib.js',
	'core/**/*.js',
	'dist/templates/templates.html.js'
];

gulp.task('concat_js', function() {
	return gulp.src(scripts)
		.pipe(concat('webapp.min.js'))
		.pipe(uglify())
		//.pipe(gzip({ extension: 'gzip' }))
		.pipe(gulp.dest('./dist/'));
});

var css = [
	'bower_components/font-awesome-bower/css/font-awesome.css',
	'stylesheets/style.css',
	'stylesheets/fonts.css'
];

gulp.task('concat_css', function() {
	return gulp.src(css)
		.pipe(concat('style.min.css'))
		.pipe(minifyCss())
		.pipe(gulp.dest('./dist/'));
});

var gulp = require('gulp');
var inject = require('gulp-inject');

gulp.task('index', function () {
	var target = gulp.src('./index.html');
	var sources = gulp.src(['./dist/bower/bower_lib.js', './core/**/*.js'].concat(css), {read: false});
	///.pipe(inject(gulp.src('./src/**/*.js', {read: false}), {relative: true}))

	return target.pipe(inject(sources, {relative: true}))
		.pipe(gulp.dest('./'));
});

gulp.task('build', function(callback) {
	runSequence(
		'main_bower_files',
		'html2js',
		'concat_js',
		'concat_css',
		callback
	);
});