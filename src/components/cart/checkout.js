import { connect } from 'react-redux';
import { clearCart } from '../../store/cart';
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
import { updateProduct } from '../../store/products';
import CheckoutForm from './checkoutform';
import { When } from 'react-if';
function Checkout(props) {
  const { cart, clearCart, removeFromCart, updateProduct, total } = props;
  return (
    <div className='cart-container'>
      <div>
        <Typography variant='h4' gutterBottom>
          Cart
        </Typography>

        <TableContainer component={Paper}>
          <Table aria-label='simple table' style={{ position: 'relative' }}>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align='right'>Price</TableCell>
                <TableCell align='right'>Quantity</TableCell>
                <TableCell align='right'>Total</TableCell>
                <When condition={total}>
                  <TableCell align='right'>
                    <Button
                      style={{ position: 'absolute', right: '10px', top: 0 }}
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
                  </TableCell>
                </When>
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
                        updateProduct('increment', item);
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
      </div>
      <div>
        <CheckoutForm />
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  total: state.cart.total,
  cart: state.cart.items,
});
const mapDispatchToProps = {
  clearCart,
  removeFromCart,
  updateProduct,
};
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
