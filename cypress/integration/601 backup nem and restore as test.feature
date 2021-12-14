Feature: Backup nem db on pybase and restore as test

  the nem py database is now so large (> 15GB as at Dec 2021) that it cannot 
  be nbacked up and restored as a test db in a timely db.
  So build "from scratch" and load daily data as necessary for tests

  BE VERY CAREFUL-- THIS LOGS IN TO THE *** nem *** DATBASE TO START TO GET THE LATEST SCHEMA
  AND CRITICAL SYSTEM TABLES AND RESTORES INTO THE TEST DATABASE. IF THIS GOES WRONG YOU COULD OVERWRITE THE NEM DB !!

  Scenario: Build test db from current prod db
    # ***** login to "nem" as can be locked out of "test" -- CAREFUL!!!
    Given I login to "nem" on pybase
    And   go to "Database"
    # backup modifies definer user to pybaseco_nem so views will be restored
    And   Backup the "nem" db schema copy
    And   Backup the "nem" db schema
    And   Restore to the test db
    And   Backup the "nem" db tables "py_named_values py_roles py_users py_views py_actions STATIONS MARKET events"
    And   Restore to the test db

  Scenario: load a day of high wind data
    Given I login to "test" on pybase
    And   go to "Database"
    And   Load historical data for "2021 09 11 05 30 11 06 30 load pybaseco_test"
    # create event -- then won't need to load events above

  Scenario: test a saved event and save all tabular data
    Given I login to "test" on pybase
    And go to ". Events"
    And I filter on "Test case 1 - High Winds"
    And I open the event
    And save table "#t1" to file "high_wind_prices.csv"
    And It should match the expected "high_wind_prices" csv file
    And save table "#t2" to file "high_wind_interconnectors.csv"
    And It should match the expected "high_wind_interconnectors" csv file

  Scenario: test prev and next return you to same data
    Given I login to "test" on pybase
    And go to ". Events"
    And I filter on "Test case 1 - High Winds"
    And I open the event
    And go to previous period
    And go to next period
    And save table "#t1" to file "high_wind_prices.csv"
    And It should match the expected "high_wind_prices" csv file
    And save table "#t2" to file "high_wind_interconnectors.csv"
    And It should match the expected "high_wind_interconnectors" csv file

  Scenario: test a saved event and save chart 1
    Given I login to "test" on pybase
    And go to ". Events"
    And I filter on "Test case 1 - High Winds"
    And I open the event
    And wait 2000 ms
    And save chart "#c1"
    And the saved chart should match the expected "high_wind_ft_chart" csv file

  Scenario: test a saved event and save chart 2
    Given I login to "test" on pybase
    And go to ". Events"
    And I filter on "Test case 1 - High Winds"
    And I open the event
    And go to "Generation breakdown"
    And save chart "#c2"
    And the saved chart should match the expected "high_wind_regions_chart" csv file

  Scenario: test a saved event and save chart 3
    #Given I login to "test" on pybase
    #And go to ". Events"
    #And I filter on "Test case 1 - High Winds"
    #And I open the event
    #And go to "Generation breakdown"
    And save chart "#c3"
    And the saved chart should match the expected "high_wind_renew_fossil_chart" csv file

  # -12 to 12 hours

  Scenario: test a saved event and save qld first chart
    Given I login to "test" on pybase
    And go to ". Events"
    And I filter on "Test case 1 - High Winds"
    And I open the event
    And go to "-12 to +12 hours"
    And save chart "#c2-0"
    And the saved chart should match the expected "qld_price_demand" csv file
  Scenario: test a saved event and save nsw chart
    And save chart "#c2-1"
    And the saved chart should match the expected "nsw_price_demand" csv file
  Scenario: test a saved event and save qld gen
    And save chart "#c3-0"
    And the saved chart should match the expected "qld_gen" csv file

  # bidstacks

  # load 2016-09-28 where rooftop is of type DAILY !

  Scenario: load system black in SA -- rooftop pv has DAILY as type
    Given I login to "test" on pybase
    And   go to "Database"
    And   Load historical data for "2016 09 28 15 00 28 17 00 load pybaseco_test"
    # create event -- then won't need to load events above

  # -12 to 12 hours

  Scenario: test a saved event and save qld chart
    Given I login to "test" on pybase
    And go to ". Events"
    And I filter on "Black"
    And I open the event
    And go to "-12 to +12 hours"
    And save chart "#c2-0"
    And the saved chart should match the expected "qld_price_demand_16" csv file
  Scenario: and save sa chart
    And save chart "#c2-3"
    And the saved chart should match the expected "sa1_price_demand_16" csv file
  Scenario: save qld gen
    And save chart "#c3-0"
    And the saved chart should match the expected "qld_gen_16" csv file
  Scenario: save sa gen
    And save chart "#c3-3"
    And the saved chart should match the expected "sa1_gen_16" csv file

  # bidstacks


@skip
  Scenario: test 2020 weekly weather agg
    Given I login to "test" on pybase
    And save "test case 3 weekly weather 2020" to csv
    And It should match the expected "Weekly-weather-test-2020" csv file

@skip
Scenario: compare latest core data to AEMO latest if poss
    Given I login to "nem" on pybase
    And go to "test case 2 market time"
    And save table ".sortable" to file "market time.csv"
    # need to compare somewhere
    Then go to "Back"
    And go to "test case 4 current region data"
    And save table ".sortable" to file "latest prices.csv"
    And get the current AEMO data
    Then we should match the AEMO data
    
#Scenario: set date back and check "now" is correct using cy.clock() if poss
