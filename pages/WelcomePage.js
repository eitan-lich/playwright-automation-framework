export default class WelcomePage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.bankLogo = this.page.getByTitle("ParaBank");
        this.usernameInput = this.page.locator("input[name='username']");
        this.passwordInput = this.page.locator("input[name='password']");
        this.loginButton = this.page.locator('input[value="Log In"]');
        this.forgotLoginInfo = this.page.getByRole("a", { name: "lookup.htm" });
        this.registerLink = this.page.getByText("Register", { exact: true });
        this.loginErrorMessage = this.page.getByText("The username and password could not be verified.");
    }

    async navigateTo() {
        await this.page.goto('/');
    }

    async verifyPageLoaded() {
        return await this.bankLogo.isVisible();
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async goToRegisterPage() {
        await this.registerLink.click();
    }

    async verifyLoginError() {
        return await this.loginErrorMessage.isVisible();
    }
}