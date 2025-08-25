import { Heading } from '@chakra-ui/react';

export const Title = ({ text, ...props }) => {
    return (
        <Heading
            size="md"
            mb={4}
            {...props}
        >
            {text}
        </Heading>
    );
};