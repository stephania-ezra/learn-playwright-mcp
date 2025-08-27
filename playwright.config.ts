import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    use: {
        headless: false,
        browserName: 'chromium',
    },
    projects: [
        {
            name: 'chrome',
            use: { ...devices['Desktop Chrome'] },
        },
    ],
});
