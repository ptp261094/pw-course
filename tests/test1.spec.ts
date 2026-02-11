import { test, expect } from '@playwright/test';

test('test 1', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');

    await page.getByText('Bài học 1: Register Page (có đủ các element)').click();
    await page.locator("#username").fill("Phat");
    await page.locator("#email").fill("phatpham@gmail.com");
    await page.locator("#dob").fill("2000-01-01");
    await page.locator("//button[text()='Register']").click();

});