import { Page } from "@playwright/test";
import { BasePage } from "./pages/base-page";

export class RegisterPage extends BasePage{
    pageURL = "https://material.playwrightvn.com/";
    pageTitle = "Bài học 1: Register Page (có đủ các element)";

    constructor(page: Page){
        super(page);
    }

    async navigateToRegisterPage(){
        await this.navigateTo(this.pageTitle);
    }

    async clickRegisterPageButton(){
        await this.page.getByText(this.pageTitle).click();
    }

    async inputUserName(username: string){
        await this.page.locator("#username").fill(username);
    }

    async inputEmail(email: string){
        await this.page.locator("#email").fill(email);
    }

    async inputDOB(dob: string){
        await this.page.locator("#dob").fill(dob);
    }

    async clickRegisterButton(){
        await this.page.locator("//button[text()='Register']").click();
    }
}
