import { Tag } from '@chakra-ui/react';

export const PortfolioTag = ({ children, ...props }) => {
    return (
        <Tag.Root
            p={2}
            size="sm"
            variant="solid"
            bgColor="blue.300"
            color="white"
            {...props}
        >
            <Tag.Label>
                {children}
            </Tag.Label>
        </Tag.Root>
    );
};