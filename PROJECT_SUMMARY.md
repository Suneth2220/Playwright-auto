# Project Setup Complete! 📝

## What Has Been Created

I've set up the initial structure for your ITPM Assignment 1. Here's what's included:

### Test Files Created:
1. **positive-functional.spec.js** - Contains 11 example positive test cases
2. **negative-functional.spec.js** - Contains 5 example negative test cases
3. **ui-tests.spec.js** - Contains 2 UI test cases
4. **helpers.js** - Utility functions for testing

### Documentation Files:
1. **README.md** - Complete instructions for running tests
2. **TEST_COMPLETION_GUIDE.md** - Step-by-step guide to complete remaining tests
3. **GIT_SETUP_INSTRUCTIONS.md** - Instructions for Git repository setup

### Configuration Files:
1. **package.json** - Updated with test scripts
2. **playwright.config.js** - Already configured by Playwright init
3. **.gitignore** - Configured to exclude unnecessary files

## Current Status

✅ **Completed:**
- Project structure set up
- 11 positive functional test examples
- 5 negative functional test examples
- 2 UI test examples
- Helper functions for common tasks
- Complete documentation

⚠️ **What You Need to Do:**

### 1. Inspect the Actual Website (CRITICAL!)
Before running any tests, you MUST:
- Visit https://www.swifttranslator.com/
- Open browser DevTools (F12)
- Find the ACTUAL selectors for input and output fields
- Update the selectors in ALL test files

Current placeholder selectors that need updating:
```javascript
// In all test files, find and replace with actual selectors:
const inputField = await page.locator('#singlish-input');  // ← Update this
const outputField = await page.locator('#sinhala-output'); // ← Update this
```

### 2. Add Remaining Tests
- **Positive Functional:** Add 13+ more tests (currently have 11, need 24 total)
- **Negative Functional:** Add 5+ more tests (currently have 5, need 10 total)
- **UI Tests:** Already met requirement (have 2, need 1)

See `TEST_COMPLETION_GUIDE.md` for specific suggestions.

### 3. Run Tests Manually First
Before automating, test each input on the actual website to:
- Verify expected outputs
- Identify which tests should pass/fail
- Understand the system's behavior

### 4. Run and Record Results
```bash
npm test                # Run all tests
npm test:headed         # Run with visible browser
npm test:report         # View HTML report
```

### 5. Complete Excel Template
- Fill in the Excel template from Appendix 2
- Match test IDs between Playwright and Excel
- Record actual outputs and pass/fail status
- Add justifications for each test

### 6. Create Git Repository
Follow `GIT_SETUP_INSTRUCTIONS.md` to:
- Initialize Git
- Push to GitHub/GitLab
- Make repository PUBLIC
- Create repository link text file

### 7. Final Submission
- Rename all files with your registration number
- Create folder with registration number
- Include:
  - ✅ Full Playwright project
  - ✅ Repository link text file
  - ✅ Completed Excel file
- Zip and upload to CourseWeb

## Quick Start Commands

```powershell
# Navigate to project
cd "d:\3 year\ITPM\Ass 1\IT23225688"

# Install dependencies (if not already done)
npm install

# Install browsers (if not already done)
npx playwright install

# Run all tests
npm test

# Run tests with visible browser
npm test:headed

# View test report
npm test:report
```

## Important Reminders

### Before Running Tests:
1. ⚠️ **UPDATE SELECTORS** - The test files use placeholder selectors
2. ⚠️ **TEST MANUALLY** - Verify each input on the website first
3. ⚠️ **CHECK HELP PAGE** - Review correct Singlish spelling on website

### Test Coverage Requirements:
- ✅ Sentence structures (simple, compound, complex)
- ✅ Interrogative and imperative forms
- ⚠️ Positive vs negative sentence forms (incomplete)
- ✅ Greetings, requests, responses
- ⚠️ Polite vs informal phrasing (incomplete)
- ⚠️ Daily language usage (partial)
- ⚠️ Word combinations and phrases (incomplete)
- ⚠️ Grammatical forms (partial)
- ⚠️ Input length variations (need L category)
- ✅ Mixed language content (started)
- ⚠️ Punctuation and formatting (incomplete)
- ⚠️ Informal language/slang (incomplete)
- ✅ UI behavior (complete)

### Academic Integrity:
- This is an **individual assignment**
- Excel file will be checked for plagiarism
- Similarity > 10% = No marks
- Your test cases must be different from the samples provided

## Troubleshooting

### Tests are failing?
1. Check if selectors are correct (inspect website)
2. Verify internet connection
3. Increase wait times if needed
4. Check if expected outputs match website behavior

### Cannot find elements?
1. Inspect the website in browser
2. Find correct ID, class, or selector
3. Update in test files

### Need more help?
- Check README.md for detailed instructions
- Review TEST_COMPLETION_GUIDE.md for test suggestions
- Refer to Playwright docs: https://playwright.dev

## Next Steps

1. **Today:** 
   - Inspect website and update selectors
   - Test a few examples manually
   - Run existing tests to see if they work

2. **This Week:**
   - Add remaining test cases
   - Run all tests and record results
   - Fill Excel template

3. **Before Deadline:**
   - Create Git repository
   - Prepare final submission files
   - Zip and upload to CourseWeb

## Support

If you get stuck:
- Playwright documentation: https://playwright.dev/docs/intro
- Swift Translator: https://www.swifttranslator.com/
- Assignment brief: Review Appendix 1 & 2

Remember: The assignment asks you to test the system and identify where it works and where it fails. The goal is to understand testing, not just pass all tests!

Good luck with your assignment! 🎓
