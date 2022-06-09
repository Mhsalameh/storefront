import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../../store/products';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ProductModal = (props) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('https://via.placeholder.com/150');
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { addProduct, activeCatagory } = props;
  return (
    <div>
      <Button onClick={handleOpen}>add a new product</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <input
            placeholder='product name'
            type='text'
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type='number'
            placeholder='price'
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <input
            type='text'
            placeholder='description'
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <input
            type='text'
            placeholder='image url'
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
          <Button
            onClick={(e) => {
              addProduct({
                catagoryId: activeCatagory,
                name,
                description,
                price,
                image,
              });
            }}
          >
            add product
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({
  catagory: state.catagory,
  products: state.products,
});

const mapDispatchToProps = { addProduct };

export default connect(mapStateToProps, mapDispatchToProps)(ProductModal);
