# 🚀 A1 Gardening Services - Publishing Guide

Follow these steps to publish your website to the internet at `a1g.co.uk`

---

## 📋 Prerequisites
- GitHub account (free)
- Netlify account (free)
- Access to domain registrar for `a1g.co.uk`

---

## 🗂️ Step 1: Create GitHub Repository

1. **Go to GitHub.com** and sign in
2. Click **"New repository"** (top right)
3. **Repository name**: `a1-gardening-website`
4. **Description**: `Professional gardening services website for A1 Gardening Services`
5. Set to **Public** (required for free Netlify)
6. **DO NOT** initialize with README (we already have one)
7. Click **"Create repository"**

8. **Copy the repository URL** (Quick setup section)

---

## 📤 Step 2: Push Code to GitHub

Open terminal/command prompt in your project folder:

```bash
# Navigate to your project folder
cd C:\temp\a1-gardening-website

# Add GitHub repository (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/a1-gardening-website.git

# Push to GitHub
git push -u origin master
```

**If you get errors:**
- Make sure you replaced `YOUR_USERNAME` with your actual GitHub username
- If asked for GitHub credentials, enter them

---

## 🌐 Step 3: Deploy to Netlify

1. **Go to Netlify.com** and sign up (use GitHub for easy setup)
2. Click **"New site from Git"**
3. **Select GitHub** and authorize Netlify
4. **Choose your repository**: `a1-gardening-website`
5. **Build settings** (important!):
   ```
   Build command: npm run build
   Publish directory: .next
   Node version: 18
   ```
6. **Click "Deploy site"**

Netlify will now build and deploy your site (takes 2-3 minutes)

---

## 🌍 Step 4: Configure Custom Domain

1. **In Netlify dashboard**: Go to **Site settings** → **Domain management**
2. **Add custom domain**: Type `a1g.co.uk`
3. **Click "Verify DNS"**
4. **Netlify will show DNS records** you need to add

### DNS Configuration:
Go to your domain registrar (where you bought `a1g.co.uk`) and add these records:

```
Type: A
Name: @
Value: 75.2.60.5

Type: A
Name: @
Value: 52.2.69.194

Type: CNAME
Name: www
Value: your-site-name.netlify.app
```

*Note: Use the exact values Netlify provides - they may be different*

---

## 📧 Step 5: Configure Contact Form

1. **In Netlify**: Go to **Site settings** → **Forms**
2. **Your contact form will appear automatically**
3. **Set up email notifications**:
   - Click **"Settings"** → **Form notifications**
   - Add email: `chris@a1g.co.uk`
   - Customize notification template if desired

---

## ✅ Step 6: Test Everything

1. **Visit your website**: `https://a1g.co.uk`
2. **Test contact form**: Fill it out and submit
3. **Check email**: You should receive form submissions
4. **Test mobile**: View on phone for QR code experience

---

## 🔄 Step 7: Updates & Maintenance

### To update the website:
1. Make changes in your code
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Your update message"
   git push
   ```
3. Netlify will automatically redeploy

### To monitor form submissions:
- Go to Netlify dashboard → Forms
- Check your email for notifications

---

## 🎯 Success Checklist

- [ ] Website loads at `a1g.co.uk`
- [ ] Contact form works and sends emails
- [ ] Mobile version looks good
- [ ] All images load properly
- [ ] Moving banner scrolls smoothly
- [ ] Social links work correctly

---

## 🆘 Troubleshooting

### Common Issues:

**"Build failed" on Netlify:**
- Check build logs in Netlify dashboard
- Usually due to missing dependencies or build errors

**Domain not working:**
- DNS can take 24-48 hours to propagate
- Double-check DNS records match Netlify's instructions

**Contact form not working:**
- Ensure `data-netlify="true"` is in the form
- Check Netlify Forms settings

**Images not loading:**
- Verify images are in `public/` folder
- Check file paths in your code

---

## 📞 Need Help?

If you get stuck:
1. Check Netlify build logs
2. Verify DNS settings
3. Test locally with `npm run dev`
4. Review this guide step by step

Your website should now be live at `a1g.co.uk`! 🎉

---

**QR Code Ready**: Use `https://a1g.co.uk` for your van livery QR codes
