import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { MainPage } from '../pages/main.page';
import { Helper } from '../helpers/helper';
import casual_creds from '../fixed-data/casual_credentials.json';

let loginPage: LoginPage;
let mainPage: MainPage;
let helper: Helper;

test.describe('Login page testing', () => {
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        mainPage = new MainPage(page);
        helper = new Helper(page, mainPage);
        await loginPage.openBaseUrl();
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
        for(let i = 0; i < casual_creds.length; i++) {
            await loginPage.fillUsernameInput(casual_creds[i].login);
            await loginPage.fillPasswordInput(casual_creds[i].password);
            await loginPage.clickLoginButton();
            await expect(await mainPage.getLogoDiv()).toBeVisible();
            if(i < casual_creds.length - 1) await helper.logout();
        }
    })
})