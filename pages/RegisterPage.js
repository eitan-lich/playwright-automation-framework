export default class RegisterPage {
    constructor(page) {
        this.page = page;
        this.registerPageTitle = this.page.getByText("Signing up is easy!", { exact: true });
        this.firstNameInput = this.page.locator('id=customer.firstName');
        this.lastNameInput = this.page.locator('id=customer.lastName');
        this.addressInput = this.page.locator('id=customer.address.street');
        this.cityInput = this.page.locator('id=customer.address.city');
        this.stateInput = this.page.locator('id=customer.address.state');
        this.zipCodeInput = this.page.locator('id=customer.address.zipCode');
        this.phoneInput = this.page.locator('id=customer.phoneNumber');
        this.ssnInput = this.page.locator('id=customer.ssn');
        this.usernameInput = this.page.locator('id=customer.username');
        this.passwordInput = this.page.locator('id=customer.password');
        this.confirmPasswordInput = this.page.locator('#repeatedPassword');
        this.registerButton = this.page.locator('input[value="Register"]');
    }

    async verifyPageLoaded() {
        return await this.registerPageTitle.isVisible();
    }

    async fillRegistrationForm(firstName, lastName, address, city, state, zipCode, phone, ssn, username, password) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.addressInput.fill(address);
        await this.cityInput.fill(city);
        await this.stateInput.fill(state);
        await this.zipCodeInput.fill(zipCode);
        await this.phoneInput.fill(phone);
        await this.ssnInput.fill(ssn);
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.confirmPasswordInput.fill(password);
    }

    async submitRegistration() {
        await this.registerButton.click();
    }

    async verifyAccountCreated(username) {
        const successMessage = this.page.getByText(`Welcome ${username}`, { exact: true });
        return await successMessage.isVisible();
    }
}