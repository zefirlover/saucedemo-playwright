import Page from './page';

const usernameInput = '#user-name';
const passwordInput = '#password';
const loginButton = '#login-button';
const loginCredentialsText = '#login_credentials';
const errorMessageText = '.error-message-container.error > h3'

export class LoginPage extends Page {
    constructor(page: Page['page']) {
        super(page);
    }

    async getUsernameInput() {
        return await super.getElement(usernameInput);
    }

    async getPasswordInput() {
        return await super.getElement(passwordInput);
    }

    async getLoginButton() {
        return await super.getElement(loginButton);
    }

    async getLoginCredentialsText() {
        return await super.getElement(loginCredentialsText);
    }

    async getErrorMessageText() {
        return await super.getElement(errorMessageText);
    }

    async getErrorMessageContent() {
        return await super.getElementText(await this.getErrorMessageText());
    }

    async fillUsernameInput(text: string) {
        await super.enterText(await this.getUsernameInput(), text);
    }

    async fillPasswordInput(text: string) {
        await super.enterText(await this.getPasswordInput(), text);
    }

    async clickLoginButton() {
        await super.clickLocator(await this.getLoginButton());
    }
}