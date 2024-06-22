import Page from './page';

const logoDiv = '.app_logo';
const headerContainer = '#header_container';
const burgerMenuButton = '#react-burger-menu-btn';
const shoppingCartButton = '#shopping_cart_container';
const filterDropdownButton = 'select.product_sort_container';
const bmMenuContainer = '.bm-menu';
const allItemsButton = '#inventory_sidebar_link';
const aboutButton = '#about_sidebar_link';
const resetButton = '#reset_sidebar_link';
const bmMenuCloseButton = '#react-burger-cross-btn';
const logoutButton = '#logout_sidebar_link';
const inventoryItemNames = '.inventory_item_name';
const inventoryItemPrices = '.inventory_item_price';
const addToCartBackpackButton = '#add-to-cart-sauce-labs-backpack';
const backpackItemLabel = '#item_4_title_link>div'
const addToCartBikeLightButton = '#add-to-cart-sauce-labs-bike-light';
const removeBackpackButton = '#remove-sauce-labs-backpack';
const removeBikeLightButton = '#remove-sauce-labs-bike-light';
const shoppingCartBadge = shoppingCartButton+'>a>span';

export class MainPage extends Page {
    constructor(page: Page['page']) {
        super(page);
    }

    async getLogoDiv() {
        return await super.getElement(logoDiv);
    }

    async getHeaderContainer() {
        return await super.getElement(headerContainer);
    }

    async getBurgerMenuButton() {
        return await super.getElement(burgerMenuButton);
    }

    async getBmMenuContainer() {
        return await super.getElement(bmMenuContainer);
    }

    async getAllItemsButton() {
        return await super.getElement(allItemsButton);
    }

    async getAboutButton() {
        return await super.getElement(aboutButton);
    }

    async getResetButton() {
        return await super.getElement(resetButton);
    }

    async getBmMenuCloseButton() {
        return await super.getElement(bmMenuCloseButton);
    }

    async getLogoutButton() {
        return await super.getElement(logoutButton);
    }

    async getShoppingCartButton() {
        return await super.getElement(shoppingCartButton);
    }

    async getFilterDropdownButton() {
        return await super.getElement(filterDropdownButton);
    }

    async getAddToCartBackpackButton() {
        return await super.getElement(addToCartBackpackButton);
    }

    async getAddToCartBikeLightButton() {
        return await super.getElement(addToCartBikeLightButton);
    }

    async getRemoveBackpackButton() {
        return await super.getElement(removeBackpackButton);
    }

    async getRemoveBikeLightButton() {
        return await super.getElement(removeBikeLightButton);
    }

    async getShoppingCartBadge() {
        return await super.getElement(shoppingCartBadge);
    }

    async getBackpackItemLabel() {
        return await super.getElement(backpackItemLabel);
    }

    async getFilterAZOption() {
        return await super.getSelectOptionByValue(await this.getFilterDropdownButton(), 'az');
    }

    async getFilterZAOption() {
        return await super.getSelectOptionByValue(await this.getFilterDropdownButton(), 'za');
    }

    async getFilterLoHiOption() {
        return await super.getSelectOptionByValue(await this.getFilterDropdownButton(), 'lohi');
    }

    async getFilterHiLoOption() {
        return await super.getSelectOptionByValue(await this.getFilterDropdownButton(), 'hilo');
    }

    async getInventoryItemNames() {
        return await super.getElementsArray(inventoryItemNames);
    }

    async getInventoryItemPrices() {
        return await super.getElementsArray(inventoryItemPrices);
    }

    async getShoppingCartBadgeText() {
        return await super.getElementText(await this.getShoppingCartBadge());
    }

    async getBackpackItemLabelText() {
        return await super.getElementText(await this.getBackpackItemLabel());
    }

    async clickBurgerMenuButton() {
        await super.clickLocator(await this.getBurgerMenuButton());
    }

    async clickLogoutButton() {
        await super.clickLocator(await this.getLogoutButton());
    }

    async clickBmMenuCloseButton() {
        await super.clickLocator(await this.getBmMenuCloseButton());
    }

    async clickFilterDropdownButton() {
        await super.clickLocator(await this.getFilterDropdownButton());
    }

    async clickAddToCartBackpackButton() {
        await super.clickLocator(await this.getAddToCartBackpackButton());
    }

    async clickAddToCartBikeLightButton() {
        await super.clickLocator(await this.getAddToCartBikeLightButton());
    }

    async clickRemoveBackpackButton() {
        await super.clickLocator(await this.getRemoveBackpackButton());
    }

    async clickRemoveBikeLightButton() {
        await super.clickLocator(await this.getRemoveBikeLightButton());
    }

    async clickShoppingCartButton() {
        await super.clickLocator(await this.getShoppingCartButton());
    }

    async scrollToBurgerMenuButton() {
        await super.scrollIntoView(await this.getBurgerMenuButton());
    }

    async scrollToBmMenuCloseButton() {
        await super.scrollIntoView(await this.getBmMenuCloseButton());
    }

    async getInventoryItemsTextInArray() {
        let textArray: (string | null)[] = [];
        for(let item of await this.getInventoryItemNames()) {
            let text = await super.getElementText(item);
            textArray.push(text);
        }
        return textArray;
    }
}