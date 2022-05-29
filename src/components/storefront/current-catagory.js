import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';
import {
  deleteCatagory,
  addSubCatagory,
  getCatagory,
} from '../../store/catagories';
import { useEffect, useState } from 'react';
function CurrentCatagory(props) {
  const [subCatagory, setSubCatagory] = useState('');
  const { catagory, deleteCatagory, addSubCatagory, getCatagory, value } =
    props;
  const cat = catagory.catagories[value];
  useEffect(() => {
    getCatagory();
  }, [subCatagory]);
  return (
    <>
      <h2>{cat.name}</h2>
      <h3>{cat.description}</h3>
      <div>
        <input
          type='text'
          placeholder='sub catagory name'
          onChange={(e) => {
            setSubCatagory({
              catagoryId: value,
              id: uuid(),
              name: e.target.value,
              image: 'https://via.placeholder.com/150',
            });
          }}
        />
        <button
          onClick={() => {
            addSubCatagory({
              ...subCatagory,
              description: 'description',
            });
          }}
        >
          Add Sub Catagory
        </button>
      </div>
      <div>
        {cat.subCatagories.map((subCat, i) => (
          <div key={i}>
            <h2>{subCat.name}</h2>
            <h3>{subCat.description}</h3>
            <img src={subCat.image} />
          </div>
        ))}
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          deleteCatagory(cat.id);
        }}
      >
        Delete Catagory
      </button>
    </>
  );
}
const mapStateToProps = (state) => ({
  catagory: state.catagory,
});
const mapDispatchToProps = { deleteCatagory, addSubCatagory, getCatagory };
export default connect(mapStateToProps, mapDispatchToProps)(CurrentCatagory);
