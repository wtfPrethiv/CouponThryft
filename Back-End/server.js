const mongoose = require('mongoose')
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const Item = require("./models/Item"); // Create the Item model


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

  app.use('/api', require('./routes/trade'));


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));