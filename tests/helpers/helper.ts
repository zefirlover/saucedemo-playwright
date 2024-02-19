import { Page } from '@playwright/test';
import { MainPage } from './../pages/main.page';

export class Helper {
    readonly mainPage: MainPage;
    readonly page: Page;

    constructor(page: Page, mainPage: MainPage) {
        this.page = page;
        this.mainPage = mainPage        
    }

    async logout() {
        if (await(await this.mainPage.getBurgerMenuButton()).isVisible()) {
            this.mainPage.clickBurgerMenuButton();
            this.mainPage.clickLogoutButton();
        }
    }
}