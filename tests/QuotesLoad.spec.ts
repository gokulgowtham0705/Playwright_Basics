import { test, Page,expect } from "@playwright/test";
import FormPage from "../pages/FormPage";

test('Form Test', async ({ page , context }) => {
  await page.goto('https://www.coverfox.com/car-insurance/?fs=FASTLANE_LANDING&ft=fl');
  await page
        .locator('.flow-links__item')
        .filter({ hasText: "Don't know your car number?" })
        .getByText('Click here', { exact: true })
        .click();

    
   

    
    await page.getByText('Maruti', { exact: true }).click();
    await page.getByText('Fronx', { exact: true }).click(); 
    await page.getByText('Petrol', { exact: true }).click();
    await page.getByPlaceholder('Search...').fill('Delta');

    await page.getByText('Delta', { exact: true }).click();
    
    await page.getByText('AP-04 Kadapa', { exact: true }).click();
   
    await page.getByText('2020', { exact: true }).click();4
    await page.getByText('Not Expired', { exact: true }).click();
    await page.getByText('No', { exact: true }).nth(1).click();
    await page.locator('button[title="View Quotes"]').first().click();

    await page.waitForTimeout(5000);

  

});
