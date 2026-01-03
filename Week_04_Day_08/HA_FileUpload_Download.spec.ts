        import {test, expect } from '@playwright/test';
        test('File upload and download', async ({page, context}) => {

        await page.goto("https://the-internet.herokuapp.com/upload");
        const file= page.locator("(//input[@type='file'])[1]");
        await file.setInputFiles("Data/PW-W4-FileUpload.pdf");
        await page.locator("//input[@id='file-submit']").click();
        const uploadedFile= page.locator("//div[@id='uploaded-files']");
        await expect (uploadedFile).toBeVisible();
        await expect (uploadedFile).toContainText('PW-W4-FileUpload.pdf');
        
        await page.goto("https://the-internet.herokuapp.com/download");

        // List of files you want to download
        const filesToDownload = ['testUpload.json', 'Leaftaps.json'];

        for (const fileName of filesToDownload) {
        // Wait for the download event
        const downloadPromise = page.waitForEvent('download');

        // Click the link for the file
        await page.locator(`//a[normalize-space()='${fileName}']`).click();

        // Get the download object
        const download = await downloadPromise;

        // Save the file locally
        await download.saveAs(`Data/${download.suggestedFilename()}`);

        // Optional assertion
        expect(download.suggestedFilename()).toBe(fileName);

        console.log(`Downloaded: ${download.suggestedFilename()}`);
     }
    });