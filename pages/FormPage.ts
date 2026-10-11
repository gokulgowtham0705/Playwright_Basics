import { expect, Page , Locator } from "@playwright/test";
export default class FormPage {
    readonly firstNamefield: Locator;
    readonly lastNamefield: Locator;
    readonly emailfield: Locator;
    readonly malegendericon: Locator;
    readonly mobilefield: Locator;  
    readonly dateofbirthfield: Locator;   
    readonly hobbiesfield: Locator; 
    readonly uploadPicturefield: Locator;
    
    readonly errormessage: Locator;
    

    constructor(public page: Page) {  // locators page 
        this.firstNamefield = page.locator('#firstName');
        this.lastNamefield = page.locator('#lastName');
        this.emailfield = page.locator('#userEmail');
        this.malegendericon = page.locator('#gender-radio-1');
        this.mobilefield = page.locator('#userNumber');
        this.dateofbirthfield = page.locator('#dateOfBirthInput');
        this.hobbiesfield = page.locator('#hobbies-checkbox-1');    
        this.uploadPicturefield = page.locator('#uploadPicture');
        this.errormessage = page.locator('#firstName:invalid');
    }
    

    async enterfirstname (firstname: string) {
        await this.firstNamefield.fill(firstname);
    }

    async enterlastname(lastname: string) {
        await this.lastNamefield.fill(lastname);
    }

    async enteremail(email: string) {
        await this.emailfield.fill(email);
    }

    async clickMalegender() {
        await this.malegendericon.click();
    }

    async enterMobile(mobile: string) {
        await this.mobilefield.fill(mobile);
    }
    
    async enterDateofBirth(date: string) {
        await this.dateofbirthfield.fill(date);
    }

    async selectHobbies(hobby: string) {
        await this.hobbiesfield .click();
    }

    async uploadPicture(filePath: string) {
        await this.uploadPicturefield.setInputFiles(filePath);
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