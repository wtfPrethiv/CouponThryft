import React, { useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import './AddCoupon.css';
import { useCoupons } from '../context/CouponContext';

const BRANDS = [
  { id: 1, name: 'Adidas' },
  { id: 2, name: 'Apple' },
  { id: 3, name: 'Armani' },
  { id: 4, name: 'Asus' },
  { id: 5, name: 'Balenciaga' },
  { id: 6, name: 'Boat' },
  { id: 7, name: 'Bose' },
  { id: 8, name: 'BurgerKing' },
  { id: 9, name: 'CK' },
  { id: 10, name: 'Dell' },
  { id: 11, name: 'Dior' },
  { id: 12, name: 'Dominos' },
  { id: 13, name: 'HnM' },
  { id: 14, name: 'HP' },
  { id: 15, name: 'Hubolt' },
  { id: 16, name: 'KFC' },
  { id: 17, name: 'ZARA' },
  { id: 18, name: 'MARK JACOBS' },
  { id: 19, name: 'Marshall' },
  { id: 20, name: 'Mc Donalds' },
  { id: 21, name: 'Mns' },
  { id: 22, name: 'Nike' },
  { id: 23, name: 'Puma' },
  { id: 24, name: 'Reebok' },
  { id: 25, name: 'Samsung' },
  { id: 26, name: 'Sony' },
  { id: 27, name: 'Starbucks' },
  { id: 28, name: 'TheNorthFace' },
  { id: 29, name: 'Tissot' },
  { id: 30, name: 'Vouge' },
  { id: 31, name: 'Raymond' },
  { id: 32, name: 'Rolex' },
  { id: 33, name: 'Rog' },
  { id: 34, name: 'Lacoste' },
  { id: 35, name: 'NB' },
  { id: 36, name: 'Subway' },
  { id: 37, name: 'PizzaHut' }
];

const AddCoupon = () => {
  const { userCoupons, addCoupon, deleteCoupon } = useCoupons();
  const [couponCode, setCouponCode] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [selectedBrands, setSelectedBrands] = useState([]); // Changed to array for multiple selections
  const [showBrands, setShowBrands] = useState(false);

  const handleBrandChange = (brandName) => {
    setSelectedBrands([brandName]); // Only store one brand
    setShowBrands(false); // Close the list after selection
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (couponCode.trim() && price.trim() && selectedBrands.length > 0 && description.trim()) {
      const newCoupon = {
        code: couponCode,
        price: parseFloat(price),
        brand: selectedBrands[0],
        description: description
      };
      
      addCoupon(newCoupon);
      
      // Reset form
      setCouponCode('');
      setPrice('');
      setDescription('');
      setSelectedBrands([]);
    }
  };

  return (
    <div className="add-coupon-page">
      <h1 className="page-title">Add Coupon</h1>
      <div className="coupon-form-container">
        <form className="coupon-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-wrapper">
              <label>Select Brand</label>
              <div className="brand-selector">
                <div 
                  className="selected-brand"
                  onClick={() => setShowBrands(!showBrands)}
                >
                  {selectedBrands[0] || 'Click to select brand'}
                </div>
                {showBrands && (
                  <div className="brand-selection">
                    {BRANDS.map(brand => (
                      <div 
                        key={brand.id} 
                        className="brand-option"
                        onClick={() => handleBrandChange(brand.name)}
                      >
                        <span>{brand.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            <div className="input-wrapper">
              <label htmlFor="couponCode">Coupon Code</label>
              <input
                type="text"
                id="couponCode"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Enter coupon code"
                required
              />
            </div>

            <div className="input-wrapper">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter coupon description"
                required
              />
            </div>

            <div className="input-wrapper">
              <label htmlFor="price">Price</label>
              <div className="price-input">
                <input
                  type="number"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Enter price"
                  min="0"
                  required
                />
              </div>
            </div>
          </div>
          <button type="submit" className="apply-coupon-btn">Add Coupon</button>
        </form>
      </div>

      <div className="added-coupons-section">
        <h2>Your Coupons</h2>
        {userCoupons.length > 0 ? (
          <div className="coupons-list">
            {userCoupons.map(coupon => (
              <div key={coupon.id} className="coupon-item">
                <div className="coupon-info">
                  <span className="coupon-brand">{coupon.brand}</span>
                  <span className="coupon-code">{coupon.code}</span>
                  <span className="coupon-price">₹{coupon.price}</span>
                  <span className="coupon-description">{coupon.description}</span>
                  <span className="coupon-date">{coupon.dateAdded}</span>
                </div>
                <button 
                  className="delete-coupon-btn"
                  onClick={() => deleteCoupon(coupon.id)}
                >
                  <FiTrash2 />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-coupons">No coupons added yet.</p>
        )}
      </div>
    </div>
  );
};

export default AddCoupon;