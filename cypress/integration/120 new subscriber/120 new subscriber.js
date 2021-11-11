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
    "./cypress/downloads/All-members.csv",
    "./cypress/expected/All-members.csv"
  );
});

Then("Check subscriber numbers", () => {
  cy.get("#searchBox"); // to make sure we wait to get back to list
  compareFiles(
    "./cypress/downloads/All-subscribers.csv",
    "./cypress/expected/All-subscribers.csv"
  );
});

And("save filtered list to file", () => {
  // better to click button as that is what user will do
  // but still has problem that filtered out rows are being written
  // pybase should use common routine not its own (should fix quotedissue as well then)
  // file name is auto generated which is also good
  cy.contains("Save to CSV file").click();
})
