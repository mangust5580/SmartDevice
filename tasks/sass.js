import gulp from 'gulp';

import path from '../config/path.js';
import app from '../config/app.js';

import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import autoprefixer from 'gulp-autoprefixer';
import csso from 'gulp-csso';
import rename from 'gulp-rename';
import size from 'gulp-size';
import shorthand from 'gulp-shorthand';
import groupCssMediaQueries from 'gulp-group-css-media-queries';
import sassGlob from 'gulp-sass-glob';
import cleanCss from 'gulp-clean-css';

const sass = gulpSass(dartSass);

export default () => {
  return gulp
    .src(path.sass.src, { sourcemaps: app.isDev })
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: 'Sass',
          message: error.message,
        })),
      }),
    )
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cleanCss())
    .pipe(shorthand())
    .pipe(groupCssMediaQueries())
    .pipe(size({ title: 'main.css' }))
    .pipe(gulp.dest(path.sass.dest, { sourcemaps: app.isDev }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(csso())
    .pipe(size({ title: 'main.min.css' }))
    .pipe(gulp.dest(path.sass.dest, { sourcemaps: app.isDev }));
};
