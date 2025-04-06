const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  _id: Number,
  image: String,
  brand: String,
  description: String,
  expiry: String,
  price: Number,
  featured: Boolean,
  flashSale: Boolean,
  trade: Boolean,
  category: String
});

module.exports = mongoose.model('Product', productSchema);
