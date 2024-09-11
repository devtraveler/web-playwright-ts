import { expect, type Locator, type Page } from '@playwright/test';

export class BasePage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Define common functions below
  async navigate(url: string): Promise<void> {
    await this.page.goto(url);
  }
}
