// import React from 'react';
// import TradingCard from '../components/TradingCard';
// import { products } from '../data/product';
// import './TradingPage.css';

// const TradingPage = () => {
//   const tradeProducts = products.filter(product => product.trade);

//   return (
//     <div className="trading-page">
//       <section className="hero-section">
//         <div className='hero-content'>
//           <h1>Trade your coupons</h1>
//           <p>Exchange coupons with other users</p>
//         </div>
//       </section>
//       <section className="trading-grid">
//         {tradeProducts.map(product => (
//           <TradingCard key={product.id} product={product} />
//         ))}
//       </section>
//     </div>
//   );
// };

// export default TradingPage;

// TradingCard.js



// import React from 'react';

// import TradingCard from '../components/TradingCard';

// const TradingCard = ({ product }) => {
//   const handleTrade = () => {
//     alert(`Trading coupon from ${product.brand}`);
//     // Here, you would send the trade request
//   };

//   return (
//     <div className="trading-card">
//       <img src={product.image} alt={product.brand} />
//       <h3>{product.brand}</h3>
//       <p>{product.description}</p>
//       <button onClick={handleTrade}>Trade</button>
//     </div>
//   );
// };

// export default TradingCard;



import React from 'react';
// import './TradingCard.css'; // optional if you have styles

import TradingCard from '../components/TradingCard';

const TradingCard = ({ product }) => {
  const handleTrade = () => {
    alert(`You clicked Trade on: ${product.brand}`);
    // This is where you'd send the backend request in future
  };

  return (
    <div className="trading-card">
      <img src={product.image} alt={product.brand} />
      <h3>{product.brand}</h3>
      <p>{product.description}</p>
      <button onClick={handleTrade}>Trade</button>
    </div>
  );
};


