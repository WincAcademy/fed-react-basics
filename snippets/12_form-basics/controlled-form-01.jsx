export const ControlledInputForm = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <form>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
            />
        </form>
    );
}