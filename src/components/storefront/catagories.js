import { Box, Tabs, Tab } from '@mui/material';
import { useState, useEffect } from 'react';
import CurrentCatagory from './current-catagory';
import { getActiveCatagory, getCatagories } from '../../store/catagories';
import { connect } from 'react-redux';
// import { When } from 'react-if';
const Catagories = (props) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem('currentTap')) || 0
  );
  const { catagory, getActiveCatagory, getCatagories } = props;

  useEffect(() => {
    let activeCatagory = JSON.parse(localStorage.getItem('activeCatagory'));
    if (!activeCatagory) {
      getCatagories(1);
    }
    getCatagories();
  }, [getCatagories]);

  function handleChange(event, newValue) {
    setValue(newValue);
    localStorage.setItem('currentTap', JSON.stringify(newValue));
    getActiveCatagory(newValue + 1);
  }

  return (
    <div>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
        >
          {catagory.catagories.map((cat, i) => (
            <Tab key={i + catagory.catagories.length} label={cat.name} />
          ))}
        </Tabs>
      </Box>
      <CurrentCatagory value={value} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  catagory: state.catagory,
});
const mapDispatchToProps = { getCatagories, getActiveCatagory };

export default connect(mapStateToProps, mapDispatchToProps)(Catagories);
