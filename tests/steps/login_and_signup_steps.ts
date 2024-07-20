/* eslint-disable @typescript-eslint/no-unused-vars */
import { Given, When, Then } from '@wdio/cucumber-framework';
import MainScreen from '../screenobjects/MainScreen.js';

Given(/^I am on the (login|signup) tab$/, async (tab) => {
    await MainScreen.waitForAppToLoad();
});

When(/^I enter valid (login|signup) credentials$/, async (formType) => {
    await MainScreen.ValidLogin('bob@example.com', '10203040');
});

Then(/^I should see a (Success|Signed Up) alert$/, async (alertType) => {
    await MainScreen.homeScreenIsDisplayed();
});
