import { And, Then } from "cypress-cucumber-preprocessor/steps";
import {
  compareFilesUsingRegExp,
  exportPartialDOMToFile,
  exportTableToCSV,
} from "../common/utils.js";

And("I login to nem on pybase", () => {
  cy.visit(Cypress.env("NEMPY_URL"));
  cy.get("#db").focus().clear().type("nem:py");  //Cypress.env("DB_NAME"));
  cy.get("#user").focus().clear().type(Cypress.env("DEV_NAME"));
  cy.get("#password").focus().clear().type(Cypress.env("DEV_PASSWORD"));
  cy.get("#login").click();
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.wait(1000);
});
