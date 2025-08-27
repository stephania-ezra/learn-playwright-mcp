# Copilot Instructions for learn-playwright-mcp

## Project Overview
- This is a Playwright E2E testing project using TypeScript.
- Tests are organized under `tests/`, with subfolders for `page/` and `spec/`.
- Example specs: `example.spec.ts`, `google-search.spec.ts`.

## Key Workflows
- **Install dependencies:**
  ```bash
  npm install
  npx playwright install
  ```
- **Run all tests:**
  ```bash
  npx playwright test
  ```
- **Test files location:**
  - Place new specs in `tests/spec/`.
  - Use `.spec.ts` naming convention.

## Patterns & Conventions
- All tests use Playwright's test runner and TypeScript.
- Test files import from Playwright and use its fixtures (`test`, `expect`).
- No custom test runner or build scripts; use Playwright CLI.
- No global setup/teardown scripts detected; each spec is self-contained.
- Use descriptive test names and group related tests in `describe` blocks.

## Integration Points
- No external services or APIs are integrated by default.
- Playwright browser binaries must be installed (`npx playwright install`).
- No custom environment variables or config files detected beyond `tsconfig.json`.

## Examples
- See `tests/spec/example.spec.ts` and `tests/spec/google-search.spec.ts` for test structure.
- Typical test:
  ```ts
  import { test, expect } from '@playwright/test';

  test('basic example', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle(/Example Domain/);
  });
  ```

## Troubleshooting
- If browsers are missing, run `npx playwright install`.
- For TypeScript errors, check `tsconfig.json`.
- For Playwright errors, consult [Playwright docs](https://playwright.dev/).

---
_If any conventions or workflows are unclear or missing, please provide feedback to improve these instructions._
