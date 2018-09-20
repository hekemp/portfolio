module.exports = {
  "roots": [
    "<rootDir>/app",
    "<rootDir>/__tests__",
    "<rootDir>/__mocks__"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  'testRegex': '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  "moduleFileExtensions": [
    "ts", "tsx", "js", "jsx", "json", "node"
  ],
  "moduleNameMapper": {
    "@/(.*)$": "<rootDir>/app/$1"
  },
}