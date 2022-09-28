import gulp from 'gulp';
import browserSync from 'browser-sync';

import clear from './tasks/clear.js';
import html from './tasks/html.js';
import pug from './tasks/pug.js';
import njk from './tasks/njk.js';
import css from './tasks/css.js';
import sass from './tasks/sass.js';
import js from './tasks/js.js';
import img from './tasks/img.js';
import fonts from './tasks/fonts.js';
import svg from './tasks/svg.js';
import video from './tasks/video.js';
import svgSprite from './tasks/svgSprite.js';
import favicon from './tasks/favicon.js';
import php from './tasks/php.js';

import path from './config/path.js';
import app from './config/app.js';

const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root,
    },
  });
};

const watcher = () => {
  gulp.watch(path.html.watch, html).on('all', browserSync.reload); // html || pug || njk
  gulp.watch(path.sass.watch, sass).on('all', browserSync.reload); // css || sass
  gulp.watch(path.js.watch, js).on('all', browserSync.reload);
  gulp.watch(path.img.watch, img).on('all', browserSync.reload);
  gulp.watch(path.fonts.watch, fonts).on('all', browserSync.reload);
  gulp.watch(path.svg.watch, svg).on('all', browserSync.reload);
  gulp.watch(path.video.watch, video).on('all', browserSync.reload);
  gulp.watch(path.favicon.watch, favicon).on('all', browserSync.reload);
  gulp.watch(path.svgSprite.watch, svgSprite).on('all', browserSync.reload);
  gulp.watch(path.php.watch, php).on('all', browserSync.reload);
};

export { html }; // html || pug || njk
export { watcher };
export { clear };
export { sass }; // css || scss
export { js };
export { img };
export { fonts };
export { svg };
export { video };
export { svgSprite };
export { favicon };
export { php };

const build = gulp.series(clear, gulp.parallel(html, sass, js, img, fonts, svg, video, svgSprite, favicon, php)); // html || pug || njk
const dev = gulp.series(build, gulp.parallel(watcher, server));

export default app.isProd ? build : dev;
