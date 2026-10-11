# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.ts >> Links
- Location: tests\example.spec.ts:133:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('link', { name: 'Home', exact: true }) resolved to 2 elements:
    1) <a id="simpleLink" target="_blank" href="https://demoqa.com">Home</a> aka locator('#simpleLink')
    2) <a target="_blank" id="dynamicLink" href="https://demoqa.com">Home</a> aka locator('#dynamicLink')

Call log:
  - waiting for getByRole('link', { name: 'Home', exact: true })

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
            - link "Links" [active] [ref=e47]:
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
    - generic [ref=e125]:
      - heading "Links" [level=1] [ref=e126]
      - heading [level=5] [ref=e127]:
        - strong [ref=e128]: Following links will open new tab
      - paragraph [ref=e129]:
        - link "Home" [ref=e130] [cursor=pointer]:
          - /url: https://demoqa.com
      - paragraph [ref=e131]:
        - link "HomeRqyPo" [ref=e132] [cursor=pointer]:
          - /url: https://demoqa.com
      - heading [level=5] [ref=e133]:
        - strong [ref=e134]: Following links will send an api call
      - paragraph [ref=e135]:
        - link "Created" [ref=e136] [cursor=pointer]:
          - /url: "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      - paragraph [ref=e137]:
        - link "No Content" [ref=e138] [cursor=pointer]:
          - /url: "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      - paragraph [ref=e139]:
        - link "Moved" [ref=e140] [cursor=pointer]:
          - /url: "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      - paragraph [ref=e141]:
        - link "Bad Request" [ref=e142] [cursor=pointer]:
          - /url: "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      - paragraph [ref=e143]:
        - link "Unauthorized" [ref=e144] [cursor=pointer]:
          - /url: "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      - paragraph [ref=e145]:
        - link "Forbidden" [ref=e146] [cursor=pointer]:
          - /url: "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      - paragraph [ref=e147]:
        - link "Not Found" [ref=e148] [cursor=pointer]:
          - /url: "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
  - contentinfo [ref=e155]:
    - generic [ref=e156]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
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
  54  |   const nameText = await page.locator('#nsme').textContent();
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
> 141 |     page.getByRole('link', { name: 'Home' , exact: true }).click(),
      |                                                            ^ Error: locator.click: Error: strict mode violation: getByRole('link', { name: 'Home', exact: true }) resolved to 2 elements:
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
  155 | })
  156 | 
  157 | test('APICall', async ({ page, request }) => {
  158 |    await page.goto('https://demoqa.com/');
  159 |    await page.getByText('Elements').click();
  160 |    await page.getByRole('link', { name: 'Links', exact: true }).click();
  161 | 
  162 | 
  163 |    const [response] = await Promise.all([
  164 |     page.waitForResponse('**/created'),
  165 |     page.getByText('Created', { exact: true }).click()
  166 |   ]);
  167 | 
  168 |   console.log('Status:', response.status());
  169 |   console.log('URL:', response.url());
  170 |   expect(response.status()).toBe(201)
  171 | 
  172 |   const [response2] = await Promise.all([
  173 |     page.waitForResponse('**/no-content'),
  174 |     page.getByText('No Content', { exact: true }).click()
  175 |   ]);
  176 | 
  177 |   console.log('Status:', response2.status());
  178 |   console.log('URL:', response2.url());
  179 |   expect(response2.status()).toBe(204);
  180 | 
  181 |   const [response3] = await Promise.all([
  182 |     page.waitForResponse('**/moved'),
  183 |     page.getByText('Moved', { exact: true }).click()
  184 |   ]);
  185 | 
  186 |   console.log('Status:', response3.status());
  187 |   console.log('URL:', response3.url());
  188 |   expect(response3.status()).toBe(301);
  189 | 
  190 | 
  191 |   const [response4]  = await Promise.all([
  192 |     page.waitForResponse('**/bad-request'),
  193 |     page.getByText('Bad Request', { exact: true }).click()
  194 |   ]);
  195 | 
  196 |   console.log('Status:', response4.status());
  197 |   console.log('URL:', response4.url());
  198 |   expect(response4.status()).toBe(400);
  199 | 
  200 |   const [response5] = await Promise.all([
  201 |     page.waitForResponse('**/unauthorized'),
  202 |     page.getByText('Unauthorized', { exact: true }).click()
  203 |   ]);
  204 | 
  205 |   console.log('Status:', response5.status());
  206 |   console.log('URL:', response5.url());
  207 |   expect(response5.status()).toBe(401);     
  208 | 
  209 |   const [response6] =  await Promise.all([
  210 |     page.waitForResponse('**/forbidden'),
  211 |     page.getByText('Forbidden', { exact: true }).click()
  212 |   ]);
  213 | 
  214 |   console.log('Status:', response6.status());
  215 |   console.log('URL:', response6.url());
  216 |   expect(response6.status()).toBe(403);  
  217 | 
  218 |    const [response7] =  await Promise.all([
  219 |     page.waitForResponse('**/invalid-url'),
  220 |     page.getByText('Not Found', { exact: true }).click()
  221 |   ]);
  222 | 
  223 |   console.log('Status:', response7.status());
  224 |   console.log('URL:', response7.url());
  225 |   expect(response7.status()).toBe(404);  
  226 | 
  227 | 
  228 | });
  229 | 
  230 | test('Broken Links', async ({ page }) => {
  231 |   await page.goto('https://demoqa.com/');
  232 |   await page.getByText('Elements').click();
  233 |   await page.getByRole('link', { name: 'Broken Links - Images', exact: true }).click();
  234 |   
  235 |   
  236 | })
  237 | 
  238 | 
  239 | test('Upload and Download', async ({ page }) => {
  240 |     await page.goto('https://demoqa.com/');
  241 |     await page.getByText('Elements').click();
```