import {  expect } from '@playwright/test';
import { test } from './fixtures/signup.fixtures'

test('has title', async ( { page, userData } ) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/ParaBank/);

  console.log(userData);

});

test.skip('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
