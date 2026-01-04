import {
    test,
    expect
} from '@playwright/test';

test.describe("Test Describe", () => {

    test.describe.configure({
        mode: 'parallel',
        retries: 1
    })

    test("TestCase 1", async ({
        page
    }) => {
        await page.goto("http://leaftaps.com/opentaps/control/main")
        await page.locator("#username").fill("Demosalesmanager")
        await page.locator("#password").fill("crmsfa")
        await page.locator("//input[@value='Login']").click()
    })

    test("TestCase 2", async ({
        page
    }) => {
        await page.goto("http://leaftaps.com/opentaps/control/main")
        await page.locator("#username").fill("Demosalesmanager")
        await page.locator("#password").fill("crmsfa")
        await page.locator("//input[@value='Login']").click()
    })

    test("TestCase 3", async ({
        page
    }) => {
        await page.goto("http://leaftaps.com/opentaps/control/main")
        await page.locator("#username").fill("Demosalesmanager")
        await page.locator("#password").fill("crmsfa")
        await page.locator("//input[@value='Logi']").click()
    })

    // ✅ Skip a test (won't run)
    test.skip('Skip this test temporarily', async ({
        page
    }) => {
        await page.goto('http://leaftaps.com/opentaps/control/main');
        await expect(page).toHaveTitle(/Leaftaps - TestLeaf Automation Platform/);
    });

    // ✅ Run only this test (ignores others)
    test('Run this test', async ({
        page
    }) => {
        await page.goto('http://leaftaps.com/opentaps/control/main');
        await expect(page).toHaveTitle(/Leaftaps - TestLeaf Automation Platform/);
    });

    // ✅ Mark test as fixme (known issue, skipped automatically)
    test.fixme('This test is flaky, needs fixing', async ({
        page
    }) => {
        await page.goto('http://leaftaps.com/opentaps/control/main');
        await expect(page).toHaveTitle(/Leaftaps - TestLeaf Automation Platform/);
    });

    // ✅ Mark test as failing (expected to fail)
    test.fail('This test is expected to fail', async ({
        page
    }) => {
        await page.goto('http://leaftaps.com/opentaps/control/main');
        await expect(page).toHaveTitle(/Leaftaps - TestLeaf Automation Platform/); // Wrong expectation
    });

    test("test.info", async ({
        page
    }) => {

        test.info().annotations.push({
            type: 'Smoke Testing',
            description: 'Testing Login Function'
        }, {
            type: 'Author',
            description: 'Raghu'
        })

        await page.goto("http://leaftaps.com/opentaps/control/main")
        await page.locator("#username").fill("Demosalesmanager")
        await page.locator("#password").fill("crmsfa")
        await page.locator("//input[@value='Login']").click()
    });
});