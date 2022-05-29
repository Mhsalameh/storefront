import './App.scss';
import { Button } from '@mui/material';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Catagories from './components/storefront/catagories';
import Products from './components/storefront/products';
import { getActiveCatagory } from './store/catagories';
import { connect } from 'react-redux';
import { When } from 'react-if';
function App(props) {
  const { catagory, products } = props;
  return (
    <div className='container'>
      <Header />
      <Catagories />
      <When condition={catagory.activeCatagory && products?.products[0]}>
        <Products activeCatagory={catagory.activeCatagory} />
      </When>
      <Footer />
      {/* <Button variant='contained'>Hello World</Button> */}
    </div>
  );
}
const mapStateToProps = (state) => ({
  catagory: state.catagory,
  products: state.products,
});
const mapDispatchToProps = { getActiveCatagory };
export default connect(mapStateToProps, mapDispatchToProps)(App);
