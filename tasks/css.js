import gulp from 'gulp';

import path from '../config/path.js';
import app from '../config/app.js';

import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import concat from 'gulp-concat';
import cssimport from 'gulp-cssimport';
import autoprefixer from 'gulp-autoprefixer';
import csso from 'gulp-csso';
import rename from 'gulp-rename';
import size from 'gulp-size';
import shorthand from 'gulp-shorthand';
import gulpGroupCssMediaQueries from 'gulp-group-css-media-queries';

export default () => {
  return gulp
    .src(path.css.src, { sourcemaps: true })
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: 'CSS',
          message: error.message,
        })),
      }),
    )
    .pipe(concat('main.css'))
    .pipe(cssimport())
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(gulpGroupCssMediaQueries())
    .pipe(size({ title: 'main.css' }))
    .pipe(gulp.dest(path.css.dest, { sourcemaps: true }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(csso())
    .pipe(size({ title: 'main.css' }))
    .pipe(gulp.dest(path.css.dest, { sourcemaps: true }));
};
