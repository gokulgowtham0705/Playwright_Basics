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
  - waiting for getByRole('paragraph', { name: /Name:.*/ })

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
        - generic [ref=f8e1]:
          - generic [ref=f8e4]:
            - link [ref=f8e5] [cursor=pointer]:
              - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=C_6ndPFqlavg06f-DxQ_D9pqZAsa5zsuJAam17bevFpf_8NPnERABIMb71nlg5crlg7QOoAHHlcG_PsgBCeACAKgDAcgDCqoEgQJP0KCXos4qvaCUJtS3uJxe93cHm_iMaoHhInt7S0_c_UjjIy1P5kuttxzUFge4Iq_tH3KLX2DYtj16Vn4JoHBu-rmTLu9uJH0xy_GdkUcsGKxcSHFrvaRrOARgxcpmLh3hF8Syloegltj8WWU9L2YG6NySHGSXyEfCY1TmmroRQTkdd9dg-3L9_bXwiaDhMnhlqOnFqkMk2Vrwno_shRdl03KRrtZuYeEAQf4RWj-maVNUqRKBCRbR9YrIc91UnJ96uOQ-bKGalCvVwrnoExxCxCQIbi8Db_8Ww6-sADDwfhpdqYri2ezi3Mh71mO7n3Wu-6gZP74Xu0Ex9U8Shn3Ob8AEt4Po3egF4AQBiAXo787FWaAGLoAHx82RnxmoB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB_7osQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB5_hsQKoB6brsQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwDSCDIIgGEQARgdMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYu8TuoJnplgNgAfIIG2FkeC1zdWJzeW4tMzUyMDYxNzM0MTY2NTU5MrEJebnVZk6ct_qACgOYCwHICwGADAGiDFNiFwoVY29tLmdvb2dsZS5Ob3RlYm9va0xNajAKLmNvbS5nb29nbGUuYW5kcm9pZC5hcHBzLmxhYnMubGFuZ3VhZ2UudGFpbHdpbmR4AYgBAZABAaoNAklOyA0B4g0TCKWK76CZ6ZYDFen_oAIdQ7smI-oNEwjB6O-gmemWAxXp_6ACHUO7JiPwDQKIDv___________wGwDqDFq48Z2BMM0BUBmBYByhYCCgD4FgGAFwGyFxAYASoKNjE2ODU3NjUwNVAGuhcCOAGqGBcJAAAAAPATB0ESCjYxNjg1NzY1MDUYAbIYCRICm18YLiIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMI-ML4oJnplgMV6f-gAh1DuyYjEAEYASAAEgIM2PD_BwE&num=1&cid=CAQSnwIAQM4h3PNeLtT57Ij23eFOVD0pykaqdEN0ToCvABqQei1E_hEq0pvpRWPKdp-DibbRKgNy0jpeONU7y9K80KVG2XbNCJZepiH7xgwQh1j1TwEULW3cIVTDmM2_OdAdZKpvrVcvbzbBQyOV7ckEmBwBYLgN6My-tyuyP42us_c6YiN4CdgfWausAL-axv7Ii1aAKqUHD3jo5w-74C6Lb5qTsGARV3hhEa4MSJCwEB5ConelSw4dnwBM3AeL5bl90RlPXkp-1CIZ_1qULhBFhGcUM4qTnq663Du8rqTxk70YsqVAXkx82BTvnYlTkSPH4b2QVodZpo7IuQvL1sO49O8LFU5csbF8MEUHHp6I5sOXY-SdvnSG_b5eQD53LgEGVBgB&sig=AOD64_0z7uhPiliifzsHDm35PEKtIVd7xA&client=ca-pub-4573231550355221&rf=4&nb=9&adurl=https://notebook.google/%3Fgad_source%3D5%26gad_campaignid%3D24036751336%26gclid%3DEAIaIQobChMI-ML4oJnplgMV6f-gAh1DuyYjEAEYASAAEgIM2PD_BwE
            - generic [ref=f8e8]:
              - generic [ref=f8e11]:
                - link "Free for students" [ref=f8e15] [cursor=pointer]:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=C_6ndPFqlavg06f-DxQ_D9pqZAsa5zsuJAam17bevFpf_8NPnERABIMb71nlg5crlg7QOoAHHlcG_PsgBCeACAKgDAcgDCqoEgQJP0KCXos4qvaCUJtS3uJxe93cHm_iMaoHhInt7S0_c_UjjIy1P5kuttxzUFge4Iq_tH3KLX2DYtj16Vn4JoHBu-rmTLu9uJH0xy_GdkUcsGKxcSHFrvaRrOARgxcpmLh3hF8Syloegltj8WWU9L2YG6NySHGSXyEfCY1TmmroRQTkdd9dg-3L9_bXwiaDhMnhlqOnFqkMk2Vrwno_shRdl03KRrtZuYeEAQf4RWj-maVNUqRKBCRbR9YrIc91UnJ96uOQ-bKGalCvVwrnoExxCxCQIbi8Db_8Ww6-sADDwfhpdqYri2ezi3Mh71mO7n3Wu-6gZP74Xu0Ex9U8Shn3Ob8AEt4Po3egF4AQBiAXo787FWaAGLoAHx82RnxmoB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB_7osQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB5_hsQKoB6brsQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwDSCDIIgGEQARgdMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYu8TuoJnplgNgAfIIG2FkeC1zdWJzeW4tMzUyMDYxNzM0MTY2NTU5MrEJebnVZk6ct_qACgOYCwHICwGADAGiDFNiFwoVY29tLmdvb2dsZS5Ob3RlYm9va0xNajAKLmNvbS5nb29nbGUuYW5kcm9pZC5hcHBzLmxhYnMubGFuZ3VhZ2UudGFpbHdpbmR4AYgBAZABAaoNAklOyA0B4g0TCKWK76CZ6ZYDFen_oAIdQ7smI-oNEwjB6O-gmemWAxXp_6ACHUO7JiPwDQKIDv___________wGwDqDFq48Z2BMM0BUBmBYByhYCCgD4FgGAFwGyFxAYASoKNjE2ODU3NjUwNVAGuhcCOAGqGBcJAAAAAPATB0ESCjYxNjg1NzY1MDUYAbIYCRICm18YLiIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMI-ML4oJnplgMV6f-gAh1DuyYjEAEYASAAEgIM2PD_BwE&num=1&cid=CAQSnwIAQM4h3PNeLtT57Ij23eFOVD0pykaqdEN0ToCvABqQei1E_hEq0pvpRWPKdp-DibbRKgNy0jpeONU7y9K80KVG2XbNCJZepiH7xgwQh1j1TwEULW3cIVTDmM2_OdAdZKpvrVcvbzbBQyOV7ckEmBwBYLgN6My-tyuyP42us_c6YiN4CdgfWausAL-axv7Ii1aAKqUHD3jo5w-74C6Lb5qTsGARV3hhEa4MSJCwEB5ConelSw4dnwBM3AeL5bl90RlPXkp-1CIZ_1qULhBFhGcUM4qTnq663Du8rqTxk70YsqVAXkx82BTvnYlTkSPH4b2QVodZpo7IuQvL1sO49O8LFU5csbF8MEUHHp6I5sOXY-SdvnSG_b5eQD53LgEGVBgB&sig=AOD64_0z7uhPiliifzsHDm35PEKtIVd7xA&client=ca-pub-4573231550355221&rf=4&nb=0&adurl=https://notebook.google/%3Fgad_source%3D5%26gad_campaignid%3D24036751336%26gclid%3DEAIaIQobChMI-ML4oJnplgMV6f-gAh1DuyYjEAEYASAAEgIM2PD_BwE
                - link "Start with lecture notes, finish ready for tests." [ref=f8e19] [cursor=pointer]:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=C_6ndPFqlavg06f-DxQ_D9pqZAsa5zsuJAam17bevFpf_8NPnERABIMb71nlg5crlg7QOoAHHlcG_PsgBCeACAKgDAcgDCqoEgQJP0KCXos4qvaCUJtS3uJxe93cHm_iMaoHhInt7S0_c_UjjIy1P5kuttxzUFge4Iq_tH3KLX2DYtj16Vn4JoHBu-rmTLu9uJH0xy_GdkUcsGKxcSHFrvaRrOARgxcpmLh3hF8Syloegltj8WWU9L2YG6NySHGSXyEfCY1TmmroRQTkdd9dg-3L9_bXwiaDhMnhlqOnFqkMk2Vrwno_shRdl03KRrtZuYeEAQf4RWj-maVNUqRKBCRbR9YrIc91UnJ96uOQ-bKGalCvVwrnoExxCxCQIbi8Db_8Ww6-sADDwfhpdqYri2ezi3Mh71mO7n3Wu-6gZP74Xu0Ex9U8Shn3Ob8AEt4Po3egF4AQBiAXo787FWaAGLoAHx82RnxmoB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB_7osQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB5_hsQKoB6brsQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwDSCDIIgGEQARgdMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYu8TuoJnplgNgAfIIG2FkeC1zdWJzeW4tMzUyMDYxNzM0MTY2NTU5MrEJebnVZk6ct_qACgOYCwHICwGADAGiDFNiFwoVY29tLmdvb2dsZS5Ob3RlYm9va0xNajAKLmNvbS5nb29nbGUuYW5kcm9pZC5hcHBzLmxhYnMubGFuZ3VhZ2UudGFpbHdpbmR4AYgBAZABAaoNAklOyA0B4g0TCKWK76CZ6ZYDFen_oAIdQ7smI-oNEwjB6O-gmemWAxXp_6ACHUO7JiPwDQKIDv___________wGwDqDFq48Z2BMM0BUBmBYByhYCCgD4FgGAFwGyFxAYASoKNjE2ODU3NjUwNVAGuhcCOAGqGBcJAAAAAPATB0ESCjYxNjg1NzY1MDUYAbIYCRICm18YLiIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMI-ML4oJnplgMV6f-gAh1DuyYjEAEYASAAEgIM2PD_BwE&num=1&cid=CAQSnwIAQM4h3PNeLtT57Ij23eFOVD0pykaqdEN0ToCvABqQei1E_hEq0pvpRWPKdp-DibbRKgNy0jpeONU7y9K80KVG2XbNCJZepiH7xgwQh1j1TwEULW3cIVTDmM2_OdAdZKpvrVcvbzbBQyOV7ckEmBwBYLgN6My-tyuyP42us_c6YiN4CdgfWausAL-axv7Ii1aAKqUHD3jo5w-74C6Lb5qTsGARV3hhEa4MSJCwEB5ConelSw4dnwBM3AeL5bl90RlPXkp-1CIZ_1qULhBFhGcUM4qTnq663Du8rqTxk70YsqVAXkx82BTvnYlTkSPH4b2QVodZpo7IuQvL1sO49O8LFU5csbF8MEUHHp6I5sOXY-SdvnSG_b5eQD53LgEGVBgB&sig=AOD64_0z7uhPiliifzsHDm35PEKtIVd7xA&client=ca-pub-4573231550355221&rf=4&nb=7&adurl=https://notebook.google/%3Fgad_source%3D5%26gad_campaignid%3D24036751336%26gclid%3DEAIaIQobChMI-ML4oJnplgMV6f-gAh1DuyYjEAEYASAAEgIM2PD_BwE
              - generic [ref=f8e22]:
                - link:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=C_6ndPFqlavg06f-DxQ_D9pqZAsa5zsuJAam17bevFpf_8NPnERABIMb71nlg5crlg7QOoAHHlcG_PsgBCeACAKgDAcgDCqoEgQJP0KCXos4qvaCUJtS3uJxe93cHm_iMaoHhInt7S0_c_UjjIy1P5kuttxzUFge4Iq_tH3KLX2DYtj16Vn4JoHBu-rmTLu9uJH0xy_GdkUcsGKxcSHFrvaRrOARgxcpmLh3hF8Syloegltj8WWU9L2YG6NySHGSXyEfCY1TmmroRQTkdd9dg-3L9_bXwiaDhMnhlqOnFqkMk2Vrwno_shRdl03KRrtZuYeEAQf4RWj-maVNUqRKBCRbR9YrIc91UnJ96uOQ-bKGalCvVwrnoExxCxCQIbi8Db_8Ww6-sADDwfhpdqYri2ezi3Mh71mO7n3Wu-6gZP74Xu0Ex9U8Shn3Ob8AEt4Po3egF4AQBiAXo787FWaAGLoAHx82RnxmoB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB_7osQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB5_hsQKoB6brsQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwDSCDIIgGEQARgdMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYu8TuoJnplgNgAfIIG2FkeC1zdWJzeW4tMzUyMDYxNzM0MTY2NTU5MrEJebnVZk6ct_qACgOYCwHICwGADAGiDFNiFwoVY29tLmdvb2dsZS5Ob3RlYm9va0xNajAKLmNvbS5nb29nbGUuYW5kcm9pZC5hcHBzLmxhYnMubGFuZ3VhZ2UudGFpbHdpbmR4AYgBAZABAaoNAklOyA0B4g0TCKWK76CZ6ZYDFen_oAIdQ7smI-oNEwjB6O-gmemWAxXp_6ACHUO7JiPwDQKIDv___________wGwDqDFq48Z2BMM0BUBmBYByhYCCgD4FgGAFwGyFxAYASoKNjE2ODU3NjUwNVAGuhcCOAGqGBcJAAAAAPATB0ESCjYxNjg1NzY1MDUYAbIYCRICm18YLiIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMI-ML4oJnplgMV6f-gAh1DuyYjEAEYASAAEgIM2PD_BwE&num=1&cid=CAQSnwIAQM4h3PNeLtT57Ij23eFOVD0pykaqdEN0ToCvABqQei1E_hEq0pvpRWPKdp-DibbRKgNy0jpeONU7y9K80KVG2XbNCJZepiH7xgwQh1j1TwEULW3cIVTDmM2_OdAdZKpvrVcvbzbBQyOV7ckEmBwBYLgN6My-tyuyP42us_c6YiN4CdgfWausAL-axv7Ii1aAKqUHD3jo5w-74C6Lb5qTsGARV3hhEa4MSJCwEB5ConelSw4dnwBM3AeL5bl90RlPXkp-1CIZ_1qULhBFhGcUM4qTnq663Du8rqTxk70YsqVAXkx82BTvnYlTkSPH4b2QVodZpo7IuQvL1sO49O8LFU5csbF8MEUHHp6I5sOXY-SdvnSG_b5eQD53LgEGVBgB&sig=AOD64_0z7uhPiliifzsHDm35PEKtIVd7xA&client=ca-pub-4573231550355221&rf=4&nb=8&adurl=https://notebook.google/%3Fgad_source%3D5%26gad_campaignid%3D24036751336%26gclid%3DEAIaIQobChMI-ML4oJnplgMV6f-gAh1DuyYjEAEYASAAEgIM2PD_BwE
                - link "Gemini Notebook" [ref=f8e24] [cursor=pointer]:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=C_6ndPFqlavg06f-DxQ_D9pqZAsa5zsuJAam17bevFpf_8NPnERABIMb71nlg5crlg7QOoAHHlcG_PsgBCeACAKgDAcgDCqoEgQJP0KCXos4qvaCUJtS3uJxe93cHm_iMaoHhInt7S0_c_UjjIy1P5kuttxzUFge4Iq_tH3KLX2DYtj16Vn4JoHBu-rmTLu9uJH0xy_GdkUcsGKxcSHFrvaRrOARgxcpmLh3hF8Syloegltj8WWU9L2YG6NySHGSXyEfCY1TmmroRQTkdd9dg-3L9_bXwiaDhMnhlqOnFqkMk2Vrwno_shRdl03KRrtZuYeEAQf4RWj-maVNUqRKBCRbR9YrIc91UnJ96uOQ-bKGalCvVwrnoExxCxCQIbi8Db_8Ww6-sADDwfhpdqYri2ezi3Mh71mO7n3Wu-6gZP74Xu0Ex9U8Shn3Ob8AEt4Po3egF4AQBiAXo787FWaAGLoAHx82RnxmoB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB_7osQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB5_hsQKoB6brsQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwDSCDIIgGEQARgdMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYu8TuoJnplgNgAfIIG2FkeC1zdWJzeW4tMzUyMDYxNzM0MTY2NTU5MrEJebnVZk6ct_qACgOYCwHICwGADAGiDFNiFwoVY29tLmdvb2dsZS5Ob3RlYm9va0xNajAKLmNvbS5nb29nbGUuYW5kcm9pZC5hcHBzLmxhYnMubGFuZ3VhZ2UudGFpbHdpbmR4AYgBAZABAaoNAklOyA0B4g0TCKWK76CZ6ZYDFen_oAIdQ7smI-oNEwjB6O-gmemWAxXp_6ACHUO7JiPwDQKIDv___________wGwDqDFq48Z2BMM0BUBmBYByhYCCgD4FgGAFwGyFxAYASoKNjE2ODU3NjUwNVAGuhcCOAGqGBcJAAAAAPATB0ESCjYxNjg1NzY1MDUYAbIYCRICm18YLiIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMI-ML4oJnplgMV6f-gAh1DuyYjEAEYASAAEgIM2PD_BwE&num=1&cid=CAQSnwIAQM4h3PNeLtT57Ij23eFOVD0pykaqdEN0ToCvABqQei1E_hEq0pvpRWPKdp-DibbRKgNy0jpeONU7y9K80KVG2XbNCJZepiH7xgwQh1j1TwEULW3cIVTDmM2_OdAdZKpvrVcvbzbBQyOV7ckEmBwBYLgN6My-tyuyP42us_c6YiN4CdgfWausAL-axv7Ii1aAKqUHD3jo5w-74C6Lb5qTsGARV3hhEa4MSJCwEB5ConelSw4dnwBM3AeL5bl90RlPXkp-1CIZ_1qULhBFhGcUM4qTnq663Du8rqTxk70YsqVAXkx82BTvnYlTkSPH4b2QVodZpo7IuQvL1sO49O8LFU5csbF8MEUHHp6I5sOXY-SdvnSG_b5eQD53LgEGVBgB&sig=AOD64_0z7uhPiliifzsHDm35PEKtIVd7xA&client=ca-pub-4573231550355221&rf=4&nb=1&adurl=https://notebook.google/%3Fgad_source%3D5%26gad_campaignid%3D24036751336%26gclid%3DEAIaIQobChMI-ML4oJnplgMV6f-gAh1DuyYjEAEYASAAEgIM2PD_BwE
                - link "Learn More" [ref=f8e26] [cursor=pointer]:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=C_6ndPFqlavg06f-DxQ_D9pqZAsa5zsuJAam17bevFpf_8NPnERABIMb71nlg5crlg7QOoAHHlcG_PsgBCeACAKgDAcgDCqoEgQJP0KCXos4qvaCUJtS3uJxe93cHm_iMaoHhInt7S0_c_UjjIy1P5kuttxzUFge4Iq_tH3KLX2DYtj16Vn4JoHBu-rmTLu9uJH0xy_GdkUcsGKxcSHFrvaRrOARgxcpmLh3hF8Syloegltj8WWU9L2YG6NySHGSXyEfCY1TmmroRQTkdd9dg-3L9_bXwiaDhMnhlqOnFqkMk2Vrwno_shRdl03KRrtZuYeEAQf4RWj-maVNUqRKBCRbR9YrIc91UnJ96uOQ-bKGalCvVwrnoExxCxCQIbi8Db_8Ww6-sADDwfhpdqYri2ezi3Mh71mO7n3Wu-6gZP74Xu0Ex9U8Shn3Ob8AEt4Po3egF4AQBiAXo787FWaAGLoAHx82RnxmoB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB_7osQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB5_hsQKoB6brsQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwDSCDIIgGEQARgdMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYu8TuoJnplgNgAfIIG2FkeC1zdWJzeW4tMzUyMDYxNzM0MTY2NTU5MrEJebnVZk6ct_qACgOYCwHICwGADAGiDFNiFwoVY29tLmdvb2dsZS5Ob3RlYm9va0xNajAKLmNvbS5nb29nbGUuYW5kcm9pZC5hcHBzLmxhYnMubGFuZ3VhZ2UudGFpbHdpbmR4AYgBAZABAaoNAklOyA0B4g0TCKWK76CZ6ZYDFen_oAIdQ7smI-oNEwjB6O-gmemWAxXp_6ACHUO7JiPwDQKIDv___________wGwDqDFq48Z2BMM0BUBmBYByhYCCgD4FgGAFwGyFxAYASoKNjE2ODU3NjUwNVAGuhcCOAGqGBcJAAAAAPATB0ESCjYxNjg1NzY1MDUYAbIYCRICm18YLiIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMI-ML4oJnplgMV6f-gAh1DuyYjEAEYASAAEgIM2PD_BwE&num=1&cid=CAQSnwIAQM4h3PNeLtT57Ij23eFOVD0pykaqdEN0ToCvABqQei1E_hEq0pvpRWPKdp-DibbRKgNy0jpeONU7y9K80KVG2XbNCJZepiH7xgwQh1j1TwEULW3cIVTDmM2_OdAdZKpvrVcvbzbBQyOV7ckEmBwBYLgN6My-tyuyP42us_c6YiN4CdgfWausAL-axv7Ii1aAKqUHD3jo5w-74C6Lb5qTsGARV3hhEa4MSJCwEB5ConelSw4dnwBM3AeL5bl90RlPXkp-1CIZ_1qULhBFhGcUM4qTnq663Du8rqTxk70YsqVAXkx82BTvnYlTkSPH4b2QVodZpo7IuQvL1sO49O8LFU5csbF8MEUHHp6I5sOXY-SdvnSG_b5eQD53LgEGVBgB&sig=AOD64_0z7uhPiliifzsHDm35PEKtIVd7xA&client=ca-pub-4573231550355221&rf=4&nb=8&adurl=https://notebook.google/%3Fgad_source%3D5%26gad_campaignid%3D24036751336%26gclid%3DEAIaIQobChMI-ML4oJnplgMV6f-gAh1DuyYjEAEYASAAEgIM2PD_BwE
                - link [ref=f8e27] [cursor=pointer]:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=C_6ndPFqlavg06f-DxQ_D9pqZAsa5zsuJAam17bevFpf_8NPnERABIMb71nlg5crlg7QOoAHHlcG_PsgBCeACAKgDAcgDCqoEgQJP0KCXos4qvaCUJtS3uJxe93cHm_iMaoHhInt7S0_c_UjjIy1P5kuttxzUFge4Iq_tH3KLX2DYtj16Vn4JoHBu-rmTLu9uJH0xy_GdkUcsGKxcSHFrvaRrOARgxcpmLh3hF8Syloegltj8WWU9L2YG6NySHGSXyEfCY1TmmroRQTkdd9dg-3L9_bXwiaDhMnhlqOnFqkMk2Vrwno_shRdl03KRrtZuYeEAQf4RWj-maVNUqRKBCRbR9YrIc91UnJ96uOQ-bKGalCvVwrnoExxCxCQIbi8Db_8Ww6-sADDwfhpdqYri2ezi3Mh71mO7n3Wu-6gZP74Xu0Ex9U8Shn3Ob8AEt4Po3egF4AQBiAXo787FWaAGLoAHx82RnxmoB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB_7osQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB5_hsQKoB6brsQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwDSCDIIgGEQARgdMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYu8TuoJnplgNgAfIIG2FkeC1zdWJzeW4tMzUyMDYxNzM0MTY2NTU5MrEJebnVZk6ct_qACgOYCwHICwGADAGiDFNiFwoVY29tLmdvb2dsZS5Ob3RlYm9va0xNajAKLmNvbS5nb29nbGUuYW5kcm9pZC5hcHBzLmxhYnMubGFuZ3VhZ2UudGFpbHdpbmR4AYgBAZABAaoNAklOyA0B4g0TCKWK76CZ6ZYDFen_oAIdQ7smI-oNEwjB6O-gmemWAxXp_6ACHUO7JiPwDQKIDv___________wGwDqDFq48Z2BMM0BUBmBYByhYCCgD4FgGAFwGyFxAYASoKNjE2ODU3NjUwNVAGuhcCOAGqGBcJAAAAAPATB0ESCjYxNjg1NzY1MDUYAbIYCRICm18YLiIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMI-ML4oJnplgMV6f-gAh1DuyYjEAEYASAAEgIM2PD_BwE&num=1&cid=CAQSnwIAQM4h3PNeLtT57Ij23eFOVD0pykaqdEN0ToCvABqQei1E_hEq0pvpRWPKdp-DibbRKgNy0jpeONU7y9K80KVG2XbNCJZepiH7xgwQh1j1TwEULW3cIVTDmM2_OdAdZKpvrVcvbzbBQyOV7ckEmBwBYLgN6My-tyuyP42us_c6YiN4CdgfWausAL-axv7Ii1aAKqUHD3jo5w-74C6Lb5qTsGARV3hhEa4MSJCwEB5ConelSw4dnwBM3AeL5bl90RlPXkp-1CIZ_1qULhBFhGcUM4qTnq663Du8rqTxk70YsqVAXkx82BTvnYlTkSPH4b2QVodZpo7IuQvL1sO49O8LFU5csbF8MEUHHp6I5sOXY-SdvnSG_b5eQD53LgEGVBgB&sig=AOD64_0z7uhPiliifzsHDm35PEKtIVd7xA&client=ca-pub-4573231550355221&rf=4&nb=8&adurl=https://notebook.google/%3Fgad_source%3D5%26gad_campaignid%3D24036751336%26gclid%3DEAIaIQobChMI-ML4oJnplgMV6f-gAh1DuyYjEAEYASAAEgIM2PD_BwE
          - generic [ref=f8e37]:
            - link [ref=f8e39] [cursor=pointer]:
              - /url: https://adssettings.google.com/whythisad?source=display&reasons=ARXetypLSbvEl4uV2La1gMXHSftka3HlcWJ86COP_t0lHU0Q1Lh69kh3LKzTVMBgoy_faW-yy25vUrVj_8-e0qz13yNWlxIDONNg5iIcSGiNwis3lcBQQ7gjX6DbzD01TC0UgxCaPGufnCUtRJMc2wTE32kN0MyTKtXlC8h7aILzjG2o0oRnuAwIo6k2cMt8OziwGhL5RQmsS5DCB9FVq2TzQYORGi72HCrzlSCJUWaYfrM-sQmW0Wml577ZD-H5mzdQxJfrYQmKtEColq3Tar2E1tNEYi3eSI7PiDJxi9lplLIScqC_AxCM5Ts-bzaMJ0G9DPhiuMn_XarSFVMToX9o1VbeKGcbfbM0kAGAEz0OMM7Xhj7i6QeoehC4u9OJ1dLfpHfE61DSZjjoVP6Huxo9pvmpi799B7vfmWw7E_lDQ7rDRVroZS79_PFx-7t5MzpCdhajClj_WtTFj_5YMIzzOzwi0b8RBQacIetEmMJBdN5P6bExxSR8G6QfvjGkFynpRrcVINKc3Teje--8CoxjTp9_0DS45p6Lo9UfoyM7wmdJy5r7NP6CeAmqfNRW8VgUKnC5Evc99aRqjVpSQ7VeOEq9ix7kQKMDnQQWUDxPFueltaAvnf3En7Qm7-TMkF6J_6eFTOUCaXYJcYnOzQs6XVsH2kalgczgKL5yuNTuja3T_Of68ja5vstctn0GSE3uR6JblMquPFaADmvwHEXNiMuO2eP7iKENc_p1iWdqLSD7RjOCYReNZjaLIwYZWgOhETgtefCOj2zxb-2kF0KhynhdOKMX3Y3RSryRMYyN-ge5UClgvCQFiMmo3SkM4it17fwUc7D3nzvkBdzpQFeRii3I-aFF6tB3C996Gx2bh7rsCrL8focNMIfOf3cGwU-vOPgDPKSciLPIBUUpMjRBnAPGL18qOPorUZuePZA0iYRE7WsHo39E5dCoPGPVIN7SQZypba8n6vSo2olFBoUL58u15W9GfvKC2Jm0A2H2Li8tvYNqPlrHGUbJQr1L-yle7GX7coLpaHtF2_Trj_fRZkzla1QQb54Fq10WrAwTnxEHDnW7CUxGcxXAA5EKAdVr3a3cT15iPE8S-if0b-zgnuhYSrtR-ElBSSwwk8jY93TPJ0XD9F0v10KwKYTddaiEql7KJLuTLHhOrKn0czjz-hfXpWr-ka_dntz4hz7iluH4HqYtttxFGO75TZBIiJN1AiEb3tDLafMKgq-lPtUzfWIoDWXbobdAKCH-XncYWk3d07Vwtq3ioYsD7O8TzRdlZtveZoD65r78WI_4gHR5DQ4OGzFSPpiORrbvX-6PAFnbP3IgftMNuZZikrE12_IKoEXI6iw1HnIm67hPqpOLMHjTzoP7Y-csaHxbLt7PKbkm90cnESw2fzprO4FpNtSzO977SIDTE_f1OLPNxh9rO6koYrqs5SPzA4zCQVCDGknDzFf_Ps4X53JMM-ZBaDcFZmtq9mplcsgyC_kaYjwMHA0_595bBJPaNEQjqn7WOSrfLoD3HvgPKRW2kySeIik76le2nwkgtq4e9uxZtvkLR_RaQ2xPvRvInuHZVZWY2H5ltq0LU0wKCh8I2eaNFWIbRTcFTT4BqGeL5dd7YaegHhQP9rULIcf-6ydILFYeseSggRPJTHA24K_c8s5qSYr190aeQd16ygA3HC3DbUNJ3K4_Urhls5ZrtGAm5pfl2_Ozgi-5Vev0EYSpinYOUQVzcoYGx3Wb5O6ZeorMain5SHKlHr9Lj_XuVfvzkSdUb9PgjbDitJHt5G4mkDUYeZoeQusTiFSe1k-GONnnbi0ElYLfYQhE3fNybNqtFQNku9YJ0c3CBD3r-S5c1mrjlWnUfMO2ugJOf58xnCkE74qWBizVURz9a5GQA_5uxFKO4z96GSeEo4pbF8buVxzqc73ViCQLyBneGjTs8vwkqXcPWqfL7RVu11u1WaK5wu8BqqvQQSt73dqNxVBtHD7dmTIA9oQ8zAtq3hxX5RRC2gk4f07fVOPmGuo8wA24BdAtZSFB2dnrbhn2OwRuTfhKG4DsOHPnPAPIZ78MkQqC0Seq3eYleEemEtIt8XTfYIt_o7YHSzz2MH-TXutyknvBLPbnzipbV8Kc5znqIIKgaDeOOxZypmJvsN--cS3jGmuyqZTfnVQ7B9E0pRkZTU_SuLTPbcUo6Lp9FCYUiIhR_bVKjeCyNM0FhNJjVR3HudDsaUrlr8at-JD3ueHQ1soSi-qD1jD7orpCB4a56ZqWOV8Mz6k2AceKKURPvwt-JDYr4es1MHCZg4MESYlXczVOXL-aQwhvLZAfPo5uXpBHlRhQZgmeB5k5Owd2lNLXyDLEATwOr7RJi9g4wo4-g6C1EUmOrPhQ-r1wg-jvOQNEC7bgZLPQpIII-Fx5CZKOBGkVKbSxUUml2Moh5Qb-u9jDybYnHppobyhQjz67RnK0WUhhK-rPQTQMuU2U4tW-ja2wqXnlbcaBIIThswUGrZmdNFCtTPLIqM5oLKJpgFP3N2FbsOV_WOzLRkkFMBP4dUmkYkRvysFnA1D50SJtjzD5_1SQw3ZpVf_Ze_-soYbMf9th5rVUjAKK98oA_UpKHGRmU1pySoWhWKxMDAGoNYklrT992PnzqvWsXH3QFRa7DDfEx1c0w2inNKaRFcDyPlkH5DYPvq-r8ZKBYiX3EqFLz-yzAO51lw5gxaGkYdjq8M6Pboz14Tytt8oVpSfewZedJ9esaU8JCBBhNpRKaOM_nxg61vuR7a35Sg2yKw9rbTPdiM2_oISFQfTdvWY01McCMIB0ytM-WZU98Y4KNj-4CFHTC2jvl9-QJpwTTPTL7shZVosWt3f6yt1WrB_s86vbW4eEbE-_Y6ZkbsK035M2-IQeY1OYQ4EHOyCjHKao0QjJJHwtufxoeineq72-Zzu9ReCRrRSpkER_yP1EKPq5Q-shxbNYorANO21qo_A024zO7uCi-59cXGW9Yj5satvoKxkLEUshmkBdg8clVSHpNr9YqPcz_8_gwtlrdP67eZ97N8xdALXHEvCvyYl-tO6nB22oX9ZzP6Ih1Wa9e4gBrVuZFW1qIrwPmCrxXcpv41u_ndX4WY6ocBIIONg9zT1AJcCEYbERESRQI5ZF9Tf0sdselGzJkDO_osiV_FWrXtc5MKwRqBU9wovYiMm00h5MGjZ0EiqtlBqaMPlqTqiCsaBrkGw4nUoO3OOmCYFgDcWyz6a6qu39VWs_cWDpBpaYRomOcz8RT6SPhglyjSm-Y2XtvAMsZYAlbrh0p9nPIR_bH5ezaCoXdf442YewrXbVSQCK0dmwWsQooqEMzrRfvnzdEQ&opi=122715837
            - link [ref=f8e43] [cursor=pointer]:
              - /url: https://adssettings.google.com/whythisad?source=display&reasons=ARXetypLSbvEl4uV2La1gMXHSftka3HlcWJ86COP_t0lHU0Q1Lh69kh3LKzTVMBgoy_faW-yy25vUrVj_8-e0qz13yNWlxIDONNg5iIcSGiNwis3lcBQQ7gjX6DbzD01TC0UgxCaPGufnCUtRJMc2wTE32kN0MyTKtXlC8h7aILzjG2o0oRnuAwIo6k2cMt8OziwGhL5RQmsS5DCB9FVq2TzQYORGi72HCrzlSCJUWaYfrM-sQmW0Wml577ZD-H5mzdQxJfrYQmKtEColq3Tar2E1tNEYi3eSI7PiDJxi9lplLIScqC_AxCM5Ts-bzaMJ0G9DPhiuMn_XarSFVMToX9o1VbeKGcbfbM0kAGAEz0OMM7Xhj7i6QeoehC4u9OJ1dLfpHfE61DSZjjoVP6Huxo9pvmpi799B7vfmWw7E_lDQ7rDRVroZS79_PFx-7t5MzpCdhajClj_WtTFj_5YMIzzOzwi0b8RBQacIetEmMJBdN5P6bExxSR8G6QfvjGkFynpRrcVINKc3Teje--8CoxjTp9_0DS45p6Lo9UfoyM7wmdJy5r7NP6CeAmqfNRW8VgUKnC5Evc99aRqjVpSQ7VeOEq9ix7kQKMDnQQWUDxPFueltaAvnf3En7Qm7-TMkF6J_6eFTOUCaXYJcYnOzQs6XVsH2kalgczgKL5yuNTuja3T_Of68ja5vstctn0GSE3uR6JblMquPFaADmvwHEXNiMuO2eP7iKENc_p1iWdqLSD7RjOCYReNZjaLIwYZWgOhETgtefCOj2zxb-2kF0KhynhdOKMX3Y3RSryRMYyN-ge5UClgvCQFiMmo3SkM4it17fwUc7D3nzvkBdzpQFeRii3I-aFF6tB3C996Gx2bh7rsCrL8focNMIfOf3cGwU-vOPgDPKSciLPIBUUpMjRBnAPGL18qOPorUZuePZA0iYRE7WsHo39E5dCoPGPVIN7SQZypba8n6vSo2olFBoUL58u15W9GfvKC2Jm0A2H2Li8tvYNqPlrHGUbJQr1L-yle7GX7coLpaHtF2_Trj_fRZkzla1QQb54Fq10WrAwTnxEHDnW7CUxGcxXAA5EKAdVr3a3cT15iPE8S-if0b-zgnuhYSrtR-ElBSSwwk8jY93TPJ0XD9F0v10KwKYTddaiEql7KJLuTLHhOrKn0czjz-hfXpWr-ka_dntz4hz7iluH4HqYtttxFGO75TZBIiJN1AiEb3tDLafMKgq-lPtUzfWIoDWXbobdAKCH-XncYWk3d07Vwtq3ioYsD7O8TzRdlZtveZoD65r78WI_4gHR5DQ4OGzFSPpiORrbvX-6PAFnbP3IgftMNuZZikrE12_IKoEXI6iw1HnIm67hPqpOLMHjTzoP7Y-csaHxbLt7PKbkm90cnESw2fzprO4FpNtSzO977SIDTE_f1OLPNxh9rO6koYrqs5SPzA4zCQVCDGknDzFf_Ps4X53JMM-ZBaDcFZmtq9mplcsgyC_kaYjwMHA0_595bBJPaNEQjqn7WOSrfLoD3HvgPKRW2kySeIik76le2nwkgtq4e9uxZtvkLR_RaQ2xPvRvInuHZVZWY2H5ltq0LU0wKCh8I2eaNFWIbRTcFTT4BqGeL5dd7YaegHhQP9rULIcf-6ydILFYeseSggRPJTHA24K_c8s5qSYr190aeQd16ygA3HC3DbUNJ3K4_Urhls5ZrtGAm5pfl2_Ozgi-5Vev0EYSpinYOUQVzcoYGx3Wb5O6ZeorMain5SHKlHr9Lj_XuVfvzkSdUb9PgjbDitJHt5G4mkDUYeZoeQusTiFSe1k-GONnnbi0ElYLfYQhE3fNybNqtFQNku9YJ0c3CBD3r-S5c1mrjlWnUfMO2ugJOf58xnCkE74qWBizVURz9a5GQA_5uxFKO4z96GSeEo4pbF8buVxzqc73ViCQLyBneGjTs8vwkqXcPWqfL7RVu11u1WaK5wu8BqqvQQSt73dqNxVBtHD7dmTIA9oQ8zAtq3hxX5RRC2gk4f07fVOPmGuo8wA24BdAtZSFB2dnrbhn2OwRuTfhKG4DsOHPnPAPIZ78MkQqC0Seq3eYleEemEtIt8XTfYIt_o7YHSzz2MH-TXutyknvBLPbnzipbV8Kc5znqIIKgaDeOOxZypmJvsN--cS3jGmuyqZTfnVQ7B9E0pRkZTU_SuLTPbcUo6Lp9FCYUiIhR_bVKjeCyNM0FhNJjVR3HudDsaUrlr8at-JD3ueHQ1soSi-qD1jD7orpCB4a56ZqWOV8Mz6k2AceKKURPvwt-JDYr4es1MHCZg4MESYlXczVOXL-aQwhvLZAfPo5uXpBHlRhQZgmeB5k5Owd2lNLXyDLEATwOr7RJi9g4wo4-g6C1EUmOrPhQ-r1wg-jvOQNEC7bgZLPQpIII-Fx5CZKOBGkVKbSxUUml2Moh5Qb-u9jDybYnHppobyhQjz67RnK0WUhhK-rPQTQMuU2U4tW-ja2wqXnlbcaBIIThswUGrZmdNFCtTPLIqM5oLKJpgFP3N2FbsOV_WOzLRkkFMBP4dUmkYkRvysFnA1D50SJtjzD5_1SQw3ZpVf_Ze_-soYbMf9th5rVUjAKK98oA_UpKHGRmU1pySoWhWKxMDAGoNYklrT992PnzqvWsXH3QFRa7DDfEx1c0w2inNKaRFcDyPlkH5DYPvq-r8ZKBYiX3EqFLz-yzAO51lw5gxaGkYdjq8M6Pboz14Tytt8oVpSfewZedJ9esaU8JCBBhNpRKaOM_nxg61vuR7a35Sg2yKw9rbTPdiM2_oISFQfTdvWY01McCMIB0ytM-WZU98Y4KNj-4CFHTC2jvl9-QJpwTTPTL7shZVosWt3f6yt1WrB_s86vbW4eEbE-_Y6ZkbsK035M2-IQeY1OYQ4EHOyCjHKao0QjJJHwtufxoeineq72-Zzu9ReCRrRSpkER_yP1EKPq5Q-shxbNYorANO21qo_A024zO7uCi-59cXGW9Yj5satvoKxkLEUshmkBdg8clVSHpNr9YqPcz_8_gwtlrdP67eZ97N8xdALXHEvCvyYl-tO6nB22oX9ZzP6Ih1Wa9e4gBrVuZFW1qIrwPmCrxXcpv41u_ndX4WY6ocBIIONg9zT1AJcCEYbERESRQI5ZF9Tf0sdselGzJkDO_osiV_FWrXtc5MKwRqBU9wovYiMm00h5MGjZ0EiqtlBqaMPlqTqiCsaBrkGw4nUoO3OOmCYFgDcWyz6a6qu39VWs_cWDpBpaYRomOcz8RT6SPhglyjSm-Y2XtvAMsZYAlbrh0p9nPIR_bH5ezaCoXdf442YewrXbVSQCK0dmwWsQooqEMzrRfvnzdEQ&opi=122715837
          - generic [ref=f8e59]:
            - generic [ref=f8e64]: Ads by
            - generic [ref=f8e69]:
              - generic [ref=f8e70]: Ad options
              - generic [ref=f8e73]: Send feedback
              - link [ref=f8e77] [cursor=pointer]:
                - /url: https://adssettings.google.com/whythisad?source=display&reasons=ARXetypLSbvEl4uV2La1gMXHSftka3HlcWJ86COP_t0lHU0Q1Lh69kh3LKzTVMBgoy_faW-yy25vUrVj_8-e0qz13yNWlxIDONNg5iIcSGiNwis3lcBQQ7gjX6DbzD01TC0UgxCaPGufnCUtRJMc2wTE32kN0MyTKtXlC8h7aILzjG2o0oRnuAwIo6k2cMt8OziwGhL5RQmsS5DCB9FVq2TzQYORGi72HCrzlSCJUWaYfrM-sQmW0Wml577ZD-H5mzdQxJfrYQmKtEColq3Tar2E1tNEYi3eSI7PiDJxi9lplLIScqC_AxCM5Ts-bzaMJ0G9DPhiuMn_XarSFVMToX9o1VbeKGcbfbM0kAGAEz0OMM7Xhj7i6QeoehC4u9OJ1dLfpHfE61DSZjjoVP6Huxo9pvmpi799B7vfmWw7E_lDQ7rDRVroZS79_PFx-7t5MzpCdhajClj_WtTFj_5YMIzzOzwi0b8RBQacIetEmMJBdN5P6bExxSR8G6QfvjGkFynpRrcVINKc3Teje--8CoxjTp9_0DS45p6Lo9UfoyM7wmdJy5r7NP6CeAmqfNRW8VgUKnC5Evc99aRqjVpSQ7VeOEq9ix7kQKMDnQQWUDxPFueltaAvnf3En7Qm7-TMkF6J_6eFTOUCaXYJcYnOzQs6XVsH2kalgczgKL5yuNTuja3T_Of68ja5vstctn0GSE3uR6JblMquPFaADmvwHEXNiMuO2eP7iKENc_p1iWdqLSD7RjOCYReNZjaLIwYZWgOhETgtefCOj2zxb-2kF0KhynhdOKMX3Y3RSryRMYyN-ge5UClgvCQFiMmo3SkM4it17fwUc7D3nzvkBdzpQFeRii3I-aFF6tB3C996Gx2bh7rsCrL8focNMIfOf3cGwU-vOPgDPKSciLPIBUUpMjRBnAPGL18qOPorUZuePZA0iYRE7WsHo39E5dCoPGPVIN7SQZypba8n6vSo2olFBoUL58u15W9GfvKC2Jm0A2H2Li8tvYNqPlrHGUbJQr1L-yle7GX7coLpaHtF2_Trj_fRZkzla1QQb54Fq10WrAwTnxEHDnW7CUxGcxXAA5EKAdVr3a3cT15iPE8S-if0b-zgnuhYSrtR-ElBSSwwk8jY93TPJ0XD9F0v10KwKYTddaiEql7KJLuTLHhOrKn0czjz-hfXpWr-ka_dntz4hz7iluH4HqYtttxFGO75TZBIiJN1AiEb3tDLafMKgq-lPtUzfWIoDWXbobdAKCH-XncYWk3d07Vwtq3ioYsD7O8TzRdlZtveZoD65r78WI_4gHR5DQ4OGzFSPpiORrbvX-6PAFnbP3IgftMNuZZikrE12_IKoEXI6iw1HnIm67hPqpOLMHjTzoP7Y-csaHxbLt7PKbkm90cnESw2fzprO4FpNtSzO977SIDTE_f1OLPNxh9rO6koYrqs5SPzA4zCQVCDGknDzFf_Ps4X53JMM-ZBaDcFZmtq9mplcsgyC_kaYjwMHA0_595bBJPaNEQjqn7WOSrfLoD3HvgPKRW2kySeIik76le2nwkgtq4e9uxZtvkLR_RaQ2xPvRvInuHZVZWY2H5ltq0LU0wKCh8I2eaNFWIbRTcFTT4BqGeL5dd7YaegHhQP9rULIcf-6ydILFYeseSggRPJTHA24K_c8s5qSYr190aeQd16ygA3HC3DbUNJ3K4_Urhls5ZrtGAm5pfl2_Ozgi-5Vev0EYSpinYOUQVzcoYGx3Wb5O6ZeorMain5SHKlHr9Lj_XuVfvzkSdUb9PgjbDitJHt5G4mkDUYeZoeQusTiFSe1k-GONnnbi0ElYLfYQhE3fNybNqtFQNku9YJ0c3CBD3r-S5c1mrjlWnUfMO2ugJOf58xnCkE74qWBizVURz9a5GQA_5uxFKO4z96GSeEo4pbF8buVxzqc73ViCQLyBneGjTs8vwkqXcPWqfL7RVu11u1WaK5wu8BqqvQQSt73dqNxVBtHD7dmTIA9oQ8zAtq3hxX5RRC2gk4f07fVOPmGuo8wA24BdAtZSFB2dnrbhn2OwRuTfhKG4DsOHPnPAPIZ78MkQqC0Seq3eYleEemEtIt8XTfYIt_o7YHSzz2MH-TXutyknvBLPbnzipbV8Kc5znqIIKgaDeOOxZypmJvsN--cS3jGmuyqZTfnVQ7B9E0pRkZTU_SuLTPbcUo6Lp9FCYUiIhR_bVKjeCyNM0FhNJjVR3HudDsaUrlr8at-JD3ueHQ1soSi-qD1jD7orpCB4a56ZqWOV8Mz6k2AceKKURPvwt-JDYr4es1MHCZg4MESYlXczVOXL-aQwhvLZAfPo5uXpBHlRhQZgmeB5k5Owd2lNLXyDLEATwOr7RJi9g4wo4-g6C1EUmOrPhQ-r1wg-jvOQNEC7bgZLPQpIII-Fx5CZKOBGkVKbSxUUml2Moh5Qb-u9jDybYnHppobyhQjz67RnK0WUhhK-rPQTQMuU2U4tW-ja2wqXnlbcaBIIThswUGrZmdNFCtTPLIqM5oLKJpgFP3N2FbsOV_WOzLRkkFMBP4dUmkYkRvysFnA1D50SJtjzD5_1SQw3ZpVf_Ze_-soYbMf9th5rVUjAKK98oA_UpKHGRmU1pySoWhWKxMDAGoNYklrT992PnzqvWsXH3QFRa7DDfEx1c0w2inNKaRFcDyPlkH5DYPvq-r8ZKBYiX3EqFLz-yzAO51lw5gxaGkYdjq8M6Pboz14Tytt8oVpSfewZedJ9esaU8JCBBhNpRKaOM_nxg61vuR7a35Sg2yKw9rbTPdiM2_oISFQfTdvWY01McCMIB0ytM-WZU98Y4KNj-4CFHTC2jvl9-QJpwTTPTL7shZVosWt3f6yt1WrB_s86vbW4eEbE-_Y6ZkbsK035M2-IQeY1OYQ4EHOyCjHKao0QjJJHwtufxoeineq72-Zzu9ReCRrRSpkER_yP1EKPq5Q-shxbNYorANO21qo_A024zO7uCi-59cXGW9Yj5satvoKxkLEUshmkBdg8clVSHpNr9YqPcz_8_gwtlrdP67eZ97N8xdALXHEvCvyYl-tO6nB22oX9ZzP6Ih1Wa9e4gBrVuZFW1qIrwPmCrxXcpv41u_ndX4WY6ocBIIONg9zT1AJcCEYbERESRQI5ZF9Tf0sdselGzJkDO_osiV_FWrXtc5MKwRqBU9wovYiMm00h5MGjZ0EiqtlBqaMPlqTqiCsaBrkGw4nUoO3OOmCYFgDcWyz6a6qu39VWs_cWDpBpaYRomOcz8RT6SPhglyjSm-Y2XtvAMsZYAlbrh0p9nPIR_bH5ezaCoXdf442YewrXbVSQCK0dmwWsQooqEMzrRfvnzdEQ&opi=122715837
                - generic [ref=f8e78]: Why this ad?
          - generic [ref=f8e81]:
            - generic [ref=f8e82] [cursor=pointer]: Ad covered content
            - generic [ref=f8e85] [cursor=pointer]: Ad was inappropriate
            - generic [ref=f8e88] [cursor=pointer]: Not interested in this ad
            - generic [ref=f8e91] [cursor=pointer]: Seen this ad multiple times
          - generic [ref=f8e94]: Thanks. Feedback improves Google ads
          - generic [ref=f8e100]: Ad closed by
          - generic [ref=f8e118]:
            - generic [ref=f8e119]: Personalize ads on this site
            - link [ref=f8e124] [cursor=pointer]:
              - /url: https://support.google.com/ads/answer/10923348
              - generic [ref=f8e125]: Learn more
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
> 54  |   const nameText = await page.getByRole('paragraph', { name : /Name:.*/ }).textContent();
      |                                                                            ^ Error: locator.textContent: Test timeout of 30000ms exceeded.
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