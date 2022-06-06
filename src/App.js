import './App.scss';
// import { Button } from '@mui/material';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { getCatagories, getAllProducts } from './store/actions';
import { connect } from 'react-redux';
import { getCart } from './store/cart';
import Checkout from './components/cart/checkout';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Details from './components/products/details';
import StoreFront from './components/storefront/storefront';
function App(props) {
  const { getAllProducts, getCatagories } = props;
  useEffect(() => {
    let activeCatagory = JSON.parse(localStorage.getItem('activeCatagory'));
    if (!activeCatagory) {
      getCatagories(1);
    }
  }, [getCatagories]);

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);
  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path='/' element={<StoreFront />} />
        <Route path='/product/:id' element={<Details />} />
        <Route path='/cart' element={<Checkout />} />
      </Routes>
      <Footer />
    </div>
  );
}
const mapStateToProps = (state) => ({
  catagory: state.catagory,
  products: state.products,
  cart: state.cart,
});
const mapDispatchToProps = { getCatagories, getCart, getAllProducts };
export default connect(mapStateToProps, mapDispatchToProps)(App);
