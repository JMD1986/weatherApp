export default (state = [], action) => {
  switch (action.type) {
    case "ADD_ERROR":
      return state.concat([action.error]);
    default:
      return state;
  }
};
