import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async assertItemVisible() {
    await expect(this.page.locator('.cart_item')).toBeVisible();
  }

  async checkout() {
    await this.page.click('#checkout');
  }
}