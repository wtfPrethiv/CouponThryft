const express = require('express');
const TradeRequest = require('../models/TradeRequest');
const router = express.Router();

router.post('/trade', async (req, res) => {
  const { fromUser, toUser, productOffered, productRequested } = req.body;

  try {
    const newTrade = new TradeRequest({ fromUser, toUser, productOffered, productRequested });
    await newTrade.save();
    res.status(201).json({ message: 'Trade request sent successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Error creating trade request' });
  }
});

module.exports = router;
