Feature: Backup nem db on pybase and restore as test

  copy production to test db

  Scenario: Restore to test db
    Given I login to nem on pybase
    And   go to "Database"
    And   Backup the "nem" db
    And   Restore to the test db

  Scenario: test 2020 weekly weather agg
    Given I login to nem on pybase
    And save "weekly weather test 2020" to csv
    And It should match the expected "Weekly-weather-test-2020" csv file

@focus
  Scenario: test a saved event
    Given I login to nem on pybase
    And go to "Events"
    And I filter on "high winds"
    And I open the event
    And save table "#t1" to file "high_wind_prices_etc.csv"
    And It should match the expected "high_wind_prices_etc" csv file

@focus
  Scenario: test prev and next return you to same 
    Given I login to nem on pybase
    And go to "Events"
    And I filter on "high winds"
    And I open the event
    And go to previous period
    And go to next period
    And save table "#t1" to file "high_wind_prices_etc.csv"
    And It should match the expected "high_wind_prices_etc" csv file
