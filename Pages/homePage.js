import { expect } from '@playwright/test';

export class HomePage {

    constructor(page) {

        this.page = page;

        // Locators
        this.logo = page.locator('img[alt="Website for automation practice"]');

        this.productsMenu = page.locator('a[href="/products"]');
    }

    async navigateToHomePage() {

        await this.page.goto('https://automationexercise.com');
    }
}

