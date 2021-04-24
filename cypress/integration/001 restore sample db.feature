Feature: Restore  sample 'known' db

  special tests before copying live to test

  Scenario: Check audit trail entries
    Given I login as a developer
    And   go to Database
    And   restore the known sample db to the test db
    And   I login as an admin
    And   I save the Audit trail
    Then  It should match the expected initial audit trail csv file
    And   I logout
