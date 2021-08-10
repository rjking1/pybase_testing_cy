import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Then('I can edit a member', () => {
    // assert.notEqual(cy.get('.editrow').length, 0);
    cy.get('.editrow').should('exist')
})

Then('I cannot edit a member', () => {
    cy.get('.editrow').should('not.exist')
})

