const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// CORS Configuration for Production
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5000',
  process.env.CLIENT_URL,
  // Add your Vercel URL here after deployment
  // 'https://your-app.vercel.app'
].filter(Boolean);

app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection with better error handling
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/hypewear')
  .then(() => console.log('✅ MongoDB Connected Successfully'))
  .catch(err => {
    console.error('❌ MongoDB Connection Error:', err.message);
    process.exit(1);
  });


// Routes
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/users', userRoutes);

// Health Check Endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'HypeWear API is running',
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

// API Info Endpoint
app.get('/api', (req, res) => {
  res.json({
    name: 'HypeWear API',
    version: '1.0.0',
    endpoints: {
      products: '/api/products',
      orders: '/api/orders',
      users: '/api/users'
    }
  });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
});