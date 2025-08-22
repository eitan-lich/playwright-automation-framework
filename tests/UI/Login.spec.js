import { test } from '../../utils/fixtures';
import { expect } from '@playwright/test';
import users from "../../data/users.js";

test.describe("Login tests", () => {

    test("page should load", async ({ welcomePage }) => {
        await welcomePage.navigateTo();
        const pageLoadedSuccessfully = await welcomePage.verifyPageLoaded();
        expect(pageLoadedSuccessfully).toBeTruthy();
    })

    users.forEach(({ username, password, isValidUser, firstName, lastName }) => {
        test(`Login with username: ${username} and password: ${password}`, async ({ welcomePage, accountServicesPage }) => {
            await welcomePage.navigateTo();
            await welcomePage.login(username, password);

            if (isValidUser) {
                const loginSuccessful = await accountServicesPage.verifyLoggedInUser(firstName, lastName);
                expect(loginSuccessful).toBeTruthy();
            } else {
                const loginErrorDisplayed = await welcomePage.verifyLoginError();
                expect(loginErrorDisplayed).toBeTruthy();
            }
        });
    })
});