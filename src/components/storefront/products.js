import { connect } from 'react-redux';
import { useEffect } from 'react';
import { addProduct, getProducts } from '../../store/products';
import { getActiveCatagory } from '../../store/catagories';
import { increment } from '../../store/cart';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Products(props) {
  const { products, getProducts, activeCatagory, increment } = props;

  useEffect(() => {
    getProducts();
  }, [getProducts, products]);

  return (
    <div id='productCard'>
      {products.products.map((product, i) => {
        if (activeCatagory?.id === product.catId) {
          return (
            <Card
              key={i}
              sx={{
                maxWidth: '30%',
                minWidth: '20%',
                display: 'flex',
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
              </CardContent>
              <CardActions>
                <Button
                  size='small'
                  onClick={(e) => {
                    increment();
                  }}
                >
                  add to cart
                </Button>
                <Button size='small'>view details</Button>
              </CardActions>
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
  increment,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
