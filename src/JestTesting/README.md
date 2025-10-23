here i will tell you about jest for testing:

1- you need to install stuff to make it work as jest and vite are not really going side by side (but works)
npm install --save-dev jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom

2- create jest.config.cjs in root (explaination there)

3- install
npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/preset-react identity-obj-proxy
(To make the transform step work, you'll need to install Babel and its related presets)

4- create babel.config.cjs in root

5- create jest-setup.js in root

6- in package.json we will add the test script (go look under scripts you will see "test": "jest" that's it)

7- in same place of your component you wanna test (e.g Counter.jsx) we create the test file (e.g Counter.test.js)
