const withTypescript = require("@zeit/next-typescript");

const withPlugins = require('next-compose-plugins');


const myCustomization = {
  distDir: '../.next'
}

module.exports = withPlugins([
  [withTypescript]
], myCustomization);
