import React from 'react';
import Product from './Product';
import '../styles/components/Products.css';

const Products = ({ products }) => {
  return (
    <div className='Products'>
      <div className='Products-items'>
        {products && products.map(p => <Product key={p.id} product={p} />)}
      </div>
    </div>
  );
};

export default Products;
