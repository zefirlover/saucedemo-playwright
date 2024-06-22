import { Page } from '@playwright/test';
import { Locator } from "@playwright/test";
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
            this.mainPage.scrollToBmMenuCloseButton();
            this.mainPage.clickLogoutButton();
        }
    }

    async caseInsensitiveSort(stringsArray: (string | null)[], ascending: boolean) {
        if (stringsArray.includes(null)) throw new Error('Test skipped: Array contains null value.');
        stringsArray.sort(function(a, b) {
            let aStr = a!;
            let bStr = b!;
    
            let comparison = aStr.toLowerCase().localeCompare(bStr.toLowerCase(), undefined, {numeric: true});
            if (comparison === 0) comparison = aStr.localeCompare(bStr, undefined, {numeric: true});
    
            return ascending ? comparison : -comparison;
        });
        return stringsArray;
    }

    async sortCurrencyValues(stringsArray: (string | null)[], ascending: boolean) {
        if (stringsArray.includes(null)) throw new Error('Array cannot contain null values.');
    
        stringsArray.sort((a, b) => {
            const regex = /[\d\.]+/;
            let aNum = parseFloat(a!.match(regex)?.[0] || "0");
            let bNum = parseFloat(b!.match(regex)?.[0] || "0");
    
            return ascending ? aNum - bNum : bNum - aNum;
        });
        return stringsArray;
    }

    async getLocatorsTextInArray(locatorArray: Locator[]) {
        let textArray: (string | null)[] = [];
        for(let item of locatorArray) {
            let text = await this.mainPage.getElementText(item);
            textArray.push(text);
        }
        return textArray;
    }
}