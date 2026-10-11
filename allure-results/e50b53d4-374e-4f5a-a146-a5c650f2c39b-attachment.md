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
        - generic [ref=f4e2]:
          - link [ref=f4e4] [cursor=pointer]:
            - /url: https://ad.doubleclick.net/pcs/click?xai=AKAOjsvhgQi96yT85lQinSqmE9L6Gh_AqtFH_20Q4frEvEVwV78XWMnexZbKV5bh2SsY8QTlwBxgg23m9IAl2T6EC8wMxNHOxi_fwW8pB3VsSH0KanslsBKhL4k9X4BSo65ZqFZ7mpwiytOsvibLItKss2_X-kffBLF9YWPBnmW8CCOmR_-8KFAZKElHNVMdHwenwe-c8uViufa1fM2mCLgptot7swx8bE6OkqH2DwooSkm3bL6TRubs5EDp1MLx5FZ78befPQt1Fgt7F9HBnuvsE4FS0D-rbgeXtR15foW4ek3vvurJfqz3TcZ607f_x3ySsZU6wkPHDIwzfvqj3tGK7mi6ptESLZaAAqYf1UUwkDAFGrApqqVfh4Qb8eheFP07a77Y5xrtjSBLMVsFtljTUv2S4Nyo4NYbanEPIf0Ph16rj4HRVqPP2Zmu_czumc2i3mmYojqSv8Ce8TG-rk0SqWEAdSGkf9NAmy4kL02F0WZVNwb1b51A3u609Q14oZhYp_K1SDm7OCaD-qHxqyRtSYj861VmEJloQpxmMfAEPiB9GQlmMWvvX0TEPvcIw2VkW0zxz-ZBbAco3W1xv8gJwp9gHN6ka6EHxEunvoIL_XpkOGKS2AjGQJ3BNjtcbe9jM60Uy6UI4iQIaW84lmcDTed1Y3jS5tie487UsWmWU-N9aB7zOqjLuMtk5CuoXjvc4tKBJi8CFcioOZoFZOriQdHmCuQggpcmC_qbje73ivvSYCVt1vz0hK8-ThIZpFZbm_OQukzBmXKQSy5Xoo5Pg8pf0FqG277Iq98GoL8JlmRqe2tUQTgcX7Ew0ZP4O5lkzyJkjsm9jjxUaaNWw2gEcnh1evlRfOmLv8W95d6D8Cr4vyXN4R4yDM8i-Vuv9dtL-vcaKhFhTs3iQWPbgEaeGAymsblb8wMIItKuApTnHrmDMpaokfdTFssnfTooqBGvQCCGHTE3FINGoeOUFE-pjykUAP1_OcaMdwO6bDzZDq2EDteaElmPZGGfAlOUSXo6TobO1NyvRTokz2phs4YZ0gHQb-n6fi8_0hKbupG-nGjSR_9CXowuEpGEhpO1a1sVE41FZlxDfi0GKDB4TVjXKbuUM_qPLY4MDP4lAC_I4cEQFLFPLVPyXSAFwZ1zZtch8C57E3f0TfLrWAJGlUMqzgxJpLNeRHbSmx3MMHd_U3Z1wgF4AdoqOOafkWUQyO2QFBk2zSQONstqPN-UW-VcRpN0w2Y6avWEoqXtM1Du2aK5BPwg4nkcLS4Ir_L6BzVrJBAzrawMe7ct3gMoaiH0GqsWhzAX84nOhRv6CZtUwmy8ik_48Pt-Lyptm5Wsl2pWCn_kEGGEXC6ceI57_RE2wiTy9cp6VffdTwbCODQ0_rAiJOzxWtXHxSLnFLse8aIsFxkyd0co73adqx_0HdJou2bEY7jRt1alzWsCLm4WZDi4Mb7QdszqKgow4rvo4MM1-F0RGZdErh7hsERdnE0hQBgYfn9leLk1BsW9f00Z5XrNFwsfVY-4GQRGaquWyH15RxFMA1sXzgdxFegeFa1fxbJgwLjorWgVHbvPf2wi_5xNDkaVwXTqFtrL74n0ui8GgeD3loN1CntEV1aRxXF3-1Ymx_AskHosp8Ip1DlbFIWPcEdNmIoiBK20ix0z_mHsnCuBNH_eeXz59MfyTbuYmKLA9Jt_Gb4gDwQgqOq9Ff8J8om-piSduX-c5N1xWnnaHBtUStyQfwCqon2Sr7kL5wMUrJS2td4G7fvXI6o6TGNLa851jGd5Jnc_-U1qygXDWxzIPIOZH_MTF3V6862MEz7JT8AOOnFLsleZ-x_EX7ZMLClMGOeNBBV9RKFNAMAHayEzvNxbJkfa30Lm2q9yKTUHM6_s0W-fvO88l_5yCaMHZy0AKD9dGwDbUfWYmewqddHn4JPb-JGtWM2tuSPHtkZE-ETqy17jncoitmymETns9LPVnxtQpJEKN2qtxr4Fw0Qzjqsu1BI&sai=AMfl-YQ49SQaAuHxfBOpmTiv8jqDfWD3LyqdPYMAj9CAjAMWJ5g0PCWlQ8QAulXZbCFOb5m67Kr2fusCcl5Df-Aj3QstzBXPawhNz-Jj-dYMCosC68Q5H7YS40VmrGzhDR2iBe_flyhkFQ31kW85AlkSIcdiOdUM-IQ40KMi4zlXGMUZ0xVnxFtZV8lGVRmDnnsv6fY-y4ePiHWdT_AF5cMIQEw8h1cneJvS9CCo7BTxpjbPNsbbcO9pRSlYAX2LR3CsUb26-W50Lr9jgsBTVh8HYsJmpF5PjGDEaLoo8khe2pQgfYlPkff79EYlsULX8RqQqmvtxtqhiGrXSjYIP48cXudzXaZN1bO36yIdaNoSC4g73kXQ7Bfx-3Yj2smlnij2cJC9YiET0E9pAFMEJILUEG-WS0rjEolMJUIbKe6XThiOsL8t2eJGwUs10YwNdfv26DbkCv5a90uYVwnXkuYaVtCLNdqqDTb5TZClI6fmBaBAUhnCrt-INKMO4AxT3Z1dqmrsCDK72PW1y5_3gyAyXTV9ZLUEDWJWW65T7atFmrmKLsxgq_s_2PQ0Jn7Y3lWiOdkQV7Ayo8sG5FDSrjEgeq4ZzrYZ0QSXiUc27fBOuJdul1bsb3mVtTUp4B7mvYNM7M6yfRa-VLRdiTTWE2FAwWniXW7EnORakXE9EHVGs3L1tcgkPrQ6qlLGQ_r71f6g5c4tegR2QWiPxC8fNwofvhSs785mZfBiyGvj94ku6ZxH0lVRg-t9Zr4LfV1b3dy3aVO9AICAs4Kt-4tYPsnUfd87djOxxeGZoQseaOErvainU8maDqkYDRxwtqJyNWDRCAtAMMiaTrqzVhFLvvuT-aAKIA4PKTCZB9jRtDDW7hirInUnIDA373FMfzyDIus9R4bVgHlwowi-r_qIGUIxLhWjUBq_pSbcbLZJVI6StnVlxQJ2yAJnng&sig=Cg0ArKJSzP41L5k4xBBZ&fbs_aeid=%5Bgw_fbsaeid%5D&crd=aHR0cHM6Ly9tYXJ1dGlzdXp1a2kuY29t&urlfix=1&adurl=https://www.marutisuzuki.com/arena/brezza%3Futm_source%3Ddv360_display%26utm_medium%3Dcpm_cin%26utm_campaign%3D20328217428_ao%26utm_content%3D739245152%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D20328217428
            - img "Advertisement" [ref=f4e5]
          - button [ref=f4e12] [cursor=pointer]
      - iframe [ref=e168]:
        - generic [ref=f11e2]:
          - link [ref=f11e4] [cursor=pointer]:
            - /url: https://ad.doubleclick.net/pcs/click?xai=AKAOjsvcy8W6CLBaZv2-lHuS99EO7cakUoW6w5sJJga_hY8EeD7QyNU2rtBm76ji3JdGrvunRV8BuCRLkfkILfJFAxI8-zZ16yPqrcpGfJR5Flh7_CJYzlK3gnP9V7pqRXoAL1nIN0p_zkPUBjnNCjGs1J3we9XSy1yV5-ZenXBaTPpZ1QSehty4YXmoOD7RqFBpG4T9DpDw7JlAu9FlJz7AyXe-KdL2P-aopmLUgpv0GD_z8nlMtYOT6uvaAwCcNfP1bPPSYgDzlF34mVHyyGErFECqlU6o4hQjKe_cBoQ0to9BNNa98CqLKDrbDOfuoRX25YRWNzNfdeUKu1izt-AX9H0PDqQbEW6YoUYYnUCFs2wtDc4veHVpiPpP2cTG-tXLO6SM6EOD7j_22x1-l6dSOYK2f5WZt2s1hWFlF3vLu0ITbDvwhNqm9pdfi_K6xjOqHZfSMem_DL_z7_OUPgBqKMVNGwQG_YbZs2wUejkfU_C4Z9W3SzGb1yPBgUPDzpyE2Mtkp6zPjFGHO5OysSaKFPtEmuszwvECcbGc1mm8ibxNYnq4iwkEnZjD0Ey4-VOPumdGcbQCZqc3LavylVaY8C6naR7xhS-8cyNPUXKxgP1dT4svwEqxUNk1emkCgQf2Ella2PrlAa78MupmZS1CmtuvgKicI74PmtSsRGvVJcD30XOLMXbshC_xCrEBOpIOcaY3e5qpoNP-3mngsuyo3o-WXuDwTzuVIhvS9zVbbaNEcoESq9TwPCXWSaaJyVBfDU8xNc9ttk5VSrXniy-x-UK3l2opk_hp9cSinh0fIBrK2Z7V_caIftVwmUaIHEXG_zYctbde6p4i2fPyBIY9H1WqzxtcR9mYVQOpUt5KlkSRjYMwoBEgrL26GlcdDhpciG622KY58W-ehl8r3xZXcucLF2niPNBEd73n-3Xkfe1V_ZUFa2sj6WKWIpS_BGQTcw2HoAEhHQCVEGvX-Io0--3bUhmaSWfHkA-6ZOVGhpnFgEMV675S_LLuz5DE0As7xMcwG6hQy4d1EJPDYxhUC-4OReQhfZOkxHgkxPODYPepgkYjX-dSB4131kZfniTo4Kn1MOeX50FekXWZ4i3EnteY6fc6h0UkH8QTOewJQXGgc1e4EbXTniVtMV1cQ8YD6xnxdmaR1vjaXp30CrgL3wswM1qZWAsjyk_7WdHsRHbHYxeA5eQa71irs__f9bifaCaFP3Ajc8rvHJNYOYZ8oiAbs1H8AqTd6_bAepu_hZHiSnhPSNiBp5p88HiLm6xoNifFoZzwM1NoEPoMV6MHlVJXTtnaSmZmsIFiwlUWzwa60qVEUHFuR7vH6vkIHS3sEJaHI2AAAdkJYYW_Ac_R919zN4HK5LqHGrjoAdfqiclzEpROPUM2qV4G87ZmKTJB8a6NxZ5ZozqtNfGsmJWm0zUvPLNh2tfN0jWXDMNA6HE-jZfBKnb5pSW3DK9q23RDOsuJ_hg5fV3UJk3IH1llJArLWh6BX_ib0egY2GvZsqvyRI8fJJRDy_S8JsPMkX8ZFLLqf66vwbnLGa3izjO2aGpG59r1SkIxkihxq1771INOWPdWT9n6-2JGf-EFd_UcC2CuuyLqCenMtMHpBroD4VEfVS38LDk1qT0mmQeDPvmz49PrTS1M6AHAkzUa6QDmDn2MYFt2wnL_aQ9WrXya5CDWbgA3nVWgJ5Hhs5rGjlAdEhL5x6GpKg55JwK65XEEe1Fg3klIbaaBCE68ADMcs9LQzucZVMqG-LH5iLZSGTurLi9EiskNSZyHXoXxnKkOiJ9gehynNEXPiRQ-0nBMx--ZrqvUpu0VZDFBbLZQPdQsfVxWU3oSGbd4NLpq_rJoVXqgSHqGck_DX0xKaFo8x4ASFsP3o0J-pX2VxtqbijOj3SWpuqoUqIWlQiyLO3eEF9NK4NL-sWCqqeGYXtPrj25TP_CppBcPPd5KDoeVoirkrMby&sai=AMfl-YRUl-IXl6dCjBqbJKv0u-Tg1CBI77BGjxIsaY0Mns2jrqhinN2bNh20JXLhqsd4J6LyH71LDBxbiJR5389B8mWCKhAHTmlbGPjPbl2qGVE24pvQDrfLVglz_XRAj1DEbSODtQvw65n8j4hFJRBA2fdyZdjEaO1HTxb908Cq9HkH26kKCemcpxzBOcfSBeW0fWKXrChAVsvG8-enKTN0MLaw7PFHe5UPw4OIBZxPKk2rox_aH06Fvgz9xOClyMSBNoxg8i7qLOyvvJwD6nTvu3yQIlI3OSvCbZtCc30wIIwiT1RZ3UmlJ2i3A7JhK9BWWAdV86X0dKPZSE2tw6bnjK0Lwxf7MuladY9Eola-9j35-e2Uw_omwT_YYib4mW9ynllTGKC67ZjU1ZGP_v7uBgraGuBufb8byhichXaxI7TRA1XpdcNH6cCtlYGz7hHeRNXlHyFnrsX_vGoFiMeN1kybz2Lo8c1faQnc_gu1Ex5sA4Yu6niwd5xgkKljGFosg-xYX22aL3OVPc9_kKcSxk2wf-O9kdX3bc4KTUaNUDEr4yxaYaiktcy5iYNGY91ZLPR80H93dTfbmaikPvBKWlEa7S5Bxh0JrVyok1GeTfgysO6ioMvvUSCYFpCEobXfHVgqEjJVuQ8KK7k5hJNafUD5ob7Bk-7Sz7JeNjKy_QvDbSFLRGW_1DE2GxgPXJpwUYvvEa3WlXnWLkIzsL4EKqRx_vnhhe7G_VBXbL5oRBhxfAqxJr26M5W7cucoSIrXu6bbhy-4rZ0sU6uegkgw715EWn6x5Q4Iwpe6yHDCI-KPkmGx5mrWp__bhLoU9dAe5HPlvTGNISqg2UFlB6oMy5m0n8Onc_nUavY-uYrSfe20XSJXziBNFdOPoqYzRl6QBCTndOwETAOWWHzTrspUEwrAXmCsO4uuNcAjtq8EabB34AWONQ&sig=Cg0ArKJSzMs2vw_VGtLL&fbs_aeid=%5Bgw_fbsaeid%5D&crd=aHR0cHM6Ly9tYXJ1dGlzdXp1a2kuY29t&urlfix=1&adurl=https://www.marutisuzuki.com/arena/brezza%3Futm_source%3Ddv360_display%26utm_medium%3Dcpm_cin%26utm_campaign%3D20328217428_ao%26utm_content%3D739245152%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D20328217428
            - img "Advertisement" [ref=f11e5]
          - button [ref=f11e12] [cursor=pointer]
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