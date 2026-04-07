const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Book = require('./models/Book');

dotenv.config();

const seedBooks = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected for seeding...');

    await Book.deleteMany();
    console.log('Books cleared...');

    const books = [
      {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        price: 12.99,
        description: 'A classic American novel set in the Jazz Age, exploring themes of wealth, love, and the American Dream.',
        category: 'Fiction',
        image: 'https://example.com/great-gatsby.jpg',
        stock: 50,
      },
      {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        price: 14.99,
        description: 'A powerful story of racial injustice and childhood innocence in the American South.',
        category: 'Fiction',
        image: 'https://example.com/mockingbird.jpg',
        stock: 45,
      },
      {
        title: '1984',
        author: 'George Orwell',
        price: 13.99,
        description: 'A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.',
        category: 'Fiction',
        image: 'https://example.com/1984.jpg',
        stock: 60,
      },
      {
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        price: 11.99,
        description: 'A romantic novel of manners that charts the emotional development of the protagonist Elizabeth Bennet.',
        category: 'Romance',
        image: 'https://example.com/pride-prejudice.jpg',
        stock: 40,
      },
      {
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        price: 13.99,
        description: 'A story about teenage rebellion and angst that has become an icon for teenage rebellion.',
        category: 'Fiction',
        image: 'https://example.com/catcher-rye.jpg',
        stock: 35,
      },
      {
        title: 'Sapiens: A Brief History of Humankind',
        author: 'Yuval Noah Harari',
        price: 18.99,
        description: 'A groundbreaking narrative of humanity\'s creation and evolution that explores how biology and history have defined us.',
        category: 'Non-Fiction',
        image: 'https://example.com/sapiens.jpg',
        stock: 55,
      },
      {
        title: 'The Lean Startup',
        author: 'Eric Ries',
        price: 16.99,
        description: 'A book about how to build and launch successful startups in an age of uncertainty.',
        category: 'Business',
        image: 'https://example.com/lean-startup.jpg',
        stock: 30,
      },
      {
        title: 'Atomic Habits',
        author: 'James Clear',
        price: 15.99,
        description: 'A comprehensive guide on how to build good habits and break bad ones.',
        category: 'Self-Help',
        image: 'https://example.com/atomic-habits.jpg',
        stock: 70,
      },
      {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        price: 12.99,
        description: 'A fantasy novel about the adventures of hobbit Bilbo Baggins as he journeys to reclaim a treasure.',
        category: 'Fiction',
        image: 'https://example.com/hobbit.jpg',
        stock: 80,
      },
      {
        title: 'Harry Potter and the Sorcerer\'s Stone',
        author: 'J.K. Rowling',
        price: 14.99,
        description: 'The first book in the beloved Harry Potter series about a young wizard\'s magical journey.',
        category: 'Children',
        image: 'https://example.com/harry-potter-1.jpg',
        stock: 100,
      },
      {
        title: 'The Da Vinci Code',
        author: 'Dan Brown',
        price: 13.99,
        description: 'A mystery thriller novel that follows symbologist Robert Langdon as he investigates a murder in the Louvre.',
        category: 'Mystery',
        image: 'https://example.com/da-vinci-code.jpg',
        stock: 25,
      },
      {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        price: 17.99,
        description: 'The authorized biography of Apple\'s co-founder Steve Jobs, based on extensive interviews.',
        category: 'Biography',
        image: 'https://example.com/steve-jobs.jpg',
        stock: 20,
      },
      {
        title: 'The Art of War',
        author: 'Sun Tzu',
        price: 9.99,
        description: 'An ancient Chinese military treatise that has influenced both Eastern and Western military thinking.',
        category: 'History',
        image: 'https://example.com/art-of-war.jpg',
        stock: 40,
      },
      {
        title: 'Clean Code',
        author: 'Robert C. Martin',
        price: 19.99,
        description: 'A handbook of agile software craftsmanship that teaches how to write clean, maintainable code.',
        category: 'Technology',
        image: 'https://example.com/clean-code.jpg',
        stock: 35,
      },
      {
        title: 'A Brief History of Time',
        author: 'Stephen Hawking',
        price: 16.99,
        description: 'A landmark volume in science writing that explains complex cosmological concepts to general readers.',
        category: 'Science',
        image: 'https://example.com/brief-history-time.jpg',
        stock: 28,
      },
    ];

    await Book.insertMany(books);
    console.log('Books seeded successfully!');

    await mongoose.disconnect();
    console.log('MongoDB disconnected...');
  } catch (error) {
    console.error('Error seeding books:', error);
    process.exit(1);
  }
};

seedBooks();
