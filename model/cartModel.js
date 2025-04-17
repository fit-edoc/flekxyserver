// models/CartItem.js
const mongoose = require('mongoose');

const CartItemSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Optional: if you're associating with users
    required: false
  },
  title: String,
  price: Number,
  quantity: Number,
  imageUrl: String,
});

module.exports = mongoose.model('CartItem', CartItemSchema);
