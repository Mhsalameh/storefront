import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { connect } from 'react-redux';
import { updateProduct } from '../../store/products';
import { clearCart } from '../../store/cart';
import Swal from 'sweetalert2';

function CheckoutForm(props) {
  const { clearCart } = props;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [phone, setPhone] = useState('');
  const [card, setCard] = useState('');
  const [checkoutInfo, setCheckoutInfo] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    phone: '',
    card: '',
  });
  const { cart } = props;
  const total = cart.total;
  const handleSubmit = (e) => {
    e.preventDefault();
    setCheckoutInfo({
      name: name,
      email: email,
      address: address,
      city: city,
      zip: zip,
      phone: phone,
      card: card,
    });
    if (total !== 0) {
      Swal.fire({
        title: `Your total is $${total}`,
        text: `Please confirm your order ${checkoutInfo.name}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, place order!',
      }).then((result) => {
        if (result.isConfirmed) {
          console.log(result);
          clearCart();
          Swal.fire('Order Placed!', 'Your order has been placed!', 'success');
        }
      });
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Your cart is empty!',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };
  return (
    <form className='checkout-form' onSubmit={handleSubmit}>
      <Box>
        <TextField
          id='outlined-basic'
          label='Name'
          variant='outlined'
          value={props.name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
      </Box>
      <Box>
        <TextField
          className='input-text'
          id='outlined-basic'
          label='Address'
          variant='outlined'
          value={props.address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          required
        />
      </Box>
      <Box>
        <TextField
          className='input-text'
          id='outlined-basic'
          label='City'
          variant='outlined'
          value={props.city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          required
        />
      </Box>
      <Box>
        <TextField
          className='input-text'
          id='outlined-basic'
          label='Card'
          variant='outlined'
          onChange={(e) => {
            setCard(e.target.value);
          }}
          required
        />
      </Box>
      <Box>
        <TextField
          className='input-text'
          id='outlined-basic'
          label='Zip'
          variant='outlined'
          value={props.zip}
          onChange={(e) => {
            setZip(e.target.value);
          }}
        />
      </Box>
      <Box>
        <TextField
          className='input-text'
          id='outlined-basic'
          label='Email'
          variant='outlined'
          value={props.email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
      </Box>
      <Box>
        <TextField
          className='input-text'
          id='outlined-basic'
          label='Phone'
          variant='outlined'
          value={props.phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          required
        />
      </Box>
      <Box>
        <Button variant='contained' color='primary' type='submit'>
          Place Order
        </Button>
      </Box>
    </form>
  );
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
const mapDispatchToProps = { clearCart, updateProduct };
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutForm);
