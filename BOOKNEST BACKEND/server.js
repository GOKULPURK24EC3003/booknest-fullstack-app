const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');

dotenv.config();

// Connect to MongoDB with better error handling
connectDB();

const app = express();

// Configure CORS for production
app.use(cors({
  origin: ['https://booknest-fullstack-app.vercel.app', 'http://localhost:3000'],
  credentials: true
}));

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${new Date().toISOString()}`);
  next();
});

app.get('/', (req, res) => {
  res.json({
    message: 'BookNest API is running',
    version: '1.0.0',
  });
});

// Seed endpoint to populate database with books
app.get('/api/seed', async (req, res) => {
  try {
    console.log('Starting database seeding...');
    const seedBooks = require('./seed');
    await seedBooks();
    console.log('Database seeded successfully!');
    res.json({
      success: true,
      message: 'Database seeded with books successfully!',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Seeding error:', error);
    res.status(500).json({
      success: false,
      message: 'Error seeding database',
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'BookNest API is healthy',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

app.use('/api/auth', require('./routes/auth'));
app.use('/api/books', require('./routes/books'));
app.use('/api/cart', require('./routes/cart'));
app.use('/api/orders', require('./routes/orders'));

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});

module.exports = app;
