// ProductDetailsPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailsPage = () => {
  const { category, id } = useParams();

  // Fetch product details based on category and ID

  return (
    <div>
      <h2>Product Details</h2>
      <p>Category: {category}</p>
      <p>ID: {id}</p>
      {/* Add more details */}
    </div>
  );
};

export default ProductDetailsPage;
