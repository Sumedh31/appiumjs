Feature: No match Login
    Scenario: No match Login
        Given I am on the unmatched login tab
        When I enter incorrect email and password login credentials "1@2.com" and "f-o-o"
        Then I should see a failed alert
