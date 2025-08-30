import { test } from '../../utils/fixtures';
import { expect } from '@playwright/test';
import users from "../../data/existingUsers.js";

test.describe("Account operations tests", () => {

    test("page should load", async ({ welcomePage }) => {
        await welcomePage.navigateTo();
        const pageLoadedSuccessfully = await welcomePage.verifyPageLoaded();
        expect(pageLoadedSuccessfully).toBeTruthy();
    })

    users.forEach(({ username, password, firstName, lastName, totalAccountBalance }) => {
        test(`Should display the expected total balance for: ${firstName} ${lastName}`, async ({ welcomePage, accountServicesPage }) => {
            await welcomePage.navigateTo();
            await welcomePage.login(username, password);

            const actualTotalAccountBalance = await accountServicesPage.getTotalBalance();
            expect(actualTotalAccountBalance).toBe(totalAccountBalance);
        });

        test(`Should logout successfully for: ${firstName} ${lastName}`, async ({ welcomePage, accountServicesPage }) => {
            await welcomePage.navigateTo();
            await welcomePage.login(username, password);
            await accountServicesPage.logout();

            const pageLoadedSuccessfully = await welcomePage.verifyPageLoaded();
            expect(pageLoadedSuccessfully).toBeTruthy();
        });
    });
});