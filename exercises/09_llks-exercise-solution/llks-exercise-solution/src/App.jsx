import './App.css'
import { WeatherIcon } from './components/WeatherIcon'
import {
    sunnyWeather,
    cloudyWeather,
    rainyWeather
} from './utils/data'
import { useState } from 'react'

export const App = () => {
    const [weather, setWeather] = useState(sunnyWeather);
    const weatherObjects = [
        sunnyWeather,
        cloudyWeather,
        rainyWeather
    ];

    return (
        <>
            <h1>Winc Weather App</h1>
            { weather && <WeatherIcon weather={weather} /> }
            
            <div className='button-container'>
                {weatherObjects.map((weatherObject) => (
                    <button
                        key={weatherObject.weatherType} 
                        onClick={() => setWeather(weatherObject)}
                    >
                        {weatherObject.weatherType}
                    </button>
                ))}
            </div>
        </>
    )
}