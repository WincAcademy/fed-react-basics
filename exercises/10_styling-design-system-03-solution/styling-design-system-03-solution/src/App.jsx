import { useState } from 'react';
import { Container } from '@chakra-ui/react';
import { Header } from './components/Header';
import { PortfolioPage } from './pages/PortfolioPage';
import { PortfolioItemPage } from './pages/PortfolioItemPage';

export const App = () => {
    const [selectedItem, setSelectedItem] = useState();

    return (
        <>
            <Header />
            <Container as="main" maxW="7xl" py={{ base: 6, md: 10 }}>
                {selectedItem ? (
                    <PortfolioItemPage item={selectedItem} clickFn={setSelectedItem} />
                ) : (
                    <PortfolioPage clickFn={setSelectedItem} />
                )}
            </Container>
        </>
    );
};
