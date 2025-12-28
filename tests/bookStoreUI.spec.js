const { test, expect } = require('@playwright/test');
const fs = require('fs');

test('Book Store UI Automation', async ({ page }) => {

  const username = 'sagar12';
  const password = 'Sagar@12';

  await page.goto('https://demoqa.com/login', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await page.locator('#userName').waitFor({ timeout: 60000 });

  await page.fill('#userName', username, { force: true });
  await page.fill('#password', password, { force: true });
  await page.click('#login', { force: true });

  await expect(page.locator('#userName-value'))
    .toHaveText(username, { timeout: 60000 });

  await page.click('text=Book Store');

  const bookName = 'Learning JavaScript Design Patterns';
  await page.fill('#searchBox', bookName);

  const bookRow = page.locator('.rt-tr-group').first();
  await expect(bookRow).toContainText(bookName);

  const title = await bookRow.locator('a').innerText();
  const author = await bookRow.locator('.rt-td').nth(2).innerText();
  const publisher = await bookRow.locator('.rt-td').nth(3).innerText();

  fs.writeFileSync(
    './tests/bookDetails.txt',
    `Title: ${title}\nAuthor: ${author}\nPublisher: ${publisher}`
  );

  await page.click('button:has-text("Log out")', { force: true });
});
