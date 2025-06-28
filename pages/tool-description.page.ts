import { Locator, Page } from "@playwright/test";
import { AbstractPage } from "./abstract.page";

export class ToolDescriptionPage extends AbstractPage {
    readonly toolTitle: Locator;
    readonly perUnitPrice: Locator;
    readonly description: Locator;
    readonly quantityText: Locator;
    readonly quantityIncreaseBtn: Locator;
    readonly quantityDecreaseBtn: Locator;
    readonly addToCart: Locator;
    readonly addToFavourites: Locator;

    constructor(public readonly page: Page) {
        super(page);
        this.toolTitle = page.getByTestId('product-name');
        this.perUnitPrice = page.getByTestId('unit-price');
        this.description = page.locator('#description');
        this.quantityText = page.getByTestId('quantity');
        this.quantityIncreaseBtn = page.getByTestId('increase-quantity');
        this.quantityDecreaseBtn = page.getByTestId('decrease-quantity');
        this.addToCart = page.getByTestId('add-to-card');
        this.addToFavourites = page.getByTestId('add-to-favourites');
    }
}