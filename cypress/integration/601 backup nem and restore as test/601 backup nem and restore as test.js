import { And, Then } from "cypress-cucumber-preprocessor/steps";

And("I login to nem on pybase", () => {
  cy.visit(Cypress.env("NEMPY_URL"));
  cy.get("#db")
    .focus()
    .clear()
    .type(Cypress.env("DB_NAME") + ":py"); // always open test just in case
  cy.get("#user").focus().clear().type(Cypress.env("DEV_NAME"));
  cy.get("#password").focus().clear().type(Cypress.env("DEV_PASSWORD"));
  cy.get("#login").click();
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.wait(1000);
});

Then("I filter on {string}", (str) => {
  cy.get("#searchBox").focus().clear().type(str);
});

Then("I open the event", () => {
  cy.contains("✎").click();
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.wait(2000);
});

And("go to previous period", () => {
  cy.contains("Prev").click();
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.wait(2000);
})

And("go to next period", () => {
  cy.contains("Next").click();
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.wait(2000);
})

