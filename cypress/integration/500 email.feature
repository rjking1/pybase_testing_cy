Feature: Email tests

  Test using Admin user 

  Scenario: Admin (Heather)
    Given I login as an admin
     Then I go to "New Members"
      And I select a member
      And I go to "Email new members"

    And   I logout
