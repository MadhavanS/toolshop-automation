import { Locator, Page, expect } from "@playwright/test";
import { AbstractPage } from "./abstract.page";
import { SliderComponent } from "./component/slider.component";

export class SidebarPage extends AbstractPage {
    readonly sortDropdown: Locator;
    readonly priceRangeSlider: Locator;
    readonly searchTextbox: Locator;
    readonly checkboxGroup: Locator;
    
    constructor(public readonly page: Page) {
        super(page);
        this.sortDropdown = page.getByTestId('sort');
        this.priceRangeSlider = page.locator('xpath=//ngx-slider[@aria-label="ngx-slider"]');
        this.searchTextbox = page.getByTestId('search-query');
        this.checkboxGroup = page.locator('.checkbox');
    }

    async priceRangeDragger(min: number, max: number) {
        await this.page.waitForLoadState();
        const slider = new SliderComponent(this.page);
        await slider.sliding(min, max);
        /* rangeFromDefault = (rangeFromDefault>=0)? (rangeFromDefault + 3): (rangeFromDefault - 3);
        const box = await this.priceRangeSlider.boundingBox();
        if(!box) throw new Error('Handle not visible!');

        await this.page.mouse.move(box.x + box.width/2, box.y + box.height/2);
        await this.page.mouse.down();
        await this.page.mouse.move(box.x + box.width/2 + (rangeFromDefault), box.y + box.height/2);
        await this.page.mouse.up(); */
    }

    async searchText(text: string) {
        await expect(this.searchTextbox).toBeVisible();
        await expect(this.searchTextbox).toBeEditable();
        await this.searchTextbox.fill(text, {force: true});
        await this.page.keyboard.press('Enter');
        await this.page.waitForLoadState();
        await expect(this.searchTextbox).toHaveText("");
    }

    async selectCategoryAndBrand(selectionArray: Array<string>) {
        for(const text of selectionArray)
            await this.checkboxGroup.getByRole('checkbox', {name: new RegExp(text, "i")}).check();
        
        await this.page.waitForLoadState();
    }
}