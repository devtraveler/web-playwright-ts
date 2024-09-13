import { test, expect } from '@playwright/test';
import { ChargePointPage } from '../pages/ChargePointPage.ts';
import { generateRandom6DigitNumber } from '../utils.ts';

test.describe('Task Test Case', () => {
  let chargePointPage: ChargePointPage;
  const randomNumber = generateRandom6DigitNumber();

  // With this method, this block runs before executing each test cases in this test block,
  test.beforeEach(async ({ page }) => {
    chargePointPage = new ChargePointPage(page);
    await chargePointPage.navigate('http://localhost:3000');
  });

  test('Add and remove the serial number', async ({ page }) => {

    // First way - Best Practice
    await chargePointPage.verifyChargePointPageOpened();
    await chargePointPage.typeSerialNumber(randomNumber);
    await chargePointPage.clickAddButton();
    await chargePointPage.verifySerialNumberIsListed(randomNumber);
    await chargePointPage.clickXButton();
    await chargePointPage.verifySerialNumberIsRemovedFromList();
    

  });
});
