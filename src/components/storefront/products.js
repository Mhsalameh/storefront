import { connect } from 'react-redux';

function Products(props) {
  props.catagory.catagories.map((catagory) => {
    if (catagory.id === props.value) {
      return (
        <div key={catagory.id}>
          <h2>products of {catagory.name}</h2>
        </div>
      );
    }
  });
}
const mapStateToProps = (state) => ({
  catagory: state.catagory,
});

export default connect(mapStateToProps)(Products);
