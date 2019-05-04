export default (state = [], action ) => {
  if (action.type === "FETCH_WEATHER"){
    return action.payload
  }
  return state;
}