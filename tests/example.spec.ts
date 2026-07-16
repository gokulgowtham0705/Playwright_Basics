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


