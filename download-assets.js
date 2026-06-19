import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, "src", "assets");
const downloadDir = path.join(__dirname, "public", "images");

// Ensure public/images directory exists — files here are served as-is at
// the site root (e.g. public/images/foo.jpg -> /images/foo.jpg), unlike
// src/assets which Vite never copies into the build output.
if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir, { recursive: true });
}

// Get all asset.json files
const assetFiles = fs.readdirSync(assetsDir).filter((f) => f.endsWith(".asset.json"));

const downloadImage = async (url, filename) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const buffer = await response.arrayBuffer();
    const filepath = path.join(downloadDir, filename);
    fs.writeFileSync(filepath, Buffer.from(buffer));
    console.log(`✓ Downloaded: ${filename}`);
    return `/images/${filename}`;
  } catch (error) {
    console.error(`✗ Failed to download ${url}:`, error.message);
    return null;
  }
};

const updateAssets = async () => {
  console.log("📥 Downloading assets from URLs...\n");

  // Get the site URL - use from env or fallback
  const siteUrl =
    process.env.VITE_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    "https://banh-thanh-da-nang-delight.lovable.app";
  console.log(`Using site URL: ${siteUrl}\n`);

  for (const assetFile of assetFiles) {
    const assetPath = path.join(assetsDir, assetFile);
    const asset = JSON.parse(fs.readFileSync(assetPath, "utf-8"));

    const originalUrl = asset.url;
    const filename = asset.original_filename;

    // Only download if URL is from lovable CDN
    if (originalUrl.includes("__l5e") || originalUrl.includes("assets-v1")) {
      console.log(`Processing: ${assetFile}`);

      // Use full URL with domain if it doesn't have one
      let fullUrl = originalUrl;
      if (!fullUrl.startsWith("http")) {
        fullUrl = siteUrl + originalUrl;
      }

      const newUrl = await downloadImage(fullUrl, filename);
      if (newUrl) {
        asset.url = newUrl;
        fs.writeFileSync(assetPath, JSON.stringify(asset, null, 2));
        console.log(`  → Updated URL: ${newUrl}\n`);
      }
    } else {
      console.log(`Skipped: ${assetFile} (URL already valid)\n`);
    }
  }

  console.log("✅ Asset update complete!");
};

updateAssets().catch(console.error);
