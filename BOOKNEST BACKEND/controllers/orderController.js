const Order = require('../models/Order');
const Cart = require('../models/Cart');
const Book = require('../models/Book');

const placeOrder = async (req, res, next) => {
  try {
    const { shippingAddress, paymentMethod } = req.body;

    const cart = await Cart.findOne({ user: req.user.id }).populate('items.book');

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Cart is empty',
      });
    }

    for (const item of cart.items) {
      if (item.book.stock < item.quantity) {
        return res.status(400).json({
          success: false,
          message: `Not enough stock for ${item.book.title}`,
        });
      }
    }

    const orderItems = cart.items.map(item => ({
      book: item.book._id,
      title: item.book.title,
      price: item.book.price,
      quantity: item.quantity,
    }));

    const totalPrice = orderItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);

    const order = await Order.create({
      user: req.user.id,
      items: orderItems,
      totalPrice,
      shippingAddress,
      paymentMethod,
    });

    for (const item of cart.items) {
      await Book.findByIdAndUpdate(item.book._id, {
        $inc: { stock: -item.quantity },
      });
    }

    await Cart.findOneAndUpdate(
      { user: req.user.id },
      { $set: { items: [] } }
    );

    await order.populate('user', 'name email');

    res.status(201).json({
      success: true,
      data: order,
    });
  } catch (error) {
    next(error);
  }
};

const getUserOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({ user: req.user.id })
      .populate('user', 'name email')
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: orders.length,
      data: orders,
    });
  } catch (error) {
    next(error);
  }
};

const getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.find()
      .populate('user', 'name email')
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: orders.length,
      data: orders,
    });
  } catch (error) {
    next(error);
  }
};

const getOrderById = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('user', 'name email');

    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found',
      });
    }

    if (order.user._id.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to access this order',
      });
    }

    res.status(200).json({
      success: true,
      data: order,
    });
  } catch (error) {
    next(error);
  }
};

const updateOrderStatus = async (req, res, next) => {
  try {
    const { status } = req.body;

    if (!['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid order status',
      });
    }

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    ).populate('user', 'name email');

    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found',
      });
    }

    res.status(200).json({
      success: true,
      data: order,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  placeOrder,
  getUserOrders,
  getAllOrders,
  getOrderById,
  updateOrderStatus,
};
