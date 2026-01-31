/**
 * Test Helper Functions
 * Common utilities for Singlish to Sinhala conversion tests
 */

/**
 * Perform a conversion test on the Swift Translator
 * @param {import('@playwright/test').Page} page - Playwright page object
 * @param {string} input - Singlish input text
 * @param {string} expectedOutput - Expected Sinhala output
 * @param {number} waitTime - Time to wait for conversion (ms)
 * @returns {Promise<{actualOutput: string, passed: boolean}>}
 */
export async function testConversion(page, input, expectedOutput, waitTime = 1000) {
  // Navigate to the website if not already there
  if (page.url() !== 'https://www.swifttranslator.com/') {
    await page.goto('https://www.swifttranslator.com/');
  }
  
  // Locate input and output fields
  // NOTE: Update these selectors based on actual website structure
  const inputField = await page.locator('#singlish-input, input[placeholder*="Singlish"], textarea[placeholder*="Singlish"]').first();
  const outputField = await page.locator('#sinhala-output, [class*="sinhala"], [class*="output"]').first();
  
  // Clear existing content
  await inputField.clear();
  await page.waitForTimeout(300);
  
  // Enter the Singlish text
  await inputField.fill(input);
  
  // Wait for real-time conversion
  await page.waitForTimeout(waitTime);
  
  // Get the actual output
  const actualOutput = await outputField.inputValue() || await outputField.textContent();
  
  // Check if output matches expected
  const passed = actualOutput.trim() === expectedOutput.trim();
  
  return { actualOutput: actualOutput.trim(), passed };
}

/**
 * Navigate to Swift Translator and wait for page to load
 * @param {import('@playwright/test').Page} page - Playwright page object
 */
export async function navigateToTranslator(page) {
  await page.goto('https://www.swifttranslator.com/');
  await page.waitForLoadState('networkidle');
}

/**
 * Clear both input and output fields
 * @param {import('@playwright/test').Page} page - Playwright page object
 */
export async function clearFields(page) {
  const inputField = await page.locator('#singlish-input, input[placeholder*="Singlish"]').first();
  await inputField.clear();
  await page.waitForTimeout(300);
}

/**
 * Get input length category based on character count
 * @param {string} input - Input text
 * @returns {'S'|'M'|'L'} - Input length category
 */
export function getInputLengthCategory(input) {
  const length = input.length;
  if (length <= 30) return 'S';
  if (length <= 299) return 'M';
  return 'L';
}

/**
 * Format test result for documentation
 * @param {string} testId - Test case ID
 * @param {string} input - Input text
 * @param {string} expected - Expected output
 * @param {string} actual - Actual output
 * @param {boolean} passed - Whether test passed
 * @returns {object} - Formatted test result
 */
export function formatTestResult(testId, input, expected, actual, passed) {
  return {
    testId,
    inputLength: getInputLengthCategory(input),
    input,
    expected,
    actual,
    status: passed ? 'Pass' : 'Fail',
    timestamp: new Date().toISOString()
  };
}
