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
  - waiting for locator('#nsme')

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
    - generic [ref=e162]:
      - iframe [ref=e165]:
        - generic [ref=f10e2]:
          - link [ref=f10e4] [cursor=pointer]:
            - /url: https://ad.doubleclick.net/pcs/click?xai=AKAOjsvhtqry7F7f8cs344QUqxDfY-9udt5VHPGQBakSVYUqD5FWH6UXS5wPumcoVebuwrh2yiGFyqGsiQLoNTtWnkW9nXp0IJYqc4XZUKVeY0tqbBl1rMyotiXx3PFhm98QQeoUyEZrY1QlSGasgLS0qkeoLLTqxpUGgx4XTgPH2AXm837IeXJE9cYJ4lOj3aASPD8qlIWWnee54OwENq1YUAFPfhmTILCOhv_R97ToCrdUY5h_ao5fu7UYyURQV1qqhJ8eNAx67ATgOiURlybOtQ5rGzDu1Jnaf4pH7kA66rJQc-WexoGPKJX6NlTPbuDAYS1hU5hQdDaadRs_K1siaXkc8xbnRONQ2G1cz_Te7I-X6HgJjLAxZ0tcfgw1AJh6DBpsQY6o4WypCQ8UOGYl7NiV6uDqID_P-VZaFwCq-TpAMkhQlm0xE_0ZX9FPSvfcNom_mCQ-3Alk2LWz4o2LoIaUGz5nYrs9TJhlmkB1K91mvCtw2_I7KnlNDGc0FqVrgUyTI-u6X82qomzZ11VN8Wzv5VvVnAz_JdowQxd7qV7rHdx2xVOk1dw7bBo8-d929sm04CI8nzaCuiphsZH8Q4pkDFZBOW43OIQAdfHNvg2PdW_ETNjh36nqYdWn2T2xu05n5YCPS9WEcf33Nd0_k2ocDW6d_RQ7bo-yFQVWOo2AKEsUgYO9DsmCzpz1fWbJZU5yfk8lBi_wZEqDYl0ldfnFuUUwOKdZdU-FMJ8V_rWxkgi9Q18MCskNunvo2kicWar9qxPdVkXTm2z9EVbcwNAdI2CZrudSncP0Y8J6YegAc-FWEESuMbaxk5183wnwcjFFlS-Xt4v3zkWRkm2omzK43oymGYKwMKRWYn-C_GoHSi6ON0BQPCi5xNFL-Ma--By4YIDJpLYpvT7cWbYErdme7ijP_ZXeR8KfGEx8CfndV7Qrky6FXpKPsCLYBtHZoCZ3ygBZx2bpwTe7fGNIGNf8qfq1xE4zqocYRIEsDFL-UGMUca8UC5FinmGr4txnaiIxlbkKqUIdVH7T3aMPuAigBS8P39mx8iKRpmq0ZeCy3n8MrO7P-99Si_HsGhh2S8C65eszUhKuj4RqesAgtaTH0ZSoBK-01A8vQF_NL02_2b8AaTaFa-RJ29TTcxr7DDMDVAxWAF_9Hwoh3TmKgwlSueK6NdEieS_R1ygHUhOeXbkCDrteDx4KdT82JVxOk5jyTAxEAf_fApFLsMaaI-vmA_eaHLLHeSUVC3k5tq7-eHkPdMpwSm17SJG2pNW3vBJrU0B93t54H52AEgOPYJR8xUtIM_0KlrRO4L8a9X1ObpHdAB8fmGNC27qYnWnjQsqe87cJpkQQkEE2rzB83cxwcel03WKA651XFG2CvYz0cogtAMQM8UBjw0EXE07LvAJ_7bG60ILPGp5Nx8ouQYLu6vJPCxU5pljLAIYkeb_DTguvJ6j7zUcn8uvS2ZBP4_4X6Hgi4gVQYCUGOv6I96tvaFXDC8Z97DQ8nJrhYTsZHLir5OtJXLObTotxoZjqlrEOgIXGK7RNuFNosNdfc1bIoOLQiRGExtjzGPIOJzoIWVVBU5lYkYGCV-ITHIlnd9IOtTIMJsyYLpRZx0Rm0rzNzkVQ2ku-zKv3k5i6Nl9s8RSAA_9XJ5pLLsi4jge9CSqHWu9asNMy2hufnoS5c5T5EewCyNRI-e5gtKtGHFgPCJWS8EgV1QQL2KDLi9VUAUPonRUQiq-wODo7Z2YfO4A9pdiBpkGXUUToBWi--J4Ulq1_bGDGcUCFmH4PgJNoAJm6JtQkoTeqjXq_YMBVpnnJQJpNLBdGz2PHjXXjBlF2GjVdrHfrLrVXy_deuh41fnlme7PQSubiZD1X-reRALstNwFOtkCET5xgHyomTz5bATJyhOD5Q6SI7i68ew_sfSwJvO4GO1CKiEd4EZya4lV505PHOHI_7s5DvkaRXSCqLAYXa5U_rwZJ2g21Ln8xaCi-B_3eGHhzehVRFw&sai=AMfl-YRz4yn8imZ-na-OfPoiz3_9ucF4GtSj2_ZO4Of61CvmvyKEt9dmJQGhD-YdEcMrv7LUVXAVolJ2kPj_tFuFu8x1nWQZo3dSO0KwjNXxZwxrupKKzl6hcdZpbiLfZ6qYMnDA3f6bRdpbElM0Vc9y-1M48dEh-QRDqzB9q0568x8yco1FumYMJlljAKHNTOhKLQLVUyntJcyzyoSVlcu4P0wOuXLNvGl0IVQoHtm76fAZEJmLhRtlDRJ6qGciitnCTg8OV_JO0dLL_EkguPamkmGncwaT-lb6ii9oqrefubVH63o9LnyR1aedNl3zrUSi1bK476RCxNIiaV_zUIAArFV6fXgTOqEYjMFcOhbcdjE9mpcwsBOHmf8k2JWugZJmmcH87Qjdh8C1fzbsWnC2WkPTcdZiFXJhyydX6JWmMPemmVDTasoHTix-oc753jjqIIs6nsCzHqsi5-8QrD3A8PNF_jjOHjRtnx0DuOse68kg7zE62_aF4jmMWZ1FbOfzCmMYp6O1K1Rxa02YOGa_bgx-OQX9Iqc6OW8NX5m9uvrYhA9_o95Fv_ljqBi_B0wMOJ2prz6z9RnxhZwfPLPeJLMZcgzL_Tjcahj-2OfULFNSsW2f8ldqrFAntEzf7IgA784awfp0AxqyNsnTCQWEukQy93x0e70bSLIoM91H2EBH3pEZl41Qk2BDmAFrEiCXuKCI6srPUhoOt6getvfj_ouf2RTOoSCErnpNsSBZ5Ir_XdUxgUmAh-KJmJzT79LtLVNkdE418blzaV27q3N9hNdqfR8jW2wf3-2_6RLBuys0nlBWsepJftJnXlzCJvLkbHlbTG1-hKyyTwM54dXrwU1dqxnPFsazx8VSukXq5yh3YhRN43SRHEcVYC66uK6fN3CXCNAQF2DVlzm4vvSVG2UGwAEEfcl8h-RCPFVCLZa2e0L-rolSvQ&sig=Cg0ArKJSzESIR4UU7d7b&fbs_aeid=%5Bgw_fbsaeid%5D&crd=aHR0cHM6Ly9tYXJ1dGlzdXp1a2kuY29t&urlfix=1&adurl=https://www.marutisuzuki.com/arena/brezza%3Futm_source%3Ddv360_display%26utm_medium%3Dcpm_cin%26utm_campaign%3D20328217428_ao%26utm_content%3D739245152%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D20328217428
            - img "Advertisement" [ref=f10e5]
          - button [ref=f10e12] [cursor=pointer]
      - iframe [ref=e168]:
        - generic [ref=f6e2]:
          - link [ref=f6e4] [cursor=pointer]:
            - /url: https://ad.doubleclick.net/pcs/click?xai=AKAOjssOPFlWbmKTjpdQS1q_hCwIiXofBtyNjw3UZXJoba-DYP0uxMtMHHb1qcjnns6rVEM75VEKSfvTxsYBdQUO4nKzOWckocm1KP5QGULnRQLk5t8z8nRkon79GVctqMnmWxUKmhensWHSdqhTDqtLoRCo_XRSEgeGPo-LW6d4xePoNKXQ6u_ppWbyxv5Emr0h5AjEho9Am736PArKovE1lgbt7SXJcdZXeHn4n7cmlIS0lTUqKOPNzBpz0D8eFzUoTAnMsxGgle-D8ZaZy3bI5XvQCYb5BqPKRt9XClAe2fnqk-_rAzqL51yge6NyNiwstrjpWknCdCl83bsxSENp0a8v8Lc8qHTZpCa8n6GeWnkPmGUJrZp5XVnIi4x7-eNcAinupY02bcagqPtc-K9NRf-RwVpxqVbC7oOV0Nh4JgEE3kLTIQ12QpGO6uqHq39dFS2sd5jXmFaI83050kR8CbtU_mCepjBkokkGaY5XGY_QW1Cxsj0_EohLUGu410-UeszWfg7UkL5yXrI7obK8IntQPYS1PacdP3zEvRjFPU92uIuikvsLtdYhKJx0bpYqC0uuEnpI79OXHzKo8M9K9Cn3R1FF7vR4p77YdDelGEAq-XTnqFWSk1zD2pnUS7LZVlHYpWKUoyXxlAHSV2r9_B1l05kJBq1LTFAlRT0pHvZrychFnJl9EG3CiYmPmEpAA-qQFlZbTjeoWJSlGFFE4FQe35PEq14d59U74aGsVx5nZ1C2kPSHEw041gipgP9AwChCyyTz8iAcTtwvgfXPubdh_NcXentc0HN_UBMLsuMspXOkiMp3Husv9JEh8_eKOZOwDcjyBpYv-X3qVpl0uhLXJ27vo8diNQzWozetKiqrbmAq62CwVVz5zEJomuvNqKHfNpH-3daJ0X1sblG4aaqi9P93iJ-MSxk2Gzq_4vFPW1PrP8xhnWx2m104kaJWVSQkKezLDlfXQ8gLVttmItClImFYybJd8l9ipIVAkWK5ahYrWaI4jrbwFxzkvfGSMXHDBulrv3Km54tqd-cdswEffxFoT9kQFp9PmFg6u8I77FjvbLGmNdax_MyYjRRWszsYA_PzFN0uRm4rk_UfGMKcuvxHC2iYTcbM5b_nqGotZzBPIBmjgl9quCIvSfbzJW66E7vnRlGVgWNFxXzq8BxIWKFQmLV2JKRC9trDM830H_-kE-He4lZ_mbxwrtFaeHV_EzQI544MLojtVsUY9uu7GhggG39YWGfMgsA09yrS82jwCesxlEyhIb9EehJJy0uuJCiVyzO2KtQBEi9b5saKrsa6sNxDdvMb_-9PFDHRPsvn0ep7dCCC5hygMz9Qaux2zP8Au5JcPx0zgzp_4gn1uITi_iTa1pjThQ7EOIUgX-THjx3zLznrHrSkkQO4uKI0TYaqN_VZn9BbP4lYWq0aVeWpxIJeIfRTj1kXcCq4Emd-eBZ1q-721b5uy4FD8rmY5n3szoFnclX_ID0hosy58WKpTHYEjl_lYZ4rXfJS5yPgH8m2YR26a2l38s0yVuR5u8bI0dZEOmaUrCEmo5HqeOVhEGVxYAWuLF3BIfGfgFBQtHJlw28QvYf1hOLMtNR75ah259H5qsoNgue8vLISQQU5uZ1CJdJhumSda6rxse2MuXlgXPULKlI8LaGrUXlmuGMMlzokEqiPRjzMOYg8PQGY6wRNtRo6I4hxlVC6VYqqj76GjIwuCQ38nsGtoLvaP0-e-lmfcstMgf3EfGFlcv-OYR3oSCTVx0K9Uh4Mg1Bx2YhMf1Yi2x_TMp4CnMMFxpwm_LqE6oIFm3LMyxPCNI236TzIoHbNga8YKlhuysZweD2Z4KGb_hhrjnah7MArNJOs6RYu9iFw9T6s6sSUcK281746DZWQk8fT4fJhEUtDvuDEUexTCP1q8N_4vCLYJj8waxJ5GZcPVJDzG1tp3_sHSIRsj645ow&sai=AMfl-YRJN0Tsgl86Fjv4x0s37znlRiK6qlztdMXJ-IO24nMl5kzlPaH8VzD9srL0Cu_A5F1wB4OM68h8xtQgcZL97m8QTsQA6hofjxKunDS-IS1vMOQqc4kadsubqQoW8I1VnT0CfS8ou5llvZ9dTlWhp04HBrYulcevLODJLgLBaeePEnIKIa6zdw5d-jXAsCGnrepbRqRV3SwR7ope7mXeXZlHPWY_vUkzJN-AjKmQLVcby2P6WVwS0y3k11vBZOE2RLlV-H5qzjt_c7DKvGHt1MyZcWAqVjNbTboPFLAmo7Dkm-DoURtuR-_0hqAtBpSl2Dcf5Vd_4CI55jtUaRVtLtD7D4VsycWg7N9cbqDQ3Tp5MONwQ5VbA_81A2qvxGHu51Uzuc4s_qzA0jo0rhXoDBqWjhePmaHUmlL9EZiX5npS07yn95PExhNjwyaQ42R3j16kgiQIAuqkd1CfG-2YrJ4vd8FT-Ckw9yaNKNSdDldwICV2FOQkf1JeVbi_PkSfL5KrX_OICqLZjNSobhhM7zM212U6H5R8DG--q9fLLRiltEBiVjp11RREZERLpCpWC65g9K__o8sy61bv_OzUeokGAbE7cDGGuPlPF4U0ydi3ORPADFz5FAN7NB6px6n6y2lPympvZAc52HpiYVHYm6COPzxwIcVJUaFHAm2AFAWNlgN-BBro7-lz7k8nMlucUpTu-PodI0Kv_HHxByLySjSMkw8wKngX0YviMNemollCxso5HqCVa2hxDO6sKHjQZSJOoGTX8euiGD1cJ3HU6VhOVvNOZX0uYHjIl6lujtzyfMejHS0UwqRFy5ETgRmihzLf9t8wsitiDCRQXukyvkdgs7uKa-kGZSchZC5ZycxWexrsaOcdVlYKoNNAabXyMs5F3aknIa6oPoUnPDL5wPq84qUqu6E9AGnjoW8jYOI2k6Q--g&sig=Cg0ArKJSzOCNtswaNIBF&fbs_aeid=%5Bgw_fbsaeid%5D&crd=aHR0cHM6Ly9tYXJ1dGlzdXp1a2kuY29t&urlfix=1&adurl=https://www.marutisuzuki.com/arena/brezza%3Futm_source%3Ddv360_display%26utm_medium%3Dcpm_cin%26utm_campaign%3D20328217428_ao%26utm_content%3D739245152%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D20328217428
            - img "Advertisement" [ref=f6e5]
          - button [ref=f6e12] [cursor=pointer]
  - contentinfo [ref=e169]:
    - generic [ref=e170]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
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
> 54  |   const nameText = await page.locator('#nsme').textContent();
      |                                                ^ Error: locator.textContent: Test timeout of 30000ms exceeded.
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