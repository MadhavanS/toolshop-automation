import { Locator, Page } from "@playwright/test"

export class SliderComponent {
    readonly minHandle: Locator;
    readonly maxHandle: Locator;
    constructor(public readonly page: Page){
        this.maxHandle = page.locator('.ngx-slider-pointer-max');    
        this.minHandle = page.locator('.ngx-slider-pointer-min');    
    }

    async sliding(min: number, max: number) {
        const minBox = await this.minHandle.boundingBox();
        const maxBox = await this.maxHandle.boundingBox();
        if(minBox) {
            const rangeFromDefault = (min>0)? (min + 3): (min - 3);
            await this.page.mouse.move(minBox.x + minBox.width / 2, minBox.y + minBox.height / 2);
            await this.page.mouse.down();
            await this.page.mouse.move(minBox.x + minBox.width / 2 + (rangeFromDefault), minBox.y + minBox.height / 2);
            await this.page.mouse.up();
        }

        if (maxBox) {
            const rangeFromDefault = (max>=0)? (max - 3): (max + 3);
            await this.page.mouse.move(maxBox.x + maxBox.width / 2, maxBox.y + maxBox.height / 2);
            await this.page.mouse.down();
            await this.page.mouse.move(maxBox.x + maxBox.width / 2 - (rangeFromDefault), maxBox.y + maxBox.height / 2);
            await this.page.mouse.up();
        }
        await this.page.waitForLoadState();
    }
}