import { Page } from '@playwright/test';
import { MainPage } from './../pages/main.page';
import { LoginPage } from '../pages/login.page';

export class Helper {
    readonly mainPage: MainPage;
	readonly loginPage: LoginPage;
    readonly page: Page;

    constructor(page: Page, mainPage: MainPage, loginPage: LoginPage) {
        this.page = page;
        this.mainPage = mainPage;
		this.loginPage = loginPage;
    }

    async login(login: string, password: string) {
        await this.loginPage.fillUsernameInput(login);
        await this.loginPage.fillPasswordInput(password);
        await this.loginPage.clickLoginButton();
    }

    async logout() {
        if (await(await this.mainPage.getBurgerMenuButton()).isVisible()) {
            this.mainPage.clickBurgerMenuButton();
            this.mainPage.clickLogoutButton();
        }
    }
}