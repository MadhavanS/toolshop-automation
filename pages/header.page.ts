import type { Locator, Page } from "@playwright/test";

export class HeaderPage {
    readonly categories: Locator;
    readonly home: Locator;
    readonly contact: Locator;
    readonly signIn: Locator;

    constructor(public readonly page: Page) {
        this.categories = page.getByTestId('nav-categories');
        this.home = page.getByTestId('nav-home');
        this.contact = page.getByTestId('nav-contact');
        this.signIn = page.getByTestId('nav-sign-in');
    }

    async selectCategories(selectionText: string) {
        await this.categories.click();
        await this.page.locator('ul.dropdown-menu')
            .locator('li>a.dropdown-item', {hasText: selectionText})
            .click();
    }
}