import { connect } from 'react-redux';
import { getCatagory, getActiveCatagory } from '../../store/catagories';
import { useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import ProductModal from './newProductModal';
function CurrentCatagory(props) {
  const { catagory, getActiveCatagory, getCatagory, value } = props;

  useEffect(() => {
    getCatagory();
  }, [catagory]);
  useEffect(() => {
    getActiveCatagory(value);
  }, [value]);
  return (
    <>
      {/* <ProductModal activeCatagory={catagory.activeCatagory?.id} /> */}

      <Box
        display='flex'
        height='20vh'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
      >
        <Typography align='center' variant='h4'>
          {catagory?.activeCatagory?.name}
        </Typography>
        <Typography align='center' variant='subtitle1'>
          {catagory?.activeCatagory?.description}
        </Typography>
      </Box>
    </>
  );
}
const mapStateToProps = (state) => ({
  catagory: state.catagory,
});
const mapDispatchToProps = {
  getCatagory,
  getActiveCatagory,
};
export default connect(mapStateToProps, mapDispatchToProps)(CurrentCatagory);