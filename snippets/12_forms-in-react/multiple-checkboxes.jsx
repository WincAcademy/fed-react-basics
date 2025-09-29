import { useState } from 'react';

export const CheckboxForm = () => {
    const [selected, setSelected] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        setSelected(prev =>
            prev.includes(value)
                ? prev.filter(v => v !== value)
                : [...prev, value]
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Selected:', selected);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input
                    type="checkbox"
                    value="apple"
                    checked={selected.includes('apple')}
                    onChange={handleChange}
                />
                Apple
            </label>
            <label>
                <input
                    type="checkbox"
                    value="banana"
                    checked={selected.includes('banana')}
                    onChange={handleChange}
                />
                Banana
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};
