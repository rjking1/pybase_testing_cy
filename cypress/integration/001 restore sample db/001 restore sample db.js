import { And, Given, Then } from "cypress-cucumber-preprocessor/steps";
import { compareFiles } from "../common/utils.js"

const BU_FILE_NAME = 'test2'   // .sql
const DATABASE_NAME = 'test'

And("go to Database", () => {
    cy.wait(1000);
})

And("restore the known sample db to the test db", async () => {
    //return await fetch("https://www.artspace7.com.au/dsql/burest.php?func=r&filename="+ BU_FILE_NAME +"&db=" + DATABASE_NAME);
    // need to drive pybase to do this
    cy.contains("Database").click();
    cy.wait(100);
    cy.get("#rest_file").clear().type(BU_FILE_NAME);
    cy.get("#rest_db").clear().type(DATABASE_NAME);
    cy.get("#restore").click();
    cy.wait(3000);
})


And('I save the Audit trail', () => {
    cy.contains('Audit trail').click();
    cy.contains("Save to CSV file").click();
})


Then('It should match the expected initial audit trail csv file', () => {
    compareFiles("./cypress/downloads/Audit-trail.csv", "./cypress/expected/Audit trail after restore.csv", [0]);
})


