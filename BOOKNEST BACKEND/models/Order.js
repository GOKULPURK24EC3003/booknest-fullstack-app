const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
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
      title: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: [1, 'Quantity must be at least 1'],
      },
    },
  ],
  totalPrice: {
    type: Number,
    required: true,
    min: [0, 'Total price cannot be negative'],
  },
  shippingAddress: {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zipCode: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  paymentMethod: {
    type: String,
    required: true,
    enum: ['Credit Card', 'Debit Card', 'PayPal', 'Cash on Delivery'],
  },
  status: {
    type: String,
    enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
    default: 'Pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

orderSchema.pre('save', function (next) {
  this.populate('user', 'name email');
  next();
});

module.exports = mongoose.model('Order', orderSchema);
