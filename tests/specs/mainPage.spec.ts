import { expect } from '@playwright/test';
import { test } from '../../fixtures/fixtures';
import casual_creds from '../fixed-data/casual_credentials.json';

test.describe('Main page testing', () => {
    test.beforeEach(async ({ loginPage, helper }) => {
        await loginPage.openBaseUrl();
        await helper.login(casual_creds[0].login, casual_creds[0].password);
    })

    test('Verify header elements are visible', async ({ mainPage }) => {
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

    test('Verify bm-menu elements are visible', async ({ mainPage }) => {
        let bmMenuElements = [
            mainPage.getBmMenuContainer(),
            mainPage.getAllItemsButton(),
            mainPage.getAboutButton(),
            mainPage.getResetButton(),
            mainPage.getBmMenuCloseButton()
        ]
        await mainPage.clickBurgerMenuButton();
        await expect(await mainPage.getBmMenuCloseButton()).toBeVisible();
        for(let i = 0; i < bmMenuElements.length; i++) {
            await expect(await bmMenuElements[i]).toBeVisible();
            await mainPage.scrollToBmMenuCloseButton();
        }
        await mainPage.clickBmMenuCloseButton();
    })

    test('Verify filters are working', async ({ mainPage, helper }) => {
        const azOption = await mainPage.getFilterAZOption();
        const zaOption = await mainPage.getFilterZAOption();
        const loHiOption = await mainPage.getFilterLoHiOption();
        const hiLoOption = await mainPage.getFilterHiLoOption();

        let options = [azOption, zaOption, loHiOption, hiLoOption]

        for(let i = 0; i < options.length; i++) {
            let ascending = true;
            let itemTextArray: (string | null)[] = [];
            let sortedItemTextArray: (string | null)[] = [];

            if(options[i] == zaOption || options[i] == hiLoOption) ascending = false;
            await mainPage.clickFilterDropdownButton();
            options[i];
            if (options[i] === hiLoOption || options[i] === loHiOption) {
                itemTextArray = await helper.getLocatorsTextInArray(await mainPage.getInventoryItemPrices());
                sortedItemTextArray = await helper.sortCurrencyValues(itemTextArray, ascending);
            } else {
                itemTextArray = await helper.getLocatorsTextInArray(await mainPage.getInventoryItemNames());
                sortedItemTextArray = await helper.caseInsensitiveSort(itemTextArray, ascending);
            }
            expect(itemTextArray).toStrictEqual(sortedItemTextArray);
        }
    })

    test('Verify shopping_cart_badge is visible when product added to cart', async ({ mainPage }) => {
        let isShown = false;
        await mainPage.clickAddToCartBackpackButton();
        if (await (await mainPage.getShoppingCartBadge()).isVisible()) isShown = true;
        await mainPage.clickRemoveBackpackButton();
        await expect(await mainPage.getShoppingCartBadge()).not.toBeVisible();
        expect(isShown).toStrictEqual(true);
    })

    test('Verify shopping_cart_badge number is correct', async ({ mainPage }) => {
        let actions = [
            await mainPage.getAddToCartBackpackButton(),
            await mainPage.getAddToCartBikeLightButton(),
            await mainPage.getRemoveBackpackButton(),
            await mainPage.getRemoveBikeLightButton()
        ]
        let numbers: (string | null)[] = []
        
        if(!await (await mainPage.getShoppingCartBadge()).isVisible()) numbers.push("0");
        for(let i = 0; i < actions.length; i++) {
            await mainPage.clickLocator(actions[i]);
            if(await (await mainPage.getShoppingCartBadge()).isVisible()) {
                numbers.push(await mainPage.getShoppingCartBadgeText());
            } else {
                numbers.push("0")
            }
        }
        expect(numbers).toEqual(["0", "1", "2", "1", "0"]);
    })

    test.afterEach(async ({ mainPage }) => {
        await mainPage.scrollToBurgerMenuButton();
        await mainPage.clickBurgerMenuButton();
        await mainPage.clickLogoutButton();
    })
})