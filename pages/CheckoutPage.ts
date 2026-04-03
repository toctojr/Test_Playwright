import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async fillForm() {
    await this.page.fill('#first-name', 'Dwi');
    await this.page.fill('#last-name', 'QA');
    await this.page.fill('#postal-code', '12345');
    await this.page.click('#continue');
  }

  async finish() {
    await this.page.click('#finish');
  }

  async assertSuccess() {
    await expect(this.page.locator('.complete-header'))
      .toHaveText('Thank you for your order!');
  }
}