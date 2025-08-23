import { test as base } from '@playwright/test';
import WelcomePage from '../pages/WelcomePage';
import AccountServicesPage from '../pages/AccountServicesPage';
import RegisterPage from '../pages/RegisterPage';


const test = base.extend({
    welcomePage: async ({ page }, use) => {
        const welcomePage = new WelcomePage(page);
        await use(welcomePage);
    },
    accountServicesPage: async ({ page }, use) => {
        const accountServicesPage = new AccountServicesPage(page);
        await use(accountServicesPage);
    },
    registerPage: async ({ page, welcomePage }, use) => {
        await welcomePage.navigateTo(); 
        await welcomePage.goToRegisterPage();
        const registerPage = new RegisterPage(page);
        await use(registerPage);
    }
});

export { test };