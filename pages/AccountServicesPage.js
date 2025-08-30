export default class AccountServicesPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.accountTotalBalance = this.page.getByRole('row', { name: 'Total' }).getByText('$');
        this.logoutButton = this.page.getByRole('link', { name: 'Log Out' });
    }

    async verifyLoggedInUser(firstName, lastName) {
        const welcomeMessage = this.page.getByText(`Welcome ${firstName} ${lastName}`);
        return await welcomeMessage.isVisible();
    }

    async getTotalBalance() {
        return await this.accountTotalBalance.textContent();
    }

    async logout() {
        await this.logoutButton.click();
    }   
}