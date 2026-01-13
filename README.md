# A1 Gardening Services Website

Professional gardening services website for A1 Gardening Services, based in Northumberland, England.

## Features

- **Responsive Design**: Mobile-first design optimized for all devices
- **Contact Form**: Netlify Forms integration for customer inquiries
- **Service Showcase**: Display of lawn mowing, hedge trimming, and general gardening services
- **Gallery**: Portfolio of work with provided stock images
- **Social Proof**: Google Reviews integration and Facebook link
- **SEO Optimized**: Proper meta tags and structured content

## Technology Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: TailwindCSS
- **Deployment**: Netlify
- **Form Handling**: Netlify Forms

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**: Navigate to `http://localhost:3000`

## Deployment

### Netlify Deployment

1. **Push to GitHub**:
   ```bash
   git remote add origin <your-github-repo-url>
   git push -u origin master
   ```

2. **Connect to Netlify**:
   - Go to Netlify dashboard
   - Click "New site from Git"
   - Connect your GitHub repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`

3. **Configure Domain**:
   - Add custom domain: `a1g.co.uk`
   - Update DNS settings as provided by Netlify

### Form Configuration

The contact form is configured to work with Netlify Forms automatically. Once deployed:
1. Go to Netlify dashboard → Site settings → Forms
2. Form submissions will appear there
3. Configure email notifications in Form settings

## Contact Information

- **Business**: A1 Gardening Services
- **Phone**: 07366 472856
- **Email**: chris@a1g.co.uk
- **Address**: 44 Cedar Grove, Alnwick, England NE66 1DX
- **Business Hours**: Open 24 hours
- **Service Area**: Northumberland and nearby areas

## SEO Features

- Optimized meta tags for search engines
- Semantic HTML5 structure
- Image alt tags for accessibility
- Mobile-responsive design
- Fast loading times with Next.js optimization

## License

© 2024 A1 Gardening Services. All rights reserved.
