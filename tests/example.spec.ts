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
