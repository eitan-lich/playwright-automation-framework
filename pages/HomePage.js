export default class HomePage {
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
        this.registerLink = this.page.getByRole("a", { name: "register.htm" });
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

    async navigateToRegister() {
        await this.registerLink.click();
    }
}