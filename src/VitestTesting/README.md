Vitest is the modern way of testing alternative for jest specially for vite based projects
Native ESM Support ( no need for complex setUp)
speed
Integrated Workflow (it acts as another vite plugin so can be used in watch mode to give like alive feedback)

1- install needed packs
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom

2- add a test property to your existing vite.config.js file

3- create setupTests.js in /src

4- now we will change the test script in package.json to use vitest instead of jest

5- syntax in Counter.test.jsx is exactly same as jest as they all use same React Testing Library (RTL)
in step 5 be sure to use .jsx extension as Vitest is built on top of Vite. Vite, by default, is configured to handle modern JavaScript and JSX, but it processes files based on their extension.

or in your Vite.config.js you can change
plugins: [react()], and make it

plugins: [
react({
include: '**/*.jsx,**/*.js',
}),],
