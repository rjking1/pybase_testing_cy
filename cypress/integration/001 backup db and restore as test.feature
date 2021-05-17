Feature: Backup db and restore as test

  special tests after copying production to test

  Scenario: Check audit trail entries
    Given I login as a developer
    And   go to Database
    And backup the production db
    And   restore to the test db
    And cleanup selected tables
    And   I login as a committee member
    And   I save the Audit trail
    Then  It should match the expected audit trail csv file
    And   I logout
