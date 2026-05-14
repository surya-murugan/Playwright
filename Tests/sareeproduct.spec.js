import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage.js';
import { ProductPage } from '../pages/productpage.js';
import { CartPage } from '../pages/cartPage.js';

let homePage;
let productpage;
let cartpage;

test.beforeEach( async ({ page }) => {
   homePage = new HomePage(page);
   cartpage = new CartPage(page);
    productpage = new ProductPage(page);
   await homePage.navigateToHomePage();
  
});

test('Add Saree Product To Cart', async () => {
 await productpage.addSareeToCart();
 await cartpage.viewcartdetails();
});
