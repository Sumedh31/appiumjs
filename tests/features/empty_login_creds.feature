Feature: Empty Login
    Scenario: Empty Login
        Given I am on the empty login tab
        When I enter empty login credentials "" and ""
        Then I should see the error message that username is required
