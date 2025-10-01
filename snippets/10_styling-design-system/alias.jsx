import { Container as MyContainer } from './components/Container';

export const App = () => {
    // We now need to use MyContainer instead of Container!
    return (
        <MyContainer>
            <p>Hello world!</p>
        </MyContainer>
    )
};