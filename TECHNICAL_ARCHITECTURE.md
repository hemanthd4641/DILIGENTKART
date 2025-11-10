# Technical Architecture Documentation

## Overview

Deligentkart is a full-featured e-commerce platform built using the MERN stack (MongoDB, Express.js, React, Node.js). The architecture follows a client-server model with a RESTful API design pattern.

## System Architecture Diagram

```
┌─────────────────┐    HTTP/API    ┌──────────────────┐    Database    ┌──────────────┐
│   Frontend      │◄──────────────►│   Backend API    │◄──────────────►│   MongoDB    │
│  (React.js)     │                │  (Node/Express)  │                │              │
└─────────────────┘                └──────────────────┘                └──────────────┘
         │                                   │                                 │
         │                                   │                                 │
         ▼                                   ▼                                 ▼
┌─────────────────┐                ┌──────────────────┐                ┌──────────────┐
│   User Browser  │                │  Business Logic   │                │   Database   │
│                 │                │   & Services     │                │   Storage    │
└─────────────────┘                └──────────────────┘                └──────────────┘
```

## Frontend Architecture

### Technologies Used
- **React.js**: Component-based UI library
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Declarative routing for React
- **Context API**: State management solution
- **Axios**: HTTP client for API requests

### Component Structure
```
App
├── CartContext (State Management)
├── Navbar
├── Routes
│   ├── Home
│   │   └── ProductCard
│   ├── ProductDetails
│   ├── Cart
│   └── NotFound
```

### Data Flow
1. User interacts with UI components
2. Components make API requests via Axios
3. Responses update component state
4. Context API manages global state (cart)
5. LocalStorage persists cart data

## Backend Architecture

### Technologies Used
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling tool
- **dotenv**: Environment variable management

### API Endpoints
```
GET    /api/products          - Fetch all products
GET    /api/products/:id      - Fetch single product
POST   /api/products/sample   - Create sample products
```

### Folder Structure
```
backend/
├── server.js              - Entry point
├── config/
│   └── db.js             - Database configuration
├── models/
│   └── productModel.js   - Product schema
├── routes/
│   └── productRoutes.js  - Route definitions
├── controllers/
│   └── productController.js - Request handlers
├── data/
│   └── products.js       - Sample data
└── seeder.js             - Data seeding script
```

### Data Flow
1. HTTP requests received by Express.js
2. Routes direct requests to controllers
3. Controllers process business logic
4. Mongoose models interact with MongoDB
5. Responses sent back to client

## Database Design

### Product Schema
```
Product {
  name: String
  description: String
  price: Number
  category: String
  brand: String
  countInStock: Number
  rating: Number
  numReviews: Number
  imageUrl: String
  timestamps: Date
}
```

## Deployment Architecture

### Development Environment
- **Frontend**: Vite development server (port 3000)
- **Backend**: Node.js server (port 5000)
- **Database**: MongoDB local/Atlas instance

### Production Environment
- **Frontend**: Static files served by Express
- **Backend**: Node.js server
- **Database**: MongoDB Atlas
- **Reverse Proxy**: Nginx (optional)

## Security Considerations

1. **CORS**: Cross-Origin Resource Sharing configured
2. **Environment Variables**: Sensitive data stored in .env files
3. **Input Validation**: Data validation in controllers
4. **Error Handling**: Centralized error handling middleware

## Performance Optimization

1. **Database Indexing**: Mongoose schema indexing
2. **Caching**: Potential for Redis implementation
3. **Code Splitting**: React lazy loading (future enhancement)
4. **Bundle Optimization**: Vite build optimizations

## Scalability Considerations

1. **Horizontal Scaling**: Stateless backend services
2. **Load Balancing**: Multiple server instances
3. **Database Sharding**: MongoDB sharding for large datasets
4. **CDN**: Content delivery network for static assets

## Future Enhancements

1. **User Authentication**: JWT-based authentication system
2. **Payment Integration**: Stripe or PayPal payment processing
3. **Search Functionality**: Elasticsearch integration
4. **Admin Dashboard**: CRUD operations for products
5. **Order Management**: Order processing and tracking
6. **Reviews System**: User product reviews and ratings