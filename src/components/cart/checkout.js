import { connect } from 'react-redux';
import { getCart, clearCart } from '../../store/cart';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { removeFromCart } from '../../store/cart';
import { updateProduct } from '../../store/actions';
function Checkout(props) {
  const { cart, clearCart, removeFromCart, updateProduct, total } = props;
  return (
    <div>
      <Typography variant='h4' gutterBottom>
        Cart
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align='right'>Price</TableCell>
              <TableCell align='right'>Quantity</TableCell>
              <TableCell align='right'>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((item) => (
              <TableRow key={item.id}>
                <TableCell component='th' scope='row'>
                  {item.name}
                </TableCell>
                <TableCell align='right'>{item.price}</TableCell>
                <TableCell align='right'>{item.quantity}</TableCell>
                <TableCell align='right'>
                  {item.price * item.quantity}
                </TableCell>
                <TableCell align='right'>
                  <Button
                    variant='contained'
                    color='secondary'
                    onClick={() => {
                      removeFromCart(item.id);
                      updateProduct('rm', item);
                    }}
                  >
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant='h4' gutterBottom>
        Total: ${total}
      </Typography>
      <Button
        variant='contained'
        color='primary'
        onClick={() => {
          cart.forEach((item) => {
            updateProduct('return', item);
          });
          clearCart();
        }}
      >
        Clear Cart
      </Button>
    </div>
  );
}
const mapStateToProps = (state) => ({
  total: state.cart.total,
  cart: state.cart.items,
});
const mapDispatchToProps = {
  getCart,
  clearCart,
  removeFromCart,
  updateProduct,
};
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
