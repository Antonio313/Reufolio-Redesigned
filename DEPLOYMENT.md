# Reufolio - Railway Deployment Guide

This guide will walk you through deploying your Reufolio portfolio website to Railway using GitHub.

## Prerequisites

1. A [Railway](https://railway.app) account
2. A [GitHub](https://github.com) account
3. EmailJS account with configured service (see EMAILJS_SETUP.md)
4. Node.js 20 or higher (required by Vite 7)

## Step 1: Push to GitHub

### Initialize Git Repository (if not already done)

```bash
cd "c:\Users\Reuel\Documents\Work Stuff\Reufolio Redesigned\reufolio"
git init
git add .
git commit -m "Initial commit: Reufolio portfolio website"
```

### Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a new repository (e.g., "reufolio")
3. **Do NOT** initialize with README, .gitignore, or license (you already have these)

### Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/reufolio.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 2: Deploy to Railway

### Connect GitHub to Railway

1. Go to [Railway Dashboard](https://railway.app/dashboard)
2. Click **"New Project"**
3. Select **"Deploy from GitHub repo"**
4. Authorize Railway to access your GitHub account
5. Select the **"reufolio"** repository

### Configure Environment Variables

In Railway dashboard:

1. Click on your deployed service
2. Go to **"Variables"** tab
3. Add the following environment variables:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

**Important:** Get these values from your EmailJS dashboard (see EMAILJS_SETUP.md).

### Deploy Configuration

Railway will automatically detect the configuration files and use them for deployment:

- **Node.js Version:** 22.x (specified in `.nvmrc` and `nixpacks.toml`)
- **Build Command:** `npm ci --cache /tmp/.npm` (specified in `nixpacks.toml`)
- **Start Command:** `npm run preview -- --host 0.0.0.0 --port $PORT`

The project includes:
- `.nvmrc` - Specifies Node.js 22.12.0
- `nixpacks.toml` - Configures Nixpacks to use Node.js 22 with custom build commands
- `railway.json` - Defines deployment settings

### Domain Setup

#### Railway Default Domain

1. In Railway dashboard, go to **"Settings"** tab
2. Under **"Domains"**, click **"Generate Domain"**
3. Railway provides a free `.railway.app` domain (e.g., `reufolio-redesigned-production.up.railway.app`)
4. Your site is immediately accessible at this URL

#### Custom Domain Setup

**Option A: Using `www` subdomain (Recommended for GoDaddy)**

1. **In Railway:**
   - Go to **"Settings"** → **"Domains"**
   - Click **"Custom Domain"**
   - Enter: `www.reufolio.com`
   - Copy the CNAME target (e.g., `91vek2ak.up.railway.app`)

2. **In GoDaddy DNS Management:**
   - **Type:** CNAME
   - **Name:** `www`
   - **Value:** `91vek2ak.up.railway.app` (or your Railway CNAME)
   - **TTL:** 600
   - Click **Save**

3. **Set up root domain redirect in GoDaddy:**
   - Go to **Domain Settings** → **Forwarding**
   - **Forward from:** `reufolio.com`
   - **Forward to:** `https://www.reufolio.com`
   - **Forward type:** Permanent (301)
   - Click **Save**

**Option B: Using Cloudflare (Best for apex domain)**

GoDaddy doesn't support CNAME records at the root domain (`@`). To use `reufolio.com` without `www`:

1. **Sign up at [Cloudflare](https://cloudflare.com)** (free)
2. **Add your domain** `reufolio.com`
3. **Change nameservers at GoDaddy** to Cloudflare's nameservers (provided during setup)
4. **In Cloudflare DNS:**
   - **Type:** CNAME
   - **Name:** `@`
   - **Target:** `91vek2ak.up.railway.app`
   - **Proxy status:** Proxied (orange cloud)
   - Click **Save**
5. **In Railway:**
   - Add custom domain: `reufolio.com`

Cloudflare allows CNAME flattening for apex domains and provides additional benefits:
- Free SSL
- CDN and caching
- DDoS protection
- Analytics

## Step 3: Verify Deployment

1. Wait for the build to complete (usually 2-3 minutes)
2. Click the generated Railway URL
3. Test all features:
   - Navigation scrolling
   - Project cards display
   - Resume download
   - Contact form (sends email via EmailJS)

## Making Updates

After initial deployment, any changes pushed to GitHub will automatically trigger a new deployment:

```bash
git add .
git commit -m "Description of changes"
git push
```

Railway will:
1. Detect the push
2. Pull the latest code
3. Run the build
4. Deploy automatically

## Troubleshooting

### Build Fails - Node.js Version Error

If you see errors like `EBADENGINE Unsupported engine` or `required: { node: '^20.19.0' }`:

**Solution:** Ensure these files are committed to your repository:
- `.nvmrc` (contains `22.12.0`)
- `nixpacks.toml` (specifies Node.js 22)

Railway will automatically detect these files and use Node.js 22.

### Build Fails - Cache Lock Error

If you see `EBUSY: resource busy or locked, rmdir '/app/node_modules/.cache'`:

**Solution:** The `nixpacks.toml` file uses a custom cache directory (`/tmp/.npm`) to avoid this issue. Ensure it's committed to your repository.

### Build Fails - General

- Check Railway logs in the **"Deployments"** tab
- Ensure all dependencies are in `package.json`
- Verify all configuration files are pushed to GitHub

### Contact Form Not Working

- Verify environment variables are set correctly in Railway
- Check EmailJS service is active
- Review browser console for errors

### Custom Domain Not Working

**CNAME Error - "Invalid Record Data" (GoDaddy)**

If GoDaddy shows "Invalid Record Data" when adding a CNAME:
- **Problem:** GoDaddy doesn't allow CNAME records at the root domain (`@`)
- **Solution:** Use `www` subdomain instead (see Domain Setup → Option A)
- **Alternative:** Switch to Cloudflare for apex domain support (see Domain Setup → Option B)

**DNS Propagation Takes Time**

After adding DNS records:
- Changes can take 5 minutes to 48 hours to propagate
- Use [DNS Checker](https://dnschecker.org) to verify propagation
- Try accessing your domain in incognito/private mode

### 404 Errors on Refresh

This shouldn't happen with Vite preview, but if it does:
- Ensure `railway.json` uses the correct start command
- Check Railway logs for routing issues

### Site Not Accessible / CORS Errors

**No CORS configuration needed!** Your site is a static frontend application that works on any domain:
- Railway default domain: Works immediately
- Custom domains: Work once DNS is configured
- EmailJS handles its own CORS automatically

If you see CORS errors, they're from EmailJS:
- Verify environment variables are set in Railway
- Check EmailJS dashboard for service status

## Configuration Files

### railway.json
```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS",
    "buildCommand": "npm ci && npm run build"
  },
  "deploy": {
    "startCommand": "npm run preview -- --host 0.0.0.0 --port $PORT",
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
```

### .nvmrc
Specifies the Node.js version:
```
22.12.0
```

### nixpacks.toml
Configures Nixpacks builder to use Node.js 22 with custom build settings:
```toml
[phases.setup]
nixPkgs = ['nodejs_22']

[phases.install]
cmds = ['npm ci --cache /tmp/.npm --prefer-offline --no-audit']

[phases.build]
cmds = ['npm run build']

[start]
cmd = 'npm run preview -- --host 0.0.0.0 --port $PORT'
```

### .gitignore
Ensures sensitive files are not committed:
- `.env` files (local environment variables)
- `node_modules` (dependencies)
- `dist` (build output)
- `.railway` (Railway CLI files)

## Additional Notes

- **Cost:** Railway offers a generous free tier perfect for portfolios
- **SSL:** Automatic HTTPS on all Railway domains
- **Performance:** Global CDN for fast loading worldwide
- **Monitoring:** Built-in metrics and logging

## Support

For Railway-specific issues:
- [Railway Documentation](https://docs.railway.app)
- [Railway Discord](https://discord.gg/railway)

For EmailJS issues:
- See EMAILJS_SETUP.md
- [EmailJS Documentation](https://www.emailjs.com/docs/)
