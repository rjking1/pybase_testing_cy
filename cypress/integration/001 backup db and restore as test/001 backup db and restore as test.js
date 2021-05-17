import { And, Given, Then } from "cypress-cucumber-preprocessor/steps";
import { compareFiles } from "../common/utils.js"

const BU_PROD_DB = 'hut'   
const BU_FILE_NAME = 'test'   // .sql
const TEST_DB = 'test'
const CLEAN_AUDIT_TRAIL = "delete from py_logs where date_time < NOW() - interval '1 day' ";

And("go to Database", () => {
    cy.contains("Database").click();
    // cy.wait(1000);
})

And("backup the production db", () => {
    cy.get("#bu_db").clear().type(BU_FILE_NAME);
    cy.wait(3000);
});

And("restore to the test db", () => {
    cy.get("#rest_file").clear().type(BU_FILE_NAME);
    cy.get("#rest_db").clear().type(TEST_DB);
    cy.get("#restore").click();
    cy.wait(3000);
})

And("cleanup selected tables", () => {
    cy.get("#sql").clear().type(CLEAN_AUDIT_TRAIL);
    cy.get("#query").click();
});

And("I save the Audit trail", () => {
    cy.contains('Audit trail').click();
    cy.contains("Save to CSV file").click();
})


Then('It should match the expected initial audit trail csv file', () => {
    compareFiles("./cypress/downloads/Audit-trail.csv", "./cypress/expected/Audit trail after restore.csv", [0]);
})

