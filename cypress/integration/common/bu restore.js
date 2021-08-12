import { And } from "cypress-cucumber-preprocessor/steps";

const BU_FILE_NAME = 'test'   // .sql
const TEST_DB = 'test'

And("Backup the {string} db", (db) => {
    cy.get("#bu_db").focus().clear().type(db);
    cy.get("#bu_file").focus().clear().type(BU_FILE_NAME);
    cy.get("#backup").click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000);
});

And("Restore to the test db", () => {
    cy.get("#rest_file").focus().clear().type(BU_FILE_NAME);
    cy.get("#rest_db").focus().clear().type(TEST_DB);   // should be set to test but belt and braces
    cy.get("#restore").click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000);
});
