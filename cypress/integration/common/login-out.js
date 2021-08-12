import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given("I login as a developer", () => {
  cy.visit(Cypress.env("PROD_URL"));
  cy.get("#db").focus().clear().type(Cypress.env("DB_NAME"));
  cy.get("#user").focus().clear().type(Cypress.env("DEV_NAME"));
  cy.get("#password").focus().clear().type(Cypress.env("DEV_PASSWORD"));
  cy.get("#login").click();
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.wait(1000);
});

Given("I login as an admin", () => {
  cy.visit(Cypress.env("PROD_URL"));
  cy.get("#db").focus().clear().type(Cypress.env("DB_NAME"));
  cy.get("#user").focus().clear().type(Cypress.env("ADMIN_NAME"));
  cy.get("#password").focus().clear().type(Cypress.env("ADMIN_PASSWORD"));
  cy.get("#login").click();
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.wait(1000);
});

Given("I login as the treasurer", () => {
  cy.visit(Cypress.env("PROD_URL"));
  cy.get("#db").focus().clear().type(Cypress.env("DB_NAME"));
  cy.get("#user").focus().clear().type(Cypress.env("TREAS_NAME"));
  cy.get("#password").focus().clear().type(Cypress.env("TREAS_PASSWORD"));
  cy.get("#login").click();
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.wait(1000);
});

Given("I login as a committee member", () => {
  cy.visit(Cypress.env("PROD_URL"));
  cy.get("#db").focus().clear().type(Cypress.env("DB_NAME"));
  cy.get("#user").focus().clear().type(Cypress.env("COMM_NAME"));
  cy.get("#password").focus().clear().type(Cypress.env("COMM_PASSWORD"));
  cy.get("#login").click();
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.wait(1000);
});

// Given('I login as a developer to the production database', () => {
//     cy.visit(TEST_SYSTEM_URL);
//     cy.get('#db').clear().type(PROD_DB);
//     cy.get('#user').type("<user name>");
//     cy.get('#password').type("<pwd>");
//     cy.get('#login').click();
// });

Then("I logout", () => {
  cy.visit(Cypress.env("PROD_URL"));
});
