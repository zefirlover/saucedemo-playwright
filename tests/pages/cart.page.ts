import Page from './page';

const cartContentContainer = '#cart_content_container';
const cartList = '.cart_list';
const cartItemDiv = '.cart_item';

export class CartPage extends Page {
    constructor(page: Page['page']) {
        super(page);
    }

    async getCartContentContainer() {
        return await super.getElement(cartContentContainer);
    }

    async getCartItemDiv() {
        return await super.getElement(cartItemDiv);
    }

    async getCartList() {
        return await super.getElement(cartList);
    }
}