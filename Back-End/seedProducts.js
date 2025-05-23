const mongoose = require('mongoose');
const Product = require('./models/Product');

mongoose.connect('mongodb://localhost:27017/couponsDB')

const products = [
    {
        id: 1,
        image: "/assets/Nike.png",
        brand: "Nike",
        description: "Get 20% off on all products!",
        expiry: "20/6/2025",
        price: 250,
        featured: true,
        flashSale: false,
        trade: true,
        category: "fashion",
    },
    {
        id: 2,
        image: "/assets/Adidas.jpg",
        brand: "Adidas",
        description: "Buy 1 Get 1 Free!",
        expiry: "11/11/2025",
        price: 300,
        featured: false,
        flashSale: true,
        trade: true,
        category: "fashion",
        
    },
    {
        id: 3,
        image: "/assets/Puma.png",
        brand: "Puma",
        description: "Flat 30% off on shoes!",
        expiry: "15/8/2025",
        price: 150,
        featured: false,
        flashSale:true,
        trade: true,
        category: "fashion",
    },
    {
        id: 4,
        image: "/assets/Levis.jpg",
        brand: "Levis",
        description: "₹500 off on denims!",
        expiry: "30/9/2025",
        price: 400,
        featured: false,
        flashSale: true,
        trade: true,
        category: "fashion",
    },
    {
        id: 5,
        image: "/assets/Rebok.png",
        brand: "Reebok",
        description: "Buy 2 Get 1 Free!",
        expiry: "25/12/2025",
        price: 350,
        featured: false,
        flashSale: true,
        trade: true,
        category: "fashion",
    },
    {
        id: 6,
        image: "/assets/Lacoste.jpg",
        brand: "Lacoste",
        description: "Flat 15% off on all products!",
        expiry: "5/5/2025",
        price: 200,
        featured: true,
        flashSale: false,
        trade: false,
        category: "fashion",
    },
    {
        id: 7,
        image: "/assets/Raymond.png",
        brand: "Raymond",
        description: "Flat 40% off on suits!",
        expiry: "20/6/2025",
        price: 250,
        featured: true,
        flashSale: false,
        trade: false,
        category: "fashion",
    },
    {
        id: 8,
        image: "/assets/HnM.jpg",
        brand: "H&M",
        description: "Flat 60% off on women's wear!",
        expiry: "11/11/2025",
        price: 300,
        featured: true,
        flashSale: false,
        trade: true,
        category: "fashion",
        
    },
    {
        id: 9,
        image: "/assets/Dior.jpg",
        brand: "Dior",
        description: "Flat 30% off on shoes!",
        expiry: "15/8/2025",
        price: 150,
        featured: true,
        flashSale: false,
        trade: true,
        category: "fashion",
    },
    {
        id: 11,
        image: "/assets/Levis.jpg",
        brand: "Levis",
        description: "₹500 off on denims!",
        expiry: "30/9/2025",
        price: 200,
        featured: false,
        flashSale:false,
        category:"fashion"
    },
    {
        id: 12,
        image: "/assets/theNorthface.jpg",
        brand: "The North Face",
        description: "Flat 15% off on jackets!",
        expiry: "5/5/2025",
        price: 200,
        faetured:true,
        flashSale:false,
        category:"fashion"
    },
    {
        id:13,
        image: "/assets/Armni.jpg",
        brand: "Armani",
        description: "Flat 40% off on wearables!",
        expiry: "20/6/2025",
        price: 250,
        featured:true,
        flashSale:false,
        category:"fashion"

    },
    {
        id: 14,
        image: "/assets/Balenciaga.jpg",
        brand: "Balenciaga",
        description: "Flat 60% off on bags!",
        expiry: "11/11/2025",
        price: 300,
        featured:true,
        flashSale:false,
        category:"Fashion"

    },
    {
        id: 15,
        image: "/assets/Dior.jpg",
        brand: "Dior",
        description: "Flat 30% off on shoes!",
        expiry: "15/8/2025",
        price: 150,
        featured:false,
        flashSale:true,
        trade:true,
        category:"fashion"

    },
    {
        id: 16,
        image: "/assets/Zara.jpg",
        brand: "Zara",
        description: "₹500 off on denims!",
        expiry: "30/9/2025",
        price: 400,
        category:'fashion',
    },
    {
        id: 17,
        image: "/assets/Rolex.jpg",
        brand: "Rolex",
        description: "Flat 15% off on all watches!",
        expiry: "5/5/2025",
        price: 200
    },
    {
        id: 18,
        image: "/assets/Apple.jpg",
        brand: "Apple",
        description: "Flat 40% off on wearables!",
        expiry: "20/6/2025",
        price: 250,
        category:'tech',
    },
    {
        id: 19,
        image: "/assets/Subway.jpg",
        brand: "Subway",
        description: "Flat 60% off on Subs!",
        expiry: "11/11/2025",
        price: 300,
        category:'food',
    }
    


];

Product.insertMany(products)
  .then(() => {
    console.log('Products inserted successfully');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error inserting products:', err);
    mongoose.connection.close();
  });