import { Box, Flex, Heading, HStack, Button, Spacer, Container } from '@chakra-ui/react';
import { ColorModeToggle } from './ui/ColorModeToggle'

export const Header = () => {
    return (
        <Box
            as="header"
            bg="blue.500"
            color="white"
            position="sticky"
            top={0}
            zIndex="sticky"
            shadow="sm"
        >
            <Container maxW="7xl">
                <Flex h={16} align="center">
                    <Heading size="md">My Portfolio</Heading>

                    <Spacer />

                    <HStack spacing={6}>
                        <Button variant="ghost" color="white" _hover={{ color: "black" }} _dark={{ _hover: { color: "white" } }}>Home</Button>
                        <Button variant="ghost" color="white" _hover={{ color: "black" }} _dark={{ _hover: { color: "white" } }}>Projects</Button>
                        <Button variant="ghost" color="white" _hover={{ color: "black" }} _dark={{ _hover: { color: "white" } }}>About</Button>
                        <Button variant="ghost" color="white" _hover={{ color: "black" }} _dark={{ _hover: { color: "white" } }}>Contact</Button>
                    </HStack>

                    <ColorModeToggle />
                </Flex>
            </Container>
        </Box>
    );
};
