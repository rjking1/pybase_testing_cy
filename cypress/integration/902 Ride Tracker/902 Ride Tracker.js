import { And, Then } from "cypress-cucumber-preprocessor/steps";

And("I login to Ride Tracker", () => {
    cy.visit(Cypress.env("RIDE_TRACKER_URL"));
});

And("check the stats are within reason", () => {
    cy.log(cy.get("pre").innerText());
    // need string compare to file
});

