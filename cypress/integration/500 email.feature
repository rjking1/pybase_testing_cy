Feature: Email tests

  Test using Admin user 

  Scenario: Admin (Heather)
    Given I login as an admin
     Then I go to "New Members"
      And I add a member
      And I select a member
      And I go to "Email new members"
      And I can see "test@test.com"
      And I logout
