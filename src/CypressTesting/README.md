cypress here is an end-to-end (E2E) testing method that tests the whole app
or to be more specific .. it test what's being rendered in App.jsx it creates an actuall journy of user across the whole app and takes more time and should be last thing to do before release

1- npm install cypress --save-dev

2- npx cypress open
this will open Cypress Test Runner app & it will do:
a- Detect your project type
b- Ask what kind of testing you want to do—End-to-End or Component. You should choose End-to-End Testing
c- Generate a basic project structure with a cypress.config.js file and a cypress folder

3 - app will open up (cypress app)
choose to create new spec and name it counter.cy.js nad it will be in e2e folder (as we are importing the counter component here)

4- let's go write our test now in Counter.cy.js
