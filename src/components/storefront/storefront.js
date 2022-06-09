import Catagories from './catagories';
import Products from './products';
import { connect } from 'react-redux';

function StoreFront(props) {
  const { catagory } = props;
  return (
    <>
      <Catagories />
      <Products
        activeCatagory={
          JSON.parse(localStorage.getItem('activeCatagory')) ||
          catagory.activeCatagory
        }
      />
    </>
  );
}
let mapStateToProps = (state) => ({
  catagory: state.catagory,
  products: state.products,
});
export default connect(mapStateToProps)(StoreFront);
