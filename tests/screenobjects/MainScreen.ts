/* eslint-disable @typescript-eslint/no-unused-vars */

class MainScreen {
    private get productScreenContainer () {return $('~products screen');}
    private get accordion () {return $('~open menu');}
    private get loginMenuItem () {return $('~menu item log in');}

    async waitForAppToLoad () {
        return this.productScreenContainer.isDisplayed();
    }

    async clickOnMoreOptions () {
        await this.accordion.click();
        return (await this.loginMenuItem).waitForDisplayed();
    }

    async clickOnLoginMenu () {
        await this.loginMenuItem.click();
    }

    async homeScreenIsDisplayed () {
        return this.productScreenContainer.isDisplayed();
    }
}

export default new MainScreen();
