import { useState } from 'react'
import './App.css'
import { Background } from './components/Background'

function App() {
    const [color, setColor] = useState('red');

    const setColorRed = () => {
        setColor('red');
    }

    const setColorGreen = () => {
        setColor('green');
    }

    const setColorBlue = () => {
        // BUG: we forgot to specify 'blue' here and
        //      are now passing an empty value.
        setColor('blue');
    }

    return (
        <>
            <Background color={color} />
            <h1>Color Picker</h1>

            <button onClick={setColorRed}>
                Red
            </button>
            <button onClick={setColorGreen}>
                Green
            </button>
            <button onClick={setColorBlue}>
                Blue
            </button>
        </>
    )
}

export default App
