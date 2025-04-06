// const mongoose = require('mongoose');

// const tradeRequestSchema = new mongoose.Schema({
//   fromUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   toUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   productOffered: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
//   productRequested: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
//   status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
//   createdAt: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model('TradeRequest', tradeRequestSchema);


const mongoose = require('mongoose');

const tradeRequestSchema = new mongoose.Schema({
  fromUser: String,   // user ID or username sending the request
  toUser: String,     // recipient
  productId: String,  // the coupon/product ID being offered
  status: {
    type: String,
    enum: ['pending', 'accepted', 'declined'],
    default: 'pending'
  },
  createdAt: Date
});

module.exports = mongoose.model('TradeRequest', tradeRequestSchema);
