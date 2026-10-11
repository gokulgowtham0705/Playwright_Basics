# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: QoutesLoad.spec.ts >> Form Test
- Location: tests\QoutesLoad.spec.ts:4:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('span.flow-link-text').filter({ hasText: 'Don\'t know your car number?' })
    - locator resolved to <span class="flow-link-text">Don't know your car number?</span>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    9 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 500ms

```

```
Error: browserContext.close: Target page, context or browser has been closed
```