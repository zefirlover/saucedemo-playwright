import { test as base } from "@playwright/test";
import { LoginPage } from '../tests/pages/login.page';
import { MainPage } from '../tests/pages/main.page';
import Page from '../tests/pages/page';
import { Helper } from '../tests/helpers/helper';

type MyFixtures = {
    basePage: Page;
    loginPage: LoginPage;
    mainPage: MainPage;
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
    helper: async ({ page, loginPage, mainPage }, use) => {
        await use(new Helper(page, mainPage, loginPage));
    },
})