import {
	Box,
	Container,
	SimpleGrid,
	Icon,
	Text,
	HStack,
	VStack,
} from '@chakra-ui/react';
import {StarIcon} from '@chakra-ui/icons';

// Replace test data with your own
const features = [
	{
		id: 1,
		text: 'The Project called Living Dead was created by a writing a smart contract on the Solana network. ',
	},
	{
		id: 2,
		text: 'Each character is unique, and has different property from each other.',
	},
	{
		id: 3,
		text: 'The pre-sale will consist of two stages, we will be announcing all the details about the pre-sale on our social media accounts and on our website.',
	},
	{
		id: 4,
		text: 'If there are still unpaid characters after a total 30 days from the pre-sale date, the remaining characters will be burned.',
	}
];


export default function InfoList() {
	return (
		<Box p={4}>
			<Container maxW={'6xl'} mt={10}>
				<SimpleGrid columns={{base: 1, md: 1, lg: 1}} spacing={10}>
					{features.map((feature) => (
						<HStack key={feature.id} align={'top'}>
							<Box color={'zombie.100'} px={2}>
								<Icon as={StarIcon}/>
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