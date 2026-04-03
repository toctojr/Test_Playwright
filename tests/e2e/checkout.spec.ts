import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';

test('E2E Checkout Flow', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  // login
  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  // inventory
  await inventory.assertOnPage();
  await inventory.addFirstProduct();
  await inventory.goToCart();

  // cart
  await cart.assertItemVisible();
  await cart.checkout();

  // checkout
  await checkout.fillForm();
  await checkout.finish();
  await checkout.assertSuccess();
});