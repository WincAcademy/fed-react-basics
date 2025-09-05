export function Button() {
    const handleClick = () => {
        console.log('Button was clicked!');
    }

    return (
        <button onClick={handleClick}>
            Click me
        </button>
    );
}