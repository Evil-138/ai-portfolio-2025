# 🚀 Deploy Your Portfolio to Render - Quick Guide

## Method 1: Direct Deploy (Easiest - No Git Required!)

### Option A: Using Netlify (Recommended for Beginners)
1. Go to https://www.netlify.com
2. Sign up for free
3. Drag and drop the entire `d:\html styled website` folder onto Netlify
4. **Done!** Your site is live instantly!

### Option B: Using Render with GitHub

## Step 1: Install Git (if not installed)
Download from: https://git-scm.com/download/win

## Step 2: Create GitHub Account
Sign up at: https://github.com

## Step 3: Create New Repository on GitHub
1. Go to https://github.com/new
2. Name: `portfolio`
3. Keep it **Public**
4. **Don't** check "Add README"
5. Click "Create repository"

## Step 4: Upload Your Code to GitHub

Open PowerShell and run:

```powershell
cd "d:\html styled website"
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/portfolio.git
git push -u origin main
```

Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username!

## Step 5: Deploy on Render

1. Go to https://render.com and sign up (free)
2. Click **"New +"** → **"Static Site"**
3. Click **"Connect GitHub"** and authorize
4. Select your **portfolio** repository
5. Settings:
   - **Name**: `priyanshu-portfolio`
   - **Branch**: `main`
   - **Build Command**: (leave empty)
   - **Publish Directory**: `.`
6. Click **"Create Static Site"**

## Step 6: Get Your Live URL

Your site will be live at:
`https://priyanshu-portfolio.onrender.com`

---

## 📝 Quick Commands Reference

### Update your live site after changes:
```powershell
cd "d:\html styled website"
git add .
git commit -m "Updated portfolio"
git push
```

Render will auto-deploy in 1-2 minutes!

---

## 🎯 Alternative: Use GitHub Pages (100% Free Forever)

1. Push code to GitHub (steps above)
2. Go to your repo → **Settings** → **Pages**
3. Source: **Deploy from branch**
4. Branch: **main** → **/root**
5. Click **Save**
6. Your site: `https://YOUR_USERNAME.github.io/portfolio`

---

## ⚡ Super Quick: Use Vercel

```powershell
# Install Vercel CLI
npm install -g vercel

# Deploy (one command!)
cd "d:\html styled website"
vercel
```

Follow prompts, done in 30 seconds!

---

Choose the method that works best for you! 🚀
