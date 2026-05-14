import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage.js';

test('Homepage Validation', async ({ page }) => {

    const homePage = new HomePage(page);

    // Open Website
    await homePage.navigateToHomePage();

    // Verify Homepage Title
    await expect(page).toHaveTitle('Automation Exercise');

    // Verify Logo Visible
    await expect(homePage.logo).toBeVisible();

    // Verify Menu Items Visible
    await expect(homePage.productsMenu).toBeVisible();
});