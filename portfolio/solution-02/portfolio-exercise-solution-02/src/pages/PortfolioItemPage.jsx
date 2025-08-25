import {
    Center,
    Image,
    Card,
    CardBody,
    Stack,
    Heading,
    Text,
    Flex,
    Button,
} from '@chakra-ui/react';
import { PortfolioTag } from '../components/PortfolioTag';

export const PortfolioItemPage = ({ item, clickFn }) => {
    return (
        <Center bgColor="blue.100" h="100vh" flexDirection="column">
            <Card borderRadius="xl" w="3xl" h="3xl">
                <CardBody>
                    <Image h="md" w="100%" src={item.imageUrl} borderRadius="xl" />
                    <Stack mt="6" spacing="3">
                        <Heading size="md">{item.title}</Heading>
                        <Text>{item.description}</Text>
                        <Flex gap={2}>
                            {item.skills.map((skill) => (
                            <PortfolioTag key={skill} size="md">
                                {skill}
                            </PortfolioTag>
                            ))}
                        </Flex>
                        <Button w="fit-content" onClick={() => clickFn()}>
                            Back to overview
                        </Button>
                    </Stack>
                </CardBody>
            </Card>
        </Center>
    );
};