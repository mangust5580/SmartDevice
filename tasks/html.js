import gulp from 'gulp';

import path from '../config/path.js';
import app from '../config/app.js';

import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import fileInclude from 'gulp-file-include';
// import typograf from 'gulp-typograf';
import htmlmin from 'gulp-htmlmin';
import size from 'gulp-size';

export default () => {
  return gulp
    .src(path.html.src)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: 'HTML',
          message: error.message,
        })),
      }),
    )
    .pipe(fileInclude(app.fileInclude))
    .pipe(
      size({
        title: 'До сжатия',
      }),
    )
    // .pipe(typograf(app.typograf))
    .pipe(htmlmin(app.htmlmin))
    .pipe(
      size({
        title: 'После сжатия',
      }),
    )
    .pipe(gulp.dest(path.html.dest));
};
