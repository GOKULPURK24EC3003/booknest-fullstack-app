// Extended Book Data with ratings and reviews
const booksData = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 1078,
        category: "fiction",
        description: "A classic American novel set in the Jazz Age, exploring themes of wealth, love, and the American Dream through the mysterious Jay Gatsby.",
        image: "https://picsum.photos/seed/gatsby/200/300",
        rating: 4.5,
        reviews: 234,
        isbn: "978-0-7432-7356-5",
        publisher: "Scribner",
        pages: 180,
        language: "English",
        publicationDate: "1925-04-10",
        bestseller: true,
        trending: true
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        price: 1244,
        category: "fiction",
        description: "A powerful story of racial injustice and childhood innocence in the American South during the 1930s.",
        image: "https://picsum.photos/seed/mockingbird/200/300",
        rating: 4.8,
        reviews: 567,
        isbn: "978-0-06-112008-4",
        publisher: "J.B. Lippincott & Co.",
        pages: 324,
        language: "English",
        publicationDate: "1960-07-11",
        bestseller: true,
        trending: false
    },
    {
        id: 3,
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        price: 1576,
        category: "non-fiction",
        description: "An exploration of how Homo sapiens came to dominate the world, examining our history from the Stone Age to the modern era.",
        image: "https://picsum.photos/seed/sapiens/200/300",
        rating: 4.6,
        reviews: 892,
        isbn: "978-0-06-231609-7",
        publisher: "Harper",
        pages: 443,
        language: "English",
        publicationDate: "2011-09-04",
        bestseller: true,
        trending: true
    },
    {
        id: 4,
        title: "Educated",
        author: "Tara Westover",
        price: 1409,
        category: "non-fiction",
        description: "A memoir about a young woman who leaves her survivalist family to pursue education, ultimately earning a PhD from Cambridge University.",
        image: "https://picsum.photos/seed/educated/200/300",
        rating: 4.4,
        reviews: 445,
        isbn: "978-0-399-59050-4",
        publisher: "Random House",
        pages: 334,
        language: "English",
        publicationDate: "2018-02-20",
        bestseller: false,
        trending: true
    },
    {
        id: 5,
        title: "Introduction to Algorithms",
        author: "Thomas H. Cormen",
        price: 7469,
        category: "academic",
        description: "A comprehensive textbook covering a broad range of algorithms in depth, yet makes their design and analysis accessible to all levels of readers.",
        image: "https://picsum.photos/seed/algorithms/200/300",
        rating: 4.7,
        reviews: 189,
        isbn: "978-0-262-03384-8",
        publisher: "MIT Press",
        pages: 1312,
        language: "English",
        publicationDate: "2009-07-31",
        bestseller: false,
        trending: false
    },
    {
        id: 6,
        title: "Linear Algebra and Its Applications",
        author: "David C. Lay",
        price: 6639,
        category: "academic",
        description: "An introduction to linear algebra that balances theory with examples, applications, and geometric intuition.",
        image: "https://picsum.photos/seed/linearalgebra/200/300",
        rating: 4.2,
        reviews: 98,
        isbn: "978-0-321-98523-4",
        publisher: "Pearson",
        pages: 576,
        language: "English",
        publicationDate: "2015-01-03",
        bestseller: false,
        trending: false
    },
    {
        id: 7,
        title: "Watchmen",
        author: "Alan Moore",
        price: 1908,
        category: "comics",
        description: "A groundbreaking graphic novel that deconstructs the superhero genre, exploring complex themes of power, morality, and humanity.",
        image: "https://picsum.photos/seed/watchmen/200/300",
        rating: 4.9,
        reviews: 678,
        isbn: "978-0-930289-34-6",
        publisher: "DC Comics",
        pages: 384,
        language: "English",
        publicationDate: "1987-10-01",
        bestseller: true,
        trending: false
    },
    {
        id: 8,
        title: "The Sandman: Preludes & Nocturnes",
        author: "Neil Gaiman",
        price: 1658,
        category: "comics",
        description: "The first volume of the acclaimed Sandman series, following Dream of the Endless as he escapes captivity and reclaims his realm.",
        image: "https://picsum.photos/seed/sandman/200/300",
        rating: 4.8,
        reviews: 423,
        isbn: "978-1-4012-4225-9",
        publisher: "Vertigo",
        pages: 240,
        language: "English",
        publicationDate: "1991-11-01",
        bestseller: false,
        trending: true
    },
    {
        id: 9,
        title: "1984",
        author: "George Orwell",
        price: 1149,
        category: "fiction",
        description: "A dystopian social science fiction novel that follows the life of Winston Smith under the totalitarian regime of Big Brother.",
        image: "https://picsum.photos/seed/1984/200/300",
        rating: 4.7,
        reviews: 1234,
        isbn: "978-0-452-28423-4",
        publisher: "Secker & Warburg",
        pages: 328,
        language: "English",
        publicationDate: "1949-06-08",
        bestseller: true,
        trending: true
    },
    {
        id: 10,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        price: 995,
        category: "fiction",
        description: "A romantic novel of manners that charts the emotional development of Elizabeth Bennet and her relationship with the aristocratic Mr. Darcy.",
        image: "https://picsum.photos/seed/pride/200/300",
        rating: 4.6,
        reviews: 567,
        isbn: "978-0-14-143951-8",
        publisher: "T. Egerton",
        pages: 432,
        language: "English",
        publicationDate: "1813-01-28",
        bestseller: false,
        trending: false
    },
    {
        id: 11,
        title: "The Lean Startup",
        author: "Eric Ries",
        price: 1494,
        category: "non-fiction",
        description: "A book that teaches how to launch products and services successfully by applying lean manufacturing principles to startup creation.",
        image: "https://picsum.photos/seed/leanstartup/200/300",
        rating: 4.3,
        reviews: 234,
        isbn: "978-0-307-88789-4",
        publisher: "Crown Business",
        pages: 336,
        language: "English",
        publicationDate: "2011-09-13",
        bestseller: false,
        trending: true
    },
    {
        id: 12,
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        price: 1327,
        category: "non-fiction",
        description: "A groundbreaking tour of the mind that explains the two systems that drive the way we think and make decisions.",
        image: "https://picsum.photos/seed/thinking/200/300",
        rating: 4.5,
        reviews: 456,
        isbn: "978-0-374-53355-7",
        publisher: "Farrar, Straus and Giroux",
        pages: 499,
        language: "English",
        publicationDate: "2011-10-25",
        bestseller: true,
        trending: false
    }
];

// Author Data
const authorsData = [
    {
        id: 1,
        name: "F. Scott Fitzgerald",
        bio: "Francis Scott Key Fitzgerald was an American novelist, essayist, and short story writer. He is best known for his novel The Great Gatsby, which captures the Jazz Age.",
        image: "https://picsum.photos/seed/fitzgerald/200/200",
        books: [1],
        rating: 4.5,
        followers: 15420,
        born: "1896-09-24",
        died: "1940-12-21",
        nationality: "American"
    },
    {
        id: 2,
        name: "Harper Lee",
        bio: "Nelle Harper Lee was an American novelist best known for her 1960 novel To Kill a Mockingbird. It won the 1961 Pulitzer Prize and has become a classic of modern American literature.",
        image: "https://picsum.photos/seed/harperlee/200/200",
        books: [2],
        rating: 4.8,
        followers: 23150,
        born: "1926-04-28",
        died: "2016-02-19",
        nationality: "American"
    },
    {
        id: 3,
        name: "Yuval Noah Harari",
        bio: "Yuval Noah Harari is an Israeli historian and a professor in the Department of History at the Hebrew University of Jerusalem. He is the author of the popular science bestsellers.",
        image: "https://picsum.photos/seed/harari/200/200",
        books: [3],
        rating: 4.6,
        followers: 45320,
        born: "1976-02-24",
        nationality: "Israeli"
    },
    {
        id: 4,
        name: "Tara Westover",
        bio: "Tara Westover is an American author. Her memoir Educated debuted at #1 on The New York Times bestseller list and was a finalist for numerous national awards.",
        image: "https://picsum.photos/seed/westover/200/200",
        books: [4],
        rating: 4.4,
        followers: 12890,
        born: "1986-09-27",
        nationality: "American"
    },
    {
        id: 5,
        name: "Alan Moore",
        bio: "Alan Moore is an English writer known primarily for his work in comic books including Watchmen, V for Vendetta, and From Hell. He is widely recognized as one of the greatest comic book writers.",
        image: "https://picsum.photos/seed/moore/200/200",
        books: [7],
        rating: 4.9,
        followers: 67890,
        born: "1953-11-18",
        nationality: "British"
    },
    {
        id: 6,
        name: "Neil Gaiman",
        bio: "Neil Richard MacKinnon Gaiman is an English author of short fiction, novels, comic books, graphic novels, nonfiction, audio theatre, and films. His works include The Sandman comic series.",
        image: "https://picsum.photos/seed/gaiman/200/200",
        books: [8],
        rating: 4.8,
        followers: 89230,
        born: "1960-11-10",
        nationality: "British"
    }
];

// Blog Posts Data
const blogPostsData = [
    {
        id: 1,
        title: "The Best Science Fiction Books of 2024",
        excerpt: "Discover the most captivating sci-fi novels that are shaping the genre this year. From space operas to dystopian futures, these books will expand your imagination.",
        content: "Full blog content here...",
        category: "reviews",
        date: "2024-03-15",
        author: "BookNest Team",
        image: "https://picsum.photos/seed/blog1/400/250",
        readTime: "5 min read"
    },
    {
        id: 2,
        title: "Exclusive Interview with Bestselling Author",
        excerpt: "We sit down with the author behind this year's breakout novel to discuss their creative process, inspiration, and upcoming projects.",
        content: "Full interview content here...",
        category: "authors",
        date: "2024-03-12",
        author: "Sarah Johnson",
        image: "https://picsum.photos/seed/blog2/400/250",
        readTime: "8 min read"
    },
    {
        id: 3,
        title: "How to Read More Books This Year",
        excerpt: "Practical tips and strategies to help you increase your reading habit and enjoy more books without feeling overwhelmed.",
        content: "Full tips content here...",
        category: "tips",
        date: "2024-03-10",
        author: "Mike Chen",
        image: "https://picsum.photos/seed/blog3/400/250",
        readTime: "4 min read"
    }
];

// Profile Management
class ProfileManager {
    constructor() {
        this.profileData = this.loadProfileData();
        this.initProfileHandlers();
        this.updateProfileUI();
    }

    loadProfileData() {
        const savedProfile = localStorage.getItem('booknest-profile');
        return savedProfile ? JSON.parse(savedProfile) : {
            firstName: '',
            lastName: '',
            phone: '',
            address: '',
            orders: [],
            readingProgress: {
                booksRead: 0,
                readingTime: 0,
                achievements: 0,
                currentlyReading: []
            },
            settings: {
                emailNotifications: true,
                newsletterSubscription: false,
                readingReminders: false
            }
        };
    }

    saveProfileData() {
        localStorage.setItem('booknest-profile', JSON.stringify(this.profileData));
        this.updateProfileUI();
    }

    initProfileHandlers() {
        // Profile menu buttons
        document.querySelectorAll('.menu-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const section = e.target.dataset.section;
                this.showProfileSection(section);
            });
        });

        // Account form
        const accountForm = document.getElementById('accountForm');
        if (accountForm) {
            accountForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.saveAccountInfo();
            });
        }

        // Settings toggles
        document.querySelectorAll('.toggle-switch input').forEach(toggle => {
            toggle.addEventListener('change', (e) => {
                const setting = e.target.id;
                const value = e.target.checked;
                this.updateSetting(setting, value);
            });
        });
    }

    updateProfileUI() {
        if (!authManager.currentUser) return;

        // Update profile header
        const profileName = document.getElementById('profileName');
        const profileEmail = document.getElementById('profileEmail');
        const profileAvatar = document.getElementById('profileAvatar');

        if (profileName) profileName.textContent = authManager.currentUser.name;
        if (profileEmail) profileEmail.textContent = authManager.currentUser.email;
        if (profileAvatar) {
            profileAvatar.innerHTML = authManager.currentUser.name.charAt(0).toUpperCase();
        }

        // Update stats
        const totalOrders = document.getElementById('totalOrders');
        const loyaltyPoints = document.getElementById('loyaltyPoints');
        const memberSince = document.getElementById('memberSince');

        if (totalOrders) totalOrders.textContent = this.profileData.orders.length;
        if (loyaltyPoints) loyaltyPoints.textContent = this.calculateLoyaltyPoints();
        if (memberSince) memberSince.textContent = new Date(authManager.currentUser.loginTime).getFullYear();

        // Update account form
        this.populateAccountForm();

        // Update orders list
        this.renderOrdersList();

        // Update reading progress
        this.renderReadingProgress();

        // Update settings
        this.updateSettingsUI();
    }

    showProfileSection(sectionName) {
        // Update menu buttons
        document.querySelectorAll('.menu-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-section="${sectionName}"]`).classList.add('active');

        // Show corresponding section
        document.querySelectorAll('.profile-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(`${sectionName}-section`).classList.add('active');
    }

    populateAccountForm() {
        const firstName = document.getElementById('firstName');
        const lastName = document.getElementById('lastName');
        const profileEmailInput = document.getElementById('profileEmailInput');
        const profilePhone = document.getElementById('profilePhone');
        const profileAddress = document.getElementById('profileAddress');

        if (firstName) firstName.value = this.profileData.firstName || '';
        if (lastName) lastName.value = this.profileData.lastName || '';
        if (profileEmailInput) profileEmailInput.value = authManager.currentUser.email || '';
        if (profilePhone) profilePhone.value = this.profileData.phone || '';
        if (profileAddress) profileAddress.value = this.profileData.address || '';
    }

    saveAccountInfo() {
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const phone = document.getElementById('profilePhone').value;
        const address = document.getElementById('profileAddress').value;

        this.profileData.firstName = firstName;
        this.profileData.lastName = lastName;
        this.profileData.phone = phone;
        this.profileData.address = address;

        this.saveProfileData();
        cartManager.showToast('Account information saved successfully!');
    }

    updateSetting(setting, value) {
        if (this.profileData.settings.hasOwnProperty(setting)) {
            this.profileData.settings[setting] = value;
            this.saveProfileData();
            cartManager.showToast(`${setting} ${value ? 'enabled' : 'disabled'}`);
        }
    }

    updateSettingsUI() {
        Object.keys(this.profileData.settings).forEach(setting => {
            const toggle = document.getElementById(setting);
            if (toggle) {
                toggle.checked = this.profileData.settings[setting];
            }
        });
    }

    renderOrdersList() {
        const ordersList = document.getElementById('ordersList');
        if (!ordersList) return;

        if (this.profileData.orders.length === 0) {
            ordersList.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-shopping-bag"></i>
                    <h3>No orders yet</h3>
                    <p>Start shopping to see your order history!</p>
                </div>
            `;
            return;
        }

        ordersList.innerHTML = this.profileData.orders.map(order => `
            <div class="order-item">
                <div class="order-header">
                    <span class="order-number">Order #${order.id}</span>
                    <span class="order-status status-${order.status}">${order.status}</span>
                </div>
                <div class="order-books">
                    ${order.books.map(book => `
                        <div class="order-book">
                            <img src="${book.image}" alt="${book.title}">
                            <span>${book.title}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="order-total">Total: ₹${order.total.toFixed(2)}</div>
            </div>
        `).join('');
    }

    renderReadingProgress() {
        const booksRead = document.getElementById('booksRead');
        const readingTime = document.getElementById('readingTime');
        const achievements = document.getElementById('achievements');
        const currentlyReadingList = document.getElementById('currentlyReadingList');

        if (booksRead) booksRead.textContent = this.profileData.readingProgress.booksRead;
        if (readingTime) readingTime.textContent = `${this.profileData.readingProgress.readingTime}h`;
        if (achievements) achievements.textContent = this.profileData.readingProgress.achievements;

        if (currentlyReadingList && this.profileData.readingProgress.currentlyReading.length > 0) {
            currentlyReadingList.innerHTML = this.profileData.readingProgress.currentlyReading.map(book => `
                <div class="current-reading-book">
                    <img src="${book.image}" alt="${book.title}">
                    <div>
                        <strong>${book.title}</strong>
                        <p>Progress: ${book.progress}%</p>
                    </div>
                </div>
            `).join('');
        } else if (currentlyReadingList) {
            currentlyReadingList.innerHTML = '<p>No books currently being read</p>';
        }
    }

    calculateLoyaltyPoints() {
        // Calculate points based on orders and other activities
        const orderPoints = this.profileData.orders.length * 10;
        const reviewPoints = 0; // Could be calculated based on reviews
        const achievementPoints = this.profileData.readingProgress.achievements * 50;
        return orderPoints + reviewPoints + achievementPoints;
    }

    addOrder(orderData) {
        this.profileData.orders.push({
            ...orderData,
            id: Date.now(),
            date: new Date().toISOString(),
            status: 'processing'
        });
        this.saveProfileData();
    }
}

// Theme Management
class ThemeManager {
    constructor() {
        this.currentTheme = this.loadTheme();
        this.applyTheme();
        this.initThemeHandlers();
    }

    loadTheme() {
        const savedTheme = localStorage.getItem('booknest-theme');
        return savedTheme || 'light';
    }

    saveTheme(theme) {
        localStorage.setItem('booknest-theme', theme);
        this.currentTheme = theme;
        this.applyTheme();
    }

    applyTheme() {
        const body = document.body;
        const darkModeIcon = document.getElementById('darkModeIcon');
        
        if (this.currentTheme === 'dark') {
            body.classList.add('dark-mode');
            if (darkModeIcon) {
                darkModeIcon.classList.remove('fa-moon');
                darkModeIcon.classList.add('fa-sun');
            }
        } else {
            body.classList.remove('dark-mode');
            if (darkModeIcon) {
                darkModeIcon.classList.remove('fa-sun');
                darkModeIcon.classList.add('fa-moon');
            }
        }

        // Update theme select in settings
        const themeSelect = document.getElementById('themeSelect');
        if (themeSelect) {
            themeSelect.value = this.currentTheme;
        }
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.saveTheme(newTheme);
        cartManager.showToast(`Switched to ${newTheme} mode`);
    }

    initThemeHandlers() {
        // Dark mode toggle in navigation
        const darkModeToggle = document.querySelector('.dark-mode-toggle');
        if (darkModeToggle) {
            darkModeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }

        // Theme select in settings
        const themeSelect = document.getElementById('themeSelect');
        if (themeSelect) {
            themeSelect.addEventListener('change', (e) => {
                this.saveTheme(e.target.value);
                cartManager.showToast(`Theme changed to ${e.target.value}`);
            });
        }
    }
}

// Wishlist Management
class WishlistManager {
    constructor() {
        this.wishlist = this.loadWishlist();
        this.updateWishlistUI();
        this.initWishlistHandlers();
    }

    loadWishlist() {
        const savedWishlist = localStorage.getItem('booknest-wishlist');
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    }

    saveWishlist() {
        localStorage.setItem('booknest-wishlist', JSON.stringify(this.wishlist));
        this.updateWishlistUI();
    }

    addToWishlist(book) {
        const bookId = book._id || book.id;
        const existingItem = this.wishlist.find(item => (item._id || item.id) === bookId);
        
        if (!existingItem) {
            this.wishlist.push({
                ...book,
                addedDate: new Date().toISOString()
            });
            this.saveWishlist();
            cartManager.showToast(`${book.title} added to wishlist!`);
        } else {
            cartManager.showToast('Book already in wishlist');
        }
    }

    toggleWishlist(book) {
        const bookId = book._id || book.id;
        if (this.isInWishlist(bookId)) {
            this.removeFromWishlist(bookId);
        } else {
            this.addToWishlist(book);
        }
    }

    removeFromWishlist(bookId) {
        this.wishlist = this.wishlist.filter(item => (item._id || item.id) !== bookId);
        this.saveWishlist();
        this.updateWishlistUI();
        cartManager.showToast('Book removed from wishlist');
    }

    isInWishlist(bookId) {
        return this.wishlist.some(item => (item._id || item.id) === bookId);
    }

    getTotalItems() {
        return this.wishlist.length;
    }

    getTotalValue() {
        return this.wishlist.reduce((total, item) => total + item.price, 0);
    }

    updateWishlistUI() {
        // Update wishlist count
        const wishlistCount = document.getElementById('wishlistCount');
        if (wishlistCount) {
            wishlistCount.textContent = this.getTotalItems();
        }

        // Update wishlist page
        this.renderWishlistItems();
        
        // Update totals
        this.updateWishlistTotals();
        
        // Update book cards to show wishlist status
        this.updateBookCardWishlistStatus();
    }

    renderWishlistItems() {
        const wishlistItemsContainer = document.getElementById('wishlistItems');
        if (!wishlistItemsContainer) return;

        if (this.wishlist.length === 0) {
            wishlistItemsContainer.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-heart"></i>
                    <h3>Your wishlist is empty</h3>
                    <p>Add some books to get started!</p>
                </div>
            `;
            return;
        }

        wishlistItemsContainer.innerHTML = this.wishlist.map(item => {
            const itemId = item._id || item.id;
            return `
            <div class="wishlist-item">
                <img src="${item.image}" alt="${item.title}" class="wishlist-item-image">
                <div class="wishlist-item-info">
                    <div class="wishlist-item-title">${item.title}</div>
                    <div class="wishlist-item-author">${item.author}</div>
                    <div class="wishlist-item-price">₹${item.price.toFixed(2)}</div>
                </div>
                <div class="wishlist-item-actions">
                    <button class="add-wishlist-to-cart" onclick="addToCart(${JSON.stringify(item).replace(/"/g, '&quot;')}); removeFromWishlist('${itemId}')">
                        <i class="fas fa-cart-plus"></i> Add to Cart
                    </button>
                    <button class="remove-wishlist" onclick="removeFromWishlist('${itemId}')">
                        <i class="fas fa-trash"></i> Remove
                    </button>
                </div>
            </div>
        `;
        }).join('');
    }

    updateWishlistTotals() {
        const totalElement = document.getElementById('wishlistTotal');
        const valueElement = document.getElementById('wishlistValue');

        if (totalElement) totalElement.textContent = this.getTotalItems();
        if (valueElement) valueElement.textContent = `$${this.getTotalValue().toFixed(2)}`;
    }

    updateBookCardWishlistStatus() {
        document.querySelectorAll('.book-card').forEach(card => {
            const bookId = parseInt(card.dataset.bookId);
            const wishlistBtn = card.querySelector('.wishlist-btn');
            
            if (wishlistBtn) {
                if (this.isInWishlist(bookId)) {
                    wishlistBtn.innerHTML = '<i class="fas fa-heart"></i> In Wishlist';
                    wishlistBtn.classList.add('in-wishlist');
                } else {
                    wishlistBtn.innerHTML = '<i class="far fa-heart"></i> Add to Wishlist';
                    wishlistBtn.classList.remove('in-wishlist');
                }
            }
        });
    }

    initWishlistHandlers() {
        // Wishlist icon click
        const wishlistIcon = document.querySelector('.wishlist-icon');
        if (wishlistIcon) {
            wishlistIcon.addEventListener('click', () => {
                pageManager.navigateToPage('wishlist');
            });
        }

        // Add all to cart button
        const addAllBtn = document.querySelector('.add-all-to-cart-btn');
        if (addAllBtn) {
            addAllBtn.addEventListener('click', () => {
                this.addAllToCart();
            });
        }
    }

    addAllToCart() {
        if (this.wishlist.length === 0) {
            cartManager.showToast('Wishlist is empty');
            return;
        }

        this.wishlist.forEach(item => {
            cartManager.addToCart(item);
        });

        // Clear wishlist after adding to cart
        this.wishlist = [];
        this.saveWishlist();
        cartManager.showToast('All books added to cart!');
    }
}

// Cart Management
class CartManager {
    constructor() {
        this.cart = [];
        this.loadCart();
        this.updateCartUI();
    }

    async loadCart() {
        if (apiService.isAuthenticated()) {
            try {
                const response = await apiService.getCart();
                if (response.success) {
                    this.cart = response.data.items || [];
                } else {
                    this.cart = [];
                }
            } catch (error) {
                console.error('Failed to load cart:', error);
                this.cart = [];
            }
        } else {
            // Fallback to localStorage for non-authenticated users
            const savedCart = localStorage.getItem('booknest-cart');
            this.cart = savedCart ? JSON.parse(savedCart) : [];
        }
    }

    saveCart() {
        localStorage.setItem('booknest-cart', JSON.stringify(this.cart));
        this.updateCartUI();
    }

    async addToCart(book) {
        const bookId = book._id || book.id;
        if (apiService.isAuthenticated()) {
            try {
                const response = await apiService.addToCart(bookId, 1);
                if (response.success) {
                    await this.loadCart(); // Refresh cart from server
                    await this.updateCartUI();
                    this.showToast(`${book.title} added to cart!`);
                } else {
                    this.showToast(response.message || 'Failed to add to cart');
                }
            } catch (error) {
                console.error('Add to cart error:', error);
                this.showToast(error.message || 'Failed to add to cart');
            }
        } else {
            // Fallback to localStorage for non-authenticated users
            const existingItem = this.cart.find(item => (item._id || item.id) === bookId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                this.cart.push({
                    ...book,
                    quantity: 1
                });
            }
            
            this.saveCart();
            this.showToast(`${book.title} added to cart!`);
        }
    }

    async removeFromCart(bookId) {
        if (apiService.isAuthenticated()) {
            try {
                const response = await apiService.removeFromCart(bookId);
                if (response.success) {
                    await this.loadCart(); // Refresh cart from server
                    await this.updateCartUI();
                    this.showToast('Item removed from cart');
                } else {
                    this.showToast(response.message || 'Failed to remove item');
                }
            } catch (error) {
                console.error('Remove from cart error:', error);
                this.showToast(error.message || 'Failed to remove item');
            }
        } else {
            // Fallback to localStorage for non-authenticated users
            this.cart = this.cart.filter(item => (item._id || item.id) !== bookId);
            this.saveCart();
            this.updateCartUI();
            this.showToast('Item removed from cart');
        }
    }

    async updateQuantity(bookId, newQuantity) {
        if (newQuantity <= 0) {
            await this.removeFromCart(bookId);
            return;
        }

        if (apiService.isAuthenticated()) {
            try {
                const response = await apiService.updateCartQuantity(bookId, newQuantity);
                if (response.success) {
                    await this.loadCart(); // Refresh cart from server
                    await this.updateCartUI();
                } else {
                    this.showToast(response.message || 'Failed to update quantity');
                }
            } catch (error) {
                console.error('Update quantity error:', error);
                this.showToast(error.message || 'Failed to update quantity');
            }
        } else {
            // Fallback to localStorage for non-authenticated users
            const item = this.cart.find(item => (item._id || item.id) === bookId);
            if (item) {
                item.quantity = newQuantity;
                this.saveCart();
            }
        }
    }

    getTotalItems() {
        return this.cart.reduce((total, item) => total + item.quantity, 0);
    }

    getTotalPrice() {
        return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    async updateCartUI() {
        // Update cart count
        const cartCount = document.getElementById('cartCount');
        if (cartCount) {
            cartCount.textContent = this.getTotalItems();
        }

        // Update cart page
        this.renderCartItems();
        
        // Update checkout page
        this.renderCheckoutItems();
        
        // Update totals
        this.updateTotals();
    }

    renderCartItems() {
        const cartItemsContainer = document.getElementById('cartItems');
        if (!cartItemsContainer) return;

        if (this.cart.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-shopping-cart"></i>
                    <h3>Your cart is empty</h3>
                    <p>Add some books to get started!</p>
                </div>
            `;
            return;
        }

        cartItemsContainer.innerHTML = this.cart.map(item => {
            const itemId = item._id || item.id;
            return `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.title}" class="cart-item-image">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-author">${item.author}</div>
                    <div class="cart-item-price">₹${item.price.toFixed(2)}</div>
                </div>
                <div class="cart-item-actions">
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateCartQuantity('${itemId}', ${item.quantity - 1})">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateCartQuantity('${itemId}', ${item.quantity + 1})">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <button class="remove-item" onclick="removeFromCart('${itemId}')">
                        <i class="fas fa-trash"></i> Remove
                    </button>
                </div>
            </div>
        `;
        }).join('');
    }

    renderCheckoutItems() {
        const checkoutItemsContainer = document.getElementById('checkoutCartItems');
        if (!checkoutItemsContainer) return;

        if (this.cart.length === 0) {
            checkoutItemsContainer.innerHTML = '<p>No items in cart</p>';
            return;
        }

        checkoutItemsContainer.innerHTML = this.cart.map(item => `
            <div class="checkout-item">
                <div>${item.title} x ${item.quantity}</div>
                <div>₹${(item.price * item.quantity).toFixed(2)}</div>
            </div>
        `).join('');
    }

    updateTotals() {
        const subtotal = this.getTotalPrice();
        const tax = subtotal * 0.1;
        const total = subtotal + tax;

        // Update cart page totals
        const subtotalElement = document.getElementById('subtotal');
        const taxElement = document.getElementById('tax');
        const totalElement = document.getElementById('total');

        if (subtotalElement) subtotalElement.textContent = `₹${subtotal.toFixed(2)}`;
        if (taxElement) taxElement.textContent = `₹${tax.toFixed(2)}`;
        if (totalElement) totalElement.textContent = `₹${total.toFixed(2)}`;

        // Update checkout page totals
        const checkoutSubtotal = document.getElementById('checkoutSubtotal');
        const checkoutTax = document.getElementById('checkoutTax');
        const checkoutTotal = document.getElementById('checkoutTotal');

        if (checkoutSubtotal) checkoutSubtotal.textContent = `₹${subtotal.toFixed(2)}`;
        if (checkoutTax) checkoutTax.textContent = `₹${tax.toFixed(2)}`;
        if (checkoutTotal) checkoutTotal.textContent = `₹${total.toFixed(2)}`;
    }

    showToast(message) {
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toastMessage');
        
        if (toast && toastMessage) {
            toastMessage.textContent = message;
            toast.classList.add('show');
            
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }
    }
}

// Global wrapper functions for cart operations (to handle async/sync compatibility)
async function updateCartQuantity(bookId, newQuantity) {
    try {
        console.log('updateCartQuantity called with:', bookId, newQuantity);
        await cartManager.updateQuantity(bookId, newQuantity);
    } catch (error) {
        console.error('updateCartQuantity error:', error);
        alert('Failed to update quantity: ' + error.message);
    }
}

async function removeFromCart(bookId) {
    try {
        console.log('removeFromCart called with:', bookId);
        await cartManager.removeFromCart(bookId);
    } catch (error) {
        console.error('removeFromCart error:', error);
        alert('Failed to remove from cart: ' + error.message);
    }
}

async function addToCart(book) {
    try {
        console.log('addToCart called with:', book);
        await cartManager.addToCart(book);
    } catch (error) {
        console.error('addToCart error:', error);
        alert('Failed to add to cart: ' + error.message);
    }
}

async function toggleWishlist(book) {
    try {
        console.log('toggleWishlist called with:', book);
        wishlistManager.toggleWishlist(book);
    } catch (error) {
        console.error('toggleWishlist error:', error);
        alert('Failed to toggle wishlist: ' + error.message);
    }
}

async function removeFromWishlist(bookId) {
    try {
        console.log('removeFromWishlist called with:', bookId);
        wishlistManager.removeFromWishlist(bookId);
    } catch (error) {
        console.error('removeFromWishlist error:', error);
        alert('Failed to remove from wishlist: ' + error.message);
    }
}

// Navigation and Page Management
class PageManager {
    constructor() {
        this.currentPage = 'home';
        this.books = [];
        this.initNavigation();
        this.loadBooks();
    }

    async loadBooks() {
        try {
            const response = await apiService.getBooks();
            if (response.success) {
                this.books = response.data;
                // Re-render current page with loaded books
                if (this.currentPage === 'home') {
                    this.renderFeaturedBooks();
                } else if (this.currentPage === 'books') {
                    this.renderAllBooks();
                }
            } else {
                console.error('Failed to load books:', response.message);
                // Fallback to hardcoded data if API fails
                this.books = booksData;
            }
        } catch (error) {
            console.error('Error loading books:', error);
            // Fallback to hardcoded data if API fails
            this.books = booksData;
        }
    }

    initNavigation() {
        // Navigation links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = link.dataset.page;
                this.navigateToPage(page);
            });
        });

        // Cart icon
        const cartIcon = document.querySelector('.cart-icon');
        if (cartIcon) {
            cartIcon.addEventListener('click', () => {
                this.navigateToPage('cart');
            });
        }

        // Category cards
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', () => {
                const category = card.dataset.category;
                this.filterByCategory(category);
                this.navigateToPage('books');
            });
        });

        // Mobile menu toggle
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });
        }
    }

    navigateToPage(pageName) {
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });

        // Show target page
        const targetPage = document.getElementById(pageName);
        if (targetPage) {
            targetPage.classList.add('active');
        }

        // Update navigation active state
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.dataset.page === pageName) {
                link.classList.add('active');
            }
        });

        this.currentPage = pageName;

        // Close mobile menu
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu) {
            navMenu.classList.remove('active');
        }

        // Page-specific initialization
        this.initPageContent(pageName);
    }

    initPageContent(pageName) {
        switch(pageName) {
            case 'home':
                this.renderFeaturedBooks();
                break;
            case 'books':
                this.renderAllBooks();
                this.initFilters();
                break;
            case 'book-details':
                // Book details are handled separately
                break;
            case 'cart':
                // Cart is handled by CartManager
                break;
            case 'checkout':
                // Checkout is handled by CartManager
                break;
            case 'wishlist':
                // Wishlist is handled by WishlistManager
                break;
            case 'profile':
                // Profile is handled by ProfileManager
                break;
            case 'blog':
                this.renderBlogPosts();
                break;
            case 'authors':
                this.renderAuthors();
                break;
            case 'author-details':
                // Author details are handled separately
                break;
        }
    }

    renderBlogPosts() {
        const blogPosts = document.querySelector('.blog-posts');
        if (!blogPosts) return;

        blogPosts.innerHTML = blogPostsData.map(post => `
            <div class="blog-post">
                <div class="post-image">
                    <img src="${post.image}" alt="${post.title}">
                </div>
                <div class="post-content">
                    <div class="post-meta">
                        <span class="category">${post.category}</span>
                        <span class="date">${new Date(post.date).toLocaleDateString()}</span>
                        <span class="read-time">${post.readTime}</span>
                    </div>
                    <h2>${post.title}</h2>
                    <p>${post.excerpt}</p>
                    <a href="#" class="read-more">Read More</a>
                </div>
            </div>
        `).join('');
    }

    renderAuthors() {
        const authorsGrid = document.getElementById('authorsGrid');
        if (!authorsGrid) return;

        authorsGrid.innerHTML = authorsData.map(author => `
            <div class="author-card" onclick="pageManager.showAuthorDetails(${author.id})">
                <img src="${author.image}" alt="${author.name}" class="author-image">
                <div class="author-info">
                    <h3 class="author-name">${author.name}</h3>
                    <p class="author-bio">${author.bio}</p>
                    <div class="author-stats">
                        <span><i class="fas fa-book"></i> ${author.books.length} Books</span>
                        <span><i class="fas fa-star"></i> ${author.rating}</span>
                        <span><i class="fas fa-users"></i> ${author.followers.toLocaleString()}</span>
                    </div>
                    <button class="follow-author-btn" onclick="event.stopPropagation(); pageManager.followAuthor(${author.id})">
                        Follow
                    </button>
                </div>
            </div>
        `).join('');
    }

    showAuthorDetails(authorId) {
        const author = authorsData.find(a => a.id === authorId);
        if (!author) return;

        // Populate author details
        document.getElementById('authorProfileImage').src = author.image;
        document.getElementById('authorName').textContent = author.name;
        document.getElementById('authorBio').textContent = author.bio;
        document.getElementById('authorBookCount').textContent = author.books.length;
        document.getElementById('authorRating').textContent = author.rating;
        document.getElementById('authorFollowers').textContent = author.followers.toLocaleString();
        document.getElementById('authorBooksTitle').textContent = author.name;

        // Render author books
        const authorBooksGrid = document.getElementById('authorBooksGrid');
        if (authorBooksGrid) {
            const authorBooks = author.books.map(bookId => this.books.find(b => b.id === bookId) || this.books.find(b => b._id === bookId));
            authorBooksGrid.innerHTML = this.createBookCards(authorBooks);
        }

        // Navigate to author details page
        this.navigateToPage('author-details');
    }

    followAuthor(authorId) {
        // In a real app, this would make an API call
        const author = authorsData.find(a => a.id === authorId);
        if (author) {
            author.followers++;
            cartManager.showToast(`You are now following ${author.name}!`);
        }
    }

    renderFeaturedBooks() {
        const featuredGrid = document.getElementById('featuredBooksGrid');
        if (!featuredGrid) return;

        const featuredBooks = this.books.slice(0, 8);
        featuredGrid.innerHTML = this.createBookCards(featuredBooks);
    }

    renderAllBooks() {
        const allBooksGrid = document.getElementById('allBooksGrid');
        if (!allBooksGrid) return;

        allBooksGrid.innerHTML = this.createBookCards(this.books);
    }

    createBookCards(books) {
        return books.map(book => {
            const bookId = book._id || book.id;
            return `
            <div class="book-card" data-book-id="${bookId}" onclick="pageManager.showBookDetails('${bookId}')">
                <img src="${book.image}" alt="${book.title}" class="book-image">
                <div class="book-info">
                    <div class="book-title">${book.title}</div>
                    <div class="book-author">${book.author}</div>
                    <div class="book-rating">
                        <div class="stars">
                            ${this.generateStars(book.rating)}
                        </div>
                        <span class="rating-text">(${book.reviews})</span>
                    </div>
                    <div class="book-price">₹${book.price.toFixed(2)}</div>
                    <div class="book-actions">
                        <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${JSON.stringify(book).replace(/"/g, '&quot;')})">
                            <i class="fas fa-cart-plus"></i> Add to Cart
                        </button>
                        <button class="wishlist-btn" onclick="event.stopPropagation(); toggleWishlist(${JSON.stringify(book).replace(/"/g, '&quot;')})">
                            <i class="fas fa-heart"></i> Wishlist
                        </button>
                    </div>
                </div>
            </div>
        `;
        }).join('');
    }

    generateStars(rating) {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStar;
        
        let stars = '';
        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star"></i>';
        }
        if (halfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        }
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="far fa-star"></i>';
        }
        
        return stars;
    }

    showBookDetails(bookId) {
        const book = this.books.find(b => (b._id || b.id) === bookId);
        if (!book) return;

        // Add to recently viewed
        recentlyViewedManager.addToRecentlyViewed(book);

        // Populate book details
        document.getElementById('detailBookImage').src = book.image;
        document.getElementById('detailBookImage').alt = book.title;
        document.getElementById('detailBookTitle').textContent = book.title;
        document.getElementById('detailBookAuthor').textContent = `by ${book.author}`;
        document.getElementById('detailBookPrice').textContent = `₹${book.price.toFixed(2)}`;
        document.getElementById('detailBookDescription').textContent = book.description;

        // Set up add to cart button
        const addToCartBtn = document.getElementById('detailAddToCart');
        addToCartBtn.onclick = () => addToCart(book);

        // Navigate to book details page
        this.navigateToPage('book-details');
    }

    filterByCategory(category) {
        const filteredBooks = category === 'all' 
            ? this.books 
            : this.books.filter(book => book.category === category);
        
        const allBooksGrid = document.getElementById('allBooksGrid');
        if (allBooksGrid) {
            allBooksGrid.innerHTML = this.createBookCards(filteredBooks);
        }

        // Update category filter
        const categoryFilter = document.getElementById('categoryFilter');
        if (categoryFilter) {
            categoryFilter.value = category;
        }
    }

    initFilters() {
        const categoryFilter = document.getElementById('categoryFilter');
        const sortFilter = document.getElementById('sortFilter');
        const searchInput = document.getElementById('searchInput');

        if (categoryFilter) {
            categoryFilter.addEventListener('change', () => {
                this.applyFilters();
            });
        }

        if (sortFilter) {
            sortFilter.addEventListener('change', () => {
                this.applyFilters();
            });
        }

        if (searchInput) {
            searchInput.addEventListener('input', () => {
                this.applyFilters();
            });
        }
    }

    applyFilters() {
        const categoryFilter = document.getElementById('categoryFilter');
        const sortFilter = document.getElementById('sortFilter');
        const searchInput = document.getElementById('searchInput');

        let filteredBooks = [...this.books];

        // Apply category filter
        if (categoryFilter && categoryFilter.value !== 'all') {
            filteredBooks = filteredBooks.filter(book => book.category === categoryFilter.value);
        }

        // Apply search filter
        if (searchInput && searchInput.value.trim()) {
            const searchTerm = searchInput.value.toLowerCase();
            filteredBooks = filteredBooks.filter(book => 
                book.title.toLowerCase().includes(searchTerm) ||
                book.author.toLowerCase().includes(searchTerm)
            );
        }

        // Apply sort filter
        if (sortFilter) {
            switch(sortFilter.value) {
                case 'title':
                    filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
                    break;
                case 'price-low':
                    filteredBooks.sort((a, b) => a.price - b.price);
                    break;
                case 'price-high':
                    filteredBooks.sort((a, b) => b.price - a.price);
                    break;
            }
        }

        // Render filtered books
        const allBooksGrid = document.getElementById('allBooksGrid');
        if (allBooksGrid) {
            allBooksGrid.innerHTML = this.createBookCards(filteredBooks);
        }
    }
}

// Recently Viewed Management
class RecentlyViewedManager {
    constructor() {
        this.recentlyViewed = this.loadRecentlyViewed();
        this.maxItems = 10;
    }

    loadRecentlyViewed() {
        const saved = localStorage.getItem('booknest-recently-viewed');
        return saved ? JSON.parse(saved) : [];
    }

    saveRecentlyViewed() {
        localStorage.setItem('booknest-recently-viewed', JSON.stringify(this.recentlyViewed));
    }

    addToRecentlyViewed(book) {
        // Remove if already exists
        this.recentlyViewed = this.recentlyViewed.filter(item => item.id !== book.id);
        
        // Add to beginning
        this.recentlyViewed.unshift({
            ...book,
            viewedAt: new Date().toISOString()
        });

        // Keep only max items
        if (this.recentlyViewed.length > this.maxItems) {
            this.recentlyViewed = this.recentlyViewed.slice(0, this.maxItems);
        }

        this.saveRecentlyViewed();
    }

    getRecentlyViewed() {
        return this.recentlyViewed;
    }
}

// Form Handling
class FormManager {
    constructor() {
        this.initCheckoutForm();
        this.initNewsletterForm();
        this.initBlogHandlers();
    }

    initCheckoutForm() {
        const checkoutForm = document.getElementById('checkoutForm');
        if (checkoutForm) {
            checkoutForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleCheckout();
            });
        }
    }

    initNewsletterForm() {
        const newsletterForm = document.getElementById('newsletterForm');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleNewsletterSubscription(e.target.querySelector('input').value);
            });
        }
    }

    initBlogHandlers() {
        // Blog category filters
        document.querySelectorAll('.blog-categories a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const category = e.target.dataset.category;
                this.filterBlogPosts(category);
            });
        });

        // Read more links
        document.querySelectorAll('.read-more').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                cartManager.showToast('Full blog post coming soon!');
            });
        });
    }

    handleCheckout() {
        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const phone = document.getElementById('phone').value;
        const payment = document.getElementById('payment').value;

        if (!name || !address || !phone || !payment) {
            cartManager.showToast('Please fill in all fields');
            return;
        }

        // Create order
        const orderData = {
            customerName: name,
            address: address,
            phone: phone,
            paymentMethod: payment,
            books: cartManager.cart.map(item => ({
                id: item.id,
                title: item.title,
                author: item.author,
                image: item.image,
                price: item.price,
                quantity: item.quantity
            })),
            total: cartManager.getTotalPrice()
        };

        // Add to profile orders
        if (profileManager) {
            profileManager.addOrder(orderData);
        }

        // Simulate order processing
        cartManager.showToast('Order placed successfully! Thank you for your purchase.');
        
        // Clear cart
        cartManager.cart = [];
        cartManager.saveCart();
        
        // Reset form
        document.getElementById('checkoutForm').reset();
        
        // Redirect to home after 2 seconds
        setTimeout(() => {
            pageManager.navigateToPage('home');
        }, 2000);
    }

    handleNewsletterSubscription(email) {
        if (!email) {
            cartManager.showToast('Please enter your email address');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            cartManager.showToast('Please enter a valid email address');
            return;
        }

        // Save subscription
        const subscriptions = JSON.parse(localStorage.getItem('booknest-newsletter') || '[]');
        if (!subscriptions.includes(email)) {
            subscriptions.push(email);
            localStorage.setItem('booknest-newsletter', JSON.stringify(subscriptions));
            cartManager.showToast('Successfully subscribed to newsletter!');
        } else {
            cartManager.showToast('You are already subscribed to our newsletter.');
        }

        // Clear form
        document.getElementById('newsletterForm').reset();
    }

    filterBlogPosts(category) {
        const filteredPosts = category === 'all' 
            ? blogPostsData 
            : blogPostsData.filter(post => post.category === category);

        const blogPosts = document.querySelector('.blog-posts');
        if (blogPosts) {
            blogPosts.innerHTML = filteredPosts.map(post => `
                <div class="blog-post">
                    <div class="post-image">
                        <img src="${post.image}" alt="${post.title}">
                    </div>
                    <div class="post-content">
                        <div class="post-meta">
                            <span class="category">${post.category}</span>
                            <span class="date">${new Date(post.date).toLocaleDateString()}</span>
                            <span class="read-time">${post.readTime}</span>
                        </div>
                        <h2>${post.title}</h2>
                        <p>${post.excerpt}</p>
                        <a href="#" class="read-more">Read More</a>
                    </div>
                </div>
            `).join('');
        }

        // Update active category
        document.querySelectorAll('.blog-categories a').forEach(link => {
            link.classList.remove('active');
        });
        document.querySelector(`[data-category="${category}"]`).classList.add('active');
    }
}

// Authentication Management
class AuthManager {
    constructor() {
        this.currentUser = this.loadUser();
        this.updateAuthUI();
        this.initLoginHandlers();
    }

    loadUser() {
        const savedUser = localStorage.getItem('booknest-user');
        return savedUser ? JSON.parse(savedUser) : null;
    }

    saveUser(user) {
        localStorage.setItem('booknest-user', JSON.stringify(user));
        this.currentUser = user;
        this.updateAuthUI();
    }

    logout() {
        // Clear API token
        apiService.logout();
        
        // Clear user data
        localStorage.removeItem('booknest-user');
        this.currentUser = null;
        this.updateAuthUI();
        
        // Show logout message
        cartManager.showToast('Logged out successfully');
        
        // Redirect to home page
        pageManager.navigateToPage('home');
    }

    updateAuthUI() {
        const loginLink = document.getElementById('loginLink');
        const logoutLink = document.getElementById('logoutLink');

        if (this.currentUser) {
            // User is logged in
            if (loginLink) loginLink.style.display = 'none';
            if (logoutLink) {
                logoutLink.style.display = 'block';
                logoutLink.textContent = 'Logout';
            }
            
            // Add user profile to nav actions
            this.addUserProfile();
        } else {
            // User is not logged in
            if (loginLink) loginLink.style.display = 'block';
            if (logoutLink) logoutLink.style.display = 'none';
            
            // Remove user profile
            this.removeUserProfile();
        }
    }

    addUserProfile() {
        const navActions = document.querySelector('.nav-actions');
        if (!navActions) return;

        // Remove existing profile if any
        this.removeUserProfile();

        const userProfile = document.createElement('div');
        userProfile.className = 'user-profile';
        userProfile.innerHTML = `
            <div class="user-avatar">${this.currentUser.name.charAt(0).toUpperCase()}</div>
            <div class="user-name">${this.currentUser.name}</div>
        `;

        navActions.appendChild(userProfile);
    }

    removeUserProfile() {
        const existingProfile = document.querySelector('.user-profile');
        if (existingProfile) {
            existingProfile.remove();
        }
    }

    initLoginHandlers() {
        // Login form
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleLogin();
            });
        }

        // Logout link
        const logoutLink = document.getElementById('logoutLink');
        if (logoutLink) {
            logoutLink.addEventListener('click', (e) => {
                e.preventDefault();
                this.logout();
            });
        }

        // Social login buttons
        const googleBtn = document.querySelector('.google-btn');
        const facebookBtn = document.querySelector('.facebook-btn');

        if (googleBtn) {
            googleBtn.addEventListener('click', () => {
                this.handleSocialLogin('Google');
            });
        }

        if (facebookBtn) {
            facebookBtn.addEventListener('click', () => {
                this.handleSocialLogin('Facebook');
            });
        }

        // Forgot password link
        const forgotPassword = document.querySelector('.forgot-password');
        if (forgotPassword) {
            forgotPassword.addEventListener('click', (e) => {
                e.preventDefault();
                cartManager.showToast('Password reset functionality coming soon!');
            });
        }

        // Signup link
        const signupLink = document.querySelector('.signup-link');
        if (signupLink) {
            signupLink.addEventListener('click', (e) => {
                e.preventDefault();
                cartManager.showToast('Signup functionality coming soon!');
            });
        }
    }

    async handleLogin() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const remember = document.getElementById('remember').checked;

        // Basic validation
        if (!email || !password) {
            cartManager.showToast('Please fill in all fields');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            cartManager.showToast('Please enter a valid email address');
            return;
        }

        try {
            // Show loading state
            const loginBtn = document.querySelector('.login-btn');
            const originalText = loginBtn.textContent;
            loginBtn.textContent = 'Logging in...';
            loginBtn.disabled = true;

            // Call backend API
            const response = await apiService.login({ email, password });
            
            if (response.success) {
                const user = response.data.user;
                this.saveUser(user);
                
                // Clear form
                document.getElementById('loginForm').reset();
                
                cartManager.showToast(`Welcome back, ${user.name}!`);
                
                // Redirect to home page
                setTimeout(() => {
                    pageManager.navigateToPage('home');
                }, 1000);
            } else {
                cartManager.showToast(response.message || 'Login failed');
            }
        } catch (error) {
            console.error('Login error:', error);
            cartManager.showToast(error.message || 'Login failed. Please try again.');
        } finally {
            // Reset button state
            const loginBtn = document.querySelector('.login-btn');
            loginBtn.textContent = originalText;
            loginBtn.disabled = false;
        }
    }

    handleSocialLogin(provider) {
        // Simulate social login
        const user = {
            id: Date.now(),
            name: `${provider} User`,
            email: `user@${provider.toLowerCase()}.com`,
            provider: provider,
            loginTime: new Date().toISOString()
        };

        this.saveUser(user);
        cartManager.showToast(`Welcome, ${user.name}!`);
        
        setTimeout(() => {
            pageManager.navigateToPage('home');
        }, 1000);
    }
}

// Initialize Application
let cartManager;
let pageManager;
let formManager;
let authManager;
let wishlistManager;
let profileManager;
let themeManager;
let recentlyViewedManager;

document.addEventListener('DOMContentLoaded', () => {
    cartManager = new CartManager();
    pageManager = new PageManager();
    formManager = new FormManager();
    authManager = new AuthManager();
    wishlistManager = new WishlistManager();
    profileManager = new ProfileManager();
    themeManager = new ThemeManager();
    recentlyViewedManager = new RecentlyViewedManager();
    
    // Initialize page content
    pageManager.initPageContent('home');
});

// Global function for navigation
function navigateToPage(pageName) {
    if (pageManager) {
        pageManager.navigateToPage(pageName);
    }
}
