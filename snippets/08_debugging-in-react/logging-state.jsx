export function Counter() {
    const [count, setCount] = React.useState(0);

    function handleClick() {
        setCount(count + 1);

        // This will log the old state value,
        // because state updates are asynchronous!
        console.log("After update:", count);
    }

    return <button onClick={handleClick}>{count}</button>;
}
