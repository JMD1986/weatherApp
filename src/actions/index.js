const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchWeather = zip => async dispatch => {
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?zip=" +
      zip +
      ",us&appid=" +
      apiKey +
      "&units=imperial"
  )
    .then(response => {
      return response.json();
    })
    .then(json => dispatch({ type: "FETCH_WEATHER", payload: json.list }))
    .catch(err => {
      dispatch({ type: "FETCH_WEATHER_FAIL", error: err });
      dispatch({ type: "ADD_ERROR", error: err });
    });
};
