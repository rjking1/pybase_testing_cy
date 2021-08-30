Feature: Backup rides db and restore as test

  copy production to test db
  checks basic logins
  and can execute sql and get audit trail

  Scenario: Restore to test db
    Given I login to nem on pybase
    And   go to "Database"
    And   Backup the "nem" db
    And   Restore to the test db

  Scenario: test
    Given I login to nem on pybase
    Then I can see "09 Current gen"
    And I cannot see "Members"
    And go to "09 Current gen"
