// import { connect } from 'react-redux';
// import { removeFromCart } from '../../store/cart';
// function SimpleCart(props) {
//   const { cart, removeFromCart } = props;

//   return (
//     <>
//       <h1>Cart</h1>
//       <ul>
//         {cart.items.map((item) => (
//           <div>
//             <li key={item.id}>{item.name}</li>
//             <button onClick={() => removeFromCart(item)}>Remove</button>
//           </div>
//         ))}
//       </ul>
//     </>
//   );
// }

// const mapStateToProps = (state) => {
//   return {
//     cart: state.cart.items,
//   };
// };
// const mapDispatchToProps = { removeFromCart };
// export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);
