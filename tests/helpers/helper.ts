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

    async caseInsensitiveSort(stringsArray: (string | null)[]) {
        if(stringsArray.includes(null)) throw new Error('Test skipped: Array contains null value.');
        stringsArray.sort(function(a, b) {
            let aStr = a!;
            let bStr = b!;

            let comparison = aStr.toLowerCase().localeCompare(bStr.toLowerCase());
            if (comparison === 0) return aStr.localeCompare(bStr);
            return comparison;
        });
        return stringsArray;
    }
}