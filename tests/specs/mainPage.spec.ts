import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { MainPage } from '../pages/main.page';
import { Helper } from '../helpers/helper';
import casual_creds from '../fixed-data/casual_credentials.json';

let loginPage: LoginPage;
let mainPage: MainPage;
let helper: Helper;

test.describe('Main page testing', () => {
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        mainPage = new MainPage(page);
        helper = new Helper(page, mainPage, loginPage);
        await loginPage.openBaseUrl();
        await helper.login(casual_creds[0].login, casual_creds[0].password);
    })

    test('Verify header elements are visible', async () => {
        let headerElements = [
            mainPage.getHeaderContainer(),
            mainPage.getBurgerMenuButton(),
            mainPage.getFilterDropdownButton(),
            mainPage.getShoppingCartButton()
        ]
        for(let i = 0; i < headerElements.length; i++) {
            await expect(await headerElements[i]).toBeVisible();
        }
    })

    test('Verify bm-menu elements are visible', async () => {
        let bmMenuElements = [
            mainPage.getBmMenuContainer(),
            mainPage.getAllItemsButton(),
            mainPage.getAboutButton(),
            mainPage.getResetButton(),
            mainPage.getBmMenuCloseButton()
        ]
        await mainPage.clickBurgerMenuButton();
        for(let i = 0; i < bmMenuElements.length; i++) {
            await expect(await bmMenuElements[i]).toBeVisible();
        }
        await mainPage.clickBmMenuCloseButton();
    })

    test('Verify text filters are working', async () => {
        let options = [
            mainPage.getFilterAZOption(),
            mainPage.getFilterZAOption()
        ]
        for(let option in options) {
            let ascending = true;
            if(option === "mainPage.getFilterZAOption()") ascending = false;
            await mainPage.clickFilterDropdownButton();
            option;
            let itemTextArray = await mainPage.getInventoryItemsTextInArray();
            let sortedItemTextArray = await helper.caseInsensitiveSort(itemTextArray, ascending);
            expect(itemTextArray).toStrictEqual(sortedItemTextArray);
        }
    })

    test.afterEach(async () => {
        await mainPage.clickBurgerMenuButton();
        await mainPage.clickLogoutButton();
    })
})