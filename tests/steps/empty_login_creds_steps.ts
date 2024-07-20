/* eslint-disable @typescript-eslint/no-unused-vars */
import { Given, When, Then } from '@wdio/cucumber-framework';
import MainScreen from '../screenobjects/MainScreen.js';
import LoginScreen from '../screenobjects/LoginScreen.js';

Given(/^I am on the empty login tab$/, async () => {
    await MainScreen.waitForAppToLoad();
});

When(/^I enter empty login credentials "([^"]*)" and "([^"]*)"$/, async (email: string, password: string) => {
    await LoginScreen.login(email, password);
});

Then(/^I should see the error message that username is required$/, async () => {
    expect (await LoginScreen.userNameErrorMessage()).toEqual('Username is required');
});