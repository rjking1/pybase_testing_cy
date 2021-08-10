Feature: Backup db and restore as test

  copy production to test db
  checks basic logins
  and can execute sql and get audit trail

@skip
  Scenario: Restore to test db
    Given I login as a developer
    And   go to Database
    And   Backup the production db
    And   Restore production db to the test db
    And   I cleanup the audit trail
    And   I logout

  Scenario: Check audit trail
    And   I login as a committee member
    And   I save the Audit trail
    Then  It should match the expected audit trail csv file
    And   I logout
