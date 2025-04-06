import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/product';
import ProductGrid from '../components/ProductGrid';

const CategoryPage = () => {
  const { slug } = useParams();
  const categoryProducts = products.filter(product => product.category === slug);

  return (
    <div className="category-page">
      <h1 className="page-title">Category: {slug}</h1>
      <ProductGrid products={categoryProducts} />
    </div>
  );
};

export default CategoryPage;