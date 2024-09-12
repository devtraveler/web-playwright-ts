import { test, expect } from '@playwright/test';
import { ChargePointPage } from '../pages/ChargePointPage.ts';

test.describe('Task Test Case', () => {
  let chargePointPage: ChargePointPage;

  // With this method, this block runs before executing each test cases in this test block,
  test.beforeEach(async ({ page }) => {
    chargePointPage = new ChargePointPage(page);
    await chargePointPage.navigate('http://localhost:3000');
  });

  test('Add and remove the serial number', async ({ page }) => {

    // First way - Best Practice
    await chargePointPage.verifyChargePointPageOpened();
    await chargePointPage.typeSerialNumber();
    await chargePointPage.clickAddButton();
    await chargePointPage.verifySerialNumberIsListed();
    await chargePointPage.clickXButton();
    await chargePointPage.verifySerialNumberIsRemovedFromList();

    // Second way
    /*
    await expect(page).toHaveTitle(/React App/);
    await expect(page.getByText('Charge Point Installation Form')).toBeVisible();
    await expect(page.locator('//input')).toBeVisible();
    await page.locator('//input').fill('11111');
    await page.locator('//button[text()="Add"]').click();
    await expect(page.locator('//ul/li[1]')).toBeVisible();
    */
    

  });
});
