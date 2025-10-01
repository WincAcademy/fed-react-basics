import { Card, Stack, Heading, Text, Flex, Button, Box, Image } from '@chakra-ui/react';
import { PortfolioTag } from '../components/PortfolioTag';

export const PortfolioItemPage = ({ item, clickFn }) => (
    <Card.Root borderRadius="xl">
        <Card.Body>
            <Stack direction={{ base: 'column', md: 'row' }} gap={{ base: 4, md: 8 }}>
                <Box flex="1" minW={{ base: '100%', md: '50%' }} aspectRatio={{ base: 16 / 9, md: 4 / 3 }} overflow="hidden" borderRadius="xl">
                    <Image src={item.imageUrl} w="full" h="full" objectFit="cover" />
                </Box>
                <Stack flex="1" gap={{ base: 3, md: 4 }}>
                    <Heading size={{ base: 'md', lg: 'lg' }}>{item.title}</Heading>
                    <Text fontSize={{ base: 'sm', md: 'md' }}>{item.description}</Text>
                    <Flex gap={2} wrap="wrap">
                        {item.skills.map((s) => (
                            <PortfolioTag key={s} size={{ base: 'sm', md: 'md' }}>{s}</PortfolioTag>
                        ))}
                    </Flex>
                    <Button w={{ base: 'full', sm: 'fit-content' }} onClick={() => clickFn(undefined)}>
                        Back to overview
                    </Button>
                </Stack>
            </Stack>
        </Card.Body>
    </Card.Root>
);
