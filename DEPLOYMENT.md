# Chef Lidia y Familia - Deployment Guide

## Project Overview

Multi-page restaurant website for "Chef Lidia y Familia" featuring:
- **Technology**: Astro 6.x + Tailwind CSS 4.x
- **Pages**: 5 fully functional pages (Home, Menu, Empresas, Nosotros, Contacto)
- **Target**: B2B corporate catering (priority) + B2C local customers
- **Location**: Av Colonia 95, Parque Patricios, Buenos Aires

## Pre-Deployment Checklist

- [x] All 5 pages build successfully
- [x] Menu data populated with 16 dishes (8 Peruvian + 8 Argentine)
- [x] Daily specials filtering working (2 items marked)
- [x] B2B landing page with Factura C badge and SEO
- [x] WhatsApp buttons configured (B2C and B2B templates)
- [x] Social media links verified (Instagram and TikTok)
- [x] Responsive design implemented
- [x] SEO metadata on all pages
- [ ] Real dish photos uploaded to `src/assets/dishes/`
- [ ] Site URL configured in `astro.config.mjs`

## Phase 10: GitHub & Vercel Deployment

### Step 1: Initialize Git Repository

```bash
# If not already a git repo, initialize it
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Chef Lidia website

- 5 pages: Home, Menu, Empresas (B2B), Nosotros, Contacto
- Tailwind theme with olive/cream colors
- Menu data with 16 dishes
- B2B landing with Factura C badge and SEO
- WhatsApp integration for B2C and B2B
- Fully responsive design

🤖 Generated with Claude Code
Co-Authored-By: Claude <noreply@anthropic.com>"
```

### Step 2: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `chef-lidia-web` (or your preference)
3. Description: "Website for Chef Lidia y Familia - Peruvian & Argentine cuisine in Parque Patricios"
4. Choose: **Private** (or Public if you prefer)
5. **Do NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

### Step 3: Push to GitHub

```bash
# Add remote origin (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/chef-lidia-web.git

# Rename default branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 4: Deploy to Vercel

#### Option A: Via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in (or sign up)
2. Click "Add New..." → "Project"
3. Import your GitHub repository: `chef-lidia-web`
4. Vercel will auto-detect Astro settings:
   - **Framework Preset**: Astro
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click "Deploy"
6. Wait 2-3 minutes for first deployment

#### Option B: Via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (from project root)
vercel

# Follow prompts:
# - Link to existing project? No
# - Project name: chef-lidia-web
# - Directory: ./ (current directory)
# - Deploy? Yes

# For production deployment
vercel --prod
```

### Step 5: Configure Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Settings → Domains
3. Add your domain (e.g., `cheflidia.com.ar`)
4. Follow Vercel's DNS configuration instructions
5. Wait for DNS propagation (up to 48 hours)

## Post-Deployment Tasks

### Required Updates

1. **Add Real Dish Photos**:
   - Replace placeholders in `src/assets/dishes/`
   - Recommended size: 800x600px, optimized JPG
   - See `src/assets/dishes/README.md` for file list

2. **Update Site URL**:
   ```javascript
   // astro.config.mjs
   export default defineConfig({
     site: 'https://your-domain.vercel.app', // or custom domain
     vite: {
       plugins: [tailwindcss()]
     }
   });
   ```

3. **Verify Google Maps Embed**:
   - Get accurate embed code for "Av Colonia 95, Parque Patricios"
   - Update iframe in `src/pages/contacto.astro`

### Optional Enhancements

1. **Google Analytics**:
   - Add tracking ID to `src/layouts/Layout.astro`
   - Track B2B conversions on /empresas page

2. **WhatsApp Business API**:
   - Consider upgrading to WhatsApp Business
   - Add automated responses for common queries

3. **Content Management**:
   - If menu changes frequently, consider adding a CMS
   - Options: Strapi, Sanity, or simple Google Sheets integration

## Testing Checklist

### Functional Testing

- [ ] Navigate to all 5 pages from navbar
- [ ] Click all WhatsApp buttons (verify correct templates)
- [ ] Test social media links (Instagram, TikTok)
- [ ] Verify email and phone links work
- [ ] Check mobile menu toggle functionality

### Responsive Testing

Test at these breakpoints:
- [ ] **375px** (Mobile): iPhone SE
- [ ] **768px** (Tablet): iPad
- [ ] **1440px** (Desktop): Standard laptop

### Browser Testing

- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (iOS and macOS)
- [ ] Mobile browsers (Chrome Android, Safari iOS)

### Performance Testing

Run Lighthouse audit on all pages:
```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Run audit (replace URL with your deployment)
lighthouse https://your-site.vercel.app/ --view

# Target scores:
# - Performance: >90
# - Accessibility: >90
# - SEO: >90
# - Best Practices: >90
```

## Maintenance

### Updating Content

1. **Menu Items**: Edit `src/data/menu.json`
2. **Daily Specials**: Set `isDailySpecial: true` for 2 items
3. **Contact Info**: Update in `src/components/Footer.astro`
4. **Hours**: Update in `src/pages/contacto.astro`

### Deployment Workflow

```bash
# Make changes locally
# ... edit files ...

# Test build
npm run build

# Commit changes
git add .
git commit -m "Update: [description of changes]"

# Push to GitHub
git push

# Vercel auto-deploys on push to main branch
# Monitor deployment at vercel.com/dashboard
```

## Troubleshooting

### Build Fails on Vercel

**Issue**: Node version mismatch
**Solution**: Add `.node-version` file:
```bash
echo "18" > .node-version
git add .node-version
git commit -m "Add Node version specification"
git push
```

### Images Not Loading

**Issue**: Paths incorrect after build
**Solution**: Use relative paths starting with `/assets/`
Check: `src/data/menu.json` image paths

### Tailwind Styles Missing

**Issue**: CSS not being generated
**Solution**: Verify `@import "tailwindcss";` in `src/styles/global.css`

## Support & Resources

- **Astro Docs**: https://docs.astro.build
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Vercel Support**: https://vercel.com/support
- **Project Issues**: Create issue on GitHub repo

## Contact

For deployment questions or technical support:
- Email: cheflidiayfamilia@gmail.com
- Project Developer: [Your name/contact]

---

**Last Updated**: March 26, 2026
**Version**: 1.0.0
**Status**: Production Ready ✅
