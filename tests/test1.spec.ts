import { test } from '@playwright/test'
import { RegisterPage } from '../pages/register-page';

test('test 1', async ({ page }) => {
    const registerPage = new RegisterPage(page);

    test.step("Navigate to Register Page and sign up", async() =>{
        await registerPage.navigateToRegisterPage();
        await registerPage.clickRegisterPageButton();
        await registerPage.inputUserName("Phat");
        await registerPage.inputEmail("phatpham@gmail.com");
        await registerPage.inputDOB("2000-01-01");
        await registerPage.clickRegisterButton();

    })

    // await page.goto('https://material.playwrightvn.com/');
    // await page.getByText('Bài học 1: Register Page (có đủ các element)').click();
    // await page.locator("#username").fill("Phat");
    // await page.locator("#email").fill("phatpham@gmail.com");
    // await page.locator("#dob").fill("2000-01-01");
    // await page.locator("//button[text()='Register']").click();

});