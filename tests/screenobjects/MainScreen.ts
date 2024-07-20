/* eslint-disable @typescript-eslint/no-unused-vars */

class MainScreen {
    private get productScreenContainer () {return $('~products screen');}
    private get accordion () {return $('~open menu');}
    private get loginMenuItem () {return $('~menu item log in');}
    private get username () {return $('~Username input field');}
    private get password () {return $('~Password input field');}
    private get loginButton () {return $('~Login button');}

    async waitForAppToLoad () {
        return this.productScreenContainer.isDisplayed();
    }

    async ValidLogin (username: string, password: string) {
        await this.clickOnMoreOptions();
        await this.clickOnLoginMenu();
        await this.enterUsername(username);
        await this.enterPassword(password);
        return await this.clickOnLogin();
    }

    async clickOnMoreOptions () {
        await this.accordion.click();
        await (await this.loginMenuItem).waitForDisplayed();
    }

    async clickOnLoginMenu () {
        await this.loginMenuItem.click();
        return (await this.username).waitForDisplayed();
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
}

export default new MainScreen();
