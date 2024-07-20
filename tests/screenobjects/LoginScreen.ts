/* eslint-disable @typescript-eslint/no-unused-vars */

import MainScreen from "./MainScreen.js";

class LoginScreen {
    // Selector for the product screen container, indicating the user is logged in
    private get productScreenContainer () {return $('~products screen');}
    // Selector for the username input field
    private get username () {return $('~Username input field');}
    // Selector for the password input field
    private get password () {return $('~Password input field');}
    // Selector for the login button
    private get loginButton () {return $('~Login button');}
    // Selector for the generic error message element
    private get genericErrorMessage () {return $('~generic-error-message');}
    // Selector for the username error message element
    private get userNameError () {return $('~Username-error-message');}
    // Selector for the password error message element
    private get passwordError () {return $('~Password-error-message');}

    // Logs in the user with provided username and password
    async login (username: string, password: string) {
        await MainScreen.clickOnMoreOptions(); // Opens the options menu
        await MainScreen.clickOnLoginMenu(); // Navigates to the login menu
        await this.loginButton.waitForDisplayed(); // Waits for the login button to be displayed
        await this.enterUsername(username); // Enters the username
        await this.enterPassword(password); // Enters the password
        return await this.clickOnLogin(); // Clicks the login button
    }

    // Enters the username into the username input field
    async enterUsername (username: string) {
        await this.username.setValue(username);
    }

    // Enters the password into the password input field
    async enterPassword (password: string) {
        await this.password.setValue(password);
    }

    // Clicks on the login button
    async clickOnLogin () {
        await this.loginButton.click();
    }

    // Checks if the home screen is displayed by verifying the product screen container is visible
    async homeScreenIsDisplayed () {
        return this.productScreenContainer.isDisplayed();
    }

    // Retrieves the text of the generic error message
    async loginErrorMessage () {
        return (await this.genericErrorMessage).$('android=new UiSelector().className("android.widget.TextView")').getText();
    }

    // Retrieves the text of the username error message
    async userNameErrorMessage () {
        return (await this.userNameError).$('android=new UiSelector().className("android.widget.TextView")').getText();
    }

    // Retrieves the text of the password error message
    async passwordErrorMessage () {
        return (await this.passwordError).$('android=new UiSelector().className("android.widget.TextView")').getText();
    }
}
// Exports an instance of the LoginScreen class for use in other files
export default new LoginScreen();
