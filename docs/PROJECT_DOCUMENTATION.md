# Deligentkart — Project Documentation

This document provides a complete overview of the Deligentkart project: architecture, implemented functionality, how to run the app, API reference, developer workflows, and recommended next steps.

Table of contents
- Architecture & Tech Stack
- Features & Functionality
- Directory Structure
- Running the Project Locally
- API Reference
- Data Model
- Seeding and Sample Data
- Developer Guide
- CI / Testing
- Security & Production Checklist
- Next steps

---

## Architecture & Tech Stack

- Frontend: React (v19) + Vite, React Router, Tailwind CSS, Context API for state
- Backend: Node.js + Express, RESTful API
- Database: MongoDB via Mongoose ODM
- Dev tooling: nodemon for backend, Vite for frontend dev server
- CI: GitHub Actions (build checks)

The application follows a simple client-server model: the React SPA makes HTTP requests to the Express REST API which uses Mongoose to persist and query data in MongoDB.

## Features & Functionality (implemented)

- Product Catalog: view a grid of products with images and pricing.
- Product Details: view full product information and add to cart.
- Shopping Cart: add/remove items, persistent cart saved to localStorage.
- Backend API: product endpoints (list, details, seed).
- Seeder: `seeder.js` to populate MongoDB with sample products.

## Directory Structure (key files)

- `ecommerce-app/backend/`
  - `server.js` — Express app entry point
  - `config/db.js` — Mongoose connection helper
  - `models/productModel.js` — Product schema
  - `routes/productRoutes.js` — product routes
  - `controllers/productController.js` — route handlers
  - `data/products.js` — sample product dataset
  - `seeder.js` — import/destroy sample data

- `ecommerce-app/frontend/`
  - `index.html` — SPA root
  - `src/` — React source
    - `App.js` — routes and layout
    - `pages/Home.js` — product listing
    - `components/ProductCard.js`, `ProductDetails.js`, `Cart.js`, `Navbar.js`
    - `context/CartContext.js` — cart state with persistence

---

## Running the Project Locally

Prerequisites:
- Node.js (v18 recommended)
- npm
- MongoDB (local or Atlas)

Backend

1. Copy the example env (create `ecommerce-app/backend/.env`):

```
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://localhost:27017/diligentkart
```

2. Install and run backend:

```
cd ecommerce-app/backend
npm install
npm run data:import   # optional: seed sample products
npm run server        # runs nodemon server.js
```

Frontend

1. Install and run frontend dev server:

```
cd ecommerce-app/frontend
npm install
npm run dev
```

2. By default the frontend expects the backend API at `/api/*`. In dev, set up a proxy or configure axios base URL to `http://localhost:5000`.

Open `http://localhost:5173` (or the Vite port shown) to view the app.

---

## API Reference

Base URL (development): http://localhost:5000

Endpoints

- GET /api/products
  - Returns: 200, JSON array of product objects

- GET /api/products/:id
  - Returns: 200, JSON single product, or 404 if not found

- POST /api/products/sample
  - Description: deletes all products and imports sample data
  - Returns: 201 with created documents
  - Warning: This endpoint is unprotected in the current codebase. Do not expose in production.

Errors follow the shape: { message: string }

---

## Data Model

Product schema (Mongoose)

- name: String (required)
- description: String (required)
- price: Number (required)
- category: String (required)
- brand: String (required)
- countInStock: Number (required)
- rating: Number (required)
- numReviews: Number (required)
- imageUrl: String (required)
- timestamps: createdAt, updatedAt

---

## Seeding and Sample Data

- `ecommerce-app/backend/seeder.js` reads from `data/products.js` and inserts sample products into MongoDB.
- Run `npm run data:import` inside the backend directory to seed.
- To delete seeded data run `npm run data:destroy`.

---

## Developer Guide

Common tasks

- Linting: (Not included yet) — consider adding ESLint/Prettier.
- Testing: (Not included yet) — consider Jest and React Testing Library.
- Adding a new API route:
  1. Create controller in `controllers/`
  2. Add route in `routes/productRoutes.js` (or a new router file)
  3. Mount router in `server.js`

Local debugging tips

- Use `nodemon` for backend auto-reload (`npm run server`).
- Frontend Vite supports HMR — changes reload instantly.

---

## CI / Testing

- A GitHub Actions workflow is present in `.github/workflows/ci.yml` to build the frontend and install backend dependencies. Extend it to run tests and lint steps.

---

## Security & Production Checklist

- Add authentication and role-based access controls before enabling write/admin endpoints.
- Add input validation for request payloads (express-validator, Joi or Zod).
- Store secrets in environment variables or a secrets manager — never commit them.
- Use HTTPS in production and secure cookies when using sessions.
- Rate limiting & helmet for HTTP headers hardening.

---

## Next steps (recommended)

1. Add user authentication (JWT) and protected admin endpoints.
2. Add Order model and a checkout flow; integrate with Stripe or other payment processor.
3. Add unit/integration tests and CI test steps.
4. Add ESLint + Prettier and Git hooks (husky) for quality gates.
5. Add production deployment docs (container images or PaaS instructions).

---

If you want, I can now:
- Commit this documentation and update the README with links (I will do that next),
- Or generate developer-focused docs like API Swagger/OpenAPI spec, ER diagram, and run tests.
