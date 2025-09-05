export function Greeting(props) {
    console.log('Greeting props:', props);

    return <h1>Hello, {props.name}</h1>;
}