import type { Page } from '@playwright/test';

export class StudentRegistrationPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async fillName(name: string) {
        await this.page.fill('input[name="name"]', name);
    }

    async fillEmail(email: string) {
        await this.page.fill('input[name="email"]', email);
    }

    async selectGender(gender: 'male' | 'female' | 'other') {
        // Try common selectors for gender radio buttons
        const genderValue = gender.charAt(0).toUpperCase() + gender.slice(1).toLowerCase();
        // Try value attribute
        const radioSelector = `input[type='radio'][value='${genderValue}']`;
        if (await this.page.$(radioSelector)) {
            await this.page.check(radioSelector);
            return;
        }
        // Try label text
        const labelSelector = `//label[contains(., '${genderValue}')]/preceding-sibling::input[@type='radio']`;
        if (await this.page.$(labelSelector)) {
            await this.page.check(labelSelector);
            return;
        }
        throw new Error(`Gender radio button for '${gender}' not found.`);
    }

    async fillMobile(mobile: string) {
        // Try id selector
        if (await this.page.$('input[id="userNumber"]')) {
            await this.page.fill('input[id="userNumber"]', mobile);
            return;
        }
        // Try name selector
        if (await this.page.$('input[name="mobile"]')) {
            await this.page.fill('input[name="mobile"]', mobile);
            return;
        }
        // Try placeholder selector
        if (await this.page.$('input[placeholder*="Mobile"]')) {
            await this.page.fill('input[placeholder*="Mobile"]', mobile);
            return;
        }   
        throw new Error('Mobile number input field not found.');
    }
}
