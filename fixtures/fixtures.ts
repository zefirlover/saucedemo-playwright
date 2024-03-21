import { test as base } from "@playwright/test";
import Page from '../tests/pages/page';
import { LoginPage } from '../tests/pages/login.page';
import { MainPage } from '../tests/pages/main.page';
import { CartPage } from "../tests/pages/cart.page";
import { Helper } from '../tests/helpers/helper';

type MyFixtures = {
    basePage: Page;
    loginPage: LoginPage;
    mainPage: MainPage;
    cartPage: CartPage;
    helper: Helper;
}

export const test = base.extend<MyFixtures>({
    basePage: async ({ page }, use) => {
        await use(new Page(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    mainPage: async ({ page }, use) => {
        await use(new MainPage(page));
    },
    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },
    helper: async ({ page, loginPage, mainPage }, use) => {
        await use(new Helper(page, mainPage, loginPage));
    },
})