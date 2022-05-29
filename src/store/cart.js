export default function cart(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}
export const increment = () => {
  return { type: 'INCREMENT' };
};
export const decrement = () => {
  return { type: 'DECREMENT' };
};
