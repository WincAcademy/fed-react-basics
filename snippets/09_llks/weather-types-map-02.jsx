<div className='button-container'>
    {weatherObjects.map((weatherObject) => (
        <button
            onClick={() => setWeather(weatherObject)}
        >
            {weatherObject.weatherType}
        </button>
    ))}
</div>