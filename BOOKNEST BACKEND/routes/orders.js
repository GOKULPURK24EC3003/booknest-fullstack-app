const express = require('express');
const { body } = require('express-validator');
const {
  placeOrder,
  getUserOrders,
  getAllOrders,
  getOrderById,
  updateOrderStatus,
} = require('../controllers/orderController');
const { protect, admin } = require('../middleware/auth');

const router = express.Router();

router.post(
  '/place',
  protect,
  [
    body('shippingAddress.street').notEmpty().withMessage('Street address is required'),
    body('shippingAddress.city').notEmpty().withMessage('City is required'),
    body('shippingAddress.state').notEmpty().withMessage('State is required'),
    body('shippingAddress.zipCode').notEmpty().withMessage('Zip code is required'),
    body('shippingAddress.country').notEmpty().withMessage('Country is required'),
    body('paymentMethod').isIn(['Credit Card', 'Debit Card', 'PayPal', 'Cash on Delivery']).withMessage('Invalid payment method'),
  ],
  placeOrder
);

router.get('/my-orders', protect, getUserOrders);

router.get('/all', protect, admin, getAllOrders);

router.get('/:id', protect, getOrderById);

router.put(
  '/:id/status',
  protect,
  admin,
  [
    body('status').isIn(['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled']).withMessage('Invalid order status'),
  ],
  updateOrderStatus
);

module.exports = router;
