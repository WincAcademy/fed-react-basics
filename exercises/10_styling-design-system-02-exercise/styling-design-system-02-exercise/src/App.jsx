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

    // Adjust the <SimpleGrid> component such that it holds as many buttons per row as possible,
    // without having the buttons turn red. Make use of the base, sm, md, lg and xl breakpoints.
    return (
        <SimpleGrid gap={4} padding={4} columns={{
            base: 2,
            sm: 3,
            md: null,
            lg: null,
            xl: null
        }}>
            {buttons}
        </SimpleGrid>
    )
}