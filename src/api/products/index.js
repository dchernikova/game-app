import products from '../../data/products';
import productDetails from '../../data/productDetails';

export default {
  fetchProduct: (id) => productDetails.find((product) => product.id === +id),
  fetchProducts: () => [...products].sort(() => 0.5 - Math.random()),
  fetchProductsByQuery: (query) => products.filter((product) => (product.name.toLowerCase()).includes(query.toLowerCase())),
}
