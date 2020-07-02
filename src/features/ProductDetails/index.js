import React, { useEffect, useState } from 'react';

import axios from 'axios';

import Wrapper from '../../components/Wrapper';

import Product from './_components/Product';
import SkeletonProduct from './_components/SkeletonProduct';
import Typography from '../../components/Typography';

import productsAPI from '../../api/products';

const ProductDetails = ({ id }) => {
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setTimeout(() => {
      axios.get(`https://api.rawg.io/api/games/${id}`)
        .then((response) => setProduct(response.data));
    }, 800);

    try {
      const customProduct = productsAPI.fetchProduct(id);

      setMainImage(customProduct.images.main);
      setDescription(customProduct.description);
    } catch (error) {
      setError('The requested product is not found.');
    }
  }, [id]);

  return (
    <Wrapper withVerticalPadding>
      {!error ? (
        <>
          {product ? (
            <Product
              product={product}
              mainImage={mainImage}
              description={description}
            />
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
