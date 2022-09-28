const pathSrc = './src';
const pathDest = './public';

export default {
  root: pathDest,

  html: {
    src: `${pathSrc}/html/pages/*.html`,
    watch: [`${pathSrc}/html/**/*.html`, `${pathSrc}/html/data/**/*.json`],
    dest: pathDest,
  },

  pug: {
    src: `${pathSrc}/pug/*.pug`,
    watch: `${pathSrc}/pug/**/*.pug`,
    dest: pathDest,
  },

  njk: {
    src: `${pathSrc}/njk/*.njk`,
    watch: `${pathSrc}/njk/**/*.njk`,
    dest: pathDest,
  },

  css: {
    src: `${pathSrc}/css/*.css`,
    watch: `${pathSrc}/css/**/*.css`,
    dest: `${pathDest}/css`,
  },

  sass: {
    src: `${pathSrc}/scss/**/*.{sass,scss}`,
    watch: `${pathSrc}/scss/**/*.{sass,scss}`,
    dest: `${pathDest}/css`,
  },

  js: {
    src: `${pathSrc}/js/*.js`,
    watch: `${pathSrc}/js/**/*.js`,
    dest: `${pathDest}/js`,
  },

  img: {
    src: [`${pathSrc}/assets/img/**/*.{png,jpg,jpeg,gif}`, `!${pathSrc}/assets/img/favicon/**/*`],
    watch: `${pathSrc}/assets/img/**/*.{png,jpg,jpeg,gif}`,
    dest: `${pathDest}/images`,
  },

  svg: {
    src: [`${pathSrc}/assets/img/**/*.svg`, `!${pathSrc}/assets/img/sprites/**/*.svg`],
    watch: `${pathSrc}/assets/img/*.svg`,
    dest: `${pathDest}/images`,
  },

  fonts: {
    src: `${pathSrc}/assets/fonts/*.{eot,ttf,otf,ttc,woff,woff2,svg}`,
    watch: `${pathSrc}/assets/fonts/**/*.{eot,ttf,otf,ttc,woff,woff2,svg}`,
    dest: `${pathDest}/fonts`,
  },

  video: {
    src: `${pathSrc}/assets/video/**/*.{mp4, webm}`,
    watch: `${pathSrc}/assets/img/**/*.{mp4, webm}`,
    dest: `${pathDest}/video`,
  },

  svgSprite: {
    src: `${pathSrc}/assets/img/sprites/svg/*.svg`,
    watch: `${pathSrc}/assets/img/sprites/svg/*.svg`,
    dest: `${pathDest}/images`,
  },

  pngSprite: {
    src: `${pathSrc}/assets/img/sprites/png/*.png`,
    watch: `${pathSrc}/assets/img/sprites/png/*.png`,
    dest: `${pathDest}/images`,
  },

  favicon: {
    src: `${pathSrc}/assets/img/favicon/**/*`,
    watch: `${pathSrc}/assets/img/favicon/**/*`,
    dest: `${pathDest}/images/favicon`,
  },

  php: {
    src: `${pathSrc}/php/**/*.php`,
    watch: `${pathSrc}/php/**/*.php`,
    dest: `${pathDest}/php`,
  },
};
