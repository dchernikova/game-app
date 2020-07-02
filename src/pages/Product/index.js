import React from 'react';

import ProductDetails from '../../features/ProductDetails';

const ProductPage = ({ match }) => {
  const {
    params: { productId },
  } = match;

  return <ProductDetails id={productId} />
};

export default ProductPage
