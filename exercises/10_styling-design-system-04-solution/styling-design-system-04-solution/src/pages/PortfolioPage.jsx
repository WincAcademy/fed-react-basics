import { SimpleGrid } from '@chakra-ui/react';
import { PortfolioItemCard } from '../components/PortfolioItemCard';
import { portfolioItems } from '../utils/data';

export const PortfolioPage = ({ clickFn }) => (
    <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={{ base: 4, md: 6 }}>
        {portfolioItems.map((item) => (
            <PortfolioItemCard key={item.id} item={item} clickFn={clickFn} />
        ))}
    </SimpleGrid>
);
