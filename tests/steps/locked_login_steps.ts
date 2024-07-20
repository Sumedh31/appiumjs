/* eslint-disable @typescript-eslint/no-unused-vars */
import { Given, When, Then } from '@wdio/cucumber-framework';
import MainScreen from '../screenobjects/MainScreen.js';

Given(/^I am on the locked login tab$/, async () => {
    await MainScreen.waitForAppToLoad();
});

When(/^I enter invalid login credentials "([^"]*)" and "([^"]*)"$/, async (email: string, password: string) => {
    await MainScreen.ValidLogin(email, password);
});

Then(/^I should see a Locked alert$/, async () => {
    await MainScreen.homeScreenIsDisplayed();
});

