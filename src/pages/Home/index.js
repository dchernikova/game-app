import React, { useEffect, useState } from 'react';

import Layout from '../../components/Layout';
import Section from '../../components/Section';

import SliderMain from '../../features/SliderMain';
import SliderProducts from '../../features/SliderProducts';

import productsAPI from '../../api/products';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [topProducts, setTopProducts] = useState([]);

  useEffect(() => {
    setProducts(productsAPI.fetchProducts());
    setTopProducts(productsAPI.fetchRandomProducts());
  }, []);

  return (
    <Layout>
      <SliderMain slides={topProducts} />

      <Section title="Featured & Recommended">
        <SliderProducts slides={products} />
      </Section>

      <Section title="Special Offers">
        <SliderProducts slides={products} />
      </Section>

      <Section title="Under $10 USD">
        <SliderProducts slides={products} />
      </Section>
    </Layout>
  )
};

export default HomePage
