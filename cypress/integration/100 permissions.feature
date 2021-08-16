Feature: Permission checks

  Check available menu options according to logged in user 

  Scenario: Admin (Heather)
    Given I login as an admin
     Then I cannot see "Database"
    But   go to "All Members"
      And I can add a member
      And I can edit a member
      And I can see "Save to CSV file"
      But I cannot see "Mark as paid"
      And I cannot see "Welcome pack sent"
      And I cannot see "Email new members"
    But   go to "Back"
    And   go to "New Members"
      And I can add a member
      And I can edit a member
      And I can see "Save to CSV file"
      But I can see "Mark as paid"
      And I can see "Welcome pack sent"
      And I can see "Email new members"
    And   I logout

  Scenario: Treasurer
    Given I login as the treasurer
     Then I cannot see "Database"
    But   go to "All Members"
      And I cannot add a member
      And I cannot edit a member
      And I can see "Save to CSV file"
      But I cannot see "Mark as paid"
      And I cannot see "Welcome pack sent"
      And I cannot see "Email new members"
    But   go to "Back"
    And   go to "New Members"
      But I cannot add a member
      But I cannot edit a member
      And I can see "Save to CSV file"
      But I can see "Mark as paid"
      And I cannot see "Welcome pack sent"
      And I cannot see "Email new members"
    And   I logout

  Scenario: Committee member
    Given I login as a committee member
     Then I cannot see "Database"
    But   go to "All Members"
      And I cannot add a member
      And I cannot edit a member
      And I can see "Save to CSV file"
      But I cannot see "Mark as paid"
      And I cannot see "Welcome pack sent"
      And I cannot see "Email new members"
    But   go to "Back"
    And   go to "New Members"
      But I cannot add a member
      But I cannot edit a member
      And I can see "Save to CSV file"
      But I cannot see "Mark as paid"
      And I cannot see "Welcome pack sent"
      And I cannot see "Email new members"
    And   I logout
