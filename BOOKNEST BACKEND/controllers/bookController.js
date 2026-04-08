const Book = require('../models/Book');
const { isUsingFallback, getFallbackBooks } = require('../config/db');

const createBook = async (req, res, next) => {
  try {
    if (isUsingFallback()) {
      // In fallback mode, just return success with the book data
      const book = { ...req.body, _id: Date.now().toString() };
      res.status(201).json({
        success: true,
        data: book,
        message: 'Book created (fallback mode)',
      });
      return;
    }

    const book = await Book.create(req.body);
    res.status(201).json({
      success: true,
      data: book,
    });
  } catch (error) {
    next(error);
  }
};

const getBooks = async (req, res, next) => {
  try {
    if (isUsingFallback()) {
      // Return fallback books with filtering
      let books = getFallbackBooks();
      
      if (req.query.category) {
        books = books.filter(book => book.category === req.query.category);
      }
      
      if (req.query.search) {
        const searchTerm = req.query.search.toLowerCase();
        books = books.filter(book => 
          book.title.toLowerCase().includes(searchTerm) || 
          book.author.toLowerCase().includes(searchTerm)
        );
      }

      return res.status(200).json({
        success: true,
        data: books,
        count: books.length,
        message: 'Books retrieved (fallback mode)',
      });
    }

    let query = {};
    
    if (req.query.category) {
      query.category = req.query.category;
    }
    
    if (req.query.search) {
      query.$or = [
        { title: { $regex: req.query.search, $options: 'i' } },
        { author: { $regex: req.query.search, $options: 'i' } },
      ];
    }

    const books = await Book.find(query);

    res.status(200).json({
      success: true,
      count: books.length,
      data: books,
    });
  } catch (error) {
    next(error);
  }
};

const getBookById = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: 'Book not found',
      });
    }

    res.status(200).json({
      success: true,
      data: book,
    });
  } catch (error) {
    next(error);
  }
};

const updateBook = async (req, res, next) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!book) {
      return res.status(404).json({
        success: false,
        message: 'Book not found',
      });
    }

    res.status(200).json({
      success: true,
      data: book,
    });
  } catch (error) {
    next(error);
  }
};

const deleteBook = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: 'Book not found',
      });
    }

    await book.deleteOne();

    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
};
