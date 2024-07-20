/* eslint-disable @typescript-eslint/no-unused-vars */
import { Given, When, Then } from '@wdio/cucumber-framework';
import MainScreen from '../screenobjects/MainScreen.js';
import LoginScreen from '../screenobjects/LoginScreen.js';

Given(/^I am on the locked login tab$/, async () => {
    await MainScreen.waitForAppToLoad();
});

When(/^I enter invalid login credentials "([^"]*)" and "([^"]*)"$/, async (email: string, password: string) => {
    await LoginScreen.login(email, password);
});

Then(/^I should see a Locked alert$/, async () => {
    expect (await LoginScreen.loginErrorMessage()).toEqual('Sorry, this user has been locked out.');
});

