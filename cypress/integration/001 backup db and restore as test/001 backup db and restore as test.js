import { And, Given, Then } from "cypress-cucumber-preprocessor/steps";
import { compareFiles } from "../common/utils.js"

const BU_PROD_DB = 'hut'
const BU_FILE_NAME = 'test'   // .sql
const TEST_DB = 'test'
const CLEAN_AUDIT_TRAIL = "delete from py_logs where date_time < NOW() - interval '1 day' ";

And("go to Database", () => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(500);
    cy.contains("Database").click();
})

And("Backup the production db", () => {
    cy.get("#bu_db").focus().clear().type(BU_PROD_DB);
    cy.get("#bu_file").focus().clear().type(BU_FILE_NAME);
    cy.get("#backup").click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000);
});

And("Restore production db to the test db", () => {
    cy.get("#rest_file").focus().clear().type(BU_FILE_NAME);
    cy.get("#rest_db").focus().clear().type(TEST_DB);   // should be set to test but belt and braces
    cy.get("#restore").click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000);
});

And("I cleanup the audit trail", () => {
    cy.get("#sql").focus().clear().type(CLEAN_AUDIT_TRAIL);
    cy.get("#query").click();
});

And("I save the Audit trail", () => {
    cy.contains('Audit trail').click();
    cy.contains("Save to CSV file").click();
})


Then('It should match the expected audit trail csv file', () => {
    compareFiles("./cypress/downloads/Audit-trail.csv", "./cypress/expected/Audit trail after restore.csv", [0]);
})

