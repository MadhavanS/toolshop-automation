import type { Page } from "@playwright/test";
import { AbstractPage } from "./abstract.page";
import { CardComponent } from "./component/card.component";

export class HomePage extends AbstractPage {
    constructor(public readonly page: Page) {
        super(page);
    }

    async getAllCards() {
        const cards = await this.page.locator('.container a.card').all();
        console.log('AllCards:: ', cards.length);
        
        const actual = await Promise.all(cards.map(card => new CardComponent(card)))

        for(const card of actual) {
            const title = await card.getCardTitle();
            const price = await card.getCardPrice();
            const isAvail = await card.isOutOfStock();
            console.log(title, ' - ', price, ' - ', isAvail);
        }
    }
}