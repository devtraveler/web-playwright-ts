import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ChargePointPage extends BasePage {
  
  // This is a child class(sub-class) that can use the attributes and functions from the parent class

  // Initiate the web elements
  titleOfChargePoint: Locator;
  inputSerialNumber: Locator;
  addButton: Locator;
  serialNumberOnList: Locator;
  xButton: Locator;
  
  constructor(page: Page){
    // To inherit from the super class
    super(page);

    // To locate web elements and define them as the attributes of the class object
    this.titleOfChargePoint = page.getByText('Charge Point Installation Form');
    this.inputSerialNumber = page.locator('//input');
    this.addButton = page.locator('//button[text()="Add"]');
    this.serialNumberOnList = page.locator('//ul/li[1]');
    this.xButton = page.locator('//ul/li[1]/button');

  }

  // Verify the charge point page opened
  async verifyChargePointPageOpened(): Promise<void> {

    await expect(this.titleOfChargePoint).toBeVisible();

  }

  // Type a serial number in the Serial Number input
  async typeSerialNumber(): Promise<void> {
   
    await expect(this.inputSerialNumber).toBeVisible();
    await this.inputSerialNumber.fill('11111');
  
  }

  // Click on the Add button
  async clickAddButton(): Promise<void> {
    await expect(this.page.locator('//input')).toBeVisible();
    await this.addButton.click();

}

  // Verify the added Serial Number is listed
  async verifySerialNumberIsListed(): Promise<void> {

    await expect(this.serialNumberOnList).toBeVisible();
    await expect(this.serialNumberOnList).toContainText('11111');

  }

  // Click on the X Button
  async clickXButton(): Promise<void> {

    await this.xButton.click();

  }

  // Verify the serial number is removed from the list
  async verifySerialNumberIsRemovedFromList(): Promise<void> {

    await expect(this.serialNumberOnList).toHaveCount(0);

  }

  
}

