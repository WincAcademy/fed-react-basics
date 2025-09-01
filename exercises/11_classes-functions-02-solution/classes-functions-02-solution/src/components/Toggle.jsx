import { useState } from 'react';

export const Toggle = () => {
    const [isToggleOn, setIsToggleOn] = useState(true);

    const handleClick = () => {
        setIsToggleOn(!isToggleOn);
    }

    return (
        <button onClick={handleClick}>
            {isToggleOn ? 'ON' : 'OFF'}
        </button>
    );
}