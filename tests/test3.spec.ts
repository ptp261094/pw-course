import { test, expect } from '@playwright/test';


test('test 3', async ({ page }) => {
    
    await page.goto('https://material.playwrightvn.com/');

    await page.getByText('Bài học 3: Todo page').click();

    for(let i = 1; i<= 100; i++){
        await page.locator("#new-task").fill("Todo " + i);
        await page.locator("#add-task").click();
    }

    page.on('dialog', async dialog => {
        await dialog.accept();
    })

    for(let i = 1; i<= 100; i++){
        if(i % 2 === 1){
            await page.locator("#todo-" + i + "-delete").click();
        }
    }

});