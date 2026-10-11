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
        - generic [ref=f11e2]:
          - link [ref=f11e4] [cursor=pointer]:
            - /url: https://ad.doubleclick.net/pcs/click?xai=AKAOjsuN23rA8PXRnmh-ClIsOQaVxdEEYZl7mR83IixRQrPoaO65avWBWVqImLo0IWuFG_c8jvLVEkcFsS3CezY0jW1GIeMTGH2erxvXQdXAjnJ6dpizcyX6O2N3z0VgXji1FYL56xaeftVOLTbvw2MIgrtTAaGWaJayhWzejUYKjtVzV5vsXFyU-DtMoAApVqjVdgSn6WUbaGSB3vYwhJHxoYRvd2dELe_MbGmkHCLnfY8w1CEcyoob3Cbb4bug0HlviIkVmjoY4O1_4lhn1NuaXNs-259lgOmI707EDwJ_Mn4GJgta1yZXDk5nTln89YecYDrqfKW5GT6bH3xCK5bsuUbyU8fbnfyECgHRXoMw41IUwnejX3ao_JbBY_fukUr5J5g0avF7DDieDgQ7PEVi8iOxVTahCE3v-u8T2MkPTP-ea5QPrKFeiaDMMR9QYIwVZbiRCNKianrjICmD4r99mom7AldDkLE2xooQn0oiuK8AVTgd0VOFVpKy2XseVyvUg2FR4snVGzlI8nrFjsPducq-r23fVkgl3a69nQami-5Ttzf0q6pCLWQP_ijUI8hDXohtXD1Se3BllU3WFx-AZpIW6g3lY6B2a68n0yj6yGsYs5lDYnY0QN9XJqxDI1ZIP4qOYZMjPS6qgaT5hJbyj6mbSYIP-KFma6uA9kJ0oRzZlE5uub6OGJ3zJPvgRn4T0dorrx5jesHbfu741y4OJhGtRcXZs3PDBUS64gERbT7EA3OSIbI0AR-atXpqV957PRsgq3ia3-6V3dU0-kCJZYxZnUtOPQj0sV713_V-RkA1TLTqvsY_50U9VjVcXZONJz-zbTon-WBiTirMBB5zNjVkraYn10ZL6hH6H_ZqdtO8Bo_NBg2-diU1u8JJ51D7_FoDfEosDfqPUCOx4YjMxQQRagh4y0cOW_mYVEkF5RZpsDfX-EV3MNgyCvkbP_AbZK4CgTelrdAbl1LzHP4fjQR5Lr2PVcJaO9wMbOME0_ou77RmwCJvKEDGGnrN2KGhr7BkhzyEBwgrrNYz5bOZgBpn8IXwzNj0s2cZ1GJdKuDYtueDk9QweomociI024638Js7FoZT1rG5APfuTepD9ZpimUtExXRLIo2szriu21vcvxkNL5VlFrodGonkc_0TUDXig93k3VhAk6ZNB1GFvHcTEsb10Fah5lOVpMHT-yagR4ZqhQPmj9jeLv-i0W5j812_mcdzxHoSDpP_fRWoTdwGlDcdYmKeoL3TEfJCSRgwYjqZ0aoBFlARupE4xB8x-Wfu3IFlbhK5LbCljN9V-9o7wkxRfo0xyAf_J0Ps3PLJ86OyNAXp1v8uC08K3WaUGPC0LNwsywNHFy9nnT3zQE8Zzuqvr8KY_dEx_zLS0LPLyS7HNT3WFTDSxe-83DjxudF2lXx9ybFt4tX3U4fDe9mp3WmDnAscprVseElFh-R2VfjjYIn_fR5K4WqrGeEl95faLV-xVt8b7jdlDYBbjWl0qBR-QNenDW1GSux752a58RwLMbecRg-RVU-UAW-Z-lOuHvI_-5-K34Qqbt3qUbwUoPgeJewz_js5W_7ZrtDnU2noPZQEZ1zUI7r-bB6mm0IMl6ICJd_5lOSoOLDJrM6ycYJPQgvm-jMp3YVKFznTOlpAq6IuhwJN3xDTs_s-rKEtYoTGIyBejfkQH83ra0ecRZ1LrHQBreL0sgDki6gtZ0QY62YqyPYH1jjRb1LA4e27utKBu6zWLcXrWo8Vi9y_rDGjFiInSQ6-fW4OMtSk1u-OFsT8l1XuAzPpbeOyoKYQpWJRMaqfc69eZJ6hc9pazcfHvpdPvSYNPKxQAi10GXCh4DvLRQrPFnO-0AtFsRch9ZE0kBh-gfxPdxQoQ5yH2CTSAzvfBNyG4_cdCb8Kc3MzpIp8IQavt1d6kNmc5WOKqYigNeRnVjqY72u08fBYGsmUVxxNQeDNQQ&sai=AMfl-YSNgddqn4twbFWujfHqJnXBudbnAm2IHMDAHf-M4lfyHsh-bxNDzGDu6Jy8JpiouIdJ6cK89uqfargGlEJDj_IUAzQhE6XZ1OLKvix4psQmMLGEHaRlCfrnunmJ44QK_8Lb7PemXcMT11Rm-6rHLcDAV80d5EP3KJpVSl-OBAJbwhYqeKce5tTRDD37tJFXdoVaAfgK89srh1JcJkDRJgDCbjlIUlIvAIWb7K_X0A1NHrm-O8apPGYmO6Mt07r8PsSt0o-kMoDXp3jPCZw_eLpegnbI-qFaAyu7v6o-f-zmpdriA_3WF0I5K373B0WhTNHSMHq3fQQ3eg0iSRwoaaRAb8jMwt1Jlu1bIQlB9A-gu52i29dols-LuVCHEvQeuo6hLNMujtJ327zySQOYMMy2Se3fDH7rzzXRb-Hl7rKRDDPLtWChH-kaeyHGY5USkskU4LSi71erfUrAPlRb3PbTNW9EVjS4Otl0jqdacjE-fJwNdXUzbWZAHZsQBTk2sNMTj8w4J4IrQIPOj8X8d2yjT_f13P9DC1Xw40nQirD3VRmXn-s9N12ts8_oyc4MDvHPB0xuDPrfWmNAGahvvyKWAOCHhJADFJK2s2YKCvFcxg1JEN78_3slfkrmS0uJnTiB1x8t7Vh2GAwkhzLsNL2fhjIGE0gvK3JSfAU2Pbjsem78YD5L2ffSq_5jqZhgU3JDXOzlqHSC7NvS0SeBPDArUBMTSfASbjQcaFsdBI3_8wi_bSf40kAvpRuxjjOnZpM5_K6OAhhrhqdTY5dZbND9zUB01qvYBC3DovN27E_YmQ4gKRhg6K3WdEqtJtbOtragDj3BAlzJ5VmcEw5o-UP8692T95g2v-_z1NsO9jx-hJ5txXk8OyC8X_UD-UpGC7vY6-IPWQCFVekNKxk2rcYUqqU9LfGDzCBHsrhxjcEE3b5yVmHE-w&sig=Cg0ArKJSzFlditx-_R0X&fbs_aeid=%5Bgw_fbsaeid%5D&crd=aHR0cHM6Ly9tYXJ1dGlzdXp1a2kuY29t&urlfix=1&adurl=https://www.marutisuzuki.com/arena/brezza%3Futm_source%3Ddv360_display%26utm_medium%3Dcpm_cin%26utm_campaign%3D20328217428_ao%26utm_content%3D739245152%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D20328217428
            - img "Advertisement" [ref=f11e5]
          - button [ref=f11e12] [cursor=pointer]
      - iframe [ref=e168]:
        - generic [ref=f4e2]:
          - link [ref=f4e4] [cursor=pointer]:
            - /url: https://ad.doubleclick.net/pcs/click?xai=AKAOjsvW-wNa4wVM0QGGeyeSCvDtTs6iiDrXZ_4jZG6zg5FPf7BmQeMFFX3gM0vDcyYRnmbuykBdixmRhcaDHVBP4emnTy12CwgcN7rX8b9iXtIND2pZ3fhvTdeJLF6oXftZw9rPButTzr3CNlDcRuNBmOdMIXNenQ21oUN3iixG_N2Erpfw1RSWOZMCU1z6fHaT_SYE9T-RKs2jTE5jD1hs5l8fMfgWH9nmkxbcKrJ5XrFk5L-hjxVQKK3Dw4duTzbJHDaXkZSJXnX7I8f9MmU2jlw-Op-m1OFiXw7wyoP1pe2-rrE-7yP3bIeDfHIStputT6KM6r1OjVuXnW3_EJT0NjK924pkPfL1mrXWu582Ixz401_MbIySt6QUYrwHDBQdbK-K4S3i_02QkIYhzHadK9WXtssMfcgncbP56XGTabbDLgLc79bFI2M1gGDHL7TflHNf-BySs4rPY3elN-nNUsQHEpiVzSTP8wnEYIaE2izpvDYnOHLOxtk0PbLUtqTlh1kmCDwqdVkcWo1I69RxxvIIyE5MSNXuFm6nvcBFFpi0IC0Zzj-Ll88paTbecRG7SU3ijcuoHbuA91vIEUtUmumUf04_LRth5EEC10ILXYjvsaUVVxidF6P2zLuSWPC48rx_hJTnkEH62Kzfw1iI7MV7DKG8n07uotSJ8GznJXMW0J37FrCfbDBlyrjsZ464F4FnzDB3Vq9qdVLOJkYsFlO11T8jQ19Uz7U8tQzMWDX787j6_N8OqWHCho5Z7rreHGGpUaxPCW3WayhxlyN72P6JAsx1Jm-7YeGXJywm3vBjF0hdifXidhHk_JqWX3MpcZBEkHEBqvrde9aTiZUmsJlfNLzFxqMLiEsR_R0S-xrPuYzWcBWIg2hZ8rn67cBmaX0xo0SdPcIThe71T6mTFNddEtLdxWM8pkV6qBZbjCEh93UHmCVEtgW8dL5JPQiPfOZJYS0kT2MP-27aQu5hfxKl-OigJb1vUkwQ4sVt0JDmMiDq5wGh04dlgrUEk9JFmWrPugCM3wN2jRBWnYIa7pDrO1DPfn53wWJozUJkeDJL1sKVZThKlJo528l_pcQNb5ZU1vRtrbJGIhtuOMtaMhVHZLCTSFxiic0-3cI8nUerG7gINwwW1r6sdZkk6jqAZrkdU8a4wM1Zaz1kf1C6gRC2dd3SCpOmMoSK9M9tIYOLgQBEFgdJhl6M-NHqvPfSlrbsXYu_IJ2vTxX5PAyOFk0MvKOB0281a-63PLQaKiGVp3rpZnGzNKCvY4c-z2CXCN8aTW7Vorum8GLeczdTtzpRSqYrSFzFCNZmU5CYY2lqu7KUb2c_TWdnSSXFbKBMfYQs1i1d5ydISd3xKHN-84IZGdpWUVxbpHVDoQciGMbQ53dxK2cTZ3lXea1rnrSiCoqbDf8HGoLupyhaqVVx_k3WmxLbIoUAnFV43rs_6kCoe_NiXbueBERKJYJS3zv_OlTUspuDr0yXmnraQB3jidfoXRWzTwSq6eTgQ0Hg5GT2gw6pedrA4sbeswC4EaKYJafIqGhGmCHEnaNUEfVryiMxpNNkmJ7CRSAwx1irtCCWmbL7wmYZmJlW6bTcBOMaPiaochggbfNc1jGjxW8oZYkIQCBIFp-B1bFbNx--d2o0g2hxtdukS0SUn94AhCu3hNwneNBRy-ICX-Vb1MGJXvcArVbJc8sRN1yGVS9XhZeRdhi3WWAs6IcNzZ6J77JMi5bfrc9TiQlSnB2rQu1bI4H2vCVRE-nsw5KT4fz-D6ieklc3IK2exFlj_7WBSWHAjeB5mAAI7zazawCL5xm81JE1m42WWbQOvV7fNaZ2HMYmH8WNlZ2ww9cnHLRi4W2W52q8I05uErO5U5tsQLAlXPv7k9Foo2ewQVUcXSCO2D0PeAMQ5ffTWpGCmHafbsThsnGRmIYKbP5vu5FsIXCgPOWJN4GxemeH_jE2bjk4asIigcDnEnhOdjx0ONE0XvdY&sai=AMfl-YQSIyIkpYw36S6X0Uwe-YZOUw0biuahH3x-IrCdIXuhpvkUeyPATRR-ytl-4ItM10J340p21eIwkMXey7gznPMzgw5A8Co-m2iRUhVtv-iEVV4Qsco92zxi8qH6N0FnfuA9hz0THXWkLxQxycGFF0Szvj870MdkegMs5ROs_XMZ6i1cQjNTZs2TuS84x4i0hSkK267m0aiFKLY1ID1FS7XT7goTDb5Aj055Yt2Brw1sbUjEgGZUalOvBKfXxlEBgiTHEgWGkFJ8Clf6tvY0jFMdlUMdryCI5lOq438ygjKr43OtU1eGr2-ISvrv1KnHxv6YcwHf2wrK4twZN4mFtNT7BDlNT4yM11B5_usweQKoV1zuZv_mhD1K4ws9xktBAAegPinAwulnjNd2ClpW8h9jDAp3oBmu0YlJAsyff2DNeAgTuG_cO00tVE-ba4tA1PtCj9RhjAb9NXcO_cmzyVDjZd7TXBUbIQroRm-w5MSQx_lbwdHlbv4LOnvVXXk9xRh4vsNDpq7yi1PBCCAlCo9wz8Cm9XgKbJd9zSHalYRaCj9HSAx9OEw_lggHILpyjd1mr26AeNkR4e5Ds3JukUD0ioezlj4lB-GjkIeBlmHzxuFquZE9bSKHhNgE4gROwZMidW05wEb2HuN8_cPAtyNZ2zmBQmtB3ma3nAMC04KX-9iiDN6T10SLgK8BOm068a4ikpgo8j6bj7xSzTZvjQQtLU6D5OCNMIBnvi3Z8XWTZxQ2VOTfwy0giAzIgSVoNVxb7UEX3A-qgFALztikRHpHf0pGu8WFyK7T73HwMUNFgQVa37ggknd4pL8oKF73-uYvEzRPcVq95dRgvvGBb4aruMcLXBZffVIY59n9de301nepP0qv43fyzLlYYriocm-Gr8cQ-Q2pxpET-5uUQxiv-49wyz72V0etSEyav64nOvx3xQ&sig=Cg0ArKJSzN3cCY34jgfb&fbs_aeid=%5Bgw_fbsaeid%5D&crd=aHR0cHM6Ly9tYXJ1dGlzdXp1a2kuY29t&urlfix=1&adurl=https://www.marutisuzuki.com/arena/brezza%3Futm_source%3Ddv360_display%26utm_medium%3Dcpm_cin%26utm_campaign%3D20328217428_ao%26utm_content%3D739245152%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D20328217428
            - img "Advertisement" [ref=f4e5]
          - button [ref=f4e12] [cursor=pointer]
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