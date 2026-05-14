const { expect } = require('@playwright/test');

class LoginPage {

    constructor(page) {
        this.page = page;

        // Locators
        this.signUpLoginBtn = 'a[href="/login"]';
        this.emailInput = 'input[data-qa="login-email"]';
        this.passwordInput = 'input[data-qa="login-password"]';
        this.loginBtn = 'button[data-qa="login-button"]';
        this.loggedInText = '//a[contains(text(),"Logged in as")]';
    }

    // Navigate to website
    async goToWebsite() {
        await this.page.goto('https://automationexercise.com/');
    }

    // Open login page
    async openLoginPage() {
        await this.page.click(this.signUpLoginBtn);
    }

    // Login method
    async login(email, password) {
        await this.page.fill(this.emailInput, email);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginBtn);
    }

    // Verify successful login
    async verifySuccessfulLogin() {
        await expect(this.page.locator(this.loggedInText)).toBeVisible();
    }
}

module.exports = { LoginPage };