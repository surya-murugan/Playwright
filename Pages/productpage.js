import { expect } from '@playwright/test';

export class ProductPage {

    constructor(page) {

        this.page = page;

        // Locators
        this.productsMenu =
            page.getByRole('link', { name: ' Products' });

        this.womenCategory =
            page.getByRole('link', { name: 'Women' });

        this.sareeCategory =
            page.getByRole('link', { name: 'Saree' });

        this.addToCartButton =
           page.locator('[data-product-id="39"]').first();

        this.continueShoppingButton =
            page.getByRole('button', { name: 'Continue Shopping' });

    }
   async addSareeToCart() {

    await this.productsMenu.click();

    await this.womenCategory.click();

    await this.sareeCategory.click();

    await this.addToCartButton.click();

    await this.continueShoppingButton.click();
}

}
