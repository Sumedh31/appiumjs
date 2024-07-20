Feature: Empty password Login
    Scenario: Empty password Login
        Given I am on the empty password login tab
        When I enter empty password in login credentials "bob@example.com" and ""
        Then I should see a failed alert
