import Catagories from './catagories';
import Products from './products';
import { getCatagories } from '../../store/actions';
import { connect } from 'react-redux';
import { When } from 'react-if';

function StoreFront(props) {
  const { catagory, cart } = props;
  return (
    <When condition={!cart.isCartOpen}>
      <Catagories />
      <Products
        activeCatagory={
          JSON.parse(localStorage.getItem('activeCatagory')) ||
          catagory.activeCatagory
        }
      />
    </When>
  );
}
let mapStateToProps = (state) => ({
  catagory: state.catagory,
  products: state.products,
  cart: state.cart,
});
let mapDispatchToProps = { getCatagories };
export default connect(mapStateToProps, mapDispatchToProps)(StoreFront);
