import { test as base } from '@playwright/test';
import HomePage from '../pages/HomePage';


const test = base.extend({
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    }
});

export { test };