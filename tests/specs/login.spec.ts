import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

let loginPage: LoginPage;

test.describe('Login page testing', () => {
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
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
})