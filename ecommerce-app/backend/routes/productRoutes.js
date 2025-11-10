const express = require('express');
const router = express.Router();
const {
  getProducts,
  getProductById,
  createSampleProducts,
} = require('../controllers/productController');

router.route('/').get(getProducts).post(createSampleProducts);
router.route('/:id').get(getProductById);

module.exports = router;