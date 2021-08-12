import { And, Then } from "cypress-cucumber-preprocessor/steps";
import { compareFiles, exportPartialDOMToFile } from "../common/utils.js";

And("I login to Ride Tracker", () => {
  cy.visit(Cypress.env("RIDE_TRACKER_URL"));
});

And("check the stats are within reason", () => {
  const fileName = "ride_tracker.csv";
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.wait(2000);
  exportPartialDOMToFile("pre", fileName);
  compareFiles(
    `./cypress/downloads/${fileName}`,
    `./cypress/expected/${fileName}`,
    10000 // needs thought!
  );
});
