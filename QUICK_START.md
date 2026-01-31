# Quick Start - GitHub Repository Setup
## Playwright Auto Testing Project

Follow these commands in PowerShell to publish your repository:

## Step 1: Open PowerShell in Project Directory
```powershell
cd "c:\Users\USER\Downloads\IT3040 – ITPM\Playwright"
```

## Step 2: Initialize and Commit
```powershell
git init
git add .
git commit -m "Initial commit - Playwright Auto Testing Project"
```

## Step 3: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `Playwright-auto`
3. Set to **PUBLIC**
4. Click "Create repository"

## Step 4: Push to GitHub
Replace YOUR-USERNAME with your GitHub username:

```powershell
git remote add origin https://github.com/YOUR-USERNAME/Playwright-auto.git
git branch -M main
git push -u origin main
```

## Step 5: Update Repository Link File
1. Open `repository_link.txt`
2. Replace YOUR-USERNAME with your actual GitHub username
3. Save the file
4. Run:
```powershell
git add repository_link.txt
git commit -m "Update repository link"
git push
```

## Step 6: Verify
- Visit your repository URL in a browser
- Confirm it shows "Public" badge
- Test in incognito mode (should be accessible without login)

## Done! ✅

Your repository URL: `https://github.com/YOUR-USERNAME/Playwright-auto`

---

For detailed instructions, see:
- [GIT_SETUP_GUIDE.md](GIT_SETUP_GUIDE.md) - Complete setup guide
- [README.md](README.md) - Project documentation
- [SUBMISSION_CHECKLIST.md](SUBMISSION_CHECKLIST.md) - Pre-submission checklist
