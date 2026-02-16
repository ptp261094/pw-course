import { Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class ProductPage extends BasePage {
    pageURL = "https://material.playwrightvn.com";
    pageTitle = "Bài học 2: Product page";

    constructor(page: Page){
        super(page);
    }

    async navigateToPlaywrightPage(){
        await this.navigateTo(this.pageURL);
    }

    async clickProductPageButton(){
        await this.page.getByText(this.pageTitle).click();
    }

    async clickFirstProduct2Times(){
        await this.page.locator("//div[text()='Product 1']/following-sibling::button").click({
            clickCount:2
        });
    }


    async clickSecondProduct3Times(){
        await this.page.locator("//div[text()='Product 2']/following-sibling::button").click({
            clickCount:3
        });
    }


    async clickThirdProduct1Time(){
        await this.page.locator("//div[text()='Product 3']/following-sibling::button").click();
    }


}
