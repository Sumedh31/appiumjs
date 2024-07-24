/* eslint-disable @typescript-eslint/no-unused-vars */
import { Given, When, Then } from '@wdio/cucumber-framework';
import MainScreen from '../screenobjects/MainScreen.js';
import LoginScreen from '../screenobjects/LoginScreen.js';

// Given step: Sets the initial condition of being on the login tab, ready to perform a login action.
Given(/^I am on the login tab$/, async () => {
    await MainScreen.waitForAppToLoad();
});

// When step: Describes the action of entering valid login credentials into the login form. Read username and password from the feature file.
When(/^I enter valid login credentials "([^"]*)" and "([^"]*)"$/, async (email: string, password: string) => {
    await LoginScreen.login(email, password);
});

// Then step: Specifies the expected outcome of successfully logging in, which is being navigated to the home screen.
Then(/^I should see a Success$/, async () => {
    await MainScreen.homeScreenIsDisplayed();
});

// Given step: Sets the initial condition of being on the login tab designed for testing locked accounts.
Given(/^I am on the locked login tab$/, async () => {
    await MainScreen.waitForAppToLoad();
});

/* When step: Describes the action of attempting to log in with credentials known to be invalid or associated with a locked account. 
Read username and password from the feature file. */
When(/^I enter invalid login credentials "([^"]*)" and "([^"]*)"$/, async (email: string, password: string) => {
    await LoginScreen.login(email, password);
});

// Then step: Specifies the expected outcome of receiving a specific alert message indicating the account is locked.
Then(/^I should see a Locked alert$/, async () => {
    expect (await LoginScreen.loginErrorMessage()).toEqual('Sorry, this user has been locked out.');
});

// Defines a step for the Given part of a test scenario, specifying the initial condition.
Given(/^I am on the empty login tab$/, async () => {
    await MainScreen.waitForAppToLoad();
});

// Defines a step for the When part of a test scenario, specifying the action taken. Username and password are read from feature.
When(/^I enter empty login credentials "([^"]*)" and "([^"]*)"$/, async (email: string, password: string) => {
    await LoginScreen.login(email, password);
});

// Defines a step for the Then part of a test scenario, specifying the expected outcome.
Then(/^I should see the error message that username is required$/, async () => {
    expect (await LoginScreen.userNameErrorMessage()).toEqual('Username is required');
});

// Given step: Describes the initial condition of being on the login tab specifically for testing empty password scenarios.
Given(/^I am on the empty password login tab$/, async () => {
    await MainScreen.waitForAppToLoad();
});

// When step: Describes the action of entering login credentials with an empty password field. Read username and password from the feature file.
When(/^I enter empty password in login credentials "([^"]*)" and "([^"]*)"$/, async (email: string, password: string) => {
    await LoginScreen.login(email, password);
});

// Then step: Specifies the expected outcome of seeing an error message indicating that the password is required.
Then(/^I should see the error message that password is required$/, async () => {
    expect (await LoginScreen.passwordErrorMessage()).toEqual('Password is required');
});

// Given step: Establishes the initial context for the test, ensuring the user starts on the specific login for unmatched credentials.
Given(/^I am on the unmatched login tab$/, async () => {
    await MainScreen.waitForAppToLoad();
});

/* When step: Describes the action of entering login credentials that are known to be incorrect or not matching any user account. 
 Read username and password from the feature file.*/
When(/^I enter incorrect email and password login credentials "([^"]*)" and "([^"]*)"$/, async (email: string, password: string) => {
    await LoginScreen.login(email, password);
});

// Then step: Specifies the expected outcome of the action, which in this case is to see an error message about unmatched credentials.
Then(/^I should see an error message that credentials does not match$/, async () => {
    expect (await LoginScreen.loginErrorMessage()).toEqual('Provided credentials do not match any user in this service.');
});

