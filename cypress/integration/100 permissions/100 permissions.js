import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Then("I can go to New members", () => {
    cy.contains('New Members').click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000);
})

Then('I can edit a member', () => {
    assert.notEqual(cy.get('.editrow').length, 0);
})

Then('I cannot edit a member', () => {
    cy.get('.editrow').should('not.exist')
})

Then('I can see {string}', (str) => {
    cy.contains(str).should('exist')
})

Then('I cannot see {string}', (str) => {
    cy.contains(str).should('not.exist')
})
