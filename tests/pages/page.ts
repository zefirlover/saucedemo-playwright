import { Locator } from "@playwright/test";
import { Page as PlaywrightPage } from "playwright";

export default class Page {
  public page: PlaywrightPage;

  /**
   * @param {PlaywrightPage} page
   */
  constructor(page: PlaywrightPage) {
    this.page = page;
  }

  async openUrl(path: string) {
    await this.page.goto(path, { waitUntil: "load" });
  }

  async openMainPage() {
    await this.openUrl("/");
  }

  async getElement(selector: string) {
    return this.page.locator(selector);
  }

  async getElementByText(text: string) {
    return this.page.getByText(text, { exact: true });
  }

  async getElementText(selector: string) {
    return this.page.locator(selector).textContent();
  }

  async clickElement(selector: string) {
    await (await this.getElement(selector)).click();
  }

  async clickLocator(locator: Locator) {
    await locator.click();
  }

  async enterText(locator: Locator, text: string) {
    await locator.fill(text);
  }

  async pause(miliseconds: number) {
    await this.page.waitForTimeout(miliseconds);
  }

  async waitForLocator(locator: Locator) {
    await locator.waitFor({ state: 'visible' });
  }
}
