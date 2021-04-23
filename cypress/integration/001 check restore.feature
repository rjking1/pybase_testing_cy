Feature: Check test database restored correctly

  this is not really a feature! 

  Scenario: Check audit trail entries
    Given I restore the test database
     When I login as an admin
      And I save the Audit trail
     Then It should match the expected initial audit trail csv file
