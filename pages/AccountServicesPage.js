export default class AccountServicesPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;

    }

    async verifyLoggedInUser(firstName, lastName) {
        const welcomeMessage = this.page.getByText(`Welcome ${firstName} ${lastName}`);
        return await welcomeMessage.isVisible();
    }
}