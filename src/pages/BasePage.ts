import { expect, type Locator, type Page } from '@playwright/test';

export class BasePage {
  page: Page;

  // This is a parent (super) class that inherites the attributes and functions to the child classes
  constructor(page: Page) {
    this.page = page;
  }

  // Define the functions that represent the BasePage below
  async navigate(url: string): Promise<void> {
    await this.page.goto(url);
  }
}
