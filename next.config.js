const withTypescript = require("@zeit/next-typescript");

const myCustomization = {
  distDir: '../.next'
}

module.exports = Object.assign({}, withTypescript(), myCustomization);
