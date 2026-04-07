// API Service Layer for BookNest Frontend
class ApiService {
    constructor() {
        this.baseURL = 'http://localhost:5000/api';
        this.token = localStorage.getItem('booknest-token');
    }

    // Generic request method
    async request(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;
        const config = {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            ...options,
        };

        // Add authorization header if token exists
        if (this.token) {
            config.headers.Authorization = `Bearer ${this.token}`;
        }

        try {
            const response = await fetch(url, config);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong');
            }

            return data;
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    }

    // Authentication methods
    async register(userData) {
        const data = await this.request('/auth/register', {
            method: 'POST',
            body: JSON.stringify(userData),
        });
        
        if (data.success && data.data.token) {
            this.token = data.data.token;
            localStorage.setItem('booknest-token', this.token);
        }
        
        return data;
    }

    async login(credentials) {
        const data = await this.request('/auth/login', {
            method: 'POST',
            body: JSON.stringify(credentials),
        });
        
        if (data.success && data.data.token) {
            this.token = data.data.token;
            localStorage.setItem('booknest-token', this.token);
        }
        
        return data;
    }

    async getCurrentUser() {
        return await this.request('/auth/me');
    }

    // Books methods
    async getBooks() {
        return await this.request('/books');
    }

    async getBookById(id) {
        return await this.request(`/books/${id}`);
    }

    async createBook(bookData) {
        return await this.request('/books', {
            method: 'POST',
            body: JSON.stringify(bookData),
        });
    }

    async updateBook(id, bookData) {
        return await this.request(`/books/${id}`, {
            method: 'PUT',
            body: JSON.stringify(bookData),
        });
    }

    async deleteBook(id) {
        return await this.request(`/books/${id}`, {
            method: 'DELETE',
        });
    }

    // Cart methods
    async getCart() {
        return await this.request('/cart');
    }

    async addToCart(bookId, quantity = 1) {
        return await this.request('/cart/add', {
            method: 'POST',
            body: JSON.stringify({ bookId, quantity }),
        });
    }

    async removeFromCart(bookId) {
        return await this.request(`/cart/remove/${bookId}`, {
            method: 'DELETE',
        });
    }

    async updateCartQuantity(bookId, quantity) {
        return await this.request(`/cart/update/${bookId}`, {
            method: 'PUT',
            body: JSON.stringify({ quantity }),
        });
    }

    async clearCart() {
        return await this.request('/cart/clear', {
            method: 'DELETE',
        });
    }

    // Orders methods
    async placeOrder(orderData) {
        return await this.request('/orders/place', {
            method: 'POST',
            body: JSON.stringify(orderData),
        });
    }

    async getUserOrders() {
        return await this.request('/orders/my-orders');
    }

    async getOrderById(id) {
        return await this.request(`/orders/${id}`);
    }

    async getAllOrders() {
        return await this.request('/orders/all');
    }

    async updateOrderStatus(id, status) {
        return await this.request(`/orders/${id}/status`, {
            method: 'PUT',
            body: JSON.stringify({ status }),
        });
    }

    // Utility methods
    logout() {
        this.token = null;
        localStorage.removeItem('booknest-token');
    }

    isAuthenticated() {
        return !!this.token;
    }
}

// Create singleton instance
const apiService = new ApiService();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = apiService;
} else {
    window.apiService = apiService;
}
