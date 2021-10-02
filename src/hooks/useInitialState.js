import axios from 'axios';
import { useEffect, useState } from 'react';
import initialState from '../../initialState';

// const API = 'http://localhost:1337/products';
const API = 'https://us-central1-gndx-fake-api.cloudfunctions.net/api';

const useInitialState = () => {
  const [state, setstate] = useState(initialState);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = () => {
      axios.get(API).then(res => {
        setProducts(res.data);
      });
    };

    getData();
  }, []);
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
    products,
    state,
  };
};

export default useInitialState;
