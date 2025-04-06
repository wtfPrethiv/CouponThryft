import React, { createContext, useContext, useState } from 'react';

const CouponContext = createContext();

export const CouponProvider = ({ children }) => {
  const [userCoupons, setUserCoupons] = useState([]);

  const addCoupon = (coupon) => {
    setUserCoupons(prev => [...prev, {
      ...coupon,
      id: Date.now(),
      dateAdded: new Date().toLocaleDateString()
    }]);
  };

  const deleteCoupon = (couponId) => {
    setUserCoupons(prev => prev.filter(coupon => coupon.id !== couponId));
  };

  const getUserCoupons = () => userCoupons;

  return (
    <CouponContext.Provider value={{ 
      userCoupons, 
      addCoupon, 
      deleteCoupon, 
      getUserCoupons 
    }}>
      {children}
    </CouponContext.Provider>
  );
};

export const useCoupons = () => useContext(CouponContext);