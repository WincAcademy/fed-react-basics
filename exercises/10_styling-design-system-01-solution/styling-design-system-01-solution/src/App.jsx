import { WeatherIcon } from './components/WeatherIcon'
import {
    sunnyWeather,
    cloudyWeather,
    rainyWeather
} from './utils/data'
import { useState } from 'react'
import {
    Heading,
    Button,
    Center,
    Stack,
    Group
} from '@chakra-ui/react'

export const App = () => {
    const [weather, setWeather] = useState(sunnyWeather);
    const weatherObjects = [
        sunnyWeather,
        cloudyWeather,
        rainyWeather
    ];

    return (
        <Center height="100vh">
            <Stack>
                <Heading
                    size="xl"
                    color="blue.200"
                    textAlign="center"
                    fontStyle="italic"
                >
                    Winc Weather App
                </Heading>
                { weather && <WeatherIcon weather={weather} /> }

                <Group>
                    {weatherObjects.map((weatherObject) => (
                        <Button
                            key={weatherObject.weatherType} 
                            onClick={() => setWeather(weatherObject)}
                        >
                            {weatherObject.weatherType}
                        </Button>
                    ))}
                </Group>
            </Stack>
        </Center>
    )
}