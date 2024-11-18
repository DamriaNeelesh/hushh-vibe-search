/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  coverageDirectory: "coverage",

  moduleNameMapper: {
    // Handle CSS imports (with CSS modules)
    "next/font/google": "<rootDir>/__mocks__/nextFontMock.js",
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    // Handle CSS imports (without CSS modules)
    "^.+\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
    // Handle other static assets (images, etc.)
    "^.+\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
  transformIgnorePatterns: ["node_modules/(?!(.*\\.mjs$|pdfjs-dist))"],
};
module.exports = {
  // ...other configurations
  setupFiles: ["jest-canvas-mock"],

  preset: "ts-jest",
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.scss$": "jest-scss-transform",
    ".+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|gif)$":
      "jest-transform-stub",
  },
};
export default createJestConfig(config);
