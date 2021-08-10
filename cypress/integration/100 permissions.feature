Feature: Permission checks

  Check available menu options according to logged in user 

  Scenario: Admin (Heather)
    Given I login as an admin
     Then I cannot see "Database"
     But  I can go to New members
      And I can edit a member
      And I can see "Welcome pack sent"
      And I can see "Email new members"
    And   I logout

  Scenario: Treasurer
    Given I login as the treasurer
     Then I cannot see "Database"
      But I can go to New members
      But I cannot edit a member
      But I can see "Mark as paid"
      And I cannot see "Welcome pack sent"
      And I cannot see "Email new members"
    And   I logout

  Scenario: Committee member
    Given I login as a committee member
     Then I cannot see "Database"
      But I can go to New members
      But I cannot edit a member
      But I cannot see "Mark as paid"
      And I cannot see "Welcome pack sent"
      And I cannot see "Email new members"
    And   I logout
