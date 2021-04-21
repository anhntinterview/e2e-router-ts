module.exports = {
  verbose: true,
  preset: "ts-jest/preset/js-with-ts",
  global: {
    "ts-jest": {
      tsConfig: {
        target: "es2015",
      },
    },
  },
  rootDir: __dirname,
  roots: ["<rootDir>/src"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testResultsProcessor: "jest-sonar-reporter",
};
