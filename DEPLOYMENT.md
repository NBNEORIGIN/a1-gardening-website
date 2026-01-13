# A1 Gardening Services - Deployment Instructions

## Quick Deployment Steps

### 1. Create GitHub Repository
1. Go to GitHub.com and create a new repository named `a1-gardening-website`
2. Copy the repository URL

### 2. Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/a1-gardening-website.git
git push -u origin master
```

### 3. Deploy to Netlify
1. Go to [Netlify.com](https://netlify.com) and sign in
2. Click "New site from Git"
3. Select GitHub and authorize
4. Choose your `a1-gardening-website` repository
5. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: `18`
6. Click "Deploy site"

### 4. Configure Custom Domain
1. In Netlify dashboard, go to Site settings → Domain management
2. Add custom domain: `a1g.co.uk`
3. Follow Netlify's DNS instructions:
   - Add DNS records provided by Netlify to your domain registrar
   - Wait for DNS propagation (usually 24-48 hours)

### 5. Configure Contact Form
1. Go to Site settings → Forms in Netlify dashboard
2. Your contact form will appear automatically
3. Set up email notifications:
   - Click "Settings" → "Forms" → "Form notifications"
   - Add email address: chris@a1g.co.uk
   - Customize notification template if needed

## Post-Deployment Checklist

- [ ] Website loads correctly at a1g.co.uk
- [ ] Contact form submissions work
- [ ] Email notifications are received
- [ ] Mobile responsiveness tested
- [ ] All images load properly
- [ ] Social links work correctly
- [ ] SEO meta tags are visible in search results

## QR Code Setup

For van livery QR codes, use the URL: `https://a1g.co.uk`

The contact form is optimized for mobile users accessing via QR code.

## Maintenance

- Monitor form submissions in Netlify dashboard
- Update content by editing and pushing to GitHub
- Netlify will automatically redeploy on changes

## Support

For any issues:
1. Check Netlify build logs
2. Verify domain DNS settings
3. Test contact form functionality
4. Monitor mobile responsiveness

---

**Project Complete!** The website is ready for deployment and use.
