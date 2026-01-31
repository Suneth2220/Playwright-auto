import { test, expect } from '@playwright/test';

/**
 * POSITIVE FUNCTIONAL TEST CASES (15 tests)
 * These tests verify correct Singlish to Sinhala conversion
 */

test.describe('Positive Functional Tests', () => {
  
  test('Pos_Fun_0001 - Simple sentence with daily language', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'mama gedhara yanavaa';
    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(3000);
    
    const output = await page.evaluate(() => {
      const el = document.querySelector('div.w-full.h-80');
      return el ? el.textContent.trim() : '';
    });
    
    console.log('Input:', input);
    console.log('Output:', output);
    
    expect(output).toContain('මම');
    expect(output.length).toBeGreaterThan(5);
  });

  test('Pos_Fun_0002 - Interrogative form with greeting', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'kohomadha?';
    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(3000);
    
    const output = await page.evaluate(() => {
      const el = document.querySelector('div.w-full.h-80');
      return el ? el.textContent.trim() : '';
    });
    
    console.log('Input:', input);
    console.log('Output:', output);
    
    expect(output).toContain('කොහොමද');
  });

  test('Pos_Fun_0003 - Imperative command form', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'vahaama enna';
    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(3000);
    
    const output = await page.evaluate(() => {
      const el = document.querySelector('div.w-full.h-80');
      return el ? el.textContent.trim() : '';
    });
    
    console.log('Input:', input);
    console.log('Output:', output);
    
    expect(output).toContain('වහාම');
  });

  test('Pos_Fun_0004 - Traditional greeting', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'aayuboovan';
    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(3000);
    
    const output = await page.evaluate(() => {
      const el = document.querySelector('div.w-full.h-80');
      return el ? el.textContent.trim() : '';
    });
    
    console.log('Input:', input);
    console.log('Output:', output);
    
    expect(output).toContain('ආයුබෝවන්');
  });

  test('Pos_Fun_0005 - Polite request form', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'karuNaakaralaa eka poddak balanna';
    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(3000);
    
    const output = await page.evaluate(() => {
      const el = document.querySelector('div.w-full.h-80');
      return el ? el.textContent.trim() : '';
    });
    
    console.log('Input:', input);
    console.log('Output:', output);
    
    expect(output).toContain('කරුණාකර');
  });

  test('Pos_Fun_0006 - Past tense sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'mama iiyee giyaa';
    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(3000);
    
    const output = await page.evaluate(() => {
      const el = document.querySelector('div.w-full.h-80');
      return el ? el.textContent.trim() : '';
    });
    
    console.log('Input:', input);
    console.log('Output:', output);
    
    expect(output).toContain('ඊයේ');
  });

  test('Pos_Fun_0007 - Present tense sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'mama dhaen vaeda karanavaa';
    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(3000);
    
    const output = await page.evaluate(() => {
      const el = document.querySelector('div.w-full.h-80');
      return el ? el.textContent.trim() : '';
    });
    
    console.log('Input:', input);
    console.log('Output:', output);
    
    expect(output).toContain('දැන්');
  });

  test('Pos_Fun_0008 - Future tense sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'mama heta enavaa';
    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(3000);
    
    const output = await page.evaluate(() => {
      const el = document.querySelector('div.w-full.h-80');
      return el ? el.textContent.trim() : '';
    });
    
    console.log('Input:', input);
    console.log('Output:', output);
    
    expect(output).toContain('හෙට');
  });

  test('Pos_Fun_0009 - Negative form sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'mama dhannee naee';
    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(3000);
    
    const output = await page.evaluate(() => {
      const el = document.querySelector('div.w-full.h-80');
      return el ? el.textContent.trim() : '';
    });
    
    console.log('Input:', input);
    console.log('Output:', output);
    
    expect(output).toContain('නැහැ');
  });

  test('Pos_Fun_0010 - Plural form with pronoun', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'api yamu';
    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(3000);
    
    const output = await page.evaluate(() => {
      const el = document.querySelector('div.w-full.h-80');
      return el ? el.textContent.trim() : '';
    });
    
    console.log('Input:', input);
    console.log('Output:', output);
    
    expect(output).toContain('අපි');
  });

  test('Pos_Fun_0011 - Multi-word expression', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'mata oona';
    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(3000);
    
    const output = await page.evaluate(() => {
      const el = document.querySelector('div.w-full.h-80');
      return el ? el.textContent.trim() : '';
    });
    
    console.log('Input:', input);
    console.log('Output:', output);
    
    expect(output).toContain('ඕන');
  });

  test('Pos_Fun_0012 - Repeated words for emphasis', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'hari hari';
    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(3000);
    
    const output = await page.evaluate(() => {
      const el = document.querySelector('div.w-full.h-80');
      return el ? el.textContent.trim() : '';
    });
    
    console.log('Input:', input);
    console.log('Output:', output);
    
    expect(output).toContain('හරි');
  });

  test('Pos_Fun_0013 - Response phrase', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'ov eeka hari';
    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(3000);
    
    const output = await page.evaluate(() => {
      const el = document.querySelector('div.w-full.h-80');
      return el ? el.textContent.trim() : '';
    });
    
    console.log('Input:', input);
    console.log('Output:', output);
    
    expect(output.length).toBeGreaterThan(5);
  });

  test('Pos_Fun_0014 - Day-to-day expression', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'mata nidhimathayi';
    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(3000);
    
    const output = await page.evaluate(() => {
      const el = document.querySelector('div.w-full.h-80');
      return el ? el.textContent.trim() : '';
    });
    
    console.log('Input:', input);
    console.log('Output:', output);
    
    expect(output).toContain('නිදි');
  });

  test('Pos_Fun_0015 - Sentence with English place name', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'lamayi school yannee';
    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(3000);
    
    const output = await page.evaluate(() => {
      const el = document.querySelector('div.w-full.h-80');
      return el ? el.textContent.trim() : '';
    });
    
    console.log('Input:', input);
    console.log('Output:', output);
    
    expect(output).toContain('ළමයි');
    expect(output).toContain('school');
  });
});
