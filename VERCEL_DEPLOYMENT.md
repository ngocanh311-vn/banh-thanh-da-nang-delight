# 🚀 Vercel Deployment Guide - Banh Thanh Da Nang

## ✅ Changes Made for Vercel Compatibility

Your project has been updated to be fully compatible with Vercel deployment. Here's what was fixed:

### 1. **vercel.json Configuration**

- ✅ Fixed schema validation errors by removing unsupported properties
- ✅ Added `download-assets` to build command: `bun run download-assets && bun run build`
- ✅ Removed `publicSource` property (not supported in Vercel schema)
- ✅ Removed `nodeVersion` property (handled by Vercel runtime)
- ✅ Environment variables cleaned up

### 2. **Environment Variables Setup**

- ✅ Updated `download-assets.js` to use `VERCEL_PROJECT_PRODUCTION_URL` fallback
- ✅ Enhanced error handling for missing `VITE_SITE_URL`
- ✅ Improved `sitemap.xml.ts` with better environment variable handling

### 3. **Build Process Optimization**

- ✅ Assets (images) now download during build time on Vercel
- ✅ `public/images/` directory automatically created if missing
- ✅ SSR error handling improved in `server.ts`

---

## 📋 Step-by-Step Deployment Instructions

### Step 1: Connect to Vercel

```bash
# If you haven't already
npm i -g vercel
vercel
```

### Step 2: Set Up Environment Variables on Vercel

**Method A: Via Vercel Dashboard (Recommended)**

1. Go to your project on [vercel.com](https://vercel.com)
2. Click **Settings** → **Environment Variables**
3. Add this variable:
   ```
   Name: VITE_SITE_URL
   Value: https://your-domain.com  (or your Lovable domain initially)
   Environments: Production, Preview, Development
   ```
4. Click **Save**

**Method B: Via CLI**

```bash
vercel env add VITE_SITE_URL
# Then enter your domain URL
```

### Step 3: Deploy

```bash
vercel deploy
```

Or simply push to Git and Vercel will auto-deploy:

```bash
git push
```

### Step 4: Verify Deployment

After deployment, check:

- ✅ All images display correctly
- ✅ Sitemap generates at `/sitemap.xml`
- ✅ OG meta tags include correct images
- ✅ No 404 errors in browser console

Run this command to verify:

```bash
curl https://your-vercel-url.com/sitemap.xml
```

---

## 🔧 Environment Variables Reference

| Variable        | Required | Example                           | Where Used                   |
| --------------- | -------- | --------------------------------- | ---------------------------- |
| `VITE_SITE_URL` | Yes      | `https://tiembanhthanh.danang.vn` | Sitemap, image URLs, OG tags |
| `NODE_ENV`      | Auto     | `production`                      | Set automatically by Vercel  |

---

## 🐛 Troubleshooting

### Issue: Build Failed - Missing Assets

**Solution:** Make sure `VITE_SITE_URL` is set in Vercel Environment Variables

### Issue: Images Return 404

**Solution:**

1. Verify `VITE_SITE_URL` matches your Lovable app domain
2. Check that `download-assets` script runs successfully:
   ```bash
   VITE_SITE_URL=https://your-domain.com bun run download-assets
   ```

### Issue: Sitemap Shows Wrong URLs

**Solution:** Check that `VITE_SITE_URL` is correctly set:

```bash
curl https://your-vercel-url.com/sitemap.xml
```

### Issue: Preview Deployments Fail

**Solution:** Set `VITE_SITE_URL` for Preview environment too in Vercel dashboard

---

## 📦 Project Structure for Vercel

```
.
├── src/
│   ├── routes/           # TanStack routes (auto-deployed)
│   ├── components/       # React components
│   ├── assets/          # Asset manifests (JSON files)
│   ├── server.ts        # SSR entry point
│   └── lib/
│       └── config.server.ts  # Server config
├── public/
│   └── images/          # Downloaded images (generated at build)
├── package.json
├── vercel.json          # ✅ Already configured
├── vite.config.ts
└── download-assets.js   # ✅ Updated for Vercel
```

---

## 🎯 Custom Domain Setup

When switching from Lovable domain to custom domain:

1. **Update Vercel Environment Variable:**
   - Change `VITE_SITE_URL` from `https://banh-thanh-da-nang-delight.lovable.app` to `https://your-domain.com`

2. **Redeploy:**

   ```bash
   vercel deploy --prod
   ```

3. **Verify:**
   - Check `/sitemap.xml` uses new domain
   - Check OG images in meta tags
   - Check canonical links

---

## ✨ Additional Notes

- **Bun Package Manager**: Vercel supports Bun natively, so `bun install` works fine
- **Build Time**: First build may take longer due to asset downloads (5-10 seconds extra)
- **Caching**: Images are cached at build time, reducing runtime dependencies
- **Error Handling**: All SSR errors are properly formatted for production

---

## 📝 Files Modified

- `vercel.json` - Build command and config
- `download-assets.js` - Environment variable handling
- `src/routes/sitemap[.]xml.ts` - Improved env fallback
- `VERCEL_DEPLOYMENT.md` - This file (new)

---

## 🆘 Need Help?

If issues persist:

1. Check Vercel logs: `vercel logs -f`
2. Run locally: `bun run download-assets && bun run dev`
3. Check build output for error messages

**Happy deploying! 🎉**
