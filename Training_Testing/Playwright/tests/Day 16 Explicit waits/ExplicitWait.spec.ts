import {test} from '@playwright/test';
test('Explicit wait', async ({page}) => {
    await page.goto('https://www.amazon.in');
    await page.waitForSelector('//a[@data-csa-c-content-id="nav_avod_desktop_topnav"]');
    const link = await page.locator('//a[@data-csa-c-content-id="nav_avod_desktop_topnav"]').click();
    
})