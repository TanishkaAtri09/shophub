# ShopHub - E-Commerce Website Frontend

A modern, clean, and fully functional e-commerce website frontend built with HTML, CSS, and JavaScript.

## Features

### 🎨 Design
- **Modern UI/UX**: Clean and intuitive design
- **Responsive Layout**: Works perfectly on all devices (desktop, tablet, mobile)
- **Gradient Design**: Beautiful gradient backgrounds and color scheme
- **Smooth Animations**: Transition effects and hover states
- **Professional Color Scheme**: Purple primary, red accent, with dark and light variants

### 🛒 Shopping Features
- **Product Catalog**: Browse through various product categories
- **Category Filtering**: Filter products by Electronics, Fashion, and Home & Garden
- **Product Search**: Search for products by name or description
- **Shopping Cart**: Add, remove, and manage items in the cart
- **Cart Summary**: View subtotal, tax calculation, and total price
- **Cart Counter**: Badge showing number of items in cart

### 📱 UI Components
- **Navigation Bar**: Sticky navigation with logo and user actions
- **Hero Section**: Eye-catching welcome banner
- **Products Section**: Grid layout showcasing products
- **About Section**: Information about the store and features
- **Contact Section**: Contact form and business information
- **Footer**: Comprehensive footer with links and social media

### ⚙️ Functionality
- Add items to cart
- Remove items from cart
- Update item quantities
- Search products in real-time
- Filter products by category
- Cart sidebar with overlay
- Responsive hamburger menu (mobile)
- Smooth scrolling navigation
- Toast notifications
- Form validation

## Project Structure

```
shophub/
├── index.html       # Main HTML file
├── styles.css       # Styling and responsive design
├── script.js        # JavaScript functionality
└── README.md        # Documentation
```

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Grid and Flexbox
- **JavaScript ES6+**: Interactive functionality
- **Font Awesome**: Icon library
- **Responsive Design**: Mobile-first approach

## Getting Started

1. Clone or download the repository
2. Open `index.html` in your web browser
3. Start exploring the website!

### No Build Tools Required
This is a vanilla HTML/CSS/JavaScript project with no dependencies or build tools needed.

## Features Breakdown

### Product Management
- 9 sample products across 3 categories
- Product images with icons
- Price display
- Product descriptions
- "New" badges on products

### Shopping Cart
- Slide-in cart sidebar
- Add/remove products
- Quantity adjustment
- Real-time subtotal and tax calculation
- Smooth animations

### Search & Filter
- Real-time product search
- Category-based filtering
- Active filter indicators

### Navigation
- Sticky navigation bar
- Search functionality
- User account icon
- Cart icon with item count
- Smooth scrolling to sections

## Customization

### Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6c63ff;    /* Main color */
    --secondary-color: #ff6b6b;  /* Accent color */
    --dark-color: #1a1a2e;       /* Dark theme */
    --light-color: #f8f9fa;      /* Light background */
}
```

### Add Products
Edit the `products` array in `script.js`:
```javascript
{
    id: 10,
    name: "Product Name",
    category: "category",
    price: 99.99,
    description: "Product description",
    icon: "fas fa-icon"
}
```

### Change Product Categories
Modify the `filter-bar` buttons in `index.html` and add corresponding categories to products.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Responsive Breakpoints

- Desktop: 1200px and above
- Tablet: 768px - 1199px
- Mobile: Below 768px
- Small Mobile: Below 480px

## Future Enhancements

- [ ] Backend integration with API
- [ ] User authentication
- [ ] Payment gateway integration
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Order history
- [ ] Admin dashboard
- [ ] Inventory management
- [ ] Analytics tracking
- [ ] Dark mode toggle

## License

This project is free to use for personal and commercial purposes.

## Author

Created as a modern e-commerce template for web developers.

---

**Enjoy your e-commerce website!** 🛍️