import { And, Then } from "cypress-cucumber-preprocessor/steps";

const CLEAN_AUDIT_TRAIL =
  "delete from py_logs where date_time < NOW() - interval '1 day' ";
const CLEAN_NEW_MEMBERS = "delete from members where NAME = 'Aaaa' ";

And("I cleanup the audit trail", () => {
  cy.get("#sql").focus().clear().type(CLEAN_AUDIT_TRAIL);
  cy.get("#query").click();
  cy.get("#sql").focus().clear().type(CLEAN_NEW_MEMBERS);
  cy.get("#query").click();
});
