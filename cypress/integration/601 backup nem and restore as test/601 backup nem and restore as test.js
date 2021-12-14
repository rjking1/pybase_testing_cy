import { And, Then } from "cypress-cucumber-preprocessor/steps";
import { compareFilesUsingRegExp } from "../common/utils";

And("I login to {string} on pybase", (dbName) => {
  cy.visit(Cypress.env("NEMPY_URL"));
  cy.get("#db")
    .focus()
    .clear()
    .type(dbName + ":py");
  cy.get("#user").focus().clear().type(Cypress.env("DEV_NAME"));
  cy.get("#password").focus().clear().type(Cypress.env("DEV_PASSWORD"));
  cy.get("#login").click();
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.wait(1000);
});

Then("I filter on {string}", (str) => {
  cy.get("#searchBox").focus().clear().type(str);
});

Then("I open the event", () => {
  cy.get(".editrow:visible").click(); // ✎
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.wait(500);
});

And("wait {int} ms", (ms) => {
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.wait(ms);
});

And("go to previous period", () => {
  cy.contains("-5 Min").click();
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.wait(1500);
});

And("go to next period", () => {
  cy.contains("+5 Min").click();
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.wait(1500);
});

// for cy.clock(now) test
// const now = new Date(2017, 3, 14).getTime() // April 14, 2017 timestamp

// cy.clock(now)
// cy.visit('/index.html')
// cy.get('#date').contains('2017-04-14')

And("get the current AEMO data", () => {
  let contents = '"","Reg","Rrp","Demand","Generation"';
  cy.request(
    "https://visualisations.aemo.com.au/aemo/apps/api/report/ELEC_NEM_SUMMARY"
  ).then((response) => {
    for (let rgn of response.body.ELEC_NEM_SUMMARY) {
      contents +=
        "\n" +
        `" ","${rgn.REGIONID}","${rgn.PRICE}","${rgn.TOTALDEMAND}","${(
          rgn.SCHEDULEDGENERATION + rgn.SEMISCHEDULEDGENERATION
        ).toFixed(2)}"`;
    }
    cy.writeFile("./cypress/downloads/AEMO prices.csv", contents);
  });
});

Then("we should match the AEMO data", () => {
  compareFilesUsingRegExp(
    "./cypress/downloads/latest prices.csv",
    "./cypress/downloads/AEMO prices.csv"
  );
});

// "SETTLEMENTDATE": "2021-09-24T11:40:00",
// "REGIONID": "NSW1",
// "PRICE": -5.4939,
// "TOTALDEMAND": 6046.68,
// "NETINTERCHANGE": -529.53,
// "SCHEDULEDGENERATION": 3256.18728,
// "SEMISCHEDULEDGENERATION": 2239.15272,
