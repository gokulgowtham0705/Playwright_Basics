import { expect, Page } from "@playwright/test";
export default class FormPage {
    
    constructor(public page: Page) {}
    

    async enterfirstname(firstname: string) {
        await this.page.locator('#firstName').fill(firstname);
    }

    async enterlastname(lastname: string) {
        await this.page.locator('#lastName').fill(lastname);
    }

    async enteremail(email: string) {
        await this.page.locator('#userEmail').fill(email);
    }

    async clickMalegender() {
        await this.page.locator('#gender-radio-1').click();
    }

    async enterMobile(mobile: string) {
        await this.page.locator('#userNumber').fill(mobile);
    }
    
    async enterDateofBirth(date: string) {
        await this.page.locator('#dateOfBirthInput').fill(date);
    }

    async selectHobbies(hobby: string) {
        await this.page.getByLabel(`${hobby}`).click();
    }

    async uploadPicture(filePath: string) {
        await this.page.locator('#uploadPicture').setInputFiles(filePath);
    }

    async enterAddress(address: string) {
        await this.page.locator('#currentAddress').fill(address);
    }

    async addsubjects(subjectName: string){
        await this.page.locator('#subjectsContainer').click();
        await this.page.locator('#subjectsInput').fill(`${subjectName}`);
   const option = this.page.locator('.subjects-auto-complete__menu').locator('.subjects-auto-complete__option', {
      hasText: subjectName,
    });
    
    await option.click();
    
}

    async selectState(stateName: string){
        await this.page.locator('#state').click();
        
        await this.page.getByRole('listbox').getByRole('option', {name: stateName}).click();

    }
    
    async selectCity(cityName: string){
        await this.page.locator('#city').click();
        await this.page.getByRole('listbox').getByRole('option', {name: cityName}).click();
    }
    
   
    async clickSubmit() {

      const navigationPromise = this.page.waitForNavigation({waitUntil : "networkidle"});
        await Promise.all ([ 
            this.page.waitForResponse,
            this.page.locator('#submit').click(),
          
       ])
          
    }


}