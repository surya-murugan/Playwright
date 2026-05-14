import { expect } from '@playwright/test';

export class CartPage {

    constructor(page) {

        this.page = page;
        //locators

      this.cartlink = page.locator("a[href='/view_cart']").first();
      this.sareedetail = page.getByRole('link', { name: 'Cotton Silk Hand Block Print' });
    }
 async viewcartdetails() {

    await this.cartlink.click();
    await expect(this.sareedetail).toBeVisible();
    

 }

}
