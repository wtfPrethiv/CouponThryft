const mongoose = require('mongoose')
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const Item = require("./models/Item"); // Create the Item model
const tradeRoutes = require('./routes/trade');




mongoose.connect('mongodb://127.0.0.1:27017/couponsDB')

app.get("/api/items", async (req, res) => {
    try {
      const items = await Item.find();
      res.json(items);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  });

  app.use('/api/trade-request', tradeRoutes);



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));