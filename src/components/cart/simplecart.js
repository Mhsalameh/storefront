import { connect } from 'react-redux';
import { removeFromCart, getCart } from '../../store/cart';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { updateProduct } from '../../store/actions';
function SimpleCart(props) {
  const { cart, removeFromCart, updateProduct } = props;
  useEffect(() => {
    getCart();
  }, [cart]);

  return (
    <Card className='simple-cart'>
      <Box className='simple-cart'>
        <List className='simple-cart'>
          {cart.map((item) => (
            <ListItem key={item.id}>
              <ListItemText primary={item.name} />
              <ListItemText primary={'#' + item.quantity} />
              <ListItemIcon>
                <ListItemButton>
                  <RemoveShoppingCartIcon
                    onClick={() => {
                      removeFromCart(item.id);
                      updateProduct('increment', item);
                    }}
                  />
                </ListItemButton>
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>
    </Card>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.items,
  };
};
const mapDispatchToProps = { removeFromCart, getCart, updateProduct };
export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);
