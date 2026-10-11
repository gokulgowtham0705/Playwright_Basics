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
        - generic [ref=f7e2]:
          - link [ref=f7e4] [cursor=pointer]:
            - /url: https://ad.doubleclick.net/pcs/click?xai=AKAOjssUS1ZLLd3jOpaNzlAT20bVKxfAul-HjPCYA1HGLI5VNFU_WaTLFWMpiEr2YYcATNZreto3YRcOyG-h_FHddt1f2QtE8rDIXmPrSATnHIxt0Fq9OcvDX0pCWpDNMaWpYhoGLTZo1wnTQr2yX7g13E8uQwZ8hTh7F0P__UXkOGeiLaKSMCf1-LRuUR7NTfW3YSFyZdc1FiIWFr73dLOxfhUaHMKcB0AwsxrrQ1VVJSUaNvsxm5RXITfMLaiQF45GzaTR8Op6JcoPWEeRp-fz3wV4-WX7TL7HZVpSmTZQcsGo6PMi_J1F25_8DY6rYK6kl-zL5gHiH5veCmWXaiBhouaXELGOCGTfzm9JJ0EvDbZPKLd9sN-TtmzyqD3GGjZHdb6OfR26ljBNbBwMoRtuD2LPyTNjbRXKHePQhoINWuXbS3vECg22DpS-m8VthLPimtXeh3fxOwCc1HtMY4Z6q1BXKtT7SIMSkWYVFU4rLo6J4S8wTfPh9wyoscUC5Kn_8_S2gZqLr1A4sV5c8Knm76t9jbkpCLnPPrZob9bsTs_ypOV8Viq8q6u4OPmRTM_fk5Xwq8cxQ_7FZirE7sjFdfflLNBnBQUaUQRSDgYoXk_n8g6EeKDTw15YZQ2J1TTqGh18g3dgm05vLZ8YKOCdoZxKr6Y5GYkk01kfSIcXyYWWVZ0KNEnFf6b22z-2dctDV-j_Va9I9QsbJggObv7kuQmLwMhThKANdnJuNDqkHiOMabqEwxcuPcbO5ZPg1t0PiIpcmoaQoJ2ObfAukEsq9u5zliNyfTAzuMMGIImqQaPIn6v4MVJDD7bRwWQ6CJCXIyMoLCIXIxDq7iHXW11ZNLPaSMYTsc9wnncqfoIgtHI-VBPS2iY_KaegLviKD5yLwEuQjm1geD-ZURV2TpM1dl7_-4GDCVlBzv_-vPrwoXfPuZzoLmTqh0zFQh6X3KlrZ-ny4P3gkPjMNiyOYy6KzuOWHk1j0IbbP31ho2B5dcgvS6Xiyc6M4YXuskePhbYbi9-sZZ1YremeE0QafKT741Sr52y9RWtMy4vIq3htOhtZjmGyg-osdLDc8boNE88q-wwJ8vZQ5r442HbbLZhdPqSUjnM3EaeL_CCMNNnHJsuEEKUpQYQqwriurs0ASiInOh2iIDJpd5TSX021qvrebWvie-AbB6dDzSSVGX1MdocIbzNTjOP5UDOKl7PXFMjS6xBqZ1zMxj09dYeGVm9e4HLDBPKqHyTQIqUB9HAV0yjNsWd6j8_3MTkq8S7YjflvJK3Nsl4UqWtjKNPZH4HUWA19vog3PWMmDGoY70_aNuLJCkuKUACG2X6T-KbVomdWmDjqcH7Xm82e9Sg8DIkAcBnJig87A1gyvhNKIDv-es6TaTAKYOk0-tOw9AO5VrEKUVrjsqJFAl7dz4t16l9tNaIZRz1BXbfmm08hAunJVGwo5OSUDj8c5YgzC5WMiO30nf9pW6uRRtYmEclC72aTsOOENMWGMQazy0GUMtgUmKoQcmhFeaoto_96qZwsXTGK8A5PMT7tST23g4sUGx2RE9DECejofDP9vljfMuTyiHir6f5mJnapT9-QkwS4JIlhdVW4Qb6QIBcTf-r5oWtUCc1c7stACEOgzCw1KBthsEALuy3lFJP29xtQGTrz6lbYNr3QSMD5Dc5bvfMv_rFzw4JzL6-uYBQjOs4NHJSZcNvE4dfnQhhplibTyPTKCEQsYwsc1mSOlGKC-4CarxAVvoJzCyVVT4tNu4qHeh9Qkm87kHemGAlz1EDX8DstLcRArgVsDVCUci3-2ZgGuOCk75YiCNU3qCuwCxSNfOOQeQ2z0m-5kolMxXWyHXlymQvH4mgIrZzbftYZaiL7Syd4fEDfYUVHdXagcswCMUPAnPMW-7udTEoakhVJDfG3qpLvd5XREOO5N2c6-GH6B1bUIyupdhA5Ow7YzW28sA&sai=AMfl-YTroH9hSZzo2F1UbKqM0PBroPX4vOHF8sD_7NIXoj_untGThhJSu8XvvSzl4UnCPIlZ_AipsRQ5kVYKHVd41PPX89hJ6WCXQi4332hhK4l-PAReBnMCEkxnf5HLkqwpb5EGecqg8tzw6dpM5GsiAd_rOk1Z6WD6TsdRaPvNy4lCjdFpRbGn-VTQDxTp_iMDFucb5X1ISmN6ils1aLkLsyYcZgUFNVDBrmKG3zIvRLx3WYQ1TCVzz5emJaoKPD4rP90sGCvmOnP2YNSig5kQ3gvpWj4ar7YU8Bb_H6poFkwJg1and9zqfN8mTamlL7iiskrJUfmkBCy0MhTH06L7f4z0xez3VVpx3tJWSbtpXANZvOeT82V36O7jSI9VAbgEGuXXIROQ4fzqzrFTX8kcanSZCqWfsC3FtnTEcoftwkq0GI6CDAacYo-pJzmpVn9bdmLdPuVRB3W5s8r5TNoe1R9sVlq4U-Pmc_YAiww9UwVoyKFheZsAVYjM6TgmI8BNoYEgqlczlHWgOi-JhwvmrqCoKNaxnCOlSQb7W67Cj897n5JtyOFBBmp7G83E2FC74-X-VgoHIRzKjzT66rTSTAgVriW9AB9lc7MVjJSRhJTTqy_81vpKgpkREaOuUMuAmhdpZXyB87x_uQB89d18h9W24cAWbs53HcCYUZY71iivprGXOt9UsTk1h-_rGaxtj747XW1iUCGs5cURd7oy5YwhW_eL0bl3lNFtZtzXGahqpaZSDlh_4GWRve6hq5QMXez9OtCXQbgcmT6Uy_hz-fy1F0qGf6JxhGalliuy9gROvXYonq02z2VaYOZgdXkKTDPCI7_0Y1JDIhudN8_H_iYLJIK-vcrzWTOZUnM-1s1JOTSO-qBznRxY36kqZJcDnezTCeffHDNcNgr_Kcqoy_bIfvZGwqx5mgaBxE_G1iiAvB1_O7Z14w&sig=Cg0ArKJSzPMHCpcoUJXo&fbs_aeid=%5Bgw_fbsaeid%5D&crd=aHR0cHM6Ly9tYXJ1dGlzdXp1a2kuY29t&urlfix=1&adurl=https://www.marutisuzuki.com/arena/brezza%3Futm_source%3Ddv360_display%26utm_medium%3Dcpm_cin%26utm_campaign%3D20328217428_ao%26utm_content%3D739245152%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D20328217428
            - img "Advertisement" [ref=f7e5]
          - button [ref=f7e12] [cursor=pointer]
      - iframe [ref=e168]:
        - generic [ref=f10e2]:
          - link [ref=f10e4] [cursor=pointer]:
            - /url: https://ad.doubleclick.net/pcs/click?xai=AKAOjssgqB_FI0f0NL6XElfvR_rgjH9JWZQ266rUi_ow2oTqnld7N7FsdKsZyZ_JjlVSJrpcln9hS-2WgkByxvJqNWW9RMklaxNF783us9rBKUO5cllGvxo4b7oagotkBmZ3wTXIYct9puEy04v0RLu7RIeTIcJ5sCmonqnr_d6MGS5JHjSiHXKMqxSDzzpXYySa3hwNzGThg6OSXD4GdjEXAMdYa-2K8lZCwd-OrwMRwgKx0Lv-D9TvXu6QAydSv8aUjYNNbl1DO4adah76qFmX-DB6OFu-IPm2HYtnVWUunVQT-yIc-49sMjVDQOewFvO7QjDCnCsvaakgGpAZ2tjA3fgWkzY1yI58CdP_tmWlaMUKS3ZxJj9Pcgnfad6yyh9mLp_OpPew0wNfopPOL41kc05t_8-uwyYx9Uyjp72X-v_Oo14qpZktQfZ282bwOMn2SAQFKFx_GLqDksGM08YpnMkF88H_DT4oBwcWQrZQg0VqfV9kKGBV-Dso5s4VTqPjreMf8MWC0ZAuFWhBzOmfyPXGNgiCNC_ujyFlIWKZKRDPMUR73jzgaXUqnKjq9ArQEzroNVEgtYTffixM17h_qiqWKD36zSpwuPoVzFKao9Kq44H-V70Db-aD6pzdJxDG4ksiAuausSxE9qsePqsh1dhROOyPt7Hq1rDSCWGQnym7yoeq2rCGluYlnlJXXZOTSu3_4onLkJ8z1WznqleCPTvMsZsBdy93ScXxhiCi2IcdjQBfLejdnOvXW0f5zLaCKKEv6uV_kXwKE8V2QTgA97cnwOzTeTVqZsUVUQMi-e3Fa8Kdv6vZrzk6b2UXVhtDhW9YGvAzHMorscV6xblMMpaY-Kt0LrLZJ_LHq4RuQT0YctzV2MIKGbx_AzslWO_69mz3Rsh_oFMJcof9njsucf-beZflKLFCfrkRrFCf9hVW93NnsjzJsSRfGX6laPwr1OqFi-_lDP9GzycvLZm3HYQw1BRe07dcMgOHMm5bcC1cxsWahMAZGNSlGu-5Qa583qE9tB16CSf4eRGYerxuklMdmKXw1jEbTywtC8GkNOb1-6-HRAUz4qXVr7sa-APyW89V8MUxRmUUBb5eKMnoMx4daqEXpCPmvibdSYlTAP1T1uZStZYkAX3rgHUNdshV0G0Vv-_ZlHbcal4YpafjdFzAGQDfIBX_pu6Wh9YWdOOxgRg_SvxHdR_n-00w_XN_o4UPPYe_3V9e13e0Sb4wgUM_t1kMX1nL5abNZagFNryWF_ExXS5zcdLyYYv5zwExNM5y_rgIlMfeorTNFAtXCa_AFZLqBzEMs2RllpZCjP1kAMpd4-5OOU8SlLS__NeB5WSL-Ka4A6LKFV5JiLKX4eZGzvVBz8974_gk9GdIlMj3xDYyJi7EaF3JrNO0t72dszIYBe7apFuOOIiH8SqvzDOKEDXa_roPrvamhTnzIQQviKzAIG8mgBwUwbAvl0rVyjaCstRUy3Z_f5fZCn8Foyl2WIsj793Bvv7Esz7HBgfVheI3oujIkw44FKSKiQ_wYwTIzcfW2nztzXB2eidbWPHrJMUN9Y8jzG9ZTeJ-JEd_bvC_1r_Uc5dFrRkMvK69nzI81OV1w_WhU4D0xXGrMcdWEYGSjvi0L-McBdudspLuNdrRNEhaloWpGy2DXhgulQvUxUxnSMtgJTdQh8EPCvX_mT1WuYokIxVJ9LtJg4W0WaYcJncYCEbPffksXSK4m4gOr_O3Po9_psd8S0XGlk8TqBjv0vMszee8ME75Tw_-M32P4jFpn9NseK1ATNbPun7pod_C-E8oQT3We28FHJPeAnd5kZB_8dGN7FNF1EophAZEfXxNkXGz-fycNXs0GyIIIxmLNlYbEWnoM7Jdht7BStZvcAfNPAszJe9XtPAb2VAMm1l8AHhRRW2EYCcY_iIu1cgUsI1RSX78jX4qDWrIT-cqy6HUhsRl3f6yucZYleNWDCeqfXiKZA&sai=AMfl-YTlQtEHSsBKz_9QK1Yzyv04PsQYpirczgBjEVJVdNaTfQc0IoyzGVcfn9cAPSbqzxv1oyzpJbol2iyJq9nqeANaZ1h2A4J1rLY1jlYucEFgCI5orpOIql5qW3aLO2q5k1s0-mKaA082BMbUH0ptMKszvproGQuM0rjXsS4HXzFaJftnMUdBaJIuknCy9CW8MRGzGZSksiCCg4K1V9kM6KVk_vpdi1dS9Bp-HeoUyH8wJ_4uGFirMXt4QpemF5rRU27yycFbgPkLqBdiO0fo8psmRO7NtGakiMkwXltFflUoTN9OIng3nMe2BU8ecz_0h1kLnbYpJZdS95qcX_p8FmoH2jw-322vYd9DvbhvGoDE9HqrN4wuLYFYBoPA9Gg2AH_TeY-MT3Qs2bEED7rWxceZIa38ogB9bJ7TWxVlSgfPLyEoKCQrpLdZyJ_5XSABiwnqmub0qJPasgwPTQQT4FjZl_eAywo04A4iL692MuedWYr_n-CTjzCSK3FINfhCYDzCmOW68uTKUst-qL1OpRatS1ZTR6PWwky7XTCxIk4W47cw68VOqFCMBAmbMxRMeRdHKOc5nY35NUCvuRhkSJTrARHfVOvcwqqaE66jJ3qxOo12s5YPw40NWx18pNuxFTLYScfkYDwFW3ZEoBRBYzqLlMCUX3BLarKMaw5-0y-CDPkjF5RuM47hHooRwzzSvfrUHeg9gc3kovkmz2XAtnP5yUZIO0X6AfLjETQ1IYAh6LjfCfBQS5-APpwvZx1OlXeQoI6DSIzbJbob09I_cstG9SwqFaY1CDTamFi0ASoU9XhVpP41MmjdxsYQhtbxdoiGSPczuPapNhVKXbmtIRBFv6zTv8f9hitNTIPc6OqmROEaZBb1wNPhDe7dI8wo1QZLHyeMOg7dLoNKON7INjX2_bk6Alzr5AJjxk6oY7J-4ZM3QGJzIg&sig=Cg0ArKJSzGIVWXQK8JVT&fbs_aeid=%5Bgw_fbsaeid%5D&crd=aHR0cHM6Ly9tYXJ1dGlzdXp1a2kuY29t&urlfix=1&adurl=https://www.marutisuzuki.com/arena/brezza%3Futm_source%3Ddv360_display%26utm_medium%3Dcpm_cin%26utm_campaign%3D20328217428_ao%26utm_content%3D739245152%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D20328217428
            - img "Advertisement" [ref=f10e5]
          - button [ref=f10e12] [cursor=pointer]
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