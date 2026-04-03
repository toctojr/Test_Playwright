import { Page, expect } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async assertOnPage() {
    await expect(this.page).toHaveURL(/inventory/);
  }

  async addFirstProduct() {
    await this.page.locator('.inventory_item button').first().click();
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }
}