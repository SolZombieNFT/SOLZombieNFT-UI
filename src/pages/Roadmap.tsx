import {
    Container,
    Stack,
    Heading,
    Text,
} from '@chakra-ui/react';
import bg1 from '../assets/img/bg.jpg';
// @ts-ignore
import GlitchText from 'react-glitch-effect/core/GlitchText';
import RoadMapList from '../components/RoadMapList';
import Footer from '../components/Footer';


export default function Roadmap() {
    return (
        <section id={'roadmap'}>

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
                            <b>ROADMAP</b>
                        </Text>
                    </Heading>

                    <RoadMapList/>

                </Stack>

            </Stack>

            {/*<Footer/>*/}
            {/*</Container>*/}

        </section>
    );
}


