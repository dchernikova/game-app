import React, { useState, useContext } from 'react';

import useStorage from '../_utils/useStorage';

import products from '../../data/products';

const CartContext = React.createContext([]);

const storage = useStorage();

const CartProvider = (props) => {
  const [cart, setCart] = useState(storage.getItem('cart') || storage.setItem('cart', []));

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {props.children}
    </CartContext.Provider>
  )
};

const useCart = () => {
  const [cart, setCart] = useContext(CartContext);

  const fetchCart = () => setCart(storage.getItem('cart'));

  const fetchProduct = (id) => cart && cart.find((product) => product.id === +id);

  const add = (id) => {
    const product = products.find((product) => product.id === +id);
    const data = storage.getItem('cart');

    data.push(product);

    storage.setItem('cart', data);
    fetchCart();
  };

  const remove = (id) => {
    const data = storage.getItem('cart');

    storage.setItem('cart', data.filter((item) => item.id !== +id));
    fetchCart();
  };

  const removeAll = () => {
    storage.removeItem('cart', []);
    fetchCart();
  };

  return ({
    cart,
    add,
    remove,
    removeAll,
    fetchCart,
    fetchProduct,
  })
};

export { CartProvider, useCart }
