# Appium Cucumber Tests with WebdriverIO

## Overview

This project demonstrates how to automate mobile application testing using Appium, Cucumber, and WebdriverIO. It focuses on various login scenarios within a mobile application environment, employing the Page Object Model (POM) design pattern through "screen objects" to represent application screens.

## Features

- **Automated Login Scenarios**: Includes tests for scenarios such as missing password, missing username and password, invalid login details, locked account, and successful login.
- **Screen Object Pattern**: Utilizes the POM for mobile applications to enhance test maintenance and readability.
- **Allure Reports**: Supports generating detailed HTML reports for test results using Allure.

## Project Structure

- `/tests/features`: Contains Cucumber feature files for different login scenarios.
- `/tests/screenobjects`: Implements the screen object pattern.
- `/tests/steps`: Step definitions for the Cucumber feature files.
- `/apps`: Stores the mobile application files (e.g., APK for Android).

## Prerequisites

- Android Studio
- Configured Android Emulator
- Node.js and npm

## Environment Setup

### Android SDK

Configure your Android SDK environment variables as follows:

```bash
export ANDROID_HOME="$HOME/Library/Android/sdk"
export ANDROID_PLATFORM_TOOLS="$ANDROID_HOME/platform-tools"
export ANDROID_CMD_TOOLS="$ANDROID_HOME/cmdline-tools/latest/bin"
export ANDROID_EMULATOR="$ANDROID_HOME/emulator"
export PATH="$PATH:$ANDROID_HOME:$ANDROID_PLATFORM_TOOLS:$ANDROID_CMD_TOOLS:$ANDROID_EMULATOR"
export JAVA_HOME=/Applications/'Android Studio.app'/Contents/jre/jdk/Contents/Home
```

**Note**: Your Java path might differ based on your environment setup.

## Running Tests
To execute the tests, ensure your Android Emulator is running and execute the following command from root directory:

`npm run android.app.cucumber`

### TIP
Use the [appium-installer](https://github.com/AppiumTestDistribution/appium-installer) package to setup Appium on your local machine. This will also help you configure Android Emulators. This also enables you to run appium-doctor to ensure you have all the things to be able to run emulators. 

### Generating and Viewing Reports
**Note** -  Install Allure command line first using `npm install -g allure-commandline`
After test execution, generate and view the Allure reports with the following command from the root directory:
`allure generate allure-results --clean && allure open`