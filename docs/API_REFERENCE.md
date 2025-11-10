# API Reference — Deligentkart

Base URL (development): http://localhost:5000

Endpoints

1) GET /api/products

- Description: Retrieve a list of all products.
- Response: 200 OK — JSON array of product documents.

Example response (success):

```
[
  {
    "_id": "64e3f1...",
    "name": "Sample Product",
    "price": 49.99,
    "imageUrl": "https://...",
    "description": "...",
    "category": "Electronics",
    "brand": "Acme",
    "countInStock": 10,
    "rating": 4.5,
    "numReviews": 12
  },
  ...
]
```

2) GET /api/products/:id

- Description: Retrieve a single product by its MongoDB ObjectId.
- Path parameters: `id` — product ObjectId
- Success: 200 OK — product JSON
- Not found: 404 — { message: 'Product not found' }

3) POST /api/products/sample

- Description: Deletes current products and imports the sample dataset from `data/products.js`.
- Access: Unprotected in the current implementation (do not call on production).
- Success: 201 Created — JSON array of created product documents

Error format

```
{
  "message": "Description of error"
}
```

Notes

- Add authentication and restrict the sample import endpoint in production.
- Consider adding pagination, filtering and search to the GET /api/products endpoint for production readiness.
