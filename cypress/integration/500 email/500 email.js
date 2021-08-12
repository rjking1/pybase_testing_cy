import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

// to be moved somewhere that can be called from many places
Then("I add a member", () => {
  cy.contains("+ Add").click();
  cy.get('[name="NAME"]').focus().clear().type("Aaaa");
  cy.get('[name="LASTNAME"]').focus().clear().type("Test");
  cy.get('[name="status"]').focus().clear().type("New");
  cy.get('[name="EMAIL"]').focus().clear().type("test@test.com");
  cy.contains("✅ Update").click();
});

// to become gen filter test
Then("I select a member", (str) => {
  cy.get("#searchBox").focus().clear().type("Aaaa");
  cy.get(".checkrow:visible").click();
});
