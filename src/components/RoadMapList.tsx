import {
    Box,
    Container,
    SimpleGrid,
    Icon,
    Text,
    HStack,
    VStack,
} from '@chakra-ui/react';
import {ArrowForwardIcon} from '@chakra-ui/icons';

// Replace test data with your own
const features = [
    {
        id: 1,
        text: 'The shape and property of Living Dead will be determined by talented and imaginative graphic designers. (Continues)',
    },
    {
        id: 2,
        text: 'Smart Agreement overview and rules will be made and be shared. (Continues)',
    },
    {
        id: 3,
        text: 'Smart Agreement completely prepared, the last edits will be made on test web. (Continues)',
    },
    {
        id: 4,
        text: 'Partnerships will occur during the social media marketing phase.(Continues)',
    },
    {
        id: 5,
        text: 'The pre-sale date will be determined. (Continues)',
    },
    {
        id: 6,
        text: 'The pre-sale occurred. (Continues)',
    },
    {
        id: 7,
        text: 'The listing will be made in Solana NFT marketplace like Solsean.io, Solanart.io.(Continues)',
    },
    {
        id: 8,
        text: 'The payment which is taken from swap fees will be shared monthly with NFT holders. (Continues)',
    },
];


export default function RoadMapList() {
    return (
        <Box p={4}>
            <Container maxW={'6xl'} mt={10}>
                <SimpleGrid columns={{base: 1, md: 1, lg: 1}} spacing={10}>
                    {features.map((feature) => (
                        <HStack key={feature.id} align={'top'}>
                            <Box color={'white'} px={2}>
                                <Icon as={ArrowForwardIcon}/>
                            </Box>
                            <VStack align={'start'}>
                                <Text fontSize={{base: '3xl', sm: '2xl', lg: '3xl'}}
                                      fontWeight={500}>{feature.text}</Text>
                            </VStack>
                        </HStack>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
}