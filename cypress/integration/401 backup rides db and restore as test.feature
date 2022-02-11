Feature: Backup rides db and restore as test

  copy production to test db
  checks basic logins

  note: the ride tracker app is a separate test project as it does not use the pybase front end (only the same database schema)

  Scenario: Restore to test db
    Given I login as a developer
    And   go to "Database"
    And   Backup the "rides2" db
    And   Restore to the test db
    And   I logout

  Scenario: Check Bikes table
    And   I login as a developer
    And   save "Bikes" to csv
    Then  It should exactly match the expected "Bikes" csv file
    And   I logout
