import { test, expect } from '@playwright/test';

/**
 * UI TEST CASES
 * These tests verify user interface behavior
 */

test.describe('UI Tests', () => {
  
  test('Pos_UI_0001 - Sinhala output updates in real-time', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    
    const inputField = page.locator('textarea').first();
    
    // Type text gradually
    await inputField.fill('mama');
    await page.waitForTimeout(2000);
    
    let output = await page.evaluate(() => {
      const el = document.querySelector('div.w-full.h-80');
      return el ? el.textContent.trim() : '';
    });
    
    console.log('First input: mama');
    console.log('First output:', output);
    
    expect(output.length).toBeGreaterThan(0);
    
    // Type more
    await inputField.fill('mama gedhara yanavaa');
    await page.waitForTimeout(2000);
    
    output = await page.evaluate(() => {
      const el = document.querySelector('div.w-full.h-80');
      return el ? el.textContent.trim() : '';
    });
    
    console.log('Second input: mama gedhara yanavaa');
    console.log('Second output:', output);
    
    // Verify output updated and contains expected text
    expect(output).toContain('මම');
    expect(output.length).toBeGreaterThan(10);
  });
});
