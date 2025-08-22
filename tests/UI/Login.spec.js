import { test } from '../../utils/fixtures';
import { expect } from '@playwright/test';
import users from "../../data/users.js";


test.describe("Login tests", () => {

    test("page should load", async ({ homePage }) => {
        await homePage.navigateTo();
        const pageLoadedSuccessfully = await homePage.verifyPageLoaded();
        expect(pageLoadedSuccessfully).toBeTruthy();
    })

    users.forEach(({ username, password }) => {
        test(`Login with username: ${username} and password: ${password}`, async ({ homePage }) => {
            await homePage.navigateTo();
            await homePage.login(username, password);
        });
    })
});