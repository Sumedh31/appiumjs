/* eslint-disable @typescript-eslint/no-unused-vars */
import { Given, When, Then } from '@wdio/cucumber-framework';
import MainScreen from '../screenobjects/MainScreen.js';
import LoginScreen from '../screenobjects/LoginScreen.js';

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

