Feature: Backup live, restore to test

  this is not really a feature!

  Scenario: Check audit trail entries
    Given I login as a developer to the live database
    And backup the live db
    And restore to the test db
    And I login as an admin
    And I save the Audit trail
    Then It should match the expected initial audit trail csv file
