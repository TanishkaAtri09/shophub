# SETUP GUIDE - ShopHub E-Commerce Backend

## Step-by-Step Setup Instructions

### Step 1: Update .env File with MongoDB Connection String

1. **Open the `.env` file** in your project root
2. **Replace the placeholder** with your actual MongoDB connection string:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb+srv://username:password@cluster0.mongodb.net/shophub?retryWrites=true&w=majority
```

**Example with real values:**
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb+srv://john:mypassword123@cluster0.mongodb.net/shophub?retryWrites=true&w=majority
```

---

### Step 2: Install Node Modules

Open your terminal/command prompt in the project directory and run:

```bash
npm install
```

This will install all the required dependencies:
- express
- mongoose
- cors
- dotenv
- body-parser
- validator
- nodemon (dev dependency)

**Expected output:**
```
added 150 packages, and audited 151 packages in 2m
```

---

### Step 3: Verify MongoDB Connection

Make sure:
1. ✅ Your MongoDB Atlas cluster is **active and running**
2. ✅ You added your **IP address** to the IP Whitelist in MongoDB Atlas
   - Go to: Security → Network Access → Add IP Address
3. ✅ Your **database user** has correct username and password
4. ✅ The connection string has the correct **database name** (shophub)

---

### Step 4: Start the Development Server

Run this command:

```bash
npm run dev
```

**Expected output:**
```
╔════════════════════════════════════════╗
║     ShopHub Express Server Started     ║
╠════════════════════════════════════════╣
║  Server: http://localhost:5000         ║
║  Environment: development              ║
║  Database: MongoDB                     ║
╚════════════════════════════════════════╝

✅ MongoDB Connected Successfully
Database: shophub
Host: cluster0.mongodb.net

📌 Available Routes:

Health & Status:
  GET  /api/health              - Check server status
...
```

---

### Step 5: Test the API

#### **Option A: Using Browser**

Open in your browser:
```
http://localhost:5000/api/health
```

You should see:
```json
{
  "status": "Server is running",
  "timestamp": "2024-06-24T13:30:00.000Z",
  "database": "MongoDB"
}
```

#### **Option B: Using cURL**

In terminal, run:
```bash
curl http://localhost:5000/api/health
```

#### **Option C: Using Postman**

1. Open Postman
2. Create a new GET request
3. URL: `http://localhost:5000/api/health`
4. Click "Send"

---

### Step 6: Create Sample Products (Optional)

You can add products to MongoDB using the API:

```bash
curl -X POST http://localhost:5000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Wireless Headphones",
    "category": "electronics",
    "price": 79.99,
    "description": "High-quality sound with noise cancellation",
    "icon": "fas fa-headphones",
    "stock": 15,
    "rating": 4.5
  }'
```

Or use Postman:

**Method:** POST  
**URL:** `http://localhost:5000/api/products`  
**Headers:** `Content-Type: application/json`  
**Body (JSON):**
```json
{
  "name": "Wireless Headphones",
  "category": "electronics",
  "price": 79.99,
  "description": "High-quality sound with noise cancellation",
  "icon": "fas fa-headphones",
  "stock": 15,
  "rating": 4.5
}
```

---

### Step 7: Verify Products in MongoDB

1. Go to MongoDB Atlas
2. Click "Collections" under your Database
3. You should see the products you created
4. Check the data is being saved correctly

---

### Step 8: Connect Frontend to Backend

Update your frontend `script.js` to use the API:

```javascript
const API_BASE = 'http://localhost:5000/api';

// Fetch products from backend
async function getProducts() {
    try {
        const response = await fetch(`${API_BASE}/products`);
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Create order
async function createOrder(items, customer) {
    try {
        const response = await fetch(`${API_BASE}/orders`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ items, customer })
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error creating order:', error);
    }
}
```

---

## Troubleshooting

### ❌ Error: "Cannot connect to MongoDB"

**Solutions:**
1. Check MongoDB URI in `.env` file
2. Verify IP address is whitelisted in MongoDB Atlas
3. Check database user credentials
4. Ensure MongoDB Atlas cluster is running
5. Check internet connection

### ❌ Error: "Port 5000 is already in use"

**Solution:**
```bash
# Change PORT in .env file to 5001 or another available port
PORT=5001
```

### ❌ Error: "npm: command not found"

**Solution:**
- Install Node.js from https://nodejs.org
- Restart terminal/command prompt

### ❌ Products not appearing

**Solutions:**
1. Check if products are saved in MongoDB Atlas Collections
2. Try fetching products: `http://localhost:5000/api/products`
3. Check browser console for errors
4. Verify API endpoint is correct

---

## Quick Commands Reference

```bash
# Install dependencies
npm install

# Start development server (with auto-reload)
npm run dev

# Start production server
npm start

# Stop server
Ctrl + C (on Windows/Mac/Linux)
```

---

## API Testing Checklist

- [ ] GET `/api/health` - Returns server status
- [ ] GET `/api/categories` - Returns product categories
- [ ] GET `/api/products` - Returns all products
- [ ] POST `/api/products` - Create a product
- [ ] POST `/api/orders` - Create an order
- [ ] GET `/api/statistics` - Returns analytics

---

## Next Steps

1. ✅ Update `.env` with MongoDB URI
2. ✅ Run `npm install`
3. ✅ Run `npm run dev`
4. ✅ Test API endpoints
5. ✅ Connect frontend to backend
6. ✅ Deploy to production (Heroku/Vercel)

---

## Production Deployment

### Deploy to Heroku:

```bash
# Install Heroku CLI
# Login to Heroku
heroku login

# Create Heroku app
heroku create shophub-api

# Set environment variables
heroku config:set MONGODB_URI=your_connection_string
heroku config:set NODE_ENV=production

# Deploy
git push heroku main
```

---

**You're all set! 🎉 Your ShopHub backend is ready to go!**

For questions or issues, check the MongoDB Atlas documentation or Express.js docs.
