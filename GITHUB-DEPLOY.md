# 🚀 Deploy AutoElite Dubai to GitHub Pages

## Step-by-Step Deployment Guide

### Step 1: Create a New Repository on GitHub

1. Go to **https://github.com** and log in
2. Click the **"+"** button (top-right) → **"New repository"**
3. Fill in the details:
   - **Repository name**: `autoelite-dubai` (or any name you prefer)
   - **Description**: "Premium automotive service center website"
   - **Visibility**: Choose **Public** (required for free GitHub Pages)
   - ⚠️ **DO NOT** check "Initialize with README" (we already have files)
4. Click **"Create repository"**

### Step 2: Push Your Code to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Make sure you're in the static-site folder
cd /home/ushah/autofixer/car-service-website/static-site

# Add GitHub as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/autoelite-dubai.git

# Rename branch to main (GitHub's default)
git branch -M main

# Push your code
git push -u origin main
```

**Example (replace with YOUR username):**
```bash
git remote add origin https://github.com/johnsmith/autoelite-dubai.git
git branch -M main
git push -u origin main
```

**If prompted:**
- Username: Your GitHub username
- Password: Use a **Personal Access Token** (not your password)

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/YOUR_USERNAME/autoelite-dubai`
2. Click **"Settings"** tab (top menu)
3. Scroll down and click **"Pages"** (left sidebar)
4. Under **"Source"**:
   - Branch: Select **"main"**
   - Folder: Select **"/ (root)"**
5. Click **"Save"**

**Wait 1-2 minutes** for deployment...

### Step 4: Access Your Live Website! 🎉

Your website will be live at:
```
https://YOUR_USERNAME.github.io/autoelite-dubai/
```

**Example:**
```
https://johnsmith.github.io/autoelite-dubai/
```

---

## 🔑 Creating a Personal Access Token (If Needed)

If GitHub asks for a password when pushing:

1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Give it a name: "Website Deployment"
4. Select scopes: Check **"repo"** (full control)
5. Click **"Generate token"**
6. **COPY THE TOKEN** (you won't see it again!)
7. Use this token as your password when pushing

---

## 🔄 Updating Your Website Later

Whenever you make changes:

```bash
# Navigate to folder
cd /home/ushah/autofixer/car-service-website/static-site

# Check what changed
git status

# Add changes
git add .

# Commit with a message
git commit -m "Updated services and pricing"

# Push to GitHub
git push

# Wait 1-2 minutes for changes to go live
```

---

## ✅ Verification Checklist

- [ ] Repository created on GitHub
- [ ] Code pushed successfully
- [ ] GitHub Pages enabled in Settings
- [ ] Website loads at `https://YOUR_USERNAME.github.io/autoelite-dubai/`
- [ ] All sections working (Home, About, Services, Contact)
- [ ] Mobile menu works
- [ ] Contact form submits (shows success message)

---

## 🎨 Custom Domain (Optional - Advanced)

Want your own domain like `www.autoelitedubai.ae`?

1. Buy a domain from: Namecheap, GoDaddy, or any registrar
2. In your repository, create a file named `CNAME` with your domain:
   ```
   www.autoelitedubai.ae
   ```
3. Update your domain's DNS settings:
   - Add CNAME record: `www` → `YOUR_USERNAME.github.io`
   - Add A records for apex domain (see GitHub docs)
4. In GitHub Settings → Pages → Custom domain → Enter your domain

**Full guide:** https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

---

## 🆘 Troubleshooting

### Problem: "Permission denied" when pushing
**Solution:** Use Personal Access Token instead of password

### Problem: Website shows 404
**Solution:**
- Wait 2-3 minutes after enabling Pages
- Check branch name is "main" not "master"
- Verify index.html is in root folder

### Problem: CSS/JS not loading
**Solution:** Check file paths in index.html are relative (no leading /)

### Problem: "Remote origin already exists"
**Solution:**
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/autoelite-dubai.git
```

---

## 📱 Share Your Website

Once live, share your website:
- WhatsApp: Send the link
- Business cards: Print the URL
- Google Business: Add website URL
- Social media: Share the link

---

## 🔒 Security Notes

- GitHub repository should be **Public** for free Pages hosting
- Don't commit sensitive data (API keys, passwords)
- The contact form currently shows a demo message
- To make it functional, integrate with a backend service like:
  - Formspree (https://formspree.io) - Free tier available
  - EmailJS (https://www.emailjs.com)
  - Netlify Forms (if you move to Netlify)

---

## 🎯 Next Steps

1. Add real photos to `images/` folder
2. Update phone number from placeholder
3. Connect contact form to email service
4. Add Google Analytics (optional)
5. Submit to Google Search Console

---

**Need help?** Check GitHub Pages docs: https://pages.github.com/

Good luck with your deployment! 🚀
