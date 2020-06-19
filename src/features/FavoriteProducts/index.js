import React, { useEffect, useState } from 'react';

import Skeleton from '../../components/Skeleton';
import Typography from '../../components/Typography';

import Product from './_components/Product';
import SkeletonProduct from './_components/Skeleton';

import productsAPI from '../../api/products';

const FavoriteProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setProducts(productsAPI.fetchRandomProducts());
    }, 800)
  }, []);

  return (
    <>
      <Typography
        variant="h5"
        color="secondary"
        marginBottom={3}
      >
        {products.length !== 0 ? (
          'Favorite Games'
        ) : (
          <Skeleton />
        )}
      </Typography>

      {products.length !== 0 ? (
        <>
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
            />
          ))}
        </>
      ) : (
        <>
          {[...Array(3)].map((item, i) => (
            <SkeletonProduct key={i} />
          ))}
        </>
      )}
    </>
  )
};

export default FavoriteProducts
