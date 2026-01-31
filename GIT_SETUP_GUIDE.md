# Git Repository Setup Guide
## IT23225688 - ITPM Assignment 1

This guide provides step-by-step instructions to set up and publish your Playwright project repository on GitHub.

---

## Prerequisites

- Git installed on your system ([Download Git](https://git-scm.com/downloads))
- GitHub account ([Sign up at GitHub](https://github.com/signup))
- Project files in your local directory

---

## Quick Setup (For Experienced Users)

```bash
cd "c:\Users\USER\Downloads\IT23225688\Playwright"
git init
git add .
git commit -m "Initial commit - IT23225688 ITPM Assignment 1"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/Playwright-auto.git
git push -u origin main
```

---

## Detailed Step-by-Step Instructions

### Step 1: Open Terminal/PowerShell

**Windows:**
- Press `Win + X` and select "Windows PowerShell" or "Terminal"
- Or right-click in the project folder while holding Shift, then select "Open PowerShell window here"

**Mac/Linux:**
- Open Terminal application
- Navigate to project directory using `cd` command

---

### Step 2: Navigate to Project Directory

```bash
cd "c:\Users\USER\Downloads\IT23225688\Playwright"
```

*Replace the path above with your actual project location if different.*

---

### Step 3: Configure Git (First Time Setup Only)

If you haven't configured Git before, set your name and email:

```bash
git config --global user.name "Your Full Name"
git config --global user.email "your.email@example.com"
```

**Example:**
```bash
git config --global user.name "John Doe"
git config --global user.email "johndoe@email.com"
```

To verify your configuration:
```bash
git config --list
```

---

### Step 4: Initialize Git Repository

```bash
git init
```

**Expected Output:**
```
Initialized empty Git repository in c:/Users/USER/Downloads/IT23225688/Playwright/.git/
```

---

### Step 5: Verify .gitignore File

Ensure your `.gitignore` file is properly configured. The file should already exist in your project with these contents:

```
# Node.js dependencies
node_modules/

# Playwright test artifacts
/test-results/
/playwright-report/
/blob-report/
/playwright/.cache/
/playwright/.auth/

# Environment variables
.env
.env.local

# IDE and editor files
.vscode/
.idea/

# Operating System files
.DS_Store
Thumbs.db
```

---

### Step 6: Stage All Files

Add all project files to the Git staging area:

```bash
git add .
```

To see what files will be committed:
```bash
git status
```

---

### Step 7: Create Initial Commit

```bash
git commit -m "Initial commit - IT23225688 ITPM Assignment 1 Playwright Testing"
```

**Expected Output:**
```
[main (root-commit) abc1234] Initial commit - IT23225688 ITPM Assignment 1 Playwright Testing
 XX files changed, XXXX insertions(+)
 create mode 100644 README.md
 create mode 100644 package.json
 ...
```

---

### Step 8: Create GitHub Repository

#### Option A: Using GitHub Website (Recommended for Beginners)

1. **Go to GitHub:**
   - Navigate to [https://github.com](https://github.com)
   - Sign in to your account

2. **Create New Repository:**
   - Click the "+" icon in the top-right corner
   - Select "New repository"

3. **Configure Repository:**
   - **Repository name:** `Playwright-auto`
   - **Description:** `Automated testing for Singlish to Sinhala translation system using Playwright`
   - **Visibility:** Select **PUBLIC** ⚠️ (CRITICAL - must be public for marking)
   - **Initialize repository:** Leave all checkboxes UNCHECKED (don't add README, .gitignore, or license)
   - Click "Create repository"

4. **Copy Repository URL:**
   - After creation, copy the repository URL (should look like: `https://github.com/YOUR-USERNAME/Playwright-auto.git`)

#### Option B: Using GitHub CLI (For Advanced Users)

If you have GitHub CLI installed:

```bash
gh repo create IT23225688-ITPM-Assignment1 --public --source=. --remote=origin --push
```

---

### Step 9: Link Local Repository to GitHub

Replace `YOUR-USERNAME` with your actual GitHub username in the command below:

```bash
git remote add origin https://github.com/YOUR-USERNAME/IT23225688-ITPM-Assignment1.git
```

**Example:**
```bash
git remote add origin https://github.com/johnsmith123/IT23225688-ITPM-Assignment1.git
```

---

### Step 10: Set Default Branch to 'main'

```bash
git branch -M main
```

---

### Step 11: Push Code to GitHub

```bash
git push -u origin main
```

**Expected Output:**
```
Enumerating objects: XX, done.
Counting objects: 100% (XX/XX), done.
Delta compression using up to X threads
Compressing objects: 100% (XX/XX), done.
Writing objects: 100% (XX/XX), XX.XX KiB | XX.XX MiB/s, done.
Total XX (delta X), reused 0 (delta 0), pack-reused 0
To https://github.com/YOUR-USERNAME/Playwright-auto.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

---

### Step 12: Verify Repository is Public

This is **CRITICAL** for assignment submission:

1. **Visit your repository:**
   - Go to `https://github.com/YOUR-USERNAME/Playwright-auto`

2. **Check visibility badge:**
   - Look for "Public" badge below the repository name
   - If it says "Private", change it to Public:
     - Go to Settings → General
     - Scroll to "Danger Zone"
     - Click "Change visibility"
     - Select "Make public"

3. **Test public access:**
   - Open an incognito/private browser window
   - Navigate to your repository URL
   - You should be able to view all files WITHOUT signing in
   - If you see a 404 error or login prompt, the repository is not public

---

### Step 13: Update Repository Link File

Update the `IT23225688_repository_link.txt` file with your actual repository URL:

1. Open `IT23225688_repository_link.txt` in a text editor
2. Replace `YOUR-USERNAME` with your GitHub username
3. Save the file
4. Commit and push the change:

```bash
git add IT23225688_repository_link.txt
git commit -m "Update repository link with actual GitHub username"
git push
```

---

## Making Changes and Updates

After making changes to your project:

```bash
# Stage changes
git add .

# Or stage specific files
git add path/to/file.js

# Commit changes
git commit -m "Description of changes made"

# Push to GitHub
git push
```

---

## Useful Git Commands

### Check Repository Status
```bash
git status
```

### View Commit History
```bash
git log --oneline
```

### View Remote Repository
```bash
git remote -v
```

### Undo Unstaged Changes
```bash
git checkout -- filename.js
```

### View Differences
```bash
git diff
```

---

## Troubleshooting

### Issue: Permission Denied (publickey)

**Solution:** Configure SSH keys or use HTTPS with personal access token
```bash
git remote set-url origin https://github.com/YOUR-USERNAME/Playwright-auto.git
```

### Issue: Fatal: Not a git repository

**Solution:** Make sure you're in the project directory and run:
```bash
git init
```

### Issue: Updates were rejected

**Solution:** Pull latest changes first:
```bash
git pull origin main --rebase
git push origin main
```

### Issue: Large files causing push to fail

**Solution:** Check .gitignore and ensure node_modules/ is excluded
```bash
git rm -r --cached node_modules/
git commit -m "Remove node_modules"
git push
```

---

## Verification Checklist

Before submitting, verify:

- [ ] Repository is PUBLIC (check badge on GitHub)
- [ ] All test files are present in tests/ directory
- [ ] README.md has clear installation and run instructions
- [ ] package.json includes all dependencies
- [ ] playwright.config.js is properly configured
- [ ] .gitignore excludes node_modules and test artifacts
- [ ] IT23225688_repository_link.txt contains correct URL
- [ ] Repository can be accessed without login (test in incognito)
- [ ] Tests can be executed after fresh clone and npm install

---

## Final Submission

1. Ensure repository is publicly accessible
2. Copy repository URL: `https://github.com/YOUR-USERNAME/Playwright-auto`
3. Update IT23225688_repository_link.txt with the URL
4. Submit the repository link file as required by assignment guidelines

---

## Additional Resources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Playwright Documentation](https://playwright.dev/)
- [Pro Git Book (Free)](https://git-scm.com/book/en/v2)

---

**Last Updated:** January 31, 2026  
**Student ID:** IT23225688  
**Course:** ITPM Assignment 1
