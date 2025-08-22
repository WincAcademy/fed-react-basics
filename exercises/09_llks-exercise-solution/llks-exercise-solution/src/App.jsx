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
    const weatherTypes = [
        sunnyWeather,
        cloudyWeather,
        rainyWeather
    ];

    return (
        <>
            <h1>Winc Weather App</h1>
            { weather && <WeatherIcon weather={weather} /> }
            
            <div className='button-container'>
                {weatherTypes.map((type) => (
                    <button 
                        key={type.weatherType} 
                        onClick={() => setWeather(type)}
                    >
                        {type.weatherType}
                    </button>
                ))}
            </div>
        </>
    )
}