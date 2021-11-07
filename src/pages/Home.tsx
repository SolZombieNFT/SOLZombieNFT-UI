import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Image,
} from '@chakra-ui/react';
import logo from '../assets/img/banner-img1.png';
import bg2 from '../assets/img/main-banner-bg2.jpg';
// @ts-ignore
import GlitchText from 'react-glitch-effect/core/GlitchText';
import Footer from '../components/Footer';
import Header from "../components/Header";

// @ts-ignore
export default function Home() {
    return (
        <section id={"home"}>
            {/*<Container maxW={'full'} backgroundImage={bg2}*/}
            {/*           backgroundPosition="inherit"*/}
            {/*           backgroundRepeat="round">*/}

            <Stack
                mt={-100}
                h="100vh"
                align={'center'}
                spacing={{base: 6, md: 8}}
                py={{base: 20, md: 28}}
                direction={{base: 'column', md: 'row'}}>

                <Stack flex={1} spacing={{base: 5, md: 10}}>
                    <GlitchText color1={'#00FFA3'} color2={'#DC1FFF'}>
                        <Heading
                            lineHeight={1}
                            fontWeight={200}
                            align={'center'}
                            fontSize={{base: '8xl', sm: '8xl', lg: '8xl'}}>
                            <Text
                                as={'span'}
                                position={'relative'}
                            >
                                <b>SOL ZOMBIE NFT</b>
                            </Text>
                        </Heading>
                    </GlitchText>
                    <Text color={'white'} lineHeight={1.0}
                          align={'center'}
                          fontWeight={300}
                          fontSize={{base: '3xl', sm: '2xl', lg: '3xl'}}>
                        <b>Welcome to “The World of Living Dead”</b>
                    </Text>
                </Stack>
                <Flex
                    flex={1}
                    justify={'center'}
                    align={'center'}
                    position={'relative'}
                    w={'full'}>

                    <Box
                        position={'relative'}
                        height={'full'}
                        // width={'full'}
                        overflow={'hidden'}>
                        <Image
                            alt={'Zombie Hero Image'}
                            /*@ts-ignore*/
                            fit={'full'}
                            align={'center'}
                            w={'100%'}
                            h={'100%'}
                            src={logo}
                        />
                    </Box>
                </Flex>
            </Stack>
            {/*<Footer/>*/}
            {/*</Container>*/}

        </section>
    );

}



