import { Modal } from '@mui/material';
import { connect } from 'react-redux';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { useState } from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
function Details(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: '50%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const { item } = props;
  return (
    <div>
      <Button onClick={handleOpen}>view Details</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Card
            sx={{
              style,
            }}
          >
            <CardMedia
              sx={{
                height: '100%',
              }}
              image={item.image}
              title={item.name}
            />
            <CardContent>
              <Typography gutterBottom variant='h2' component='h2'>
                {item.name}
              </Typography>
              <Typography variant='h5' color='textSecondary' component='p'>
                {item.description}
              </Typography>
              <Typography variant='h5' color='textSecondary' component='p'>
                price: ${item.price}
              </Typography>
              <br />
              <Button
                variant='contained'
                color='primary'
                onClick={() => {
                  handleClose();
                }}
              >
                close
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.products.products,
});
export default connect(mapStateToProps)(Details);
