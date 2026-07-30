import { test, Page } from "@playwright/test";
import FormPage from "../pages/FormPage";

test('Form Test', async ({ page , baseURL }) => {
  const formPage = new FormPage(page);
  await page.goto(baseURL + '/automation-practice-form');
  await formPage.enterfirstname('Gokul'); 
  await formPage.enterlastname('Gowtham');
  await formPage.enteremail('gokul.gowtham@gmail.com');
  await formPage.clickMalegender();
  await formPage.enterMobile('3423232324');
  await formPage.enterDateofBirth('01 Jan 1990');
  await formPage.selectHobbies('Sports');
  await formPage.addsubjects('Maths');
  await formPage.selectState('NCR');
  await formPage.selectCity('Delhi');
  await formPage.uploadPicture('C:\\Users\\GOKUL GOWTHAM\\Downloads\\sampleFile.jpeg');
  await formPage.enterAddress('123 Main St, Anytown, USA');
  

})