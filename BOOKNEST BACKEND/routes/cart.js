const express = require('express');
const { body } = require('express-validator');
const {
  addToCart,
  removeFromCart,
  updateQuantity,
  getCart,
  clearCart,
} = require('../controllers/cartController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.use(protect);

router.post(
  '/add',
  [
    body('bookId').notEmpty().withMessage('Book ID is required'),
    body('quantity').isInt({ min: 1 }).withMessage('Quantity must be at least 1'),
  ],
  addToCart
);

router.delete('/remove/:bookId', removeFromCart);

router.put(
  '/update/:bookId',
  [
    body('quantity').isInt({ min: 1 }).withMessage('Quantity must be at least 1'),
  ],
  updateQuantity
);

router.get('/', getCart);

router.delete('/clear', clearCart);

module.exports = router;
