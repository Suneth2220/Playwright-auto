const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  await page.goto('https://www.swifttranslator.com/');
  await page.waitForLoadState('networkidle');
  
  console.log('\n=== Finding Input and Output Elements ===\n');
  
  // Input field
  const input = page.locator('textarea').first();
  await input.fill('mama gedhara yanavaa');
  console.log('✓ Typed in input field');
  
  await page.waitForTimeout(2000);
  
  // Find all possible output containers
  const divs = await page.locator('div').count();
  console.log(`\nTotal divs on page: ${divs}`);
  
  // Look for text content that might be Sinhala
  const possibleOutputs = await page.evaluate(() => {
    const elements = Array.from(document.querySelectorAll('*'));
    return elements
      .filter(el => {
        const text = el.textContent?.trim();
        return text && text.length > 0 && text.length < 100 && 
               /[\u0D80-\u0DFF]/.test(text); // Sinhala Unicode range
      })
      .map(el => ({
        tag: el.tagName,
        class: el.className,
        id: el.id,
        text: el.textContent?.trim().substring(0, 50)
      }))
      .slice(0, 10);
  });
  
  console.log('\nElements containing Sinhala text:');
  console.log(JSON.stringify(possibleOutputs, null, 2));
  
  // Also check for divs with specific patterns
  const outputClasses = await page.evaluate(() => {
    const outputs = [];
    document.querySelectorAll('div, p, span').forEach(el => {
      if (el.textContent?.includes('මම') || el.textContent?.includes('ගෙදර')) {
        outputs.push({
          tag: el.tagName,
          class: el.className,
          id: el.id,
          text: el.textContent?.trim()
        });
      }
    });
    return outputs;
  });
  
  console.log('\nElements with expected Sinhala output:');
  console.log(JSON.stringify(outputClasses, null, 2));
  
  console.log('\n=== Browser will stay open for 30 seconds ===\n');
  await page.waitForTimeout(30000);
  
  await browser.close();
})();
