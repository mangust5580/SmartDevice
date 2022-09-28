const isProd = process.argv.includes('--production');
const isDev = !isProd;

export default {
  isProd: isProd,
  isDev: isDev,

  fileInclude: {
    prefix: '@',
    basepath: 'src/html/',
  },

  webpack: {
    mode: isProd ? 'production' : 'development',
  },

  htmlmin: {
    collapseWhitespace: isProd,
  },

  pug: {
    pretty: isDev,
  },

  imagemin: {
    verbose: true,
  },

  fonter: {
    formats: ['ttf', 'woff', 'eot', 'svg'],
  },

  svgMin: {
    multipass: true,
    js2svg: {
      pretty: true,
      indent: 2,
    },
    plugins: [
      'sortAttrs',
      {
        name: 'removeViewBox',
        active: false,
      },
      {
        name: 'cleanupIDs',
        params: {
          minify: true,
        },
      },
    ],
  },

  cheerio: {
    svg: {
      run: function ($) {
        $('[version]').removeAttr('version');
      },
      parserOptions: { xmlMode: true },
    },
    svgSprite: {
      run: function ($) {
        $('[fill]').removeAttr('fill');
        $('[opacity]').removeAttr('opacity');
        $('[style]').removeAttr('style');
        $('[version]').removeAttr('version');
        $('[width]').removeAttr('width');
        $('[height]').removeAttr('height');
      },
      parserOptions: { xmlMode: true },
    },
  },

  svgSprite: {
    mode: {
      stack: {
        sprite: '../sprite.svg',
      },
    },
  },

  typograf: { locale: ['ru', 'en-US'], htmlEntity: { type: 'name' } },

  favicon: {
    filter: ['favicon.ico', 'apple-touch-icon.png', 'browserconfig.xml', 'site.webmanifest']
  }
};

