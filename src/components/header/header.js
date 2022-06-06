import { Typography } from '@mui/material';
import { connect } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from '@mui/material';
import { openCart, closeCart } from '../../store/cart';
function Header(props) {
  const { cart, openCart, closeCart } = props;
  return (
    <header>
      <Typography align='left' variant='h4'>
        Not A Real Store
      </Typography>
      <Typography position='absolute' top='0' right='0' variant='subtitle1'>
        <Button
          onClick={() => {
            cart.isCartOpen ? closeCart() : openCart();
          }}
        >
          <ShoppingCartIcon />
          {cart.numberOfItems} {cart.isCartOpen ? 'Close' : 'Open'}
        </Button>
      </Typography>
    </header>
  );
}
const mapStateToProps = (state) => ({
  cart: state.cart,
});
const mapDispatchToProps = {
  openCart,
  closeCart,
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
