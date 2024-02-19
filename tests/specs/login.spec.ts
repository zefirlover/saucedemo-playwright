import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { MainPage } from '../pages/main.page';
import { Helper } from '../helpers/helper';
import credentials from '../fixed-data/credentials.json';

let loginPage: LoginPage;
let mainPage: MainPage;
let helper: Helper;

test.describe('Login page testing', () => {
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        mainPage = new MainPage(page);
        helper = new Helper(page, mainPage);
        await loginPage.openMainPage();
    })

    test('Verify all needed elements are visible', async () => {
        let elements = [
            loginPage.getUsernameInput(),
            loginPage.getPasswordInput(),
            loginPage.getLoginButton(),
            loginPage.getLoginCredentialsText()
        ]
        for(let i = 0; i < elements.length; i++) {
            await expect(await elements[i]).toBeVisible();
        }
    })

    test('Verify all user credentials are valid', async () => {
        for(let i = 0; i < credentials.length; i++) {
            await loginPage.fillUsernameInput(credentials[i].login);
            await loginPage.fillPasswordInput(credentials[i].password);
            await loginPage.clickLoginButton();
            await expect(await mainPage.getLogoDiv()).toBeVisible();
            if(i < credentials.length - 1) await helper.logout();
        }
    })
})