import {
    ResponsiveButton
} from './components/ResponsiveButton';
import { 
    SimpleGrid
} from '@chakra-ui/react'

export const App = () => {
    // Do not change the below code
    const buttons = [];
    for (let i = 1; i <= 128; i++) {
        buttons.push(
            <ResponsiveButton key={i}>
                Button #{i}
            </ResponsiveButton>
        );
    }

    return (
        <SimpleGrid gap={4} padding={4} columns={{
            base: 2,
            sm: 3,
            md: 4,
            lg: 6,
            xl: 8
        }}>
            {buttons}
        </SimpleGrid>
    )
}