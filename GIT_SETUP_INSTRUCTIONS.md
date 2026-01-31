# Git Repository Setup Instructions

Follow these steps to create and publish your Git repository for the assignment.

## Step 1: Initialize Git Repository

Open PowerShell in your project directory and run:

```powershell
cd "d:\3 year\ITPM\Ass 1\IT23225688"
git init
```

## Step 2: Configure Git (if not already done)

```powershell
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

## Step 3: Create .gitignore File

Create a `.gitignore` file to exclude unnecessary files:

```
node_modules/
test-results/
playwright-report/
playwright/.cache/
.env
*.log
```

Save this as `.gitignore` in your project root.

## Step 4: Add All Files to Git

```powershell
git add .
```

## Step 5: Make Initial Commit

```powershell
git commit -m "Initial commit - IT23225688 ITPM Assignment 1"
```

## Step 6: Create GitHub Repository

### Option A: Using GitHub Website
1. Go to https://github.com
2. Sign in to your account
3. Click the "+" icon in top right corner
4. Select "New repository"
6. Repository name: `Playwright-auto`
6. Description: "Automated testing for Singlish to Sinhala translation system"
7. **Make sure to select "Public"**
8. Do NOT initialize with README (you already have one)
9. Click "Create repository"

### Option B: Using GitHub CLI (if installed)
```powershell
gh repo create Playwright-auto --public --source=. --remote=origin
```

## Step 7: Link Local Repository to GitHub

Copy the commands shown on GitHub after creating the repository, which should look like:

```powershell
git remote add origin https://github.com/YOUR-USERNAME/Playwright-auto.git
git branch -M main
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username.

## Step 8: Push Your Code

```powershell
git push -u origin main
```

## Step 9: Verify Repository is Public

1. Go to your repository on GitHub
2. Check that it shows "Public" badge
3. Try opening the link in an incognito/private browser window
4. Make sure you can view the code without signing in

## Step 10: Create Repository Link File

Create a text file with your repository link:

```powershell
# Create file named IT23225688_repository_link.txt
$repoUrl = "https://github.com/YOUR-USERNAME/Playwright-auto"
Set-Content -Path "IT23225688_repository_link.txt" -Value $repoUrl
```

Or manually create a file named `IT23225688_repository_link.txt` containing:
```
https://github.com/YOUR-USERNAME/IT23225688-ITPM-Assignment1
```

## Step 11: Making Updates Later

If you make changes to your tests:

```powershell
git add .
git commit -m "Description of changes"
git push
```

## Troubleshooting

### Problem: "fatal: remote origin already exists"
Solution:
```powershell
git remote remove origin
git remote add origin https://github.com/YOUR-USERNAME/IT23225688-ITPM-Assignment1.git
```

### Problem: Authentication issues
Solution:
- Use Personal Access Token instead of password
- Go to GitHub Settings → Developer settings → Personal access tokens
- Generate new token with "repo" scope
- Use token as password when pushing

### Problem: Repository not accessible
Solution:
- Go to repository Settings on GitHub
- Check "Danger Zone" section
- Ensure visibility is set to "Public"

## Final Verification Checklist

Before submitting:
- [ ] Repository is public and accessible
- [ ] README.md displays correctly on GitHub
- [ ] All test files are visible
- [ ] package.json and playwright.config.js are present
- [ ] Repository link text file is created
- [ ] Can access repository without being logged in to GitHub

## Alternative: GitLab

If you prefer GitLab:

1. Go to https://gitlab.com
2. Create new project
3. Select "Blank project"
4. Project name: `IT23225688-ITPM-Assignment1`
5. Visibility: **Public**
6. Uncheck "Initialize repository with a README"
7. Create project
8. Follow the push instructions provided by GitLab

```powershell
git remote add origin https://gitlab.com/YOUR-USERNAME/IT23225688-ITPM-Assignment1.git
git branch -M main
git push -u origin main
```

## Need Help?

If you encounter issues:
- Check GitHub documentation: https://docs.github.com
- Verify git is installed: `git --version`
- Make sure you have internet connection
- Ensure your account has permission to create repositories
