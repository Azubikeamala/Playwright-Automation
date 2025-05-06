// const { default: test } = require('node:test');

const {test, expect}=require('@playwright/test');

test('Test case 01', async ({browser}) => 
{
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://google.com");
});

test('Test case 02', async ({browser}) => 
    {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://react-shopping-cart-67954.firebaseapp.com/n/");
    console.log(await page.title());
    console.log(await expect(page).toHaveTitle('Typescript React Shopping cart'));
    const firstinall=console.log(await page.locator('.sc-124al1g-4.eeXMBo').first().textContent());
    const allCont=console.log(await page.locator('.sc-124al1g-4.eeXMBo').allTextContents());

    await page.locator('bo')
    });

// test('Test case 02', async ({browser}) => 
//     {
//     const context = await browser.newContext();
//     const page = await context.newPage();
//     await page.goto("https://react-shopping-cart-67954.firebaseapp.com/n/");
//     });

// Use only when you want to run only one test case
    // test.only('Test case 02', async ([browser]) => 
    //     {
    //     const context = await browser.newContext();
    //     const page = await context.newPage();
    //     await page.goto('https://google.com');
    //     }
        
    //     );
     