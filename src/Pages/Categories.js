import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

const Categories = () => {
  const categories = [
    { id: 1, name: 'Tech', icon: '🖥️', slug: 'tech' },
    { id: 2, name: 'Fashion', icon: '👕', slug: 'fashion' },
    { id: 3, name: 'Food', icon: '🍔', slug: 'food' },
  ];

  return (
    <div className="categories-page">
      <h1 className="page-title">Categories</h1>
      <div className="categories-grid">
        {categories.map(category => (
          <Link to={`/categories/${category.slug}`} key={category.id} className="category-card">
            <div className="category-icon">{category.icon}</div>
            <h3 className="category-name">{category.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
