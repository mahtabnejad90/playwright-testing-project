# playwright-testing-project

JS/TS based Playwright framework

## Commands used in this project

- `npm innit` - creates node project
- `npm install playwright` - installs playwright framework
- `npm install playwright-test` - install playwright-test library
- `npm install prettier` - installs prettier (styling) framwork
- `npx playwright test` - runs tests in headless mode
- `npx playwright test -headed` - runs tests in browser headed mode (visual test run)
- `npx playwright test --project=chromium` - runs tests in a specific browser
- `npx playwright test --project=all` - runs tests in a all browsers
- `npx test path-to-test/test-file.spec.ts ` - runs test from a specific test file
- `npx playwright test --grep @myTag` - use grep to run tests which have a custom tag. Need to be added in test description section (@ symbol required): ie `test("description of test @myTag")`
- `npx playwright test --grep=invert @myTag` - runs all text except for the specified tests specified in @myTag tag
- `npx playwright test --config=playwright.config.ts` = runs tests against specific configuration file
- `npx playwright test --project=Chromium` = runs tests against specific browser
- `npx playwright test --reporter=line` = enables line reporting, which is minimal reporting. Not recommended
- `npx playwright test --reporter=list` = enables list reporting, which is set by default by Playwright. Gives a list of tests run including path & describe description, test line number as, test description as well duration of test
- `npx playwright test --reporter=dot` = enables dot reporting, shows green or red dots... green for pass and red for fail.
- `npx playwright test --reporter=junit` = enables junit reporting, test details in xml format within terminal.
- `npx playwright test --reporter=html` = enables html reporting, test details in html format and stored within playwright-report directory.


## Best practices

 - Use .ts (typescript) file extensions


