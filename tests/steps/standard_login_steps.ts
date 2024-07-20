/* eslint-disable @typescript-eslint/no-unused-vars */
import { Given, When, Then } from '@wdio/cucumber-framework';
import MainScreen from '../screenobjects/MainScreen.js';
import LoginScreen from '../screenobjects/LoginScreen.js';

Given(/^I am on the login tab$/, async () => {
    await MainScreen.waitForAppToLoad();
});

When(/^I enter valid login credentials "([^"]*)" and "([^"]*)"$/, async (email: string, password: string) => {
    await LoginScreen.login(email, password);
});

Then(/^I should see a Success$/, async () => {
    await MainScreen.homeScreenIsDisplayed();
});

