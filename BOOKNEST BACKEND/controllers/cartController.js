const Cart = require('../models/Cart');
const Book = require('../models/Book');

const addToCart = async (req, res, next) => {
  try {
    const { bookId, quantity } = req.body;

    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({
        success: false,
        message: 'Book not found',
      });
    }

    if (book.stock < quantity) {
      return res.status(400).json({
        success: false,
        message: 'Not enough stock available',
      });
    }

    let cart = await Cart.findOne({ user: req.user.id });

    if (!cart) {
      cart = await Cart.create({
        user: req.user.id,
        items: [{ book: bookId, quantity }],
      });
    } else {
      const existingItem = cart.items.find(item => 
        item.book.toString() === bookId
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        cart.items.push({ book: bookId, quantity });
      }

      await cart.save();
    }

    await cart.populate('items.book');

    res.status(200).json({
      success: true,
      data: cart,
    });
  } catch (error) {
    next(error);
  }
};

const removeFromCart = async (req, res, next) => {
  try {
    const { bookId } = req.params;

    let cart = await Cart.findOne({ user: req.user.id });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: 'Cart not found',
      });
    }

    cart.items = cart.items.filter(item => 
      item.book.toString() !== bookId
    );

    await cart.save();
    await cart.populate('items.book');

    res.status(200).json({
      success: true,
      data: cart,
    });
  } catch (error) {
    next(error);
  }
};

const updateQuantity = async (req, res, next) => {
  try {
    const { bookId } = req.params;
    const { quantity } = req.body;

    if (quantity < 1) {
      return res.status(400).json({
        success: false,
        message: 'Quantity must be at least 1',
      });
    }

    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({
        success: false,
        message: 'Book not found',
      });
    }

    if (book.stock < quantity) {
      return res.status(400).json({
        success: false,
        message: 'Not enough stock available',
      });
    }

    let cart = await Cart.findOne({ user: req.user.id });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: 'Cart not found',
      });
    }

    const itemIndex = cart.items.findIndex(item => 
      item.book.toString() === bookId
    );

    if (itemIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Item not found in cart',
      });
    }

    cart.items[itemIndex].quantity = quantity;
    await cart.save();
    await cart.populate('items.book');

    res.status(200).json({
      success: true,
      data: cart,
    });
  } catch (error) {
    next(error);
  }
};

const getCart = async (req, res, next) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id }).populate('items.book');

    if (!cart) {
      return res.status(200).json({
        success: true,
        data: { user: req.user.id, items: [] },
      });
    }

    res.status(200).json({
      success: true,
      data: cart,
    });
  } catch (error) {
    next(error);
  }
};

const clearCart = async (req, res, next) => {
  try {
    let cart = await Cart.findOne({ user: req.user.id });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: 'Cart not found',
      });
    }

    cart.items = [];
    await cart.save();

    res.status(200).json({
      success: true,
      data: cart,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addToCart,
  removeFromCart,
  updateQuantity,
  getCart,
  clearCart,
};
