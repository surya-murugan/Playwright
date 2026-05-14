const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');

test('Verify user login successfully', async ({ page }) => {

    const loginPage = new LoginPage(page);

    // Navigate to website
    await loginPage.goToWebsite();

    // Open login page
    await loginPage.openLoginPage();

    // Login
    await loginPage.login(
        'testuser@gmail.com',
        'testpassword'
    );

    // Verification
    await loginPage.verifySuccessfulLogin();
});