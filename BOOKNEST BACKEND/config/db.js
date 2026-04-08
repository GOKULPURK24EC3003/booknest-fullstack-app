const mongoose = require('mongoose');

// In-memory fallback data for when MongoDB fails
const fallbackBooks = [
  {
    _id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 1078,
    description: 'A classic American novel set in the Jazz Age, exploring themes of wealth, love, and the American Dream.',
    category: 'Fiction',
    rating: 4.5,
    reviews: 245,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300',
    inStock: true
  },
  {
    _id: '2',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    price: 899,
    description: 'A gripping tale of racial injustice and childhood innocence in the American South.',
    category: 'Fiction',
    rating: 4.8,
    reviews: 342,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
    inStock: true
  },
  {
    _id: '3',
    title: '1984',
    author: 'George Orwell',
    price: 749,
    description: 'A dystopian social science fiction novel and cautionary tale about totalitarianism.',
    category: 'Science Fiction',
    rating: 4.6,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300',
    inStock: true
  },
  {
    _id: '4',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    price: 699,
    description: 'A romantic novel of manners that critiques the British landed gentry at the end of the 18th century.',
    category: 'Romance',
    rating: 4.4,
    reviews: 278,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
    inStock: true
  },
  {
    _id: '5',
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    price: 849,
    description: 'A story about teenage rebellion and angst that has become an icon for teenage alienation.',
    category: 'Fiction',
    rating: 4.2,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300',
    inStock: true
  }
];

let useFallback = false;

const connectDB = async () => {
  try {
    // Try to connect to MongoDB
    if (!process.env.MONGO_URI || process.env.MONGO_URI.includes('localhost')) {
      console.log('Using fallback data (no valid MongoDB URI)');
      useFallback = true;
      return;
    }

    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // 5 second timeout
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
    useFallback = false;
  } catch (error) {
    console.log('MongoDB connection failed, using fallback data:', error.message);
    useFallback = true;
    // Don't exit process, continue with fallback data
  }
};

const isUsingFallback = () => useFallback;

const getFallbackBooks = () => fallbackBooks;

module.exports = { connectDB, isUsingFallback, getFallbackBooks };
