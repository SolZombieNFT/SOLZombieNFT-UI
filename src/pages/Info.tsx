import {
    Container,
    Stack,
    Box,
    Heading,
    Text,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react';
import bg1 from '../assets/img/bg.jpg';
// @ts-ignore
import GlitchText from 'react-glitch-effect/core/GlitchText';
import InfoList from '../components/InfoList';
import Footer from '../components/Footer';


export default function Info() {
    return (
        <section id={'info'}>

            {/*<Container maxW={'full'} backgroundImage={bg1}*/}
            {/*           backgroundPosition="inherit"*/}
            {/*           backgroundRepeat="round">*/}
            <Stack
                align={'center'}
                spacing={{base: 6, md: 8}}
                py={{base: 20, md: 28}}
                direction={{base: 'column', md: 'row'}}>
                <Stack flex={1} spacing={{base: 5, md: 10}}>

                    <Heading
                        lineHeight={1}
                        fontWeight={200}
                        align={'center'}
                        fontSize={{base: '8xl', sm: '8xl', lg: '8xl'}}>
                        <Text
                            as={'span'}
                            position={'relative'}
                        >
                            <b>INFO</b>
                        </Text>
                    </Heading>

                    <Heading
                        lineHeight={1}
                        fontWeight={200}
                        align={'center'}
                        fontSize={{base: '4xl', sm: '2xl', lg: '6xl'}}>
                        <Text>
                            <b>Enlightenment & Updates</b>
                        </Text>
                    </Heading>

                    <Text color={'zombie.100'} lineHeight={1}
                          align={'center'}
                          fontWeight={50}
                          fontSize={{base: 'lg', sm: 'md', lg: 'lg'}}>
                        <b>(This area can be updated if it is necessary.)
                        </b>
                    </Text>
                    <InfoList/>
                </Stack>
            </Stack>
            <Container maxW={{base: 'sm', md: '2xl', xl: '6xl'}}>
                <Heading

                    lineHeight={1}
                    fontWeight={200}
                    align={'center'}
                    fontSize={{base: '4xl', lg: '6xl'}}>
                    <Text
                        as={'span'}
                        position={'relative'}
                    >
                        <b>F.A.Q.</b>
                    </Text>
                </Heading>
                <Accordion defaultIndex={[0]}>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="center"
                                     fontSize={{base: '4xl', sm: '3xl', lg: '4xl'}}>
                                    Total supply demand?
                                </Box>
                                <AccordionIcon/>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} textAlign="center"
                                        fontSize={{base: '3xl', sm: '2xl', lg: '3xl'}}>
                            9.999
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="center"
                                     fontSize={{base: '4xl', sm: '3xl', lg: '4xl'}}>
                                    Mint Cost?
                                </Box>
                                <AccordionIcon/>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} textAlign="center"
                                        fontSize={{base: '3xl', sm: '2xl', lg: '3xl'}}>
                            <p>Pre-sale will consist of two stages:</p>

                            <p>1. Pre-sale mint cost 0.99 Solana (3999 Pieces)</p>

                            <p>2. Pre-sale mint cost 1.99 Solana (6000 Pieces)</p>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="center"
                                     fontSize={{base: '4xl', sm: '3xl', lg: '4xl'}}>
                                    Why are there two pre-sale processes?
                                </Box>
                                <AccordionIcon/>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} textAlign="center"
                                        fontSize={{base: '3xl', sm: '2xl', lg: '3xl'}}>
                            We want to sell the products with more advantageous costs to our users who have followed and supported us from the beginning.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="center"
                                     fontSize={{base: '4xl', sm: '3xl', lg: '4xl'}}>
                                    What is maximum purchase limit?
                                </Box>
                                <AccordionIcon/>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} textAlign="center"
                                        fontSize={{base: '3xl', sm: '2xl', lg: '3xl'}}>
                            There is no limit on the number of purchases as many as you want if you are lucky and fast enough.

                        </AccordionPanel>
                    </AccordionItem>

                </Accordion>
            </Container>

            {/*<Footer/>*/}
            {/*</Container>*/}

        </section>
    );

}


