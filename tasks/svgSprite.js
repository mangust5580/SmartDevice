import gulp from 'gulp';

import path from '../config/path.js';
import app from '../config/app.js';

import svgSprite from 'gulp-svg-sprite';
import svgMin from 'gulp-svgmin';
import cheerio from 'gulp-cheerio';
import replace from 'gulp-replace';

export default () => {
  return gulp
    .src(path.svgSprite.src)
    .pipe(svgSprite(app.svgSprite))
    .pipe(svgMin(app.svgMin))
    .pipe(cheerio(app.cheerio.svgSprite))
    .pipe(replace('&gt;', '>'))
    .pipe(gulp.dest(path.svgSprite.dest));
};
