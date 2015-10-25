var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    intercept = require('gulp-intercept'),
    wrapper = require('gulp-wrapper'),
    addSrc = require('gulp-add-src');

gulp.task('default', ['webserver', 'styles', 'scripts', 'watch'], function() {});

gulp.task('styles', function() {
    return gulp.src([
        'frontend/Layout/Reset.css',
        'frontend/**/*.scss',
        'bower_components/bxslider-4/dist/jquery.bxslider.css',
        'frontend/**/*.css'
    ])
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('build'))
    .pipe(connect.reload());
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
            'bower_components/bxslider-4/dist/jquery.bxslider.js',
            'frontend/**/*.js'
        ]))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('build'))
        .pipe(connect.reload());
});

gulp.task('webserver', function() {
    connect.server({
        livereload:true
    })
});

gulp.task('watch', function() {
    gulp.watch(['frontend/**/*.js', 'frontend/**/*.html'], ['scripts'], function() {});
    gulp.watch('frontend/**/*.scss', ['styles'], function() {});
});