import { connect } from 'react-redux';
import { Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { addToCart } from '../../store/cart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useParams } from 'react-router-dom';
import { getAllProducts, updateProduct } from '../../store/products';
import SimpleCart from '../cart/simplecart';
function Details(props) {
  const { products, getAllProducts, addToCart, updateProduct, cart } = props;
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  useEffect(() => {
    setProduct(products.find((product) => product.id === parseInt(id)));
  }, [products, id]);

  //render a product info page with the product info and a button to add to cart if the product is in stock
  //also show related products
  //the header of the page should be the product name
  return (
    <>
      {cart.items.length ? <SimpleCart /> : null}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          maxHeight: '600px',
          minHeight: '700px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row-reverse',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <div style={{}}>
            <Typography variant='h5'>{product?.name}</Typography>
            <Typography variant='body1'>{product?.description}</Typography>
            <Typography variant='body2'>
              {product?.inventory
                ? `${product.inventory} items In Stock`
                : 'Out of Stock'}
            </Typography>
            <Typography variant='body1'>${product?.price}</Typography>
          </div>
          <img
            src={product?.image}
            alt={product?.name}
            style={{
              width: '29%',
              height: '29%',
              objectFit: 'cover',
            }}
          />
        </Box>
        <Button
          variant='contained'
          onClick={() => {
            addToCart(product);
            updateProduct('decrement', product);
          }}
          sx={{
            marginTop: '1rem',
          }}
        >
          <AddShoppingCartIcon />
          Add to Cart
        </Button>
      </Box>
      <br />
    </>
  );
}

const mapStateToProps = (state) => ({
  products: state.products.products,
  cart: state.cart,
});
const mapDispatchToProps = { getAllProducts, updateProduct, addToCart };
export default connect(mapStateToProps, mapDispatchToProps)(Details);
