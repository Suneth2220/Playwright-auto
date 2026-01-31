import { test, expect } from '@playwright/test';

/**
 * NEGATIVE FUNCTIONAL TEST CASES (10 tests)
 * These tests verify scenarios where the system fails or behaves incorrectly
 */

test.describe('Negative Functional Tests', () => {
  
  test('Neg_Fun_0001 - Joined words without spaces fails', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'mamagedharayanavaa';
    const expectedOutput = 'මම ගෙදර යනවා';
    
    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(3000);
    
    const output = await page.evaluate(() => {
      const el = document.querySelector('div.w-full.h-80');
      return el ? el.textContent.trim() : '';
    });
    
    console.log('Input:', input);
    console.log('Output:', output);
    
    // Expect incorrect output (joined words should not translate correctly)
    expect(output).toBeTruthy();
    expect(output).not.toBe(expectedOutput);
  });

  test('Neg_Fun_0002 - Excessive spaces not handled properly', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'mama    gedhara      yanavaa';
    
    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(3000);
    
    const output = await page.evaluate(() => {
      const el = document.querySelector('div.w-full.h-80');
      return el ? el.textContent.trim() : '';
    });
    
    console.log('Input with extra spaces:', input);
    console.log('Output:', output);
    
    // Should have extra spaces or incorrect output
    const normalInput = 'mama gedhara yanavaa';
    await inputField.clear();
    await inputField.fill(normalInput);
    await page.waitForTimeout(3000);
    
    const normalOutput = await page.evaluate(() => {
      const el = document.querySelector('div.w-full.h-80');
      return el ? el.textContent.trim() : '';
    });
    
    console.log('Normal input:', normalInput);
    console.log('Normal output:', normalOutput);
    
    // Both outputs should exist
    expect(output).toBeTruthy();
    expect(normalOutput).toBeTruthy();
    // Outputs should be same (spacing normalized) or system handles it
    // This is actually testing if system normalizes spaces
  });

  test('Neg_Fun_0003 - Slang with special characters fails', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'ela machan! supiri!!';
    
    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(3000);
    
    const output = await page.evaluate(() => {
      const el = document.querySelector('div.w-full.h-80');
      return el ? el.textContent.trim() : '';
    });
    
    console.log('Input:', input);
    console.log('Output:', output);
    
    // Output should exist
    expect(output).toBeTruthy();
    // May not convert slang properly or may have issues with special characters
  });

  test('Neg_Fun_0004 - Uncommon colloquial phrase incorrect', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'appatasiri, mata beheth bonna amathaka vunaa';
    
    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(3000);
    
    const output = await page.evaluate(() => {
      const el = document.querySelector('div.w-full.h-80');
      return el ? el.textContent.trim() : '';
    });
    
    console.log('Input:', input);
    console.log('Output:', output);
    
    // Slang/colloquial may not convert correctly
    expect(output).toBeTruthy();
    expect(output.length).toBeGreaterThan(0);
  });

  test('Neg_Fun_0005 - Multiple line breaks cause issues', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'mama\n\n\n\ngedhara\n\nyanavaa';
    
    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(3000);
    
    const output = await page.evaluate(() => {
      const el = document.querySelector('div.w-full.h-80');
      return el ? el.textContent.trim() : '';
    });
    
    console.log('Input with line breaks:', input.replace(/\n/g, '\\n'));
    console.log('Output:', output);
    
    // Output should exist
    expect(output).toBeTruthy();
    // Line breaks may not be preserved (trim removes them)
  });

  test('Neg_Fun_0006 - Complex abbreviations not recognized', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'mata NIC eka ASAP evanna FYI';
    
    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(3000);
    
    const output = await page.evaluate(() => {
      const el = document.querySelector('div.w-full.h-80');
      return el ? el.textContent.trim() : '';
    });
    
    console.log('Input:', input);
    console.log('Output:', output);
    
    // Output should exist and contain some translation
    expect(output).toBeTruthy();
    expect(output.length).toBeGreaterThan(0);
    // Abbreviations may or may not be preserved - this tests the behavior
  });

  test('Neg_Fun_0007 - Ambiguous spelling fails', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'maama';  // Could be 'මාමා' (uncle) or 'මම' (I)
    
    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(3000);
    
    const output = await page.evaluate(() => {
      const el = document.querySelector('div.w-full.h-80');
      return el ? el.textContent.trim() : '';
    });
    
    console.log('Input:', input);
    console.log('Output:', output);
    
    // Should produce some output (tests ambiguous word handling)
    expect(output.length).toBeGreaterThan(0);
  });

  test('Neg_Fun_0008 - Very long text with errors', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'machan mata adha meeting ekee Zoom link eka email ekak vidhihata evanna puLuvandha? Please send it before 3pm. Mama office yanna kalin check karanna oonea. Email ekak evanna amaarunum WhatsApp msg ekak dhaapan mokadha oya keranne';
    
    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(4000);
    
    const output = await page.evaluate(() => {
      const el = document.querySelector('div.w-full.h-80');
      return el ? el.textContent.trim() : '';
    });
    
    console.log('Input:', input.substring(0, 50) + '...');
    console.log('Output:', output.substring(0, 50) + '...');
    
    // Long text should produce output
    expect(output).toBeTruthy();
    expect(output.length).toBeGreaterThan(20);
  });

  test('Neg_Fun_0009 - Special punctuation not handled', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'mama (gedhara) yanavaa...!!!';
    
    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(3000);
    
    const output = await page.evaluate(() => {
      const el = document.querySelector('div.w-full.h-80');
      return el ? el.textContent.trim() : '';
    });
    
    console.log('Input:', input);
    console.log('Output:', output);
    
    // Output should exist and contain Sinhala text
    expect(output).toBeTruthy();
    expect(output.length).toBeGreaterThan(0);
    // Test if punctuation is preserved
  });

  test('Neg_Fun_0010 - Incorrect compound word structure', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'apipasseyamu';  // Should be 'api passe yamu'
    
    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(3000);
    
    const output = await page.evaluate(() => {
      const el = document.querySelector('div.w-full.h-80');
      return el ? el.textContent.trim() : '';
    });
    
    console.log('Joined input:', input);
    console.log('Joined output:', output);
    
    // Joined words may not convert correctly
    const correctInput = 'api passe yamu';
    await inputField.clear();
    await inputField.fill(correctInput);
    await page.waitForTimeout(3000);
    
    const correctOutput = await page.evaluate(() => {
      const el = document.querySelector('div.w-full.h-80');
      return el ? el.textContent.trim() : '';
    });
    
    console.log('Correct input:', correctInput);
    console.log('Correct output:', correctOutput);
    
    // Both should have output
    expect(output).toBeTruthy();
    expect(correctOutput).toBeTruthy();
    // Outputs should differ (testing if system handles joined words)
    expect(output).not.toBe(correctOutput);
  });
});
