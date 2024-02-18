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

  async getElement(locator: string) {
    return this.page.locator(locator);
  }

  async getElementByText(text: string) {
    return this.page.getByText(text, { exact: true });
  }

  async getElementText(locator: string) {
    return this.page.locator(locator).textContent();
  }

  async clickElement(locator: string) {
    await (await this.getElement(locator)).click();
  }
}
