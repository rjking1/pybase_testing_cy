import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { compareFiles } from "../common/utils.js";

And("clean up previously added members", () => {
  cy.execSQL("delete from members where LASTNAME = 'Test' "); // defaults to 'test' (as the DB name)
  cy.execSQL("delete from members where NAME = 'Ssss' "); // defaults to 'test' (as the DB name)
});

Then("I add a subscriber", () => {
  cy.contains("+ Add").click();
  cy.get('[name="NAME"]').focus().clear().type("Ssss");
  cy.get('[name="LASTNAME"]').focus().clear().type("Test");
  cy.get('[name="status"]').focus().clear().type("Subscriber");
  cy.get('[name="EMAIL"]').focus().clear().type("ssss@email.com");
  cy.contains("✅ Update").click();
});

Then("I add a member", () => {
  cy.contains("+ Add").click();
  cy.get('[name="NAME"]').focus().clear().type("Bbbb");
  cy.get('[name="LASTNAME"]').focus().clear().type("Test");
  cy.get('[name="status"]').focus().clear().type("New");
  cy.get('[name="EMAIL"]').focus().clear().type("bbbb@email.com");
  cy.contains("✅ Update").click();
});

Then("I filter on {string}", (str) => {
  cy.get("#searchBox").focus().clear().type(str);
});

Then("I sort the list on {string}", (str) => {
  cy.get("#searchBox"); // to make sure we wait to get back to list
  cy.contains(str).click();
});

Then("Check member numbers", () => {
  cy.get("#searchBox"); // to make sure we wait to get back to list
  compareFiles(
    "./cypress/downloads/all members.csv",
    "./cypress/expected/all members.csv"
  );
});

Then("Check subscriber numbers", () => {
  cy.get("#searchBox"); // to make sure we wait to get back to list
  compareFiles(
    "./cypress/downloads/all subscribers.csv",
    "./cypress/expected/all subscribers.csv"
  );
});
