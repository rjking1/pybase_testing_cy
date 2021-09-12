import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { compareFiles, compareFilesWithIgnoreOption, exportTableToCSV } from "../common/utils.js";

Then("I can see {string}", (str) => {
  cy.contains(str).should("exist");
});

Then("I cannot see {string}", (str) => {
  cy.contains(str).should("not.exist");
});

Then("go to {string}", (str) => {
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.wait(1000);
  cy.contains(str).click();
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.wait(500);
});

And("save {string} to csv", (str) => {
  cy.contains(str).click();
  cy.contains("Save to CSV file").click(); // button at bottom of a table
  // todo
  // will get quoted cells if we use utils.exportTableToCSV()
  // which is what Save To CSV button should use
});

And("save table {string} to file {string}", (selector, fileName) => {
  exportTableToCSV(cy.get(selector), fileName);
  cy.get(selector, )
  // todo
  // will get quoted cells if we use utils.exportTableToCSV()
  // which is what Save To CSV button should use
});

Then("It should match the expected {string} csv file", (str) => {
  compareFilesWithIgnoreOption(
    `./cypress/downloads/${str}.csv`,
    `./cypress/expected/${str}.csv`,
    [0]
  );
});
