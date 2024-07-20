/* eslint-disable @typescript-eslint/no-unused-vars */
import { Given, When, Then } from '@wdio/cucumber-framework';
import MainScreen from '../screenobjects/MainScreen.js';
import LoginScreen from '../screenobjects/LoginScreen.js';

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

