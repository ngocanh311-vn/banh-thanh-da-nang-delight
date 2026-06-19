# 🌐 Custom Domain Setup Guide

## Vấn đề

Khi triển khai trên Vercel với domain khác (ví dụ: `banh-thanh-da-nang.com`), các URL sau sẽ sai:

- OG Images trong meta tags
- Canonical links
- Sitemap URLs

## ✅ Solution

### 1. Local Development

Tạo `.env.local` trong project root:

```env
VITE_SITE_URL=http://localhost:8080
```

### 2. Deploy trên Vercel

#### Option A: Tự động (Recommended)

1. Vào **Vercel Dashboard** → Project settings
2. Vào tab **Environment Variables**
3. Thêm biến:
   ```
   Name: VITE_SITE_URL
   Value: https://banh-thanh-da-nang.com  (hoặc domain của bạn)
   Environment: Production, Preview, Development
   ```
4. Redeploy

#### Option B: Manual via vercel.json

Sửa `vercel.json`:

```json
{
  "env": {
    "VITE_SITE_URL": "https://banh-thanh-da-nang.com"
  }
}
```

### 3. Xác nhận

Sau deploy, kiểm tra:

- Meta tags: `F12` → Elements → head → og:image
- Sitemap: https://domain-của-bạn.com/sitemap.xml
- Canonical: Xem source code

## Các file đã cập nhật

- `src/routes/*.tsx` - Dùng VITE_SITE_URL thay vì hardcoded
- `vercel.json` - Support environment variables
- `.env.example` - Hướng dẫn setup local
