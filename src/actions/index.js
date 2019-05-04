export const fetchWeather = () => async dispatch =>{ 
    const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?zip=37377,us&appid=f6a6fec7e553937429cc047053a9c580&units=imperial')
    const json = await response.json()
    dispatch({type: "FETCH_WEATHER", payload: json.list })
};