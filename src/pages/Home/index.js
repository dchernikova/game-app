import React, { useEffect, useState } from 'react';

import Layout from '../../components/Layout';
import Section from '../../components/Section';

import SliderMain from '../../features/SliderMain';
import SliderProducts from '../../features/SliderProducts';

import productsAPI from '../../api/products';

const HomePage = () => {
  const [topProducts, setTopProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [specialProducts, setSpecialProducts] = useState([]);
  const [discountProducts, setDiscountProducts] = useState([]);

  useEffect(() => {
    setTopProducts(productsAPI.fetchProducts().slice(0, 4));
    setFeaturedProducts(productsAPI.fetchProducts());
    setSpecialProducts(productsAPI.fetchProducts());
    setDiscountProducts(productsAPI.fetchProducts());
  }, []);

  return (
    <Layout>
      <SliderMain slides={topProducts} />

      <Section title="Featured & Recommended">
        <SliderProducts slides={featuredProducts} />
      </Section>

      <Section title="Special Offers">
        <SliderProducts slides={specialProducts} />
      </Section>

      <Section title="Under $10 USD">
        <SliderProducts slides={discountProducts} />
      </Section>
    </Layout>
  )
};

export default HomePage
