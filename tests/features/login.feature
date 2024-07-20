Feature: Login

    Scenario: Successful Login
        Given I am on the login tab
        When I enter valid login credentials "bob@example.com" and "10203040"
        Then I should see a Success
