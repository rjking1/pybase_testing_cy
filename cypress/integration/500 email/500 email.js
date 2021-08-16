import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

And("clean up previously added members", () => {
  cy.execSQL("delete from members where NAME = 'Aaaa' "); // defaults to 'test' (as the DB name)
});

// to be moved somewhere that can be called from many places
Then("I add a member", () => {
  cy.contains("+ Add").click();
  cy.get('[name="NAME"]').focus().clear().type("Aaaa");
  cy.get('[name="LASTNAME"]').focus().clear().type("Test");
  cy.get('[name="status"]').focus().clear().type("New");
  cy.get('[name="EMAIL"]').focus().clear().type("aaaa@email.com");
  cy.contains("✅ Update").click();
});

Then("I select the member", () => {
  cy.get(".checkrow:visible").click();
});

Then("I filter on {string}", (str) => {
  cy.get("#searchBox").focus().clear().type(str);
});

Then("I filter on random character", () => {
  const chars = [
    "a", "b", "c", "d", "e", "q", "z"
  ];
  let randomChar = chars[Math.floor(Math.random() * chars.length)];
  cy.get("#searchBox").focus().clear().type(randomChar);
});

Then("I sort the list on {string}", (str) => {
  cy.get("#searchBox"); // to make sure we wait to get back to list
  cy.contains(str).click();
});

Then("I sort the list on random column", () => {
  const cols = [
    "Mobile", "Postcode", "Name", "Lastname", "Status", "Comment", "No"
  ];
  let randomCol = cols[Math.floor(Math.random() * cols.length)];
  cy.contains(randomCol).click();
});
