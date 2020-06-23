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
    setTopProducts(productsAPI.fetchRandomProducts());
    setFeaturedProducts(productsAPI.fetchShuffledProducts());
    setSpecialProducts(productsAPI.fetchShuffledProducts());
    setDiscountProducts(productsAPI.fetchShuffledProducts());
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
