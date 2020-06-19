import React from 'react';

import Layout from '../../components/Layout';

import ProductDetails from '../../features/ProductDetails';

const ProductPage = ({ match }) => {
  const {
    params: { productId },
  } = match;

  return (
    <Layout>
      <ProductDetails id={productId} />
    </Layout>
  )
};

export default ProductPage
