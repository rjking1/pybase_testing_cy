import { Given, Then } from "cypress-cucumber-preprocessor/steps";

// const TEST_SYSTEM_URL = 'localhost:5000'
const TEST_SYSTEM_URL  = 'https://www.artspace7.com.au/pybase/test'
// const TEST_SYSTEM_URL  = 'https://www.artspace7.com.au/pybase/plus'

const PROD_DB = 'hut';  // or rides2
const TEST_DB = 'test';

Given('I login as an admin', () => { 
    cy.visit(TEST_SYSTEM_URL);
    cy.get('#db').clear().type(TEST_DB);
    cy.get('#user').type("HEATHER");
    cy.get('#password').type("goldie");
    cy.get('#login').click();
});

Given('I login as a committee member', () => {
    cy.visit(TEST_SYSTEM_URL);
    cy.get('#db').clear().type(TEST_DB);
    cy.get('#user').type("rk");
    cy.get('#password').type("viking"); 
    cy.get('#login').click();
});

Given("I login as a developer to the test db", () => {
        cy.visit(TEST_SYSTEM_URL);
    cy.get('#db').clear().type(TEST_DB);
    cy.get('#user').type("RICHARD");
    cy.get('#password').type("viking");
    cy.get('#login').click();
})

Given('I login as a developer to the production database', () => {
    cy.visit(TEST_SYSTEM_URL);
    cy.get('#db').clear().type(PROD_DB);
    cy.get('#user').type("RICHARD");
    cy.get('#password').type("viking");
    cy.get('#login').click();
});



Then('I logout', () => {
    cy.visit(TEST_SYSTEM_URL);
});
