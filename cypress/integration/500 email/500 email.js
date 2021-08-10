import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";


// to become gen filter test
Then('I select a member', (str) => {
    cy.get("#searchBox").focus().clear().type("New")
    cy.get('.checkrow:visible').click({"multiple":true})
})


