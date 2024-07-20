/* eslint-disable @typescript-eslint/no-unused-vars */

import MainScreen from "./MainScreen.js";

class LoginScreen {
    private get productScreenContainer () {return $('~products screen');}
    private get username () {return $('~Username input field');}
    private get password () {return $('~Password input field');}
    private get loginButton () {return $('~Login button');}
    private get genericErrorMessage () {return $('~generic-error-message');}
    private get userNameError () {return $('~Username-error-message');}
    private get passwordError () {return $('~Password-error-message');}


    async login (username: string, password: string) {
        await MainScreen.clickOnMoreOptions();
        await MainScreen.clickOnLoginMenu();
        await this.loginButton.waitForDisplayed();
        await this.enterUsername(username);
        await this.enterPassword(password);
        return await this.clickOnLogin();
    }

    async enterUsername (username: string) {
        await this.username.setValue(username);
    }

    async enterPassword (password: string) {
        await this.password.setValue(password);
    }

    async clickOnLogin () {
        await this.loginButton.click();
    }

    async homeScreenIsDisplayed () {
        return this.productScreenContainer.isDisplayed();
    }

    async loginErrorMessage () {
        return (await this.genericErrorMessage).$('android=new UiSelector().className("android.widget.TextView")').getText();
    }

    async userNameErrorMessage () {
        return (await this.userNameError).$('android=new UiSelector().className("android.widget.TextView")').getText();
    }

    async passwordErrorMessage () {
        return (await this.passwordError).$('android=new UiSelector().className("android.widget.TextView")').getText();
    }
}

export default new LoginScreen();
