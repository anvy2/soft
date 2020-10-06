export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_NOTICES':
      return action.payload;
    default:
      return state;
  }
};
