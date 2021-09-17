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
  cy.get(".editrow:visible").click(); // ✎
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.wait(2000);
});

And("go to previous period", () => {
  cy.contains("Prev").click();
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.wait(2000);
});

And("go to next period", () => {
  cy.contains("Next").click();
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.wait(2000);
});

// for cy.clock(now) test
// const now = new Date(2017, 3, 14).getTime() // April 14, 2017 timestamp

// cy.clock(now)
// cy.visit('/index.html')
// cy.get('#date').contains('2017-04-14')
