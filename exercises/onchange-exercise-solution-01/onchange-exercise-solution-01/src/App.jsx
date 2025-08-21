import './App.css'
import { WeatherIcon } from './components/WeatherIcon'
import { sunnyWeather, cloudyWeather } from './utils/data'
import { useState } from 'react'

export const App = () => {
    const [weather, setWeather] = useState(sunnyWeather);

    const changeWeather = () => {
        const selectElement = document.getElementById('weather-select');
        const selectedWeather = selectElement.value;
        if (selectedWeather === 'sunny') {
            setWeather(sunnyWeather);
        } else if (selectedWeather === 'cloudy') {
            setWeather(cloudyWeather);
        }
    };

    return (
        <>
            <h1>Winc Weather App</h1>
            { weather && <WeatherIcon weather={weather} /> }

            <select id="weather-select">
                <option value="sunny">Sunny</option>
                <option value="cloudy">Cloudy</option>
            </select>
            <button onClick={changeWeather}>
                Change Weather
            </button>
        </>
    )
}