import { Typography } from '@mui/material';
import { connect } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function Header(props) {
  const { cart } = props;
  return (
    <header>
      <Typography align='left' variant='h4'>
        Not A Real Store
      </Typography>
      <Typography align='right' variant='subtitle1'>
        <ShoppingCartIcon /> {cart}
      </Typography>
    </header>
  );
}
const mapStateToProps = (state) => ({
  cart: state.cart,
});
export default connect(mapStateToProps)(Header);
