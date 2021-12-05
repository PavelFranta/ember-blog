'use strict';
const { Webpack } = require('@embroider/webpack');
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    postcssOptions: {
      compile: {
        plugins: [
          // { module: require('postcss-import') }, // If you installed postcss-import
          require('tailwindcss'),
          // require('tailwindcss')('./app/styles/tailwind.config.js'), // If you have a Tailwind config file.
        ],
      },
    },
    // Add options here
  });

  return require('@embroider/compat').compatBuild(app, Webpack);
};
