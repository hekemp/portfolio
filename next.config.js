const withTypescript = require('@zeit/next-typescript')
const optimizedImages = require('next-optimized-images')

const withPlugins = require('next-compose-plugins')

const myCustomization = {
  distDir: '../.next',
}

module.exports = withPlugins(
  [[withTypescript], [optimizedImages]],
  myCustomization,
)
