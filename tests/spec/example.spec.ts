import { test, expect } from '@playwright/test';

test('homepage has Playwright in title and get started link', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
    await expect(page.locator('text=Get Started')).toBeVisible();
});
