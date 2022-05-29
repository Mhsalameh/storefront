import { Box, Tabs, Tab } from '@mui/material';
import { useState, useEffect } from 'react';
import CurrentCatagory from './current-catagory';
import {
  addCatagory,
  getCatagory,
  getActiveCatagory,
} from '../../store/catagories';
import { connect } from 'react-redux';
import { When } from 'react-if';
const Catagories = (props) => {
  const [value, setValue] = useState(0);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const { catagory, addCatagory, getCatagory, getActiveCatagory } = props;
  useEffect(() => {
    getCatagory();
  }, [catagory]);
  useEffect(() => {
    getActiveCatagory(value);
  }, [value]);

  function handleChange(event, newValue) {
    setValue(newValue);
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
          <Tab label='Add Catagory' />
        </Tabs>
      </Box>
      <When condition={value === catagory.catagories.length}>
        <Box>
          <input
            type='text'
            placeholder='catagory name'
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type='text'
            placeholder='catagory description'
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              addCatagory({
                id: value,
                name: name,
                description: description,
                subCatagories: [],
              });
            }}
          >
            Add Catagory
          </button>
        </Box>
      </When>
      <When condition={value !== catagory.catagories.length}>
        <CurrentCatagory />
      </When>
    </div>
  );
};

const mapStateToProps = (state) => ({
  catagory: state.catagory,
});
const mapDispatchToProps = { addCatagory, getCatagory, getActiveCatagory };

export default connect(mapStateToProps, mapDispatchToProps)(Catagories);
