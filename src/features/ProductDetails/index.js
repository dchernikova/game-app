import React, { useEffect, useState } from 'react';

import Wrapper from '../../components/Wrapper';

import Product from './_components/Product';
import SkeletonProduct from './_components/SkeletonProduct';
import Typography from '../../components/Typography';

import productsAPI from '../../api/products';

const ProductDetails = ({ id }) => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (productsAPI.fetchProduct(id)) {
      setTimeout(() => {
        setProduct(productsAPI.fetchProduct(id));
      }, 800)
    } else {
      setError('The requested product is not found.');
    }
  }, [id]);

  return (
    <Wrapper withVerticalPadding>
      {!error ? (
        <>
          {product ? (
            <Product product={product} />
          ) : (
            <SkeletonProduct />
          )}
        </>
      ) : (
        <Typography variant="h4">
          {error}
        </Typography>
      )}
    </Wrapper>
  )
};

export default ProductDetails
