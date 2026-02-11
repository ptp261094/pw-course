import { test, expect } from '@playwright/test';


test('test 2', async ({ page }) => {
    
    await page.goto('https://material.playwrightvn.com/');

    await page.getByText('Bài học 2: Product page').click();
    const sp1 = await page.locator("//div[text()='Product 1']/following-sibling::button");
    await sp1.click({
        clickCount:2
    });

    const sp2 = await page.locator("//div[text()='Product 2']/following-sibling::button");
    await sp2.click({
        clickCount:3
    });

    const sp3 = await page.locator("//div[text()='Product 3']/following-sibling::button");
    await sp3.click();

});