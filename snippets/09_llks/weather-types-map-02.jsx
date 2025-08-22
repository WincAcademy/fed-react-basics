<div className='button-container'>
    {weatherTypes.map((type) => (
        <button
            onClick={() => setWeather(type)}
        >
            {type.weatherType}
        </button>
    ))}
</div>