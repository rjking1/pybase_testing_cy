Feature: Email tests

  Test using Admin user 

  Scenario: Admin (Heather)
    Given I login as an admin
      And clean up previously added members
     Then go to "New Members"
      And I add a subscriber
      And I add a member
     Then go to "Home"
     Then go to "All Members"
      And I filter on "Test"
      And I sort the list on "No"
      And save table ".sortable" to file "all members.csv"
     Then Check member numbers
     Then go to "Home"
     Then go to "All Subscribers"
      And I filter on "Test"
      And I sort the list on "No"
      And save table ".sortable" to file "all subscribers.csv"
     Then Check subscriber numbers
      And I logout
