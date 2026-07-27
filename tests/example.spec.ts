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

  await page.locator("//span[@class='text' and contains(text(), 'Book Store')]").first().click();
 
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

  await page.getByLabel('Select Home').check();

  await page.locator(".rc-tree-switcher_close").click();
  await expect(page.getByLabel('Select Desktop')).toBeChecked();
  
  const actualResult = await page.locator("//div[@id='result']").textContent();
  const ExpectedResult = 'You have selected :homedesktopdocumentsdownloadsnotescommandsworkspaceofficewordFileexcelFilereactangularveupublicprivateclassifiedgeneral';
  await expect(actualResult).toBe(ExpectedResult);

})

test('Webtables', async ({ page }) => {
  await page.goto('https://demoqa.com/');  
  await page.getByText('Elements').click();
  await page.getByText('Web Tables').click();
    
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByPlaceholder('First Name').fill('Gokul');
  await page.getByPlaceholder('Last Name').fill('Doe');
  await page.getByPlaceholder('name@example.com').fill('john@example.com');

  await page.getByPlaceholder('Age').fill('30');
  await page.getByPlaceholder('Salary').fill('50000');
  await page.getByPlaceholder('Department').fill('Engineering');
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.locator('table tbody tr', { hasText: 'Gokul' })).toBeVisible();

  await page.getByPlaceholder('Type to search').fill('Cierra');

  await expect(page.locator('table tbody tr', { hasText: 'Cierra' })).toBeVisible();

    await page.getByRole('button', { name: 'Add' }).click();
    await page.locator('#submit').click();

    const isValid = await page.locator('#firstName').evaluate((el: HTMLInputElement) => el.checkValidity());
    expect(isValid).toBe(false);

})


test('Button', async ({ page }) => {

  await page.goto('https://demoqa.com/');
  await page.getByText('Elements').click();
  await page.getByText('Buttons').click();
  
  await page.getByRole('button', { name: 'Double Click Me' }).dblclick();
  const expectedMessage = 'You have done a double click';
  const actualMessage = await page.locator("#doubleClickMessage").textContent();
  expect(actualMessage).toBe(expectedMessage);

  await page.getByRole('button', { name: 'Right Click Me' }).click({ button: 'right' });
  const expectedMessage1 = 'You have done a right click';
  const actualMessage1 = await page.locator("#rightClickMessage").textContent();
  expect(actualMessage1).toBe(expectedMessage1);

  
  await page.getByRole('button', { name: 'Click Me' , exact: true}).click();
  const expectedMessage2 = 'You have done a dynamic click';
  const actualMessage2 = await page.locator("#dynamicClickMessage").textContent();
  expect(actualMessage2).toBe(expectedMessage2);
  
  

})


test('Links', async ({ page, context }) => {

   await page.goto('https://demoqa.com/');
   await page.getByText('Elements').click();
   await page.getByRole('link', { name: 'Links', exact: true }).click();
  
     const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('link', { name: 'Home' , exact: true }).click(),
  ]);

  await newPage.waitForLoadState();
  await expect(newPage).toHaveURL('https://demoqa.com/');

  const [newPage1] = await Promise.all([
    context.waitForEvent('page'),
    page.locator('#dynamicLink').click(),
  ]);
 
  await newPage1.waitForLoadState();
  await expect(newPage1).toHaveURL('https://demoqa.com/');
  
})

test('APICall', async ({ page, request }) => {
   await page.goto('https://demoqa.com/');
   await page.getByText('Elements').click();
   await page.getByRole('link', { name: 'Links', exact: true }).click();


   const [response] = await Promise.all([
    page.waitForResponse('**/created'),
    page.getByText('Created', { exact: true }).click()
  ]);

  console.log('Status:', response.status());
  console.log('URL:', response.url());
  expect(response.status()).toBe(201)

  const [response2] = await Promise.all([
    page.waitForResponse('**/no-content'),
    page.getByText('No Content', { exact: true }).click()
  ]);

  console.log('Status:', response2.status());
  console.log('URL:', response2.url());
  expect(response2.status()).toBe(204);

  const [response3] = await Promise.all([
    page.waitForResponse('**/moved'),
    page.getByText('Moved', { exact: true }).click()
  ]);

  console.log('Status:', response3.status());
  console.log('URL:', response3.url());
  expect(response3.status()).toBe(301);


  const [response4]  = await Promise.all([
    page.waitForResponse('**/bad-request'),
    page.getByText('Bad Request', { exact: true }).click()
  ]);

  console.log('Status:', response4.status());
  console.log('URL:', response4.url());
  expect(response4.status()).toBe(400);

  const [response5] = await Promise.all([
    page.waitForResponse('**/unauthorized'),
    page.getByText('Unauthorized', { exact: true }).click()
  ]);

  console.log('Status:', response5.status());
  console.log('URL:', response5.url());
  expect(response5.status()).toBe(401);     

  const [response6] =  await Promise.all([
    page.waitForResponse('**/forbidden'),
    page.getByText('Forbidden', { exact: true }).click()
  ]);

  console.log('Status:', response6.status());
  console.log('URL:', response6.url());
  expect(response6.status()).toBe(403);  

   const [response7] =  await Promise.all([
    page.waitForResponse('**/invalid-url'),
    page.getByText('Not Found', { exact: true }).click()
  ]);

  console.log('Status:', response7.status());
  console.log('URL:', response7.url());
  expect(response7.status()).toBe(404);  


});

test('Broken Links', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.getByText('Elements').click();
  await page.getByRole('link', { name: 'Broken Links - Images', exact: true }).click();
  
  
})


test('Upload and Download', async ({ page }) => {
    await page.goto('https://demoqa.com/');
    await page.getByText('Elements').click();
    await page.getByRole('link', { name: 'Upload and Download', exact: true }).click();

    const [download] = await Promise.all([
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Download' }).click()
    ]);
    console.log('Downloaded file:', download.suggestedFilename());
    expect(download.suggestedFilename()).toBe('sampleFile.jpeg');

   await page.locator('#uploadFile').setInputFiles("C:\\Users\\GOKUL GOWTHAM\\Downloads\\sampleFile.jpeg");
  

  const uploadedText = page.locator('#uploadedFilePath');
  await expect(uploadedText).toBeVisible();
  await expect(uploadedText).toContainText('sampleFile.jpeg');
})

test('Dynamic Properties', async ({ page }) => { 
   await page.goto('https://demoqa.com/');
   await page.getByText('Elements').click();
   await page.getByRole('link', { name: 'Dynamic Properties', exact: true }).click();

   const button = page.locator('#enableAfter');
   await expect(button).toBeEnabled({timeout: 10000});
   await button.click();

}
)

