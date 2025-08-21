import './App.css'
import { WeatherIcon } from './components/WeatherIcon'
import { sunnyWeather, cloudyWeather } from './utils/data'
import { useState } from 'react'

export const App = () => {
    const [weather, setWeather] = useState(sunnyWeather);

    const changeWeather = (event) => {
        const selectedWeather = event.target.value;
        
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

            <select onChange={changeWeather}>
                <option value="sunny">Sunny</option>
                <option value="cloudy">Cloudy</option>
            </select>
        </>
    )
}