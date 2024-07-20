/* eslint-disable @typescript-eslint/no-unused-vars */
import { Given, When, Then } from '@wdio/cucumber-framework';
import MainScreen from '../screenobjects/MainScreen.js';
import LoginScreen from '../screenobjects/LoginScreen.js';


// Given step: Establishes the initial context for the test, ensuring the user starts on the specific login for unmatched credentials.
Given(/^I am on the unmatched login tab$/, async () => {
    await MainScreen.waitForAppToLoad();
});

/* When step: Describes the action of entering login credentials that are known to be incorrect or not matching any user account. 
 Read username and password from the feature file.*/
When(/^I enter incorrect email and password login credentials "([^"]*)" and "([^"]*)"$/, async (email: string, password: string) => {
    await LoginScreen.login(email, password);
});

// Then step: Specifies the expected outcome of the action, which in this case is to see an error message about unmatched credentials.
Then(/^I should see an error message that credentials does not match$/, async () => {
    expect (await LoginScreen.loginErrorMessage()).toEqual('Provided credentials do not match any user in this service.');
});
