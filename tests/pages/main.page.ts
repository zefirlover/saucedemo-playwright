import Page from './page';

const logoDiv = '.app_logo';
const burgerMenuButton = '#react-burger-menu-btn';
const logoutButton = '#logout_sidebar_link';

export class MainPage extends Page {
    constructor(page: Page['page']) {
        super(page);
    }

    async getLogoDiv() {
        return await super.getElement(logoDiv);
    }

    async getBurgerMenuButton() {
        return await super.getElement(burgerMenuButton);
    }

    async getLogoutButton() {
        return await super.getElement(logoutButton);
    }

    async clickBurgerMenuButton() {
        await super.clickLocator(await this.getBurgerMenuButton());
    }

    async clickLogoutButton() {
        await super.clickLocator(await this.getLogoutButton());
    }
}