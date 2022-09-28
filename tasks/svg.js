import gulp from 'gulp';

import path from '../config/path.js';
import app from '../config/app.js';

import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import svgMin from 'gulp-svgmin';
import cheerio from 'gulp-cheerio';
import replace from 'gulp-replace';

export default () => {
  return gulp
    .src(path.svg.src)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: 'Svg',
          message: error.message,
        })),
      }),
    )
    .pipe(svgMin(app.svgMin))
    .pipe(cheerio(app.cheerio.svg))
    .pipe(replace('&gt;', '>'))
    .pipe(gulp.dest(path.svg.dest));
};
