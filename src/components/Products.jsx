import React, { useContext } from 'react';
import Product from './Product';
import '../styles/components/Products.css';
import AppContext from '../context/AppContext';

const Products = () => {
  const { state, addToCart } = useContext(AppContext);
  const { products } = state;

  const handleAddToCart = product => () => {
    addToCart(product);
  };
  return (
    <div className='Products'>
      <div className='Products-items'>
        {products &&
          products.map(p => (
            <Product key={p.id} product={p} handleAddToCart={handleAddToCart} />
          ))}
      </div>
    </div>
  );
};

export default Products;
