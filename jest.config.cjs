module.exports = {
  // This tells Jest to use the browser-like environment you installed.
  testEnvironment: "jsdom",
  //   This tells Jest to run our setup file after the testing environment is ready.
  setupFilesAfterEnv: ["<rootDir>/jest-setup.js"],
  //   Since Jest doesn't natively understand JSX or modern JavaScript features,
  //   we need to tell it how to "transform" your files before running the tests. This requires Babel.
  transform: {
    // This part is the most crucial for Vite/React
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleNameMapper: {
    // This helps handle CSS imports which Jest doesn't understand natively
    "\\.(css|less|scss)$": "identity-obj-proxy",
  },
};

// you can actually copy this code and use it anywhere you want to setup jest with react and vite
