const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  items: [
    {
      book: {
        type: mongoose.Schema.ObjectId,
        ref: 'Book',
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: [1, 'Quantity must be at least 1'],
        default: 1,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

cartSchema.pre('save', function (next) {
  this.populate('items.book');
  next();
});

module.exports = mongoose.model('Cart', cartSchema);
