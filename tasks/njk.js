import gulp from 'gulp';

import path from '../config/path.js';
import app from '../config/app.js';

import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import nunjucksRender from 'gulp-nunjucks-render';

export default () => {
  return gulp
    .src(path.njk.src)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: 'Njk',
          message: error.message,
        })),
      }),
    )
    .pipe(nunjucksRender())
    .pipe(gulp.dest(path.njk.dest));
};
