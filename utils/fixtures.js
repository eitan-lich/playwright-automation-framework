import { test as base } from '@playwright/test';
import WelcomePage from '../pages/WelcomePage';
import AccountServicesPage from '../pages/AccountServicesPage';


const test = base.extend({
    welcomePage: async ({ page }, use) => {
        const welcomePage = new WelcomePage(page);
        await use(welcomePage);
    },
    accountServicesPage: async ({ page }, use) => {
        const accountServicesPage = new AccountServicesPage(page);
        await use(accountServicesPage);
    }
});

export { test };