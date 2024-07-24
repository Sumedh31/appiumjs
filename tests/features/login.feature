Feature: Login

    Scenario: Successful Login
        Given I am on the login tab
        When I enter valid login credentials "bob@example.com" and "10203040"
        Then I should see a Success

    Scenario: Locked Login
        Given I am on the locked login tab
        When I enter invalid login credentials "alice@example.com" and "10203040"
        Then I should see a Locked alert

    Scenario: Empty Login
        Given I am on the empty login tab
        When I enter empty login credentials "" and ""
        Then I should see the error message that username is required

    Scenario: Empty password Login
        Given I am on the empty password login tab
        When I enter empty password in login credentials "bob@example.com" and ""
        Then I should see the error message that password is required

    Scenario: No match Login
        Given I am on the unmatched login tab
        When I enter incorrect email and password login credentials "1@2.com" and "f-o-o"
        Then I should see an error message that credentials does not match
