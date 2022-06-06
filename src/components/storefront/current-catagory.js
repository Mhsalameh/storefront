import { connect } from 'react-redux';
import { getActiveCatagory } from '../../store/catagories';
import { useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import SimpleCart from '../cart/simplecart';

function CurrentCatagory(props) {
  const { catagory, getActiveCatagory, value, cart } = props;

  useEffect(() => {
    getActiveCatagory(value);
  }, [getActiveCatagory, value]);
  return (
    <>
      {cart.items.length ? <SimpleCart /> : null}

      <Box
        display='flex'
        height='20vh'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
      >
        <Typography align='center' variant='h4'>
          {catagory?.activeCatagory?.name}
        </Typography>
        <Typography align='center' variant='subtitle1'>
          {catagory?.activeCatagory?.description}
        </Typography>
      </Box>
    </>
  );
}
const mapStateToProps = (state) => ({
  catagory: state.catagory,
  cart: state.cart,
});
const mapDispatchToProps = {
  getActiveCatagory,
};
export default connect(mapStateToProps, mapDispatchToProps)(CurrentCatagory);
