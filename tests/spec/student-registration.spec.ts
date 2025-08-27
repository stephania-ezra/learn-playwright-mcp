import { test, expect } from '@playwright/test';
import { StudentRegistrationPage } from '../page/student-registration.page.ts';

test.describe('Student Registration Form', () => {
    test('fill user registration', async ({ page }) => {
        await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');
        const registration = new StudentRegistrationPage(page);
        await registration.fillName('Stephania');
        await registration.fillEmail('xyz@gmail.com');
        await registration.selectGender('male');
        await registration.fillMobile('1234567890');
        // Pause for manual user input to continue filling the form
        await page.pause();
    });
});
