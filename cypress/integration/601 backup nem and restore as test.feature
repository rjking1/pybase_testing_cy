Feature: Backup rides db and restore as test

  copy production to test db
  checks basic logins
  and can execute sql and get audit trail

  Scenario: Restore to test db
    Given I login to nem on pybase
    And   go to "Database"
    And   Backup the "nem" db
    And   Restore to the test db

  Scenario: test 2020 weekly weather agg
    Given I login to nem on pybase
    And save "weekly weather test 2020" to csv
    And It should match the expected "Weekly-weather-test-2020" csv file
