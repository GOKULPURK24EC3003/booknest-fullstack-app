const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a book title'],
    trim: true,
  },
  author: {
    type: String,
    required: [true, 'Please add an author'],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'Please add a price'],
    min: [0, 'Price cannot be negative'],
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    trim: true,
  },
  category: {
    type: String,
    required: [true, 'Please add a category'],
    enum: ['Fiction', 'Non-Fiction', 'Science', 'Technology', 'Business', 'Self-Help', 'Biography', 'History', 'Romance', 'Mystery', 'Children', 'Other'],
  },
  image: {
    type: String,
    required: [true, 'Please add an image URL'],
    trim: true,
  },
  stock: {
    type: Number,
    required: true,
    default: 0,
    min: [0, 'Stock cannot be negative'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Book', bookSchema);
