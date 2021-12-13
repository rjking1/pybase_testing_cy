Feature: Backup db and restore as test

  copy production to test db
  checks basic logins
  and can execute sql and get audit trail

  Scenario: Restore to test db
    Given I login as a developer
    And   go to "Database"
    And   Backup the "hut" db
    And   Restore to the test db
    And   I cleanup the audit trail
    And   I logout

@skip
  Scenario: Check audit trail
    And   I login as a committee member
    And   save "Audit trail" to csv
    Then  It should match the expected "Audit-trail" csv file
    And   I logout
