/* eslint-disable @typescript-eslint/no-unused-vars */
import { Given, When, Then } from '@wdio/cucumber-framework';
import MainScreen from '../screenobjects/MainScreen.js';
import LoginScreen from '../screenobjects/LoginScreen.js';

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