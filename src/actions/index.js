const apiKey=process.env.REACT_APP_WEATHER_API_KEY;


export const fetchWeather = (zip) => async dispatch =>{ 
    const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?zip=' + zip + ',us&appid=' + apiKey +'&units=imperial')
    const json = await response.json()
    dispatch({type: "FETCH_WEATHER", payload: json.list })
};