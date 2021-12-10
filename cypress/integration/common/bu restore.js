import { And } from "cypress-cucumber-preprocessor/steps";

const BU_FILE_NAME = "test"; // .sql
const TEST_DB = "test";

And("Backup the {string} db", (db) => {
  cy.get("#bu_db").focus().clear().type(db);
  cy.get("#bu_file").focus().clear().type(BU_FILE_NAME);
  cy.get("#backup").click();
  cy.contains("Backed up", { timeout: 60000 });
});

And("Backup the {string} db schema", (db) => {
  cy.get("#bu_db").focus().clear().type(db);
  cy.get("#bu_file").focus().clear().type(BU_FILE_NAME);
  cy.get("#opts").focus().clear().type("--routines --triggers --no-data");
  cy.get("#tables").focus().clear();
  cy.get("#backup").click();
  cy.contains("Backed up", { timeout: 60000 });
});

And("Backup the {string} db schema copy", (db) => {
  cy.get("#bu_db").focus().clear().type(db);
  cy.get("#bu_file")
    .focus()
    .clear()
    .type(BU_FILE_NAME + "_schema");
  cy.get("#opts").focus().clear().type("--routines --triggers --no-data");
  cy.get("#tables").focus().clear();
  cy.get("#backup").click();
  cy.contains("Backed up", { timeout: 60000 });
});

And("Backup the {string} db tables {string}", (db, tables) => {
  cy.get("#bu_db").focus().clear().type(db);
  cy.get("#bu_file").focus().clear().type(BU_FILE_NAME);
  cy.get("#opts").focus().clear();
  cy.get("#tables").focus().clear().type(tables);
  cy.get("#backup").click();
  cy.contains("Backed up", { timeout: 60000 });
});

And("Restore to the test db", () => {
  cy.get("#rest_file").focus().clear().type(BU_FILE_NAME);
  cy.get("#rest_db").focus().clear().type(TEST_DB); // should be set to test but belt and braces and CAREFUL since we login to the "nem" db to recover at times
  cy.get("#restore").click();
  cy.contains("Restored", { timeout: 120000 });
});

And("Load historical data for {string}", (date) => {
  cy.get("#py_params").focus().clear().type(date);
  cy.get("#run_py").click();
  cy.contains("Loaded", { timeout: 150000 });
});
