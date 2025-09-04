import { WeatherIcon } from './components/WeatherIcon'
import {
    sunnyWeather,
    cloudyWeather,
    rainyWeather
} from './utils/data'
import { useState } from 'react'
import {
    Heading,
    Center,
    Stack,
    Field,
    NativeSelect,
    Button
} from '@chakra-ui/react'

export const App = () => {
    const [weather, setWeather] = useState(sunnyWeather);
    const weatherObjects = [
        sunnyWeather,
        cloudyWeather,
        rainyWeather
    ];

    const changeWeather = (e) => {
        e.preventDefault();
        const selectedIndex = e.target.elements['weather-select'].value;
        setWeather(weatherObjects[selectedIndex]);
    }

    return (
        <Center height="100vh">
            <Stack>
                <Heading
                    size="2xl"
                    color="blue.400"
                    textAlign="center"
                    fontStyle="italic"
                >
                    Winc Weather App
                </Heading>
                { weather && <WeatherIcon weather={weather} /> }

                <form onSubmit={changeWeather}>
                <Field.Root>
                    <Field.Label>
                        Weather Type
                    </Field.Label>

                    <NativeSelect.Root>
                        <NativeSelect.Field name="weather-select">
                            <option disabled>
                                Select a weather type
                            </option>
                            
                            {weatherObjects.map((weather, index) => (
                                <option key={index} value={index}>
                                    {weather.weatherType}
                                </option>
                            ))}
                        </NativeSelect.Field>
                        <NativeSelect.Indicator/>

                        <Button type="submit">Change</Button>
                    </NativeSelect.Root>
                </Field.Root>
                </form>
            </Stack>
        </Center>
    )
}