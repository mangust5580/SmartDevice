import gulp from 'gulp';

import path from '../config/path.js';
import app from '../config/app.js';

import plumber from 'gulp-plumber';
import notify from 'gulp-notify';

export default () => {
  return gulp
    .src(path.video.src)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: 'Video',
          message: error.message,
        })),
      }),
    )
    .pipe(gulp.dest(path.video.dest));
};
