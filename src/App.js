import './App.scss';
// import { Button } from '@mui/material';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Catagories from './components/storefront/catagories';
import Products from './components/storefront/products';
import { getCatagories } from './store/actions';
import { connect } from 'react-redux';
import { When } from 'react-if';
import { getCart } from './store/cart';
import Checkout from './components/cart/checkout';
import { useEffect } from 'react';
function App(props) {
  const { catagory, cart, getCatagories } = props;
  useEffect(() => {
    let activeCatagory = JSON.parse(localStorage.getItem('activeCatagory'));
    if (!activeCatagory) {
      getCatagories(1);
    }
  }, [getCatagories]);
  return (
    <div className='container'>
      <Header />
      <When condition={!cart.isCartOpen}>
        <Catagories />
        <Products
          activeCatagory={
            JSON.parse(localStorage.getItem('activeCatagory')) ||
            catagory.activeCatagory
          }
        />
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
const mapDispatchToProps = { getCatagories, getCart };
export default connect(mapStateToProps, mapDispatchToProps)(App);
