Feature: Email tests

  Test using Admin user 

  This als tests sorting and filtering --too much in one go if there is a problem

  Scenario: Admin (Heather)
    Given I login as an admin
      And clean up previously added members
     Then go to "New Members"
      And I add a member
      And I sort the list on "Mobile"
      And I filter on "Aaaa"
      And I select the member
      And I filter on "King"
      And I sort the list on "Postcode"
      And go to "Email new members"
      And I can see "test@test.com"
      And I logout
