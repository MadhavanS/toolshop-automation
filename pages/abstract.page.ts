import {Page} from '@playwright/test';
import { HeaderPage } from './header.page';

export class AbstractPage {
    readonly headerPage: HeaderPage;
    
    constructor(public readonly page: Page) {
        this.headerPage = new HeaderPage(page);
    }
}

// function step(target: Function, context: ClassMemberDecoratorContext) {
//     return function replacementMethod(this: { constructor: { name: string } }, ...args: any) {
//         const name = this.constructor.name + '.' + (context.name as string);
//         return test.step(name, async () => {
//             return await target.call(this, ...args);
//         })
//     }
// }