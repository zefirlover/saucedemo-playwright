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

    async getInventoryItemsTextInArray() {
        let textArray: (string | null)[] = [];
        for(let item of await this.getInventoryItemNames()) {
            let text = await super.getElementText(item);
            textArray.push(text);
        }
        return textArray;
    }
}