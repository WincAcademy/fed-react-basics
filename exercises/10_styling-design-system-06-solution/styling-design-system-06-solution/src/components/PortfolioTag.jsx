import { Tag } from '@chakra-ui/react';

export const PortfolioTag = ({ children, ...props }) => {
    return (
        <Tag.Root
            p={{ base: 1.5, md: 2 }}
            size={{ base: 'sm', md: 'md' }}
            variant="solid"
            bg="blue.300"
            color="black"
            {...props}
        >
            <Tag.Label>{children}</Tag.Label>
        </Tag.Root>
    );
};
