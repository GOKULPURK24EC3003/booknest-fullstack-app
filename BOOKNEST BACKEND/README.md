# BookNest Backend API

A complete backend for an online bookstore built with Node.js, Express.js, and MongoDB.

## Features

- **User Authentication**: Register, login, and JWT-based authentication
- **Book Management**: CRUD operations for books (admin only)
- **Cart System**: Add, remove, update items in cart
- **Order Management**: Place orders and track order history
- **Admin Features**: Admin-only routes for book and order management
- **Security**: Password hashing, JWT tokens, protected routes
- **Error Handling**: Comprehensive error handling middleware

## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT for authentication
- bcrypt for password hashing
- CORS enabled
- express-validator for input validation

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env` file and update with your MongoDB connection string
   - Set a secure JWT secret

4. Run the application:
   ```bash
   npm start
   ```

   For development with nodemon:
   ```bash
   npm run dev
   ```

## Environment Variables

Create a `.env` file with the following variables:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key_here
PORT=5000
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user info (protected)

### Books
- `GET /api/books` - Get all books (supports search and category filtering)
- `GET /api/books/:id` - Get single book by ID
- `POST /api/books` - Create new book (admin only)
- `PUT /api/books/:id` - Update book (admin only)
- `DELETE /api/books/:id` - Delete book (admin only)

### Cart
- `POST /api/cart/add` - Add book to cart (protected)
- `DELETE /api/cart/remove/:bookId` - Remove book from cart (protected)
- `PUT /api/cart/update/:bookId` - Update quantity (protected)
- `GET /api/cart` - Get user cart (protected)
- `DELETE /api/cart/clear` - Clear cart (protected)

### Orders
- `POST /api/orders/place` - Place order (protected)
- `GET /api/orders/my-orders` - Get user orders (protected)
- `GET /api/orders/all` - Get all orders (admin only)
- `GET /api/orders/:id` - Get order by ID (protected)
- `PUT /api/orders/:id/status` - Update order status (admin only)

## Query Parameters

### Books Endpoint
- `?search=query` - Search books by title or author
- `?category=category` - Filter by category (Fiction, Non-Fiction, Science, Technology, Business, Self-Help, Biography, History, Romance, Mystery, Children, Other)

## Sample Usage

### Register User
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"123456"}'
```

### Login User
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"123456"}'
```

### Get Books
```bash
curl http://localhost:5000/api/books
```

### Add to Cart
```bash
curl -X POST http://localhost:5000/api/cart/add \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{"bookId":"BOOK_ID","quantity":1}'
```

## Database Seeding

Run the seed script to populate the database with sample books:

```bash
npm run seed
```

This will add 15 sample books across different categories.

## Project Structure

```
booknest-backend/
  config/
    db.js              # Database connection
  controllers/
    authController.js  # User authentication
    bookController.js  # Book CRUD operations
    cartController.js  # Cart management
    orderController.js # Order management
  middleware/
    auth.js           # JWT authentication middleware
    error.js          # Error handling middleware
  models/
    User.js           # User model
    Book.js           # Book model
    Cart.js           # Cart model
    Order.js          # Order model
  routes/
    auth.js           # Authentication routes
    books.js          # Book routes
    cart.js           # Cart routes
    orders.js         # Order routes
  .env                # Environment variables
  package.json        # Dependencies and scripts
  seed.js            # Database seeding script
  server.js          # Main server file
```

## Security Features

- Password hashing with bcrypt
- JWT token authentication
- Protected routes with middleware
- Input validation with express-validator
- CORS enabled for cross-origin requests
- Admin role-based access control

## Error Handling

The API includes comprehensive error handling:
- Validation errors
- Authentication errors
- Authorization errors
- Database errors
- Not found errors

All errors return appropriate HTTP status codes and descriptive error messages.

## Development

The server includes request logging middleware that logs:
- HTTP method
- Request path
- Timestamp

This helps with debugging and monitoring API usage.

## License

This project is licensed under the ISC License.
