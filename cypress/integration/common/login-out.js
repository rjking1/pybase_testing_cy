import { Given, Then } from "cypress-cucumber-preprocessor/steps";

// const urlLogin  = 'https://www.artspace7.com.au/pybase/test'
const urlLogin  = 'localhost:5000'

Given('I login as an admin', () => { 
    cy.visit(urlLogin);
    cy.get('#db').clear().type("test");
    cy.get('#user').type("HEATHER");
    cy.get('#password').type("123");
    cy.get('#login').click();
});

Given('I login as a committee member', () => {
    cy.visit(urlLogin);
    cy.get('#db').clear().type("test");
    cy.get('#user').type("rk");
    cy.get('#password').type("123");
    cy.get('#login').click();
});


Then('I logout', () => {
    cy.visit(urlLogin);
});
