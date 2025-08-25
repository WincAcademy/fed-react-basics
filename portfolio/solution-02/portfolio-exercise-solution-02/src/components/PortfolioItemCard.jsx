import {
    Card,
    Image,
    Stack,
    Heading,
    Text,
    Flex,
} from '@chakra-ui/react';
import { PortfolioTag } from './PortfolioTag';

export const PortfolioItemCard = ({ item, clickFn }) => {
    return (
        <Card.Root
            borderRadius="xl"
            w="sm"
            h="30rem"
            onClick={() => clickFn(item)}
            cursor="pointer"
            _hover={{ transform: 'scale(1.01)' }}
        >
            <Card.Body>
                <Image h={64} w="sm" src={item.imageUrl} borderRadius="xl" />
                <Stack mt="6" spacing="3">
                    <Heading size="md">{item.title}</Heading>
                    <Text>{item.summary}</Text>
                    <Flex gap={2}>
                        {item.skills.map((skill) => (
                            <PortfolioTag key={skill}>{skill}</PortfolioTag>
                        ))}
                    </Flex>
                </Stack>
            </Card.Body>
        </Card.Root>
    );
};