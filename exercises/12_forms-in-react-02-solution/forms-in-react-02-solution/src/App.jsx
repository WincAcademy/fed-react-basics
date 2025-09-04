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
    NativeSelect
} from '@chakra-ui/react'

export const App = () => {
    const [weatherId, setWeatherId] = useState(0);
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
                <WeatherIcon weather={weatherObjects[weatherId]} />

                <form>
                <Field.Root>
                    <Field.Label>
                        Weather Type
                    </Field.Label>

                    <NativeSelect.Root
                        value={weatherId}
                        onChange={(e) => setWeatherId(e.target.value)}
                    >
                        <NativeSelect.Field>
                            <option value="" disabled>
                                Select a weather type
                            </option>
                            
                            {weatherObjects.map((weather, index) => (
                                <option key={index} value={index}>
                                    {weather.weatherType}
                                </option>
                            ))}
                        </NativeSelect.Field>
                        <NativeSelect.Indicator/>
                    </NativeSelect.Root>
                </Field.Root>
                </form>
            </Stack>
        </Center>
    )
}