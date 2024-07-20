Feature: Login

    Scenario: Successful Login
        Given I am on the login tab
        When I enter valid login credentials
        Then I should see a Success alert
