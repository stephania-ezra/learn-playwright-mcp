import { test, expect } from '@playwright/test';

test('Playwright docs page has correct title', async ({ page }) => {
    await page.goto('https://playwright.dev');
    await expect(page).toHaveTitle(/Playwright/);
});
