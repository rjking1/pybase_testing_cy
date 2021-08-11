import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Then('I can see {string}', (str) => {
    cy.contains(str).should('exist')
})

Then('I cannot see {string}', (str) => {
    cy.contains(str).should('not.exist')
})

Then("I go to {string}", (str) => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000);
    cy.contains(str).click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(500);
})
