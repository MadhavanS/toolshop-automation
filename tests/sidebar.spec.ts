import {test} from '@playwright/test';
import { HomePage } from '../pages/home.page';

test('01. Dropdown verification', async({page}) => {
    await page.goto('/');

    const homePage = new HomePage(page);
    await homePage.headerPage.selectCategories('Power Tools');
    // await sidebar.searchText('Pliers');
    // await sidebar.selectCategoryAndBrand(['Pliers', 'Wrench', 'Sander', 'Fasteners', 'MightyCraft Hardware']);
    // await sidebar.priceRangeDragger(10, 43);


    // await page.getByTestId('sort').selectOption('price,asc');
    // const options = await page.getByTestId('sort').locator('option').allTextContents();
    // expect(options).toEqual(['', 'Name (A - Z)', 'Name (Z - A)', 'Price (High - Low)', 'Price (Low - High)']);
    // await expect(page.getByTestId('sort').locator('option')).toHaveText(['', 'Name (A - Z)', 'Name (Z - A)', 'Price (High - Low)', 'Price (Low - High)']);
    await page.pause();
});