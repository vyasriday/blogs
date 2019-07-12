export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USER':
      return state.find(user => user.id === action.payload.id)
        ? state
        : [...state, action.payload];
    default:
      return state;
  }
};
