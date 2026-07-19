import { test, expect } from '@playwright/test';


test('Alerts, windowhandles', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.getByText('Alerts, Frame & Windows').click()
  await page.getByRole('link', { name: 'Alerts' }).click()

 await expect(page).toHaveURL('https://demoqa.com/alerts');

  page.on('dialog', async dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.accept();
  });

  await page.locator('xpath=//button[@id="alertButton"]').click();
});


test('Table', async ({ page }) => {
  await page.goto('https://demoqa.com/');  

  await page.getByText('Book Store Application').click()

  await  page.locator("//span[@class='text' and contains(text(), 'Book Store')]").first().click();
 
const targetRow = page.locator('table tr', {  
has: page.locator('td').filter({ hasText: /^Learning/ })
});


await targetRow.locator('td:nth-child(2)').click();

await expect(page.getByRole('button', { name: 'Back To Book Store' })).toBeVisible();

await page.screenshot({ path: 'tests/screenshots/book-details.png' });

});


test('Text Box', async ({ page }) => {

  await page.goto('https://demoqa.com/');  
  await page.getByText('Elements').click();
  await page.getByPlaceholder('Full Name').fill('John Doe');
  await page.getByPlaceholder('name@example.com').fill('john@example.com');
  await page.getByPlaceholder('Current Address').fill('123 Main St');
  await page.locator('//textarea[@id="permanentAddress"]').fill('456 Elm St');
  await page.getByRole('button', { name: 'Submit' }).click();
 

  const nameText = await page.getByRole('paragraph', { name: 'name' }).textContent();
  console.log(`Retrieved name: ${nameText}`);

});


test('CheckBox', async ({ page }) => {
  await page.goto('https://demoqa.com/');  
  await page.getByText('Elements').click();
  await page.getByText('Check Box').click();

  await page.locator("//span[@aria-label='Select Home']").check();

  await page.locator(".rc-tree-switcher_close").click();
  await expect(page.getByLabel('Select Desktop')).toBeChecked();
  
  const actualResult = await page.locator("//div[@id='result']").textContent();
  const ExpectedResult = 'You have selected :homedesktopdocumentsdownloadsnotescommandsworkspaceofficewordFileexcelFilereactangularveupublicprivateclassifiedgeneral';
  await expect(actualResult).toBe(ExpectedResult);
  
})