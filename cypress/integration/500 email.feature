Feature: Email tests

  Test using Admin user 

  Scenario: Admin (Heather)
    Given I login as an admin
      And clean up previously added members
     Then go to "New Members"
      And I add a member
      And I select a member
      And go to "Email new members"
      And I can see "test@test.com"
      And I logout
