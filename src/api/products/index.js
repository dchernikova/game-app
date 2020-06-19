import products from '../../data/products';
import productDetails from '../../data/productDetails';

export default {
  fetchProducts: () => products,
  fetchProduct: (id) => productDetails.find((product) => product.id === +id),
  fetchProductsByQuery: (query) => products.filter((product) => (product.name.toLowerCase()).includes(query.toLowerCase())),
  fetchRandomProducts: () => products.sort(() => 0.5 - Math.random()).slice(0, 3),
}
