import React, { useState, useEffect } from 'react';
import ProductCard from './productCard';
import './ProductSlider.css';

const ProductSlider = ({ products, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(products.length / itemsPerSlide);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
    }, 6000);

    return () => clearInterval(timer);
  }, [totalSlides]);

  return (
    <div className="slider-container">
      <h2 className="slider-title">{title}</h2>
      <div
        className="slider-content"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {products.map((product) => (
          <div key={product.id} className="slider-item">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div className="slider-dots">
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;