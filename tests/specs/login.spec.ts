import { expect } from '@playwright/test';
import { test } from '../../fixtures/fixtures';
import casual_creds from '../fixed-data/casual_credentials.json';
import creds_with_errors from '../fixed-data/credentials_with_errors.json'

test.describe('Login page testing', () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.openBaseUrl();
    })
    
    test('Verify all needed elements are visible', async ({ loginPage }) => {
        let webpageElements = [
            loginPage.getUsernameInput(),
            loginPage.getPasswordInput(),
            loginPage.getLoginButton(),
            loginPage.getLoginCredentialsText()
        ]
        for(let i = 0; i < webpageElements.length; i++) {
            await expect(await webpageElements[i]).toBeVisible();
        }
    })

    test('Verify the user credentials are valid', async ({ mainPage, helper }) => {
        for(let i = 0; i < casual_creds.length; i++) {
            await helper.login(casual_creds[i].login, casual_creds[i].password);
            await expect(await mainPage.getLogoDiv()).toBeVisible();
            if(i < casual_creds.length - 1) await helper.logout();
        }
    })

    test('Verify errors when logging in with invalid credentials', async ({ loginPage, helper }) => {
        let errorElements = [
            loginPage.getUsernameInputErrorLogo(),
            loginPage.getPasswordInputErrorLogo(),
            loginPage.getErrorMessageText(),
            loginPage.getErrorButton()
        ]
        for(let i = 0; i < creds_with_errors.length; i++) {
            await helper.login(creds_with_errors[i].login, creds_with_errors[i].password);
            for(let j = 0; j < errorElements.length; j++) {
                await expect(await errorElements[j]).toBeVisible();
            }
            expect(await loginPage.getErrorMessageContent()).toContain(creds_with_errors[i].error);
        }
    })

    test('Verify error block functionality', async ({ loginPage, helper }) => {
        await helper.login(creds_with_errors[0].login, creds_with_errors[0].password);
        await loginPage.clickErrorButton();
        await loginPage.pause(5000);
        await expect(await loginPage.getErrorButton()).not.toBeVisible();
    })
})