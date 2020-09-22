export default (state = [], action) => {
  switch (action.type) {
    case "notification":
      return action.payload;
    default:
      return state;
  }
};
