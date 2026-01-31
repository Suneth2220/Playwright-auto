const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  await page.goto('https://www.swifttranslator.com/');
  await page.waitForLoadState('networkidle');
  
  console.log('\n=== Inspecting Swift Translator Website ===\n');
  
  // Try to find input field
  const inputSelectors = [
    'textarea',
    'input[type="text"]',
    '[contenteditable="true"]',
    '#input',
    '.input',
    '[placeholder*="Singlish"]',
    '[placeholder*="Type"]',
  ];
  
  for (const selector of inputSelectors) {
    const count = await page.locator(selector).count();
    if (count > 0) {
      console.log(`✓ Found ${count} element(s) matching: ${selector}`);
      const element = page.locator(selector).first();
      const id = await element.getAttribute('id').catch(() => null);
      const className = await element.getAttribute('class').catch(() => null);
      const placeholder = await element.getAttribute('placeholder').catch(() => null);
      console.log(`  ID: ${id || 'none'}`);
      console.log(`  Class: ${className || 'none'}`);
      console.log(`  Placeholder: ${placeholder || 'none'}\n`);
    }
  }
  
  // Try typing to see which field responds
  console.log('Testing input field...');
  try {
    const textarea = page.locator('textarea').first();
    await textarea.fill('mama gedhara yanavaa');
    console.log('✓ Successfully typed in textarea\n');
    
    await page.waitForTimeout(2000);
    
    // Try to find output
    console.log('Looking for output...');
    const allTextareas = await page.locator('textarea').count();
    console.log(`Total textareas found: ${allTextareas}`);
    
    if (allTextareas >= 2) {
      const output = await page.locator('textarea').nth(1).inputValue();
      console.log(`Output field value: ${output}`);
    }
  } catch (e) {
    console.log('Error:', e.message);
  }
  
  console.log('\n=== Keeping browser open for manual inspection ===');
  console.log('Press Ctrl+C in terminal when done\n');
  
  // Keep browser open
  await page.waitForTimeout(60000);
  
  await browser.close();
})();
