# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.ts >> Text Box
- Location: tests\example.spec.ts:42:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://demoqa.com/", waiting until "load"

```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | 
  4   | test('Alerts, windowhandles', async ({ page }) => {
  5   |   await page.goto('https://demoqa.com/');
  6   |   await page.getByText('Alerts, Frame & Windows').click()
  7   |   await page.getByRole('link', { name: 'Alerts' }).click()
  8   | 
  9   |  await expect(page).toHaveURL('https://demoqa.com/alerts');
  10  | 
  11  |   page.on('dialog', async dialog => {
  12  |     console.log(`Dialog message: ${dialog.message()}`);
  13  |     await dialog.accept();
  14  | 
  15  |   });
  16  | 
  17  |   await page.locator('xpath=//button[@id="alertButton"]').click();
  18  | });
  19  | 
  20  | 
  21  | test('Table', async ({ page }) => {
  22  |   await page.goto('https://demoqa.com/');  
  23  | 
  24  |   await page.getByText('Book Store Application').click()
  25  | 
  26  |   await page.locator("//span[@class='text' and contains(text(), 'Book Store')]").first().click();
  27  |  
  28  | const targetRow = page.locator('table tr', {  
  29  | has: page.locator('td').filter({ hasText: /^Learning/ })
  30  | });
  31  | 
  32  | 
  33  | await targetRow.locator('td:nth-child(2)').click();
  34  | 
  35  | await expect(page.getByRole('button', { name: 'Back To Book Store' })).toBeVisible();
  36  | 
  37  | await page.screenshot({ path: 'tests/screenshots/book-details.png' });
  38  | 
  39  | });
  40  | 
  41  | 
  42  | test('Text Box', async ({ page }) => {
  43  | 
> 44  |   await page.goto('https://demoqa.com/');  
      |              ^ Error: page.goto: Test timeout of 30000ms exceeded.
  45  |   await page.getByText('Elements').click();
  46  |   await page.getByRole('link', { name: 'Text Box' }).click()
  47  |   await page.getByPlaceholder('Full Name').fill('John Doe');
  48  |   await page.getByPlaceholder('name@example.com').fill('john@example.com');
  49  |   await page.getByPlaceholder('Current Address').fill('123 Main St');
  50  |   await page.locator('//textarea[@id="permanentAddress"]').fill('456 Elm St');
  51  |   await page.getByRole('button', { name: 'Submit' }).click();
  52  |  
  53  | 
  54  |   const nameText = await page.getByRole('paragraph', { name : /Name:.*/ }).textContent();
  55  |   console.log(`Retrieved name: ${nameText}`);
  56  | 
  57  | });
  58  | 
  59  | 
  60  | test('CheckBox', async ({ page }) => {
  61  |   await page.goto('https://demoqa.com/');  
  62  |   await page.getByText('Elements').click();
  63  |   await page.getByText('Check Box').click();
  64  | 
  65  |   await page.getByLabel('Select Home').check();
  66  | 
  67  |   await page.locator(".rc-tree-switcher_close").click();
  68  |   await expect(page.getByLabel('Select Desktop')).toBeChecked();
  69  |   
  70  |   const actualResult = await page.locator("//div[@id='result']").textContent();
  71  |   const ExpectedResult = 'You have selected :homedesktopdocumentsdownloadsnotescommandsworkspaceofficewordFileexcelFilereactangularveupublicprivateclassifiedgeneral';
  72  |   await expect(actualResult).toBe(ExpectedResult);
  73  | 
  74  | })
  75  | 
  76  | test('Webtables', async ({ page }) => {
  77  |   await page.goto('https://demoqa.com/');  
  78  |   await page.getByText('Elements').click();
  79  |   await page.getByText('Web Tables').click();
  80  |     
  81  |   await page.getByRole('button', { name: 'Add' }).click();
  82  |   await page.getByPlaceholder('First Name').fill('Gokul');
  83  |   await page.getByPlaceholder('Last Name').fill('Doe');
  84  |   await page.getByPlaceholder('name@example.com').fill('john@example.com');
  85  | 
  86  |   await page.getByPlaceholder('Age').fill('30');
  87  |   await page.getByPlaceholder('Salary').fill('50000');
  88  |   await page.getByPlaceholder('Department').fill('Engineering');
  89  |   await page.getByRole('button', { name: 'Submit' }).click();
  90  | 
  91  |   await expect(page.locator('table tbody tr', { hasText: 'Gokul' })).toBeVisible();
  92  | 
  93  |   await page.getByPlaceholder('Type to search').fill('Cierra');
  94  | 
  95  |   await expect(page.locator('table tbody tr', { hasText: 'Cierra' })).toBeVisible();
  96  | 
  97  |     await page.getByRole('button', { name: 'Add' }).click();
  98  |     await page.locator('#submit').click();
  99  | 
  100 |     const isValid = await page.locator('#firstName').evaluate((el: HTMLInputElement) => el.checkValidity());
  101 |     expect(isValid).toBe(false);
  102 | 
  103 | })
  104 | 
  105 | 
  106 | test('Button', async ({ page }) => {
  107 | 
  108 |   await page.goto('https://demoqa.com/');
  109 |   await page.getByText('Elements').click();
  110 |   await page.getByText('Buttons').click();
  111 |   
  112 |   await page.getByRole('button', { name: 'Double Click Me' }).dblclick();
  113 |   const expectedMessage = 'You have done a double click';
  114 |   const actualMessage = await page.locator("#doubleClickMessage").textContent();
  115 |   expect(actualMessage).toBe(expectedMessage);
  116 | 
  117 |   await page.getByRole('button', { name: 'Right Click Me' }).click({ button: 'right' });
  118 |   const expectedMessage1 = 'You have done a right click';
  119 |   const actualMessage1 = await page.locator("#rightClickMessage").textContent();
  120 |   expect(actualMessage1).toBe(expectedMessage1);
  121 | 
  122 |   
  123 |   await page.getByRole('button', { name: 'Click Me' , exact: true}).click();
  124 |   const expectedMessage2 = 'You have done a dynamic click';
  125 |   const actualMessage2 = await page.locator("#dynamicClickMessage").textContent();
  126 |   expect(actualMessage2).toBe(expectedMessage2);
  127 |   
  128 |   
  129 | 
  130 | })
  131 | 
  132 | 
  133 | test('Links', async ({ page, context }) => {
  134 | 
  135 |    await page.goto('https://demoqa.com/');
  136 |    await page.getByText('Elements').click();
  137 |    await page.getByRole('link', { name: 'Links', exact: true }).click();
  138 |   
  139 |     const [newPage] = await Promise.all([
  140 |     context.waitForEvent('page'),
  141 |     page.getByRole('link', { name: 'Home' , exact: true }).click(),
  142 |   ]);
  143 | 
  144 |   await newPage.waitForLoadState();
```