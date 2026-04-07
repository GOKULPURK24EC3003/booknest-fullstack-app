const express = require('express');
const { body } = require('express-validator');
const {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
} = require('../controllers/bookController');
const { protect, admin } = require('../middleware/auth');

const router = express.Router();

router
  .route('/')
  .get(getBooks)
  .post(
    protect,
    admin,
    [
      body('title').trim().notEmpty().withMessage('Title is required'),
      body('author').trim().notEmpty().withMessage('Author is required'),
      body('price').isNumeric().withMessage('Price must be a number'),
      body('description').trim().notEmpty().withMessage('Description is required'),
      body('category').trim().notEmpty().withMessage('Category is required'),
      body('image').trim().notEmpty().withMessage('Image URL is required'),
      body('stock').isInt({ min: 0 }).withMessage('Stock must be a non-negative integer'),
    ],
    createBook
  );

router
  .route('/:id')
  .get(getBookById)
  .put(
    protect,
    admin,
    [
      body('title').optional().trim().notEmpty().withMessage('Title cannot be empty'),
      body('author').optional().trim().notEmpty().withMessage('Author cannot be empty'),
      body('price').optional().isNumeric().withMessage('Price must be a number'),
      body('description').optional().trim().notEmpty().withMessage('Description cannot be empty'),
      body('category').optional().trim().notEmpty().withMessage('Category cannot be empty'),
      body('image').optional().trim().notEmpty().withMessage('Image URL cannot be empty'),
      body('stock').optional().isInt({ min: 0 }).withMessage('Stock must be a non-negative integer'),
    ],
    updateBook
  )
  .delete(protect, admin, deleteBook);

module.exports = router;
