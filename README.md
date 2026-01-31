# ITPM Assignment 1
# Singlish to Sinhala Translation System Testing

## Overview
This project contains automated tests for the Swift Translator system (https://www.swifttranslator.com/) using Playwright. The tests cover functional and UI test scenarios for Singlish to Sinhala conversion.

## Project Structure
```
├── tests/
│   ├── positive-functional.spec.js  
│   ├── negative-functional.spec.js 
│   ├── ui-tests.spec.js            
│   └── helpers.js                  
├── playwright.config.js             
├── package.json                     
├── debug-test.js                   
├── find-output.js                  
├── inspect-website.js             
└── README.md                       
```

## Prerequisites
- **Node.js** (version 14 or higher) - [Download here](https://nodejs.org/)
- **npm** (Node Package Manager) - Comes with Node.js
- **Git** (for cloning the repository) - [Download here](https://git-scm.com/)

## Installation

### Step 1: Clone the Repository
```bash
git clone https://github.com/Suneth2220/Playwright-auto
cd Playwright-auto
```

### Step 2: Install Dependencies
Install all required npm packages:
```bash
npm install
```

### Step 3: Install Playwright Browsers
Install the required browser engines (Chromium, Firefox, WebKit):
```bash
npx playwright install
```

This will download the necessary browser binaries for testing.

## Running Tests

### Basic Test Execution

**Run all tests:**
```bash
npx playwright test
```

**Run all tests with npm script:**
```bash
npm test
```

### Running Specific Test Files

**Run positive functional tests only:**
```bash
npx playwright test tests/positive-functional.spec.js
```

**Run negative functional tests only:**
```bash
npx playwright test tests/negative-functional.spec.js
```

**Run UI tests only:**
```bash
npx playwright test tests/ui-tests.spec.js
```

### Advanced Test Execution Options

**Run tests in headed mode (see browser):**
```bash
npx playwright test --headed
```
Or use npm script:
```bash
npm run test:headed
```

**Run tests in debug mode:**
```bash
npx playwright test --debug
```
Or use npm script:
```bash
npm run test:debug
```

**Run a specific test by name:**
```bash
npx playwright test -g "Simple sentence with daily language"
```

**Run tests on a specific browser:**
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

**Run tests with UI mode (interactive):**
```bash
npx playwright test --ui
```

## Viewing Test Reports

After running tests, an HTML report is automatically generated.

**View the HTML report:**
```bash
npx playwright show-report
```
Or use npm script:
```bash
npm run test:report
```

The report will open in your default browser and show:
- Test results with pass/fail status
- Execution time for each test
- Screenshots and traces for failed tests
- Detailed error messages

## Test Categories

### Positive Functional Tests 
The `positive-functional.spec.js` file contains tests for scenarios where the system correctly converts Singlish to Sinhala. Categories covered:
- Sentence structures (simple, compound, complex)
- Interrogative forms (questions)
- Imperative forms (commands)
- Greetings, requests, and responses
- Tense variations (past, present, future)
- Mixed language content
- And more...

**Note:** Currently contains 11 example tests. You need to add 13+ more to meet the requirement.

### Negative Functional Tests 
The `negative-functional.spec.js` file contains tests for scenarios where the system fails or behaves incorrectly. Examples:
- Joined words without spaces
- Slang with typos
- Excessive spacing issues
- Uncommon colloquial phrases
- Complex mixed language scenarios

**Note:** Currently contains 5 example tests. You need to add 5+ more to meet the requirement.

### UI Tests 
The `ui-tests.spec.js` file contains UI-related tests:
- Real-time output updating
- Clear functionality
- Empty input handling

## Important Notes

### Before Running Tests:
1. **Inspect the actual website** (https://www.swifttranslator.com/) to identify the correct element selectors
2. **Update selectors** in the test files if needed:
   - `#singlish-input` - Replace with actual input field selector
   - `#sinhala-output` - Replace with actual output field selector
3. **Verify expected outputs** by testing manually on the website first
4. **Check the Help page** on the website to understand correct Singlish character combinations

### Completing the Assignment:
1. Add more test cases to meet the minimum requirements (24+ positive, 10+ negative)
2. Cover all required categories mentioned in the assignment brief
3. Test different input lengths: S (≤30 chars), M (31-299 chars), L (≥300 chars)
4. Record results in the Excel template (Appendix 2)
5. Ensure tests are properly documented with test IDs matching Excel file

### Test Case Naming Convention:
- Positive functional: `Pos_Fun_0001`, `Pos_Fun_0002`, etc.
- Negative functional: `Neg_Fun_0001`, `Neg_Fun_0002`, etc.
- Positive UI: `Pos_UI_0001`, `Pos_UI_0002`, etc.
- Negative UI: `Neg_UI_0001`, `Neg_UI_0002`, etc.

## Troubleshooting

### Tests are failing:
1. Verify you have internet connection
2. Check if the website is accessible
3. Inspect element selectors on the actual website
4. Update selectors in test files if they've changed
5. Increase wait times if conversion is slow

### Cannot find elements:
1. Open the website in a browser
2. Right-click and "Inspect" the input/output fields
3. Find the correct ID, class, or other selector
4. Update the locators in the test files

## Resources
- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Playwright Test API](https://playwright.dev/docs/api/class-test)
- [Swift Translator Website](https://www.swifttranslator.com/)



