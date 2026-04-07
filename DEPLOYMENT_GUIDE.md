# 🚀 BookNest Deployment Guide

## 📋 Overview
Deploy your BookNest full-stack application to production:
- **Backend**: Render (Node.js + MongoDB)
- **Frontend**: Vercel (Static HTML/CSS/JS)

---

## 🎯 Part 1: Backend Deployment (Render)

### Step 1: Prepare Backend for Production

#### 1.1 Update Backend for Production
```bash
# In BOOKNEST BACKEND folder
cd "BOOKNEST BACKEND"
```

#### 1.2 Create Render-Specific Files

**Create `start` script in package.json** (if not already there):
```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```

**Create `render.yaml`** (Render configuration):
```yaml
services:
  - type: web
    name: booknest-backend
    env: node
    plan: free
    buildCommand: "npm install"
    startCommand: "npm start"
    envVars:
      - key: NODE_ENV
        value: production
      - key: PORT
        value: 10000
      - key: MONGO_URI
        sync: false
      - key: JWT_SECRET
        sync: false
```

### Step 2: Deploy to Render

#### 2.1 Go to Render Dashboard
1. Visit https://render.com
2. Sign up/login with your GitHub account
3. Click "New +" → "Web Service"

#### 2.2 Connect Repository
1. **Connect Repository**: Select `booknest-fullstack-app`
2. **Root Directory**: Set to `BOOKNEST BACKEND`
3. **Runtime**: Node.js
4. **Build Command**: `npm install`
5. **Start Command**: `npm start`

#### 2.3 Configure Environment Variables
Add these environment variables in Render:
```
NODE_ENV = production
PORT = 10000
MONGO_URI = your_mongodb_connection_string
JWT_SECRET = your_jwt_secret_key
```

#### 2.4 Deploy
Click "Create Web Service" and wait for deployment.

---

## 🎯 Part 2: Frontend Deployment (Vercel)

### Step 1: Prepare Frontend for Production

#### 1.1 Update API Base URL
First, we need to update the frontend to use the production backend URL.

**Update `js/api.js`**:
```javascript
class ApiService {
    constructor() {
        // Use production URL when deployed, localhost for development
        this.baseURL = window.location.hostname === 'localhost' 
            ? 'http://localhost:5000/api'
            : 'https://your-backend-url.onrender.com/api';
        this.token = localStorage.getItem('booknest-token');
    }
    // ... rest of the code
}
```

#### 1.2 Create Vercel Configuration
Create `vercel.json` in the frontend folder:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "BOOKNEST FRONTEND/**/*",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/BOOKNEST FRONTEND/$1"
    }
  ]
}
```

### Step 2: Deploy to Vercel

#### 2.1 Go to Vercel Dashboard
1. Visit https://vercel.com
2. Sign up/login with your GitHub account
3. Click "Add New..." → "Project"

#### 2.2 Import Repository
1. **Import Git Repository**: Select `booknest-fullstack-app`
2. **Framework Preset**: Other
3. **Root Directory**: Leave blank (or set to project root)
4. **Build Command**: Leave empty (static site)
5. **Output Directory**: `BOOKNEST FRONTEND`

#### 2.3 Configure Environment Variables (Optional)
Add if needed:
```
REACT_APP_API_URL = https://your-backend-url.onrender.com
```

#### 2.4 Deploy
Click "Deploy" and wait for deployment.

---

## 🔧 Environment Setup

### MongoDB Atlas Setup (Free Tier)
1. Go to https://www.mongodb.com/atlas
2. Create free cluster
3. Create database user
4. Get connection string
5. Whitelist all IPs (0.0.0.0/0)

### Environment Variables Summary

#### Backend (Render):
```
NODE_ENV = production
PORT = 10000
MONGO_URI = mongodb+srv://username:password@cluster.mongodb.net/booknest
JWT_SECRET = your_very_long_secure_secret_key_here
```

#### Frontend (Vercel):
```
REACT_APP_API_URL = https://your-backend-url.onrender.com
```

---

## 🌐 Post-Deployment Steps

### 1. Update Frontend API URL
After backend deployment, update the frontend API URL:

**In `BOOKNEST FRONTEND/js/api.js`:**
```javascript
constructor() {
    this.baseURL = 'https://your-backend-app-name.onrender.com/api';
    this.token = localStorage.getItem('booknest-token');
}
```

### 2. Test Both Applications
1. **Backend**: Test API endpoints at `https://your-backend.onrender.com/api/books`
2. **Frontend**: Test full application at `https://your-frontend.vercel.app`

### 3. CORS Configuration
Ensure your backend allows requests from your frontend domain:

**In `BOOKNEST BACKEND/server.js`:**
```javascript
const cors = require('cors');
app.use(cors({
    origin: ['https://your-frontend.vercel.app', 'http://localhost:3000'],
    credentials: true
}));
```

---

## 🔄 Continuous Deployment

### Automatic Updates
Both Render and Vercel support automatic deployments:
1. **Render**: Auto-deploys on push to main branch
2. **Vercel**: Auto-deploys on push to main branch

### Update Workflow
```bash
# Make changes
git add .
git commit -m "Update feature"
git push origin master
# Both platforms will auto-deploy!
```

---

## 📱 Alternative Deployment Options

### Backend Alternatives:
- **Heroku**: Similar to Render, requires dyno
- **AWS EC2**: More control, higher cost
- **DigitalOcean**: Good balance of cost/control
- **Railway**: Modern, simple deployment

### Frontend Alternatives:
- **Netlify**: Great for static sites
- **GitHub Pages**: Free for public repos
- **Firebase Hosting**: Good for SPAs
- **AWS S3 + CloudFront**: Enterprise solution

---

## 🚨 Troubleshooting

### Common Issues:

#### 1. Backend Not Starting
- Check environment variables
- Verify MongoDB connection string
- Check Render logs

#### 2. Frontend Can't Connect to Backend
- Update API base URL
- Check CORS configuration
- Verify backend is running

#### 3. MongoDB Connection Issues
- Check IP whitelist in Atlas
- Verify connection string format
- Ensure database user has correct permissions

#### 4. Build Failures
- Check package.json scripts
- Verify all dependencies are installed
- Check build logs for specific errors

---

## 🎉 Success Checklist

- [ ] Backend deployed to Render
- [ ] Frontend deployed to Vercel
- [ ] MongoDB Atlas configured
- [ ] Environment variables set
- [ ] CORS configured
- [ ] API endpoints tested
- [ ] Full application tested
- [ ] Domain names noted
- [ ] Continuous deployment working

---

## 📞 Support Resources

- **Render Docs**: https://render.com/docs
- **Vercel Docs**: https://vercel.com/docs
- **MongoDB Atlas**: https://docs.mongodb.com/atlas
- **GitHub Issues**: For project-specific problems

---

**🚀 Your BookNest application will be live and accessible to users worldwide!**
