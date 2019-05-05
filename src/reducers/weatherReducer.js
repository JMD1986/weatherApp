export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_WEATHER":
      return action.payload;
    case "FETCH_WEATHER_FAIL":
      return action.error;
    default:
      return state;
  }
};
