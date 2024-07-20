/* eslint-disable @typescript-eslint/no-unused-vars */
import { Given, When, Then } from '@wdio/cucumber-framework';
import MainScreen from '../screenobjects/MainScreen.js';
import LoginScreen from '../screenobjects/LoginScreen.js';

// Given step: Sets the initial condition of being on the login tab, ready to perform a login action.
Given(/^I am on the login tab$/, async () => {
    await MainScreen.waitForAppToLoad();
});

// When step: Describes the action of entering valid login credentials into the login form. Read username and password from the feature file.
When(/^I enter valid login credentials "([^"]*)" and "([^"]*)"$/, async (email: string, password: string) => {
    await LoginScreen.login(email, password);
});

// Then step: Specifies the expected outcome of successfully logging in, which is being navigated to the home screen.
Then(/^I should see a Success$/, async () => {
    await MainScreen.homeScreenIsDisplayed();
});

