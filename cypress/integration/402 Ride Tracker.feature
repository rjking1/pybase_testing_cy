Feature: Ride Tracker

  same rides2 database with quick and basic frontend for phone
  if going to Add a ride then backup rides2 and restore at end

  move this to separate test as it does not belong to pybase/plus testing

@skip
  Scenario: Check Ride tracker
    And   I login to Ride Tracker
    And   check the stats are within reason
    And   add a ride
    And   check the ride is the most recent
