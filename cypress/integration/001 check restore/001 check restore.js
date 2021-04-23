import { And, Given, Then } from "cypress-cucumber-preprocessor/steps";

const DATABASE_NAME = 'test'

Given("I restore the test database", async () => {
    return await fetch("https://www.artspace7.com.au/dsql/burest.php?db=" +
        DATABASE_NAME + "&func=r");
})


And('I save the Audit trail', () => {  
    cy.contains('Audit trail').click();
    cy.contains("Save to CSV file").click();
})


Then('It should match the saved initial audit trail csv file', () => {
    cy.wait(500);
})


async function doFetchGet(db, sql) {
    let resp = await fetch(
    'https://www.artspace7.com.au/dsql/json_helper_get.php?db=' +
        db +
        '&sql=' +
        sql,
    )
    return await resp.json()
}
