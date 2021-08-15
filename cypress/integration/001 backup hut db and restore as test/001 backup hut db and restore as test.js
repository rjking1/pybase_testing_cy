import { And, Then } from "cypress-cucumber-preprocessor/steps";
import { TEST_DB } from "../common/bu restore";

const CLEAN_AUDIT_TRAIL =
  "delete from py_logs where date_time < NOW() - interval '1 day' ";

And("I cleanup the audit trail", () => {
  // cy.get("#sql").focus().clear().type(CLEAN_AUDIT_TRAIL);
  // cy.get("#query").click();
  // cy.get("#sql").focus().clear().type(CLEAN_NEW_MEMBERS);
  // cy.get("#query").click();

  // could we default to 'test' as the database name if not supplied?
  cy.execSQL(CLEAN_AUDIT_TRAIL, TEST_DB);
});
