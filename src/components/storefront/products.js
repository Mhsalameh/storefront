import { connect } from 'react-redux';
import { useEffect } from 'react';
import { updateProduct } from '../../store/products';
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
import { getAllProducts } from '../../store/products';
import { Link } from 'react-router-dom';
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
                maxWidth: '40%',
                minWidth: '20%',
                display: 'flex',
                height: '50%',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: '2rem',
                borderRadius: '1rem',
              }}
              className='productCard'
            >
              <CardMedia
                component='img'
                image={product.image}
                alt={product.name}
                sx={{
                  objectFit: 'cover',
                  height: '100%',
                  width: '100%',
                  borderRadius: '20px 20px 0 0',
                }}
                className='productCard__image'
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
              <CardActions
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-evenly',
                }}
              >
                <Button
                  title='add to cart'
                  variant='contained'
                  size='small'
                  onClick={() => {
                    if (product.inventory > 0) {
                      addToCart(product);
                      updateProduct('decrement', product);
                    } else {
                      setAlert(true);
                    }
                  }}
                >
                  <AddShoppingCartIcon />
                </Button>
                <Link to={`/product/${product.id}`}>
                  <Button
                    title='view price and more'
                    variant='contained'
                    align='center'
                    size='small'
                  >
                    <Typography variant='subtitle'>More Details</Typography>
                  </Button>
                </Link>
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
  getActiveCatagory,
  addToCart,
  updateProduct,
  getAllProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
