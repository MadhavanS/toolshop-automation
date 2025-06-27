import { Locator } from "@playwright/test";

export class CardComponent {
    constructor(readonly root: Locator) {}

    async getCardPrice() {
        return this.root.getByTestId('product-price').textContent();
    }

    async getCardTitle() {
        return this.root.getByTestId('product-name').textContent();
    }

    async getCardImage() {
        return this.root.locator('.card-img-wrapper > .card-img-top');
    }

    async isOutOfStock() {
        const child = this.root.locator('.card-footer').getByTestId('out-of-stock');
        return await child.isVisible().catch(() => true);
    }
}