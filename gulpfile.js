'use strict';

const gulp = require('gulp');
const del = require('del');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const runSequence = require('run-sequence');
const inlineNg2Template = require('gulp-inline-ng2-template');
const rename = require("gulp-rename");



const paths = {
  all: "./npm-modules/**/*.*",
  tmp: "./tmp",
  sass: "./tmp/**/*.scss",
  css: "./tmp/**/*.css",
  ts: "./tmp/**/*.ts"
};

gulp.task('build-clean', function () {
  return del(paths.tmp);
});

gulp.task('build-rename', function () {
  return gulp.src(paths.css)
    .pipe(rename(function (path) {
      path.extname = ".scss"
    }))
    .pipe(gulp.dest(sameFolder));
});

gulp.task('build-sass', function () {
  return gulp.src(paths.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest(sameFolder));
});

gulp.task('build-inline', () => {
  return gulp.src(paths.ts)
    .pipe(inlineNg2Template({ useRelativePaths:true}))
    .pipe(gulp.dest(sameFolder));
});


gulp.task('build-copy-npm-modules', () => {
  return gulp.src(paths.all)
    .pipe(gulp.dest(paths.tmp));
});

gulp.task('build', () => {
  runSequence(
    'build-clean',
    'build-copy-npm-modules',
    'build-sass',
    'build-rename',
    'build-inline'
  );
});


function sameFolder(file) {
  return file.base;
}
