const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  console.log('Navigating to website...');
  await page.goto('https://www.swifttranslator.com/');
  await page.waitForLoadState('networkidle');
  
  // Take screenshot of initial page
  await page.screenshot({ path: 'screenshot-1-initial.png' });
  
  console.log('Finding input field...');
  const input = page.locator('textarea').first();
  
  console.log('Typing text...');
  await input.fill('mama gedhara yanavaa');
  
  console.log('Waiting for translation...');
  await page.waitForTimeout(3000);
  
  // Take screenshot after typing
  await page.screenshot({ path: 'screenshot-2-after-input.png' });
  
  // Try to find output in all possible ways
  console.log('\n=== Searching for output ===');
  
  // Method 1: div.w-full.h-80
  const output1 = await page.evaluate(() => {
    const el = document.querySelector('div.w-full.h-80');
    return el ? el.textContent.trim() : 'NOT FOUND';
  });
  console.log('div.w-full.h-80:', output1);
  
  // Method 2: All textareas
  const textareas = await page.locator('textarea').count();
  console.log('\nNumber of textareas:', textareas);
  
  for (let i = 0; i < textareas; i++) {
    const text = await page.locator('textarea').nth(i).inputValue();
    console.log(`Textarea ${i}:`, text.substring(0, 50));
  }
  
  // Method 3: Search for Sinhala text anywhere
  const sinhalaElements = await page.evaluate(() => {
    const elements = Array.from(document.querySelectorAll('*'));
    return elements
      .filter(el => /[\u0D80-\u0DFF]/.test(el.textContent))
      .map(el => ({
        tag: el.tagName,
        class: el.className,
        text: el.textContent.trim().substring(0, 100)
      }))
      .slice(0, 20);
  });
  
  console.log('\nElements with Sinhala text:');
  console.log(JSON.stringify(sinhalaElements, null, 2));
  
  // Method 4: Check page structure
  const structure = await page.evaluate(() => {
    const container = document.querySelector('.container') || document.body;
    return container.innerHTML.substring(0, 2000);
  });
  
  console.log('\n=== Page Structure (first 500 chars) ===');
  console.log(structure.substring(0, 500));
  
  console.log('\n=== Browser will stay open for inspection ===');
  console.log('Press Ctrl+C when done');
  
  // Keep browser open
  await page.waitForTimeout(60000);
  
  await browser.close();
})();
