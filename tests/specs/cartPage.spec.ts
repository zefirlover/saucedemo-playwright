import { expect } from '@playwright/test';
import { test } from '../../fixtures/fixtures';
import casual_creds from '../fixed-data/casual_credentials.json';

test.describe('Cart page testing', () => {
    test.beforeEach(async ({ loginPage, helper }) => {
        await loginPage.openBaseUrl();
        await helper.login(casual_creds[0].login, casual_creds[0].password);
    })

    test('Verify cart page can be opened', async ({ cartPage, mainPage }) => {
        mainPage.clickShoppingCartButton();
        await expect(await cartPage.getCartList()).toBeVisible();
    })

    test('Verify a product can be placed into a cart', async ({ cartPage, mainPage }) => {
        let backpackItemLabel = await mainPage.getBackpackItemLabelText();
        mainPage.clickAddToCartBackpackButton();
        await mainPage.waitForLocator(await mainPage.getShoppingCartBadge());
        mainPage.clickShoppingCartButton();
        await mainPage.waitForLocator(await cartPage.getCartList());
        await expect(await cartPage.getCartList()).toBeVisible();
        expect(await mainPage.getBackpackItemLabelText()).toStrictEqual(backpackItemLabel);
    })

    test('Verify a product can be removed from a cart', async ({ cartPage, mainPage }) => {
        mainPage.clickAddToCartBackpackButton();
        await mainPage.waitForLocator(await mainPage.getShoppingCartBadge());
        mainPage.clickShoppingCartButton();
        await mainPage.waitForLocator(await cartPage.getCartList());
        mainPage.clickRemoveBackpackButton();
        await expect(await cartPage.getCartItemDiv()).toHaveCount(0);
        expect(await mainPage.getBackpackItemLabel()).not.toBeVisible();
    })

    test.afterEach(async ({ mainPage }) => {
        await mainPage.clickBurgerMenuButton();
        await mainPage.clickLogoutButton();
    })
})