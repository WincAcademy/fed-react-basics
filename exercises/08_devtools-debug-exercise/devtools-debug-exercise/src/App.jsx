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
        setColor();
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
