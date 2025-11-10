const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Product = require('./models/productModel');
const products = require('./data/products');
const User = require('./models/userModel');
const users = require('./data/users');

dotenv.config();

connectDB();

const importData = async () => {
  try {
    // Delete all existing products and users
    await Product.deleteMany();
    await User.deleteMany();
    
    // Insert sample users
    const createdUsers = await User.insertMany(users);
    
    // Insert sample products
    const createdProducts = await Product.insertMany(products);
    
    console.log(`${createdUsers.length} users inserted`);
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
    await User.deleteMany();
    
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