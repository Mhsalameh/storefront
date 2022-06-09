import { Typography } from '@mui/material';
import { connect } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
function Header(props) {
  const { cart } = props;
  return (
    <header>
      <Typography align='left' variant='h4'>
        Not A Real Store
      </Typography>
      <Typography position='absolute' top='0' right='0' variant='subtitle1'>
        <Link to='/'>
          <Button variant='filled'>
            <HomeIcon />
          </Button>
        </Link>
        <Link className='links' to='/cart'>
          <Button variant='filled'>
            <ShoppingCartIcon />
            {cart.numberOfItems}
          </Button>
        </Link>
      </Typography>
    </header>
  );
}
const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Header);
