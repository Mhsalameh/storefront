import { connect } from 'react-redux';
import { useEffect } from 'react';
import { addProduct, getProducts, updateProduct } from '../../store/actions';
import { getActiveCatagory } from '../../store/catagories';
import { addToCart } from '../../store/cart';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Alert from '@mui/material/Alert';
import { useState } from 'react';
import Details from '../products/details';
import { getAllProducts } from '../../store/actions';
function Products(props) {
  const [alert, setAlert] = useState(false);
  const { products, activeCatagory, addToCart, updateProduct, getAllProducts } =
    props;

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  return (
    <div id='productCard'>
      {products.products.map((product, i) => {
        if (activeCatagory?.id === product.catagoryId) {
          return (
            <Card
              key={product.id}
              sx={{
                maxWidth: '30%',
                minWidth: '20%',
                display: 'flex',
                height: '50%',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: '2rem',
              }}
            >
              <CardMedia
                component='img'
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography
                  align='center'
                  gutterBottom
                  variant='h5'
                  component='div'
                >
                  {product.name}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {product.description}
                </Typography>
                <Typography
                  align='center'
                  variant='body2'
                  color='text.secondary'
                >
                  {product.inventory > 0
                    ? 'In Stock: ' + product.inventory
                    : 'Out of Stock'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  onClick={() => {
                    if (product.inventory > 0) {
                      addToCart(product);
                      updateProduct('decrement', product);
                    } else {
                      setAlert(true);
                    }
                  }}
                >
                  <AddShoppingCartIcon /> Add to cart
                </Button>
                <Details item={product} />
                <div className='hide'>
                  <button
                    onClick={() => {
                      updateProduct('increment', product);
                    }}
                  >
                    increment inventory
                  </button>
                </div>
              </CardActions>
              {alert && product.inventory < 1 && (
                <Alert
                  severity='error'
                  onClose={() => setAlert(false)}
                  action={
                    <Button
                      size='small'
                      onClick={() => setAlert(false)}
                      color='primary'
                    >
                      Close
                    </Button>
                  }
                >
                  Sorry, we are out of stock!
                </Alert>
              )}
            </Card>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

const mapStateToProps = (state) => ({
  catagory: state.catagory,
  products: state.products,
  cart: state.cart,
});
const mapDispatchToProps = {
  addProduct,
  getProducts,
  getActiveCatagory,
  addToCart,
  updateProduct,
  getAllProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
