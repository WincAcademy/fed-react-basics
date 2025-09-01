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
    Input
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
                    size="2xl"
                    color="blue.400"
                    textAlign="center"
                    fontStyle="italic"
                >
                    Winc Weather App
                </Heading>
                { weather && <WeatherIcon weather={weather} /> }

                <Field.Root>
                    <Field.Label>
                        Weather Type
                    </Field.Label>
                    
                    <NativeSelect.Root
                        onChange={
                            (e) => setWeather(
                                weatherObjects[e.target.value]
                            )
                        }
                    >
                        <NativeSelect.Field>
                            {weatherObjects.map((weatherObj, index) => (
                                <option
                                    key={index}
                                    value={index}
                                >
                                    {weatherObj.weatherType}
                                </option>
                            ))}
                        </NativeSelect.Field>

                        <NativeSelect.Indicator />
                    </NativeSelect.Root>
                </Field.Root>
            </Stack>
        </Center>
    )
}