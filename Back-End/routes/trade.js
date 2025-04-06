// const express = require('express');
// const TradeRequest = require('../models/TradeRequest');
// const router = express.Router();

// router.post('/trade', async (req, res) => {
//   const { fromUser, toUser, productOffered, productRequested } = req.body;

//   try {
//     const newTrade = new TradeRequest({ fromUser, toUser, productOffered, productRequested });
//     await newTrade.save();
//     res.status(201).json({ message: 'Trade request sent successfully!' });
//   } catch (error) {
//     res.status(500).json({ error: 'Error creating trade request' });
//   }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const TradeRequest = require('../models/TradeRequest');

// POST a trade request
router.post('/', async (req, res) => {
  try {
    const { fromUser, toUser, productId } = req.body;

    const trade = new TradeRequest({
      fromUser,
      toUser,
      productId,
      status: 'pending',
      createdAt: new Date()
    });

    await trade.save();
    res.status(201).json({ message: 'Trade request sent successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating trade request' });
  }
});

module.exports = router;

