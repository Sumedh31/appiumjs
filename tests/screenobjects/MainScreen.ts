/* eslint-disable @typescript-eslint/no-unused-vars */

class MainScreen {
    // Selector for the product screen container element
    private get productScreenContainer () {return $('~products screen');}
    // Selector for the accordion menu element
    private get accordion () {return $('~open menu');}
    // Selector for the login menu item element
    private get loginMenuItem () {return $('~menu item log in');}

    // Waits for the app to load by checking if the product screen container is displayed
    async waitForAppToLoad () {
        return this.productScreenContainer.isDisplayed();
    }

    // Clicks on the accordion to open more options and waits for the login menu item to be displayed
    async clickOnMoreOptions () {
        await this.accordion.click();
        return (await this.loginMenuItem).waitForDisplayed();
    }

    // Clicks on the login menu item
    async clickOnLoginMenu () {
        await this.loginMenuItem.click();
    }

    // Checks if the home screen is displayed by verifying the product screen container is visible
    async homeScreenIsDisplayed () {
        return this.productScreenContainer.isDisplayed();
    }
}

// Exports an instance of the MainScreen class for use in other files
export default new MainScreen();
