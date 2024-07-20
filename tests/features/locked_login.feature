Feature: Locked Login
    Scenario: Locked Login
        Given I am on the locked login tab
        When I enter invalid login credentials "alice@example.com" and "10203040"
        Then I should see a Locked alert
