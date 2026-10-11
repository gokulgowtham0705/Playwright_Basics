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
      - iframe [ref=e160]:
        - generic [ref=f17e2]:
          - link [ref=f17e4] [cursor=pointer]:
            - /url: https://ad.doubleclick.net/pcs/click?xai=AKAOjstVmrl6Cus6dhiQHZkf5RnpGiLyK2BT6JsO38Ay0gclExvlEJrMboQ18NzwHgXsHo8IjNPdcv-V6Y3kUyCNkf5ZObaxe_0GU7BIrXW_8rA5zg8sM17Lk8gqwPBu1V-2PcZ-HktYTY8W7J6GH7LstYgi-5kQs74cKnVeZWf7_XQN0bEcwIYDhHYRIxVFP1jecZRu56wtVj5Lzq1JKY2h6fm23tnibwmToD7ODtX4Y8LuH1z5pK-xVNzdmZ7X0VfyNU2KUkyv_4lkxL_aFGeB7ain-lw4P7yI6fp_YzkY4wfBVYemGfOqWngxyrX6Ky2A4L6I1wmDO53YuQhD9xXDeewiq7O4yqVpAMHwwnB6MpqvK5Mgc6bnXfTr3gxmE03gY1v1_PyfwBGPTW1J22NafSxQ7rPFn8OvUM0dP-REAJoF5QpoeZeIRs4-ujTaOrsHnfdfIacci4TKyQK3l4FBL6UVFRzAhJodL9NEXSah2sQ1Ccr0D2M77uhtK1-DP2-OCOUNa40PdezSp1NKLGbysSTsHk0CeM4jvWBm1jY_Y1atoFdhoStkuXxzbwjEmFDwlnTLfnLLgJ4ZhveO7I4Y9Gk0VBZO2FGTQJp6eIsPWqbkaC70bm2BhSSR1qhnxO9j-0n1l9mbqkDUPl0huTV5zwD1FQSlli7nqu0WkXgJdrkqrU2jJ71_TFqafBKkc7pYcureT_o3bUIx_1iT87_sUiFJ5DHD_LZGiTBWS8jHk02F8-K5bgKgGf6exh2Nr436cLQsx5zeI6Yt9n_ieyntkDs9iPdgfmjNQvk0lAo0ydQ_AX5PuQBiA21c0L4xgcXUzfdKKM5ezwEIKnJ69m3_UF4GpPSvpUr4H-P2HFazSyPXfP_ePGJIxtdeEFKA3GtY4LhRh567Oh_N1rFohO7oKe-ykvYI9B33HqKR-wVE1EUzDwpX_Y6Lc2yQMO4lPR3UruxzGV6imvvDc1oX1LN0YRMdnngA6jISViOr8dGIMa9b0O3edZM73Y20ruXZxPicQIDc9lPZfcgf4Ah50qaT4l1iTPHuIGrSYs9c9cG_8t6L3QB3Za3N_szQPKuSdB5SgoP-bYano7hHmg-jTLPYyqi9PYM54N0JDA4Zv9ubIs3AJccDQWdQKhMQMUBeN35X3bGk82azvZbY6OslBr_IM1HNWdkLEBOyj9X75wCwjzyUeBQLcVjb2Mf-ePPPuctArnN8ptwEoZgDDpC_FSGKz6mA7NovcwP96xy2AmeoH7ehxn-XCvjR3OFZexRcagzrno0LolVWvkBTRUv7PpNDO9baJ7K3XTmm0SkUDr1zcuBQvZiUC8jwO2FlDnEvj1dt2fsx0JrqZ4YVDb9v-i0xJWVemPkvcIn8reeUtNeU1jBDVZ_Ud3rQggTZsiiurZP_vh4WJUhmMZgTMcmPR6ilgRf3VVJmHEv2wxEofYb74XLrVDbmPMn98ozldxyPz6Qg2xa1xt2vC2Yue545ZZig-YZ0xyaoVt7SJIzevWnLQg1ciK3aj26g9C8yeVaNLMwFtbLJ5ukrAT8Ged3Ms-O_1KFhV9tvtFilGHyIPL7mqBneI6Nxxwl7ugBGZSwKVzCAD4lJaaAt7Nd2GiBg9iZTbnQAFshMUhkIu7gIzf72nVBUynB_ZvsFhMmf4wUeXdg2qfXrgNhkVAe7siH4czwQRqc_0a81zK1slmjOKodextv2_MF-mTbH2q6M5s9QzAiNx1EqP9LHCJcawbC2HfjbWyVF07FjHmpUuu3tmOIcSFOkMnU5xJgBriUR5stGMAA8i8dSKVs8dqnxt2lCkAAfbRHsTK3dxTLDPQkYriVFPd52OQ&sai=AMfl-YQh5-Ts4XofGjgv5nRSQct80eSmewIXFEGTvgwlCme6IjSqDUnO9RLGPKMWYnoTwJR5af_AfSGJTZRRHnXopTnSasHd6D5VegUalHVRI3Q5JLozhME5X5wFaiDcDF7T5kwzpdjs2wRWVn_yCh6Y6oeV5ksBqfFeziySFxc1fHQiWy-UC2Xcd0qNumCBtdoQfrUjNCOsQZjJZW9CgrcYjXu8FHuyQO1lMDvMbeizE7OoYwKUhR5bRxQ81j__TtG27eyo9UpW4y_vhAY5LunwtaIs78_p51M5JiFGoBjiJ23quyBgNLgme8kd4MuEcJIKxDOK_gnKyDpnS4q5xA_6AWTxCVcHhGO4hZiIq90c-XLf-W5DpryTiqD1YJyuhItwuFfcqLQVfSNN3gLJ_YgT_QWAdy4yfGGB0d7WY5TWZZ0ZZyE2dsQVDy4BgkHkLLyzw9GRduPQDorxSxnSMl3Hohst_rUa9cFP-TGyrSD6wG9Idp_KvR6NdehpHgOCqVgXTbMHAwoOcJuFfj9SiELHAiJ7UbVamK3o2JVrEhqHUtd_MtSO0vYxFPi05B3GVCDePeS5IT9CWV4hSYjTbbtNXljzXqkc3jOEfu8rtWdfvxGzqV3EMS7iwXmS7yiF7P5DAMKdSyQI8WRhdgRK96hcL1cdJggH1L4UWSIMpqrOE2MF-e25syN4QXrC6-ofBHBt2iNpKly8adl8rkRO_yZ3x7rFbP7juf9XreB3CCdnx9Yi79Hy_YdvJZR0Lmda2iq4_lMVvGk5CJgMW6qPX3L__Tlo--GmYFW28igyDcWWff7pbd05x4eNoEI5Iqs4dYnKJkqWa06quPxY7AMHsIgHizLrvB5G5K-fBM1ZgLNG3J3lJ0mKsEZ2_0xk2HOZSxeoFjiDc2fo7-gLwKFNRLAtIAHP1_AZtpyM3nfliV4YIm5TAoREriyfVkRGdOLRJYRPhR9su3_hfVjVVB5dmWVsoZvypxZ_p0qv6JYo5V8hhfdXwpBgStTtNNUluO2N&sig=Cg0ArKJSzN6WVWGy_fCP&fbs_aeid=%5Bgw_fbsaeid%5D&crd=aHR0cHM6Ly9sZW5vdm8uY29t&urlfix=1&adurl=https://www.lenovo.com/in/en/d/deals/business%3Fcid%3Din:display:0xwomy%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D24159655819
            - img "Advertisement" [ref=f17e5]
          - button [ref=f17e12] [cursor=pointer]
    - generic [ref=e165]:
      - iframe [ref=e168]:
        - generic [ref=f12e2]:
          - link [ref=f12e4] [cursor=pointer]:
            - /url: https://ad.doubleclick.net/pcs/click?xai=AKAOjsvXubIsqNh7ZBhZIKsn9v8L2cGBD2ggTWFUJ8DllEhU7qet05RRP6gngw5-TZBckE2XfUksC7dpCUIAU5Qzjedir7XIDY-m1CAUZicD1Wuq0c4jDh0qrpJiIZT5lFPyk-PdQB0-ibfMczwGI0XnxmCZvH-yBJbyGExJzi80Z4AhZx1HH4hk_R2wEXCM1o6SldiutLrZYyEKBgTcmcyWXof5rGp7qv5GyGEh0T9r9ISAFCquPVM4tL5SwHnp11ghScCtY4evl6RHbIQU5jdP70kUkfuo5XJV8iaOc-mDk3tQnzGcvrvq3_sfWw6889VDsCYoBKBOkl85gE7V_1VJ711v0chseuod59oSzfnNb_3oESep9vyBTb25jygP4LQz3k7vw7A5oI-BnkYKdse2xWs1wxH4INKVj2QvnZ7g0wXXA5XJf8RGft4hRJwR4CQAr1dz10_MgpoopXBvj3Ac7wywAbcY4tDmtE5jEAwTQAJGa1SV_GYK_2vGHfnpfdT9d3oEj-i8I8JreyLJhZ1c-AlQpZfkLk3yQ61s_JiS4aNCD5R8YO3-WJQ_odDQwmL6v6sVASUaDYala0deYi1UpljNs5yuxNkc01s6ayO9B9W4z7puf-7Lk6fQY9Crrw9Y8PZDRWuDgScROFOcVcjTjed3C4shSmUCdcDWGvjTHJqHBzgO9HN2jbxzVqgKyDNScnl_upAmpRb0yA7gWatTbCUgocrh1Dc1fqKSTwjuSbRnp188pCNOalQUWcIZ67EaQAlHZSeadRKzBOF9PjEi1lRbkfpJFB61Pdh_ZzBVhPmjFJNnuz5XGMOYC84f2-hqlyexXlL2edIPYBV9MNe-sJXm05gqOOQ2lB0kQpiVpg_wyLT9z6p0Skl43WRFCqmZ5Zh0HCa0eRnf-KrKIQv3CE-pFmluHZaPd7vXTrHitDMMbVpHkHub2IGGL9nNVvD7owhI8axQi6jx5HcFXm9yD1U8rRzcVHi6sVaJRkM96X8Z7Mz6j7J4tBjbSCwnC1yHgIWzqgJm1FjkwrNu4Dbg8CrfB4YlXQRQHHteoTajoiqVL3w3f6DY5nJNJiwzf-5gh1tD_jft4st3TmG0c-COpjbIh5EGvbMbtcVT-zL8Dz48BKdupclrMkYB9dZlmVwCoDbyGPTd3kvTf2OqjTdYAOl2hYDGjSuBLHjDHMsEnz1tcTKAWwZwG8qzuIJsn2zXxz_5xMik00udG-xyI2LMgvZ01sEPxzSZRbLv79LuAEVw0MbJLFZXn5EBWPliamXDL17eySNgl7dadKMrAhXXDpFhQV384c7MvEMGQJ9pZ2tbK1gKw2fQloz5Df7r0FhvvWrBoouiX9rl58-4XWv4Hj6kLref0v-wOoGfIsm0UDJgga6md62kdsHYJtexvBJBGRR3AO2bkV-eqNtyzXFs4iG9oT3VPgUuCIgvXa1UMtA-yUVKlm-GjTU-0Y9I-caL2Q8aFCpNAPD02aW6u8l8-PJxAbkSM9KTjpSGhaOEuBKp_Vh5bw4rgxddF-TZQqC8-2y7ZCJ7KpDAEQMsMsWZhIzTm0b6MfNjxfFX-vMZGLD3qtJks1KnnUMIe8yhNZGRb2NoluvlmyCMzP0r4Q9942GJpgFqBxgnHoN2K9TF8dUzlC2yLeidETR2vWDskVMYzjsVEICBjGHrIOKqPaGWJdfCJ_wcSaIrhj5_WRAFRzF9bo_9yPe7FgGnjgm1bwpjy4T15inpO52DSGrYWqihtJQwWC6HIpZXugy1otmmtzUy4DfdIT9ouaaXxIFiFQYk34si005ddvO7kbEY1RGvClV1Q4rFTpdO2Dg1lMY-kaE0CITYsBSwrlCE9hLBMcKyqXAPb9l5q7LJ2u-KXA-BMtD3Hhnd8hAk9SUhTWkHRESE6s_2qO_DDjh3dfNgVwHeZKC2RnDythqDSzmhUh7WUty3t6Ygic4mMv75bA&sai=AMfl-YSy35D8d9Foho55NWQ3n2F_N7bJgg-_Fu-qL1yaMCl5Gm8gv9d1HYPcYGEWcwPhahTZFt_-AdkY8aVu4zcXWY4gOtImVEaHev3_5Kke-9FsO9u3RKlxEpwk4v81NtgzIlz7u9Gj4TgzxOM85sQIQLLjLd1IHDzx9vBsmtoijybmJat6eQhTh6hyYWZhAVSxSyzPGSmXass0IhxSNa1PKiIG_ZI2UG1VPzf8yAu-TEsSzS2gcVzbr5viGvbprJSDKn_nFu9iigiPMdO8VdVoK3Xroii_u7vnCCa75T0TIR2p63f9A2L4Qqmm17dBDHSZrbth7tI4XOrB8i16XR8AaOV1ch39eZDhbvO7dlVz52OcHu93P9MAzPbRtzMbMwtdK1Z915_2-phrT9iuNWHKSobK02Ju4hlmViHWkI0mxcoyXsx6RC4RWMBlg1KpaBoxu5XCqsKVVESwFEWu2BNTSsTne6rAZgFwbm1-7vaHLtwXOWyjROcKI4HuuoDowLx5VHqd4sLGzp8_FyFjDa5Pyy_7UuATHhwwfrktG8JtiCWjo3Yy3o-6vAIJN74JD6gzcg6fK_WDdRe_tSwcRMq8PHPiRDPf6qKF6yVtWeGD1dgjXfydbjehB2LImChJT05VQKhdv-4ibNYK6mjodVlIaIXzwahJBULwyPOEFZyCpevheFmyxLsVC7pQ4JPVU6sbKFS2WsWJ2fzYoG4vtJ7hqC7q_PHtr5wJ_oY8uF6KoFBP-3apZNBHcPrZTqxaIR6ZeSgUUi7bIvJIs-PmbP8MfFzil6evYtg9XTM_z2WwLZ_hY4MA4UZ9I5dzAK8hK8OH0vtiu6NDoXbaOGQyb2yefqHBRuiPetQBoiOqIyYOzDneHHGwdu30pqHC5IGoHAZ8URS4C9fVSJ63xt4BvUs7KyCnsEX8t48Cj6IT6mr2E9hhvdfSzw3ddzQHMK-283Jh3OvLaGOVXEmATqcZPRDGsvHfTo9LdoLgwrrQkzCkmH7v0zB9otY7udIr9kSj&sig=Cg0ArKJSzEd-OMlLQZ07&fbs_aeid=%5Bgw_fbsaeid%5D&crd=aHR0cHM6Ly9tYXJ1dGlzdXp1a2kuY29t&urlfix=1&adurl=https://www.marutisuzuki.com/arena/brezza%3Futm_source%3Ddv360_display%26utm_medium%3Dcpm_cin%26utm_campaign%3D20328217428_ao%26utm_content%3D739245152%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D20328217428
            - img "Advertisement" [ref=f12e5]
          - button [ref=f12e12] [cursor=pointer]
      - iframe [ref=e171]:
        - generic [ref=f5e2]:
          - link [ref=f5e4] [cursor=pointer]:
            - /url: https://ad.doubleclick.net/pcs/click?xai=AKAOjstImcMZBHXWOrH2vk5enNpQ_Wj-VEJLCgPjWts-F4j-U9UjDDgT4ufj2As2FWueuzGLEd03dtKKfO_lgbO5ieKqaJ5yFZ81Q4MtMNGkvFmv-y6NPRKQ9-WRTLB38X4HHb8018F3SH1QXfL97qfJNB1QUUGS34WiOl4FG8v-CXEzbFKtzLUu40pexzvKtueB1gpy4XOQmdU1BrZgeCQ7V2QQFzxTBAHEhvQioMnDpSy-aIvHYobmJ4bQaOEqSWFomt_7EC5v4H0B4TW7GiSZT2qPYfAzDNaSj2amAU6L-fp5SUssLBTL9bN4y9c09jyHiHe5ZjPaFFp_0GfG2N3gMeLbGN4MuMdSve7NJfwZkCiMI0wRLPyhbBiYP174tsmUnmnTNAxh6co3bWt8k7V__gqapQENOVNdXXV2UELr62wXI1k3pCRgQuJSkkrz98dCrRxaiVgcn2z5NavwNFcOz6shD8_by2ZiYwP1dC6YPVvcioFGkFrotpBPLYffkdOkQrW40T4Ja4lrdBYmJVb6fXPmQ9yLrNOngqHLk1mcB8Z__Os_C7emMSPh1CJO6xmp6mfQBpwZ1R2u8Psr5ATRFbhOUZujgKuGWXG56xiLYbmp7TdQGtf26YjRDiP-rsDAjTEl3EroKApnMWLHbwC_pXDn1WcuvIp9eqYBeRsz1P48HtKGZWIKeMKp_8TncPFZjpcVmFijcY6R1CpovSyV7ZmCiv495X_bXPTOYDxVkgOnnLWds84sAFwDF1eZEYRsziHNvG33SM8MfltI3U53FJTrj-kEH5h4_j-BWXkpvnrYCpWfPsLs6E-Xe4Cj5rfJuUWEAh39OvOU2SroNrQ4Xx-d5Aui3VJhC7zhYbKNBPk-hn5amR6NnQjeBfUSXLZK2SINWMRr8nUwxqks6WD-i4Y1lj1P-jbZIIGHmUMaHKxHOsvhRurGG_O0OEPVANzi1gYhfIZGw77Xvhi_pjViSySraN1uoJioPOfSTQJ71dsJbgkRzf0HJdpIync-_Qo86qSX6psWQ9K7Npox0HkxsUoTldIDUt_dltuGj1cEQBc-BPCijmTNBHc-61jBcDZ7nc8YAwF7q9epy0cNkqBpAIr6Or7aUhAJgl1sOksqFqsS0vKdyJQQAeapOHydXOR4Ddq9FEOSYKV_wiurFzX-i-RN_Uw3Mu8dz-bNO8WGBzIbbZtWwvOcJLeB9XxEYlHcD5-IDy8gfTXqasEMwS2FlhyZR_TXUNcQS83yZ9b8E0UFUW8JzSjlfW00KPbn9Z04tWXCCassk10V_bcbOCI8chbXbYsb4GZ5T3SGqZe0n9WF8YaMosrvvqThBISXvQiWfxiM3ZtknP5YToYX_wlw3-zmcu44TlrJXDuYj5G1gSQnOShvhKhZRXcOSA8zvivQKJ5VT-131B1QXRY8kEEI3E4OsxmQw6k2eidQ-WIF4EQvTRVELQYZEIo3uI3pns7a-P7Hv0PeAzIMYrgipWq1FunV0MvwKga4t3h6Ok3658mUiVoooXS73AUZl9z_X4Wao-AqFfPQD1wKlhWi44_afBWPSc8RcmzxHZYgazScDqeUHmeFCAOpXk9i1TH6q_O0MVl9pucarAurKmtQUQgiGFqTUYHg6Xw8nqDp9KqNQUm_KKzqIqd2aG7D65R1YrGRY64-YCkW1lLF8Nl8hzSdHDNH-csJUyEvBCtZteaMZQb2Ly-2hExGgig1h53GO69hfd914Zc9agNRcz6CnsGyj3Df51Zf75aOfm-iIMLlKhTpx56Pu_szJFZRvZoIKQtoKz6NnP2u2GJhpYfr8O1rXb24IItf3OM2jjFQe-__J8o1PaH6XtmbabDIZRHm0BN7GhlCB67Po1UZb4aVvsReo3aZP-E5utt-xIfICiQKoBh6ZyAFfFugt6p6e1c9wE47YouNgrjs-YxPT7pdyqNc6pflHLdy5lToBLMGChGKDbL1bRNt&sai=AMfl-YREZ1lGopuFb9j-HsrqSkZ56uBTgk6kyQWcIQZPs4e23ujRvVubhfjyEqe_q4GGpEM0uT3CBET0lX0w0ekoqHaN2TB_i2DjRYr8aCifdhZc8hNWuk1jyWU0AG_FBZQWRolRHXY8dMXuMJa7Hc1PPf1RU0bZQd5UnLBWWkQYZufBhUlerQegrbDZydNrQ2E_L6JkDwKadSGgfTemdBtVNHB7OudRBEt4l9HFJqSzjJTVMCsiMO4kGwxWehSVN_xOSIpUSQDUmaWCdTMfmJjpVycWU8QEstCEVHR6TtOzS41aneqlFBg8w_ZpixEYx-6PoX4A3jthvgBgJmR1-ctIsPwyr8oMQXDj9TR-CKJ8raBfm64I6MsS7I0nN7bBjjXb5JbyYKvE5LmUhTYXBPs3UfcmH4ChW7_wy7HJT_XEfhKexAfQNyRpabu3azsaGfYX-pxMeRL8UJwUv8Myjs2cVAuDUEIVybFmH2NGelmfFY_4349Gnnagckiw_OlFNXy-1baV30Ju12CEa_5F8d5v6rrYr8TxsIXLmYFX6WPD1CWg3S7JHREvJy5NX5eHYRnvRo1vVD45G7VtioxBXgFyBzurd68k9wt6-70nXgmQUCQLQvOyB4FFq2X-LHLoq5Xug_lpnPuOZmxrX7L18cEQr5qp_BqNwh7tsVQ3v9-D_Tk7LyyvPBQihD5mSVqTbP2FLfAJrCbHwfDujJz-sor8HkaERP8UJF2V19ucdryOq_hQbhUcpnq4nGbh_KwPD-RhKlcblnZgKh1Sub9oK6sJOcIUFFy053awi0n40bOGtgHm4tEBSOPH1t9ryeOb1IjmSpNpj9ATpYhZgLYTB7Aa7z7jEx3sdOVnkRgfcdqvYh_wfQnZbC-tgdPBLF6vjWA17CE5GLLjlUyeR4YR2yKK4iuXN_Q62MMsSjQnQtM2N8qwwtKEwj2iHAUILALH0OZiv1enJO-Dng1a-kmeFeL2hFb7ujwUE7qTXPg3Po8jiAsnGL8PVMh37C0Z3WRv&sig=Cg0ArKJSzAAl4xouJRuc&fbs_aeid=%5Bgw_fbsaeid%5D&crd=aHR0cHM6Ly9tYXJ1dGlzdXp1a2kuY29t&urlfix=1&adurl=https://www.marutisuzuki.com/arena/brezza%3Futm_source%3Ddv360_display%26utm_medium%3Dcpm_cin%26utm_campaign%3D20328217428_ao%26utm_content%3D739245152%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D20328217428
            - img "Advertisement" [ref=f5e5]
          - button [ref=f5e12] [cursor=pointer]
  - contentinfo [ref=e172]:
    - generic [ref=e173]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
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