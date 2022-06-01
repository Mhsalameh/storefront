import './App.scss';
// import { Button } from '@mui/material';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Catagories from './components/storefront/catagories';
import Products from './components/storefront/products';
import { getActiveCatagory } from './store/catagories';
import { connect } from 'react-redux';
import { When } from 'react-if';
import { getCart } from './store/cart';
import Checkout from './components/cart/checkout';
function App(props) {
  const { catagory, products, cart } = props;

  return (
    <div className='container'>
      <Header />
      <When condition={!cart.isCartOpen}>
        <Catagories />
        <When condition={catagory.activeCatagory && products?.products[0]}>
          <Products activeCatagory={catagory.activeCatagory} />
        </When>
      </When>
      <When condition={cart.isCartOpen}>
        <Checkout />
      </When>
      <Footer />
    </div>
  );
}
const mapStateToProps = (state) => ({
  catagory: state.catagory,
  products: state.products,
  cart: state.cart,
});
const mapDispatchToProps = { getActiveCatagory, getCart };
export default connect(mapStateToProps, mapDispatchToProps)(App);
