import { test } from '../../utils/fixtures';
import { expect } from '@playwright/test';
import users from "../../data/newUsers.js";

test.describe("Register tests", () => {

    test("page should load", async ({ registerPage }) => {
        const pageLoadedSuccessfully = await registerPage.verifyPageLoaded();
        expect(pageLoadedSuccessfully).toBeTruthy();
    })

    users.forEach(({ firstName, lastName, address, city, state, zipCode, phone, ssn, username, password }) => {
        test(`Register: ${firstName} ${lastName}, ${address}, ${city}, ${state}, ${zipCode}, ${phone}, ${ssn}, ${username}, ${password}`, async ({ registerPage }) => {

            await registerPage.fillRegistrationForm(firstName, lastName, address, city, state, zipCode, phone, ssn, username, password);
            await registerPage.submitRegistration();
            const registerSuccessfully = await registerPage.verifyAccountCreated(username);
            expect(registerSuccessfully).toBeTruthy();
        })
    });
});