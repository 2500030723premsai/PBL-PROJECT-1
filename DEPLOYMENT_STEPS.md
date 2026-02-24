# GitHub Pages Deployment Steps for PROJECT-1

## ✅ Completed Steps (Done by Kiro)

1. ✅ Updated `frontend/vite.config.js` with base path: `/PROJECT-1/`
2. ✅ Created GitHub Actions workflow file: `frontend/.github/workflows/deploy.yml`

## 📋 Steps You Need to Complete

### Step 1: Push the changes to GitHub

```bash
git add .
git commit -m "Add GitHub Pages deployment configuration"
git push
```

### Step 2: Enable GitHub Pages in Repository Settings

1. Go to your GitHub repository: `https://github.com/YOUR_USERNAME/PROJECT-1`
2. Click on **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Build and deployment** → **Source**, select **GitHub Actions**
5. Click **Save**

### Step 3: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You should see a workflow called "Deploy to GitHub Pages" running
3. Wait for it to complete (green checkmark)
4. If it fails, click on the workflow and check the error logs

### Step 4: Access Your Live Site

Once deployment is successful, your site will be available at:

```
https://YOUR_USERNAME.github.io/PROJECT-1/
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## 🔧 Troubleshooting

### If the workflow fails:

1. Go to **Actions** tab
2. Click on the failed workflow
3. Click **Re-run all jobs** (top right corner)

### If npm ci fails:

Edit `frontend/.github/workflows/deploy.yml` and replace:
```yaml
run: npm ci
```
with:
```yaml
run: npm install
```

### If Pages source is not set correctly:

1. Go to **Settings** → **Pages**
2. Make sure **Source** is set to **GitHub Actions** (NOT "Deploy from a branch")
3. Save and re-run the workflow

## 📝 Important Notes

- Make sure your repository is **public** or you have GitHub Pro for private repo Pages
- The base path `/PROJECT-1/` is crucial for assets to load correctly
- Any future changes: just push to main branch and it will auto-deploy
- First deployment may take 2-5 minutes

## 🎉 After Successful Deployment

Your React Service Request Management app will be live and accessible to anyone with the URL!
