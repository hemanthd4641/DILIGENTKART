const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Product = require('./models/productModel');
const products = require('./data/products');

dotenv.config();

connectDB();

const importData = async () => {
  try {
    // Delete all existing products
    await Product.deleteMany();
    
    // Insert sample products
    const createdProducts = await Product.insertMany(products);
    
    console.log(`${createdProducts.length} products inserted`);
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Product.deleteMany();
    
    console.log('Data destroyed');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}