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
Error: locator.textContent: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('paragraph', { name: 'name' })

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link [ref=e4] [cursor=pointer]:
      - /url: https://demoqa.com
  - generic [ref=e8]:
    - generic [ref=e11]:
      - generic [ref=e12]:
        - generic [ref=e13] [cursor=pointer]: Elements
        - list [ref=e25]:
          - listitem [ref=e26] [cursor=pointer]:
            - link "Text Box" [ref=e27]:
              - /url: /text-box
          - listitem [ref=e30] [cursor=pointer]:
            - link "Check Box" [ref=e31]:
              - /url: /checkbox
          - listitem [ref=e34] [cursor=pointer]:
            - link "Radio Button" [ref=e35]:
              - /url: /radio-button
          - listitem [ref=e38] [cursor=pointer]:
            - link "Web Tables" [ref=e39]:
              - /url: /webtables
          - listitem [ref=e42] [cursor=pointer]:
            - link "Buttons" [ref=e43]:
              - /url: /buttons
          - listitem [ref=e46] [cursor=pointer]:
            - link "Links" [ref=e47]:
              - /url: /links
          - listitem [ref=e50] [cursor=pointer]:
            - link "Broken Links - Images" [ref=e51]:
              - /url: /broken
          - listitem [ref=e54] [cursor=pointer]:
            - link "Upload and Download" [ref=e55]:
              - /url: /upload-download
          - listitem [ref=e58] [cursor=pointer]:
            - link "Dynamic Properties" [ref=e59]:
              - /url: /dynamic-properties
      - generic [ref=e62]: Forms
      - generic [ref=e75]: Alerts, Frame & Windows
      - generic [ref=e87]: Widgets
      - generic [ref=e100]: Interactions
      - generic [ref=e112]: Book Store Application
    - generic [ref=e124]:
      - heading "Text Box" [level=1] [ref=e125]
      - generic [ref=e127]:
        - generic [ref=e128]:
          - generic [ref=e129]: Full Name
          - textbox "Full Name" [ref=e132]: John Doe
        - generic [ref=e133]:
          - generic [ref=e134]: Email
          - textbox "name@example.com" [ref=e137]: john@example.com
        - generic [ref=e138]:
          - generic [ref=e139]: Current Address
          - textbox "Current Address" [ref=e142]: 123 Main St
        - generic [ref=e143]:
          - generic [ref=e144]: Permanent Address
          - textbox [ref=e147]: 456 Elm St
        - button "Submit" [active] [ref=e150] [cursor=pointer]
        - generic [ref=e152]:
          - paragraph [ref=e153]: Name:John Doe
          - paragraph [ref=e154]: Email:john@example.com
          - paragraph [ref=e155]: Current Address :123 Main St
          - paragraph [ref=e156]: Permananet Address :456 Elm St
    - iframe [ref=e165]:
      - generic [ref=f8e2]:
        - link [ref=f8e4] [cursor=pointer]:
          - /url: https://ad.doubleclick.net/pcs/click?xai=AKAOjsvqfhqaSyIWk7DLrGSMBVKaj66CY88ZkjqjqVTuwQTSEVlqiF0727sXUJbEw1KPAuHBUYNy0F3dMFPfaT_ZV6eIGyT0XctvMQxrUGtqsiVc4o6E6NhHEDk5eP6FCYiVK4w5WEgk1tnOfKEWR6xlunTI5OGJxPanLBIMcn4GJxQ4FktlMo02yen-Vfe2_Id9W_Px2-YvFx7fMt1QqCBhkutRsA_Vww-lv3gyHCwpnSqUyUkW9LtpoQEuEVr38KCWjBi_RQ2rgZPndMLgPhKQtycpWkgTgnZIu22kogKnJp3tREh9YBcl57YE4x7AIaMqy2naYRC6lQ81sw6jR2rmzyX9xORrx0ceTSkKj5aqlIjKRXBZtv54Bm9o-dequ3IKWz0Kb4mqD7fJvx8_kZB8DxJmk11_vqw0h8LUaGwHdOtKUqXAl31NGSzFFqn2NpKOBO8QQajK0oOEjD_tFJTQj7FpAEHMY1FYzr-Huioo-1yAGdNCgMLLMJjUmbF0u-UVaploabmMLYLJ29uxyTzj5fJQGr5lwGpvY_mQ0x2C6vSOwd1G6cZl5mmoIdbSS0Wu83kl0hOK3ayyrNOUD3BjnC8Hwq03t9_EagYHdsA5XgJrOXUc-RqpUs8rJvS3xOpRXmsi8ARkdBGvfFgx2MEtEYTtb5f6CKYXEHrUe-n1IpuqvhZPifvK50fQVL-s3g_UAf6sQdAEVoGl7-7JCVnJtRn1-gg_ORbg0OW_5VoIwszQcFNPmW4UYqFDvXOihJ2d_60b5hw7ZqOdUMpBMaBnNBvYFgS0nxNFQObFssZpbNANjiFtHLMwwrojAJa0NvXmCcNmTlLOM3GiIk-c5f1xvAG6cD3br8ADRzMmSGXyJDlb7dxz0QxiFBGrUpl3YfqrmHFPF4tJx87jbvHGCucm9LvZa7cBw5sXSIpB6rse1QT3f-YE5mPjQEnbumcP5ZPXxcwncZuAGjjxWb0tmJY74NuPnWC97vzX6vPIkMb5rVU_-uv9xZtEZ63YO7RHI4qI11RzPi1PQNpkz-0wdJlpTjlT6seU6bYSBYHjYwOy_bmPtftpa9vuz-nRqunohvMYktpjLmtHYO9yrwEk8od_DR7m1bB0K6VhpS40JioNcQL4sjgZxpfzvjEpdLimYtRIbZhc8uKfCamn9zq7PYYypvUO2M83lL0-2FnlNFbuE9XyWcyiHRaOyTBPTmj9epLXEk7I-l5Guu1FuEif9n4as4iNkbFGWOph52PjAJ9FZWJTjIvRooWYf1HgpNdVg1qRUauHIxJHHrrzRlHxgHnQawVjcdh4Nd3sPU9vPBHEtgCnGyZNpMQyrhiNZxytF5gtd-bR60SWJrO_8UBNfoy--d7Orij1BpWES1n517Py2vX9TsV8na3Aszo5eCZaOcJG0Q-X73tCaqL6NHYkwx6H8ifWBMaEBf6MBxyj5OhKzo4n3TgNHzQ1LQh3gLcmL4RctjlEbY82HdBwGcGZoWzwkWJvWz8dCdZ-zKM5cm6wDmjJ7DIdUGkY1viSprr2S4ejv3mEsKuXJQ6YSiMM7EB3cHj1ytjSCHtWaokPGH61GAW19DWUsYjcGZYLdDuZ0YAfMyZk32A7M6dA4X9gre6f4nR2NpcaAfGlyv0DoYHEE6R5gT98CV1F9uuXP-A-c6wgbSmRvJTT6kbLy3_7A5SNHt1WmtvpQ4QGUjdL9ZuCU6EStISyVddQQsKt3Tbb1F0qioehclcvUJaBWPbbq4PPo6rz3uuVlVWIwUmF66DB9lJgZfeyyzHQEVEVK03KPcrXZ38kVdW-vvNEsJcH-9saqyhe3_Z2bdqHwfwXBwTigViVBnVcend6XV-uhpwGOjucvGuOLBGOMbXCg1pRcUF9rqHRPaQCK9mRXZNc41h_TpRf6Ng6RkniC-LdhSqR7Sp-vNebxQ5OFDLZUo-uQ3SbVDUJ8lET7m7bOmVaXLnq6Q2l5sn4Cxco13LposQOlog&sai=AMfl-YR_2DvMeNg2ALUaPobIVkJQulIAWBbg5Jhsc3c-iYFI7kKwIJuD61Ot0axsSpzBAilAPg8GxA32MMqS1Gq1TMu2QG-8ddZP1RNRI2vY8BDPcOvA_qeF0vcZUy7luCCWeWrAXZauEnvNJEPfxcwQHszW6vliu1LpmGqBqhUksAYUp3UOCXhsP1OjuKqddg4PDx1vV8_4rAdwwG8JUM-GoC0wHq3HefpTZRfke86V2YJ1mzynB7kt4GyAd5Pzn6Qi0PuMhp8hexMjQWG46M_cyAJnEAc61Rc5OQKOGrhYaye4c12qPycYEtBHbMWHK0I_zGiy3K0Rp3FUBUGv-FYDhFEthMDi1pvpkhGz0XcWGNF5MlmP9hUkq0UqlP-2O3SgxLSsJZ8lDbVyfKPART84fn8xou2fbm-J9aWhUWcGL3ikPiYI-udr7hI87td0e1rwOCS6zzhvoOlKCh-jvJBcWZe-t9-rd3-eyovDM2lcFLeN7sBO0wsRhkod9QX2TGCweJYkhV7ZHGhYf1OkWxGvI8fh6WHp8oik3paUd5p54F97E7ew8WQ92-KYPqsADAl4uvxWldYZB1VzB9qV7KcT5RonKd4QqDAm3qLRl8KCUOLHXjGIHb_kH2F-A1q1Fr8vIXL7y5X5_207mNYqHsCKcWIGI9HWjYlYyaf13RYeSjYtVkJFW3PALYpwjrQBEFqoYH3O5Q64aOdA1TKhMNekYs7WbVgrNOW4Gd3bw4MRyq22r-R_yqGTldTunS3300ZH7dWPwinTd6VVlvq-wIsm-GyHvf-rBnbbQoUKT9rXmePbhhZnjfTej1ltmCA74dngblKkZxroF-J5aQM2sHZAJk4MBsgd2wXDS1Kf_y76ktCZ83RyRLD6C5SmRkK6Er2sJjAJdfgUZictVv5SXNXd8qxX2u3POX-tdS33qwVHpCSeUrBZPXNarW8GJWEyq2LhuGs0bjaMx6WShVnL_DXaySzbKhjAzsE6yMn49hNplsmsX-Ktd1C6Wzne_HnS&sig=Cg0ArKJSzJhrDzIBAXoK&fbs_aeid=%5Bgw_fbsaeid%5D&crd=aHR0cHM6Ly9tYXJ1dGlzdXp1a2kuY29t&urlfix=1&adurl=https://www.marutisuzuki.com/arena/brezza%3Futm_source%3Ddv360_display%26utm_medium%3Dcpm_cin%26utm_campaign%3D20328217428_ao%26utm_content%3D739245152%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D20328217428
          - img "Advertisement" [ref=f8e5]
        - button [ref=f8e12] [cursor=pointer]
  - contentinfo [ref=e166]:
    - generic [ref=e167]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
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
  44  |   await page.goto('https://demoqa.com/');  
  45  |   await page.getByText('Elements').click();
  46  |   await page.getByRole('link', { name: 'Text Box' }).click()
  47  |   await page.getByPlaceholder('Full Name').fill('John Doe');
  48  |   await page.getByPlaceholder('name@example.com').fill('john@example.com');
  49  |   await page.getByPlaceholder('Current Address').fill('123 Main St');
  50  |   await page.locator('//textarea[@id="permanentAddress"]').fill('456 Elm St');
  51  |   await page.getByRole('button', { name: 'Submit' }).click();
  52  |  
  53  | 
> 54  |   const nameText = await page.getByRole('paragraph', { name: 'name' }).textContent();
      |                                                                        ^ Error: locator.textContent: Test timeout of 30000ms exceeded.
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
  145 |   await expect(newPage).toHaveURL('https://demoqa.com/');
  146 | 
  147 |   const [newPage1] = await Promise.all([
  148 |     context.waitForEvent('page'),
  149 |     page.locator('#dynamicLink').click(),
  150 |   ]);
  151 |  
  152 |   await newPage1.waitForLoadState();
  153 |   await expect(newPage1).toHaveURL('https://demoqa.com/');
  154 |   
```