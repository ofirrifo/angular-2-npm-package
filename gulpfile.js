'use strict';

const gulp = require('gulp');
const del = require('del');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const runSequence = require('run-sequence');
const inlineNg2Template = require('gulp-inline-ng2-template');


const paths = {
  all: "./npm-modules/**/*.*",
  temp: "./temp",
  sass: "./temp/**/*.scss",
  ts: "./temp/**/*.ts"
};

gulp.task('build-clean', function () {
  return del(paths.temp);
});

gulp.task('sass', function () {
  return gulp.src(paths.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest(sameFolder));
});

gulp.task('inline', () => {
  return gulp.src(paths.ts)
    .pipe(inlineNg2Template({ useRelativePaths:true}))
    .pipe(gulp.dest(sameFolder));
});


gulp.task('copy-npm-modules', () => {
  return gulp.src(paths.all)
    .pipe(gulp.dest(paths.temp));
});

gulp.task('build', () => {
  runSequence(
    'build-clean',
    'copy-npm-modules',
    'sass',
    'inline'
  );
});


function sameFolder(file) {
  return file.base;
}
