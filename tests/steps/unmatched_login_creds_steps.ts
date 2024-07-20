/* eslint-disable @typescript-eslint/no-unused-vars */
import { Given, When, Then } from '@wdio/cucumber-framework';
import MainScreen from '../screenobjects/MainScreen.js';
import LoginScreen from '../screenobjects/LoginScreen.js';

Given(/^I am on the unmatched login tab$/, async () => {
    await MainScreen.waitForAppToLoad();
});

When(/^I enter incorrect email and password login credentials "([^"]*)" and "([^"]*)"$/, async (email: string, password: string) => {
    await LoginScreen.login(email, password);
});

Then(/^I should see an error message that credentials does not match$/, async () => {
    expect (await LoginScreen.loginErrorMessage()).toEqual('Provided credentials do not match any user in this service.');
});
