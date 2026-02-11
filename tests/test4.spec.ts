import { test, expect } from '@playwright/test';
import { randomInt } from 'node:crypto';


test('test 4', async ({ page }) => {
    
    await page.goto('https://vnexpress.net/');

    const titles = await page.locator("//h3[@class='title-news']//a").allTextContents();
    var arrayTitle = new Array;
    var arrayDescription = new Array;
    for(let i = 0; i < 10; i++){
        let title = titles[i].trim();
        arrayTitle.push(title);
        let description = (await page.locator("(//p[@class='description']//a[contains(@title,\"" + title + "\")])[1]").allTextContents()).toString();
        description = description === "" ? "No content" : description;
        arrayDescription.push(description);
    }

    await page.goto('https://material.playwrightvn.com/');

    await page.getByText('Bài học 4: Personal notes').click();
    for(let i = 0; i < 10; i++){
        await page.locator("#note-title").fill(arrayTitle[i]);
        await page.locator("#note-content").fill(arrayDescription[i]);
        await page.locator("#add-note").click();
    }

    await page.locator("#search").fill(arrayTitle[randomInt(10)]);

});