import { useState } from 'react';
import initialState from '../../initialState';

const useInitialState = () => {
  const [state, setstate] = useState(initialState);

  const addToCart = payload => {
    setstate({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = payload => {
    setstate({
      ...state,
      cart: state.cart.filter(item => item.id !== payload.id),
    });
  };

  const addToBuyer = payload => {
    setstate({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };

  const addNewOrder = payload => {
    setstate({
      ...state,
      orders: [...state.orders, payload],
    });
  };

  return {
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
    state,
  };
};

export default useInitialState;
