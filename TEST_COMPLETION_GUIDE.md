# Test Case Completion Guide

This file helps you complete the remaining test cases for your assignment.

## Current Status
- ✅ Positive Functional Tests: 11/24 (need 13 more)
- ✅ Negative Functional Tests: 5/10 (need 5 more)
- ✅ UI Tests: 2/1 (requirement met)

## Required Test Coverage Checklist

### ✅ Sentence Structures
- [x] Simple sentences (Pos_Fun_0001)
- [x] Compound sentences (Pos_Fun_0002)
- [x] Complex sentences (Pos_Fun_0003)

### ✅ Interrogative & Imperative Forms
- [x] Interrogative/Questions (Pos_Fun_0004, Pos_Fun_0005)
- [x] Imperative/Commands (Pos_Fun_0006)

### ⚠️ Positive vs Negative Sentence Forms
- [ ] Positive forms - Need to add
- [ ] Negative forms - Need to add

### ✅ Greetings & Requests
- [x] Greetings (Pos_Fun_0007)
- [x] Requests (Pos_Fun_0008)
- [ ] Responses - Need to add

### ⚠️ Polite vs Informal Phrasing
- [ ] Polite phrasing - Need to add
- [ ] Informal phrasing - Need to add

### ⚠️ Day-to-day Expressions
- [ ] Common expressions - Need to add

### ⚠️ Multi-word Expressions
- [ ] Collocations - Need to add
- [ ] Joined vs segmented words - Need to add (maybe use as negative test)
- [ ] Repeated words - Need to add

### ✅ Tense Variations
- [x] Past tense (Pos_Fun_0009)
- [x] Future tense (Pos_Fun_0010)
- [ ] Present tense - Need to add

### ⚠️ Negation Patterns
- [ ] Negation - Need to add

### ⚠️ Singular/Plural & Pronouns
- [ ] Singular usage - Need to add
- [ ] Plural usage - Need to add
- [ ] Different pronouns (I/you/we/they) - Need to add

### ⚠️ Request Politeness Levels
- [ ] Various politeness levels - Need to add

### ⚠️ Input Length Variations
- [x] Short (S ≤30) - Multiple tests
- [ ] Medium (M 31-299) - Need more examples
- [ ] Long (L ≥300) - Need at least one

### ✅ Mixed Language Content
- [x] English place names (Pos_Fun_0011)
- [ ] English technical terms - Need to add
- [ ] English abbreviations - Need to add

### ⚠️ Punctuation & Formatting
- [ ] Punctuation marks - Need to add
- [ ] Currency/time/dates - Need to add
- [ ] Multiple spaces - Could use as negative test
- [ ] Line breaks - Need to add
- [ ] Paragraph input - Need to add

### ⚠️ Informal Language
- [ ] Slang - Could use as negative test

## Suggested Additional Positive Tests (Pos_Fun_0012 onwards)

### Pos_Fun_0012 - Present tense sentence
```javascript
Input: 'mama dhaen vaeda karanavaa.'
Expected: 'මම දැන් වැඩ කරනවා.'
Category: Daily language usage, Present tense, S
```

### Pos_Fun_0013 - Negative form sentence
```javascript
Input: 'mama dhannee naee.'
Expected: 'මම දන්නේ නැහැ.'
Category: Daily language usage, Negation, S
```

### Pos_Fun_0014 - Response phrase
```javascript
Input: 'hari, mama karannam.'
Expected: 'හරි, මම කරන්නම්.'
Category: Greeting/request/response, Simple sentence, S
```

### Pos_Fun_0015 - Polite request
```javascript
Input: 'karuNaakaralaa eka poddak balanna.'
Expected: 'කරුණාකරලා ඒක පොඩ්ඩක් බලන්න.'
Category: Greeting/request/response, Imperative, M
```

### Pos_Fun_0016 - Informal phrasing
```javascript
Input: 'eeyi, ooka dhiyan.'
Expected: 'ඒයි, ඕක දියන්.'
Category: Slang/informal language, Imperative, S
```

### Pos_Fun_0017 - Day-to-day expression
```javascript
Input: 'mata nidhimathayi.'
Expected: 'මට නිදිමතයි.'
Category: Daily language usage, Simple sentence, S
```

### Pos_Fun_0018 - Multi-word expression
```javascript
Input: 'mata oona'
Expected: 'මට ඕන'
Category: Word combination/phrase pattern, S
```

### Pos_Fun_0019 - Repeated words for emphasis
```javascript
Input: 'hari hari'
Expected: 'හරි හරි'
Category: Word combination/phrase pattern, S
```

### Pos_Fun_0020 - Plural form with pronoun
```javascript
Input: 'api yamu.'
Expected: 'අපි යමු.'
Category: Daily language usage, Plural form, S
```

### Pos_Fun_0021 - Mixed with technical term
```javascript
Input: 'Zoom meeting ekak thiyennee.'
Expected: 'Zoom meeting එකක් තියෙන්නේ.'
Category: Mixed Singlish + English, Simple sentence, M
```

### Pos_Fun_0022 - Sentence with place name
```javascript
Input: 'Lamayi school yannee vaeen ekee.'
Expected: 'ළමයි school යන්නේ වෙන් එකේ.'
Category: Names/places/common English words, Simple sentence, M
```

### Pos_Fun_0023 - Date format
```javascript
Input: 'dhesaembar 25'
Expected: 'දෙසැම්බර් 25'
Category: Punctuation/numbers, S
```

### Pos_Fun_0024 - Line break handling
```javascript
Input: 'mama gedhara yanavaa.\noyaa enavadha maath ekka yanna?'
Expected: 'මම ගෙදර යනවා.\nඔයා එනවද මාත් එක්ක යන්න?'
Category: Formatting (line breaks), M
```

## Suggested Additional Negative Tests (Neg_Fun_0006 onwards)

### Neg_Fun_0006 - Missing spaces between words
```javascript
Input: 'matapaankannaoonee'
Expected: 'මට පාන් කන්න ඕනේ' (but will likely fail)
Category: Formatting, Robustness validation
```

### Neg_Fun_0007 - Excessive line breaks
```javascript
Input: 'mama\n\n\n\ngedhara\n\n\nyanavaa'
Expected: Clean output (but may fail)
Category: Formatting, Robustness validation
```

### Neg_Fun_0008 - Very long paragraph input (L category)
```javascript
Input: Use the long example from Appendix 1 (300+ chars)
Expected: Correct conversion (but may have issues)
Category: Input length L, Robustness validation
```

### Neg_Fun_0009 - Special characters in slang
```javascript
Input: 'siraavata, ela kiri machan.'
Expected: 'සිරාවට, ඇල කිරි මචං.'
Category: Slang/informal, Robustness validation
```

### Neg_Fun_0010 - Complex abbreviations
```javascript
Input: 'mata NIC eka ASAP evanna.'
Expected: 'මට NIC එක ASAP එවන්න.'
Category: Mixed Singlish + English, Robustness validation
```

## Steps to Complete Your Assignment

1. **First, inspect the actual website:**
   - Visit https://www.swifttranslator.com/
   - Open browser DevTools (F12)
   - Find the correct selectors for input/output fields
   - Update the selectors in all test files

2. **Test each input manually:**
   - Before adding to Playwright, test on the website
   - Record the actual output you see
   - Determine if it passes or fails

3. **Add remaining tests:**
   - Copy the pattern from existing tests
   - Use the suggestions above as a starting point
   - Cover all required categories from the assignment brief

4. **Run tests and record results:**
   ```bash
   npm test
   ```

5. **Fill the Excel template:**
   - Use the test IDs from your Playwright tests
   - Record actual vs expected outputs
   - Note pass/fail status
   - Add justifications as required

6. **Create Git repository:**
   - Initialize git: `git init`
   - Add files: `git add .`
   - Commit: `git commit -m "Initial commit - ITPM Assignment 1"`
   - Push to GitHub/GitLab
   - Make repository public
   - Add repository link to a text file

7. **Final checklist:**
   - [ ] At least 24 positive functional tests
   - [ ] At least 10 negative functional tests
   - [ ] At least 1 UI test
   - [ ] All categories from assignment brief covered
   - [ ] README.md has clear instructions
   - [ ] Excel file completed with all test cases
   - [ ] Git repository is public and accessible
   - [ ] Repository link provided in text file
   - [ ] All files renamed with registration number
   - [ ] Folder zipped and ready to submit

## Important Reminders

- Do NOT use chat shorthand like "Thx", "u", "gr8" for negative tests
- Refer to the Help page on the website for correct Singlish spelling
- Make sure test IDs match between Playwright and Excel
- Test the actual website behavior before writing tests
- Include variety in input lengths (S, M, L)
- Ensure tests cover the "What is covered by the test" categories properly

Good luck with your assignment!
