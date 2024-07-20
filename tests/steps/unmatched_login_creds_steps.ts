/* eslint-disable @typescript-eslint/no-unused-vars */
import { Given, When, Then } from '@wdio/cucumber-framework';
import MainScreen from '../screenobjects/MainScreen.js';

Given(/^I am on the unmatched login tab$/, async () => {
    await MainScreen.waitForAppToLoad();
});

When(/^I enter incorrect email and password login credentials "([^"]*)" and "([^"]*)"$/, async (email: string, password: string) => {
    await MainScreen.ValidLogin(email, password);
});

Then(/^I should see a failed alert$/, async () => {
    await MainScreen.homeScreenIsDisplayed();
});

