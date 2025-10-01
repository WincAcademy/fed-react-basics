<div className='button-container'>
    {weatherObjects.map((weatherObject) => (
        <button key={weatherObject.weatherType}>
            {weatherObject.weatherType}
        </button>
    ))}
</div>