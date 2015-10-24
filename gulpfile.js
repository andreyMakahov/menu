var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    intercept = require('gulp-intercept'),
    wrapper = require('gulp-wrapper'),
    addSrc = require('gulp-add-src');

gulp.task('default', ['webserver', 'styles', 'scripts'], function() {});

gulp.task('styles', function() {
    return gulp.src(['frontend/**/*.scss'])
        .pipe(sass())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('build'));
});

gulp.task('scripts', function() {
    return gulp.src(['frontend/**/*.html'])
        .pipe(intercept(function(file) {
            file.contents = new Buffer(JSON.stringify(file.contents.toString()));
            return file;
        }))
        .pipe(wrapper({
            header: 'document.write(',
            footer: ');\n'
        }))
        .pipe(addSrc([
            'bower_components/jquery/dist/jquery.js',
            'bower_components/lodash/lodash.js',
            'bower_components/page/page.js',
            'frontend/**/*.js'
        ]))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('build'));
});

gulp.task('webserver', function() {
    connect.server({
        livereload:true
    })
});