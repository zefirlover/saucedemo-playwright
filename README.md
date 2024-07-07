# saucedemo-playwright

This is a project for web automation testing for the [Saucedemo](https://www.saucedemo.com/) website, built using **Typescript** and **Playwright**.

On the architecture side, the project was made using the **Double Page-Object-Model** (Double POM). This means that the `page.ts` file contains functions that include **Playwright** action methods. So, in the case when tests need to be migrated to another testing framework, you would mostly need to update only this one file.

## Installing

These instructions will help you download the project onto your local machine.

1. Download and install a **Node.js** environment from this [site](https://nodejs.org/en/) (version 20.9.0 or higher).

2. Download the repository to your local machine using the **Command Prompt** command:

```
git clone https://github.com/zefirlover/saucedemo-playwright.git
```

> [!NOTE]
> **PLEASE BE AWARE** that the project will be downloaded into the folder where the **Command Prompt** was opened. Be sure to start the **Command Prompt** from the folder where you want to place the repository, or navigate there using the [`cd` command](https://learn.microsoft.com/uk-ua/windows-server/administration/windows-commands/cd).

3. Navigate to the project directory and open it using **Visual Studio Code** (or any other desktop code editor capable of working with **Typescript**).

4. Open the terminal (for VSCode, use the **Ctrl + Shift + `** hotkeys or select *Terminal > New Terminal from the navigation menu*). After that, to install all the dependencies, run:

```
npm i
npm init playwright@latest
```

> [!NOTE]
> You can run these commands using the **Command Prompt** opened in the project folder.

## How to start your tests

Currently, the only way to run your tests is by using [**Playwright** commands](https://playwright.dev/docs/running-tests). Here is a list of possible commands to do just that:

- To run tests in headless mode:
```
npx playwright test
```
- To run them in headed mode:
```
npx playwright test --headed
```
- To run in UI mode:
```
npx playwright test --ui
```
- To run a specific spec:
```
npx playwright test login.spec.ts
```

> [!NOTE]
> With [this commit](https://github.com/zefirlover/saucedemo-playwright/commit/084f5c0b8b0a12fe73d1c06ce9d3e06f1052d4e5) you can no longer run tests for **webkit** using commands above, because while running tests *locally* on *Windows* the result wasn't stable.
> You can still enable **webkit** by uncommenting a proper piece of code in `playwright.config.ts` file

## Build with

- [Typescript](https://www.typescriptlang.org/) - a strongly typed programming language built on [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) and used for this project
- [Playwright](https://playwright.dev/) - a cross-browser, cross-platform and cross-language framework that can be used for Web, API and mobile (to some degree) automation testing.
