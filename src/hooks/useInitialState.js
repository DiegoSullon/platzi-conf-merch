import { useState } from 'react';
import initialState from '../../initialState';

const useInitialState = () => {
  const [state, setstate] = useState(initialState);

  const addToCart = paylad => {
    setstate({
      ...state,
      cart: [...state.cart, paylad],
    });
  };

  const removeFromCart = paylad => {
    setstate({
      ...state,
      cart: state.cart.filter(item => item.id !== paylad.id),
    });
  };

  return {
    addToCart,
    removeFromCart,
    state,
  };
};

export default useInitialState;
