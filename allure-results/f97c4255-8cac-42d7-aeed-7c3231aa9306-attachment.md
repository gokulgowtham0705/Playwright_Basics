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
  - waiting for getByText('Don\'t know your car number?')
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
    33 × waiting for element to be visible, enabled and stable
       - element is not visible
     - retrying click action
       - waiting 500ms

```

```
Error: browserContext.close: Test ended.
Browser logs:

<launching> C:\Users\GOKUL GOWTHAM\AppData\Local\ms-playwright\chromium_headless_shell-1234\chrome-headless-shell-win64\chrome-headless-shell.exe --disable-field-trial-config --disable-background-networking --disable-background-timer-throttling --disable-backgrounding-occluded-windows --disable-back-forward-cache --disable-breakpad --disable-client-side-phishing-detection --disable-component-extensions-with-background-pages --disable-component-update --no-default-browser-check --disable-default-apps --disable-dev-shm-usage --disable-edgeupdater --disable-extensions --disable-features=AvoidUnnecessaryBeforeUnloadCheckSync,BoundaryEventDispatchTracksNodeRemoval,DestroyProfileOnBrowserClose,DialMediaRouteProvider,GlobalMediaControls,HttpsUpgrades,LensOverlay,MediaRouter,PaintHolding,ThirdPartyStoragePartitioning,BlockOriginHeaderModificationOnRedirect,Translate,AutoDeElevate,OptimizationHints,msForceBrowserSignIn,msEdgeUpdateLaunchServicesPreferredVersion --enable-features=CDPScreenshotNewSurface --allow-pre-commit-input --disable-hang-monitor --disable-ipc-flooding-protection --disable-popup-blocking --disable-prompt-on-repost --disable-renderer-backgrounding --disable-updater-scheduler --force-color-profile=srgb --metrics-recording-only --no-first-run --password-store=basic --use-mock-keychain --no-service-autorun --export-tagged-pdf --disable-search-engine-choice-screen --unsafely-disable-devtools-self-xss-warnings --edge-skip-compat-layer-relaunch --disable-infobars --disable-search-engine-choice-screen --disable-sync --enable-unsafe-swiftshader --headless --hide-scrollbars --mute-audio --blink-settings=primaryHoverType=2,availableHoverTypes=2,primaryPointerType=4,availablePointerTypes=4 --no-sandbox --start-maximized --user-data-dir=C:\Users\GOKULG~1\AppData\Local\Temp\playwright_chromiumdev_profile-UYoXhq --remote-debugging-pipe --no-startup-window
<launched> pid=22676
[pid=22676][err] [0924/173902.922:INFO:CONSOLE:2568] "%c Cover%cfox  font-size: 60px; color:#fe6127;background-color:#fff; font-size: 60px; color:#314451;background-color:#fff;", source: https://www.coverfox.com/ (2568)
[pid=22676][err] [0924/173902.924:INFO:CONSOLE:2569] "Now that you have reached here, we believe you love looking under the hood?", source: https://www.coverfox.com/ (2569)
[pid=22676][err] [0924/173902.924:INFO:CONSOLE:2570] "We're hiring Tech Ninjas, Look up for exciting opportunities here https://www.coverfox.com/careers", source: https://www.coverfox.com/ (2570)
```