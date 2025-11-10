# Deligentkart - E-Commerce Web Application

A full-featured e-commerce platform built with the MERN stack (MongoDB, Express.js, React, Node.js) that allows users to browse products, view details, and manage a shopping cart with persistent state.

## Features

- **Product Catalog**: Browse through a variety of products with images, descriptions, and pricing
- **Product Details**: View detailed information about each product
- **Shopping Cart**: Add/remove items and manage quantities
- **Persistent Cart**: Cart state saved in localStorage
- **Responsive Design**: Mobile-friendly interface using Tailwind CSS
- **RESTful API**: Backend API for product data management

## Tech Stack

- **Frontend**: React.js, Tailwind CSS, React Router, Context API
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose ODM)
- **State Management**: React Context API
- **Proxy**: http-proxy-middleware for API requests

## Documentation

Comprehensive project documentation is available in the `docs/` folder:

- [Project Documentation](docs/PROJECT_DOCUMENTATION.md) — architecture overview, run instructions, developer guide, and next steps.
- [API Reference](docs/API_REFERENCE.md) — detailed API endpoints and examples.

## Project Structure

```
ecommerce-app/
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── .env
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   └── productModel.js
│   ├── routes/
│   │   └── productRoutes.js
│   ├── controllers/
│   │   └── productController.js
│   ├── data/
│   │   └── products.js
│   └── seeder.js
│
└── frontend/
    ├── package.json
    ├── index.html
    ├── server.js
    ├── tailwind.config.js
    ├── postcss.config.js
    ├── src/
    │   ├── index.js
    │   ├── App.js
    │   ├── context/
    │   │   └── CartContext.js
    │   ├── components/
    │   │   ├── Navbar.js
    │   │   ├── ProductCard.js
    │   │   ├── ProductDetails.js
    │   │   └── Cart.js
    │   ├── pages/
    │   │   ├── Home.js
    │   │   └── NotFound.js
    │   └── styles/
    │       └── index.css
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd ecommerce-app
   ```

2. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies:**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Configure environment variables:**
   Create a `.env` file in the `backend` directory:
   ```
   NODE_ENV=development
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

### Running the Application

1. **Start the backend server:**
   ```bash
   cd backend
   npm run server
   ```

2. **Seed the database with sample data (optional):**
   ```bash
   npm run data:import
   ```

3. **Start the frontend server:**
   ```bash
   cd frontend
   npm start
   ```

4. **Open your browser:**
   Visit `http://localhost:3000` to view the application.

## API Endpoints

- `GET /api/products` - Fetch all products
- `GET /api/products/:id` - Fetch a single product by ID
- `POST /api/products/sample` - Create sample products (admin only)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Product images from Unsplash
- Icons from Heroicons