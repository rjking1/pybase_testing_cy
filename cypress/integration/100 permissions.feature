Feature: Permission checks

  Check available menu options according to logged in user 

  @permissions
  Scenario: Admin (Heather)
    Given I login as an admin
     Then I can go to New members
      And I can edit a member

  @permissions
  Scenario: Committee member (rk)
    Given I login as a committee member
     Then I can go to New members
      But I cannot edit a member
