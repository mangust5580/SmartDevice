import gulp from 'gulp';

import path from '../config/path.js';
import app from '../config/app.js';
import filter from 'gulp-filter';

export default () => {
  return gulp
    .src(path.favicon.src)
    .pipe(gulp.dest(path.favicon.dest))
    .pipe(filter(app.favicon.filter))
    .pipe(gulp.dest(path.root));
};