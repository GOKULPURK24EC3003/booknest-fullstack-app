# 🚀 Quick Deployment Steps

## 1. Backend (Render) - 5 Minutes

### Go to https://render.com
1. Sign up with GitHub
2. Click "New+" → "Web Service"
3. Select: `booknest-fullstack-app` repository
4. Root Directory: `BOOKNEST BACKEND`
5. Runtime: `Node.js`
6. Build Command: `npm install`
7. Start Command: `npm start`

### Add Environment Variables:
```
NODE_ENV = production
PORT = 10000
MONGO_URI = mongodb+srv://username:password@cluster.mongodb.net/booknest
JWT_SECRET = your_very_long_secure_secret_key_here_make_it_long_and_secure
```

## 2. Frontend (Vercel) - 3 Minutes

### Go to https://vercel.com
1. Sign up with GitHub
2. Click "Add New..." → "Project"
3. Select: `booknest-fullstack-app` repository
4. Framework: `Other`
5. Build Command: (leave empty)
6. Output Directory: `BOOKNEST FRONTEND`

## 3. Update Frontend API URL

After backend deployment, update the production URL in `BOOKNEST FRONTEND/js/api.js`:

```javascript
// Line 20 - Update this URL
default: 'https://your-backend-name.onrender.com/api',
```

## 4. Test Everything

1. Backend: `https://your-backend.onrender.com/api/books`
2. Frontend: `https://your-frontend.vercel.app`

## 🎉 Done! Your app is live!

---

### Need MongoDB? Get free cluster at: https://www.mongodb.com/atlas
