import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Image, Center, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel,
} from '@chakra-ui/react';
import logo from '../assets/img/banner-img1.png';
import bg2 from '../assets/img/main-banner-bg2.jpg';
import Footer from '../components/Footer';
import bg1 from "../assets/img/bg.jpg";
import {Toaster} from "react-hot-toast";

import HomePage from '../pages/Home';
import Mint from '../pages/Mint';
import Info from '../pages/Info';
import History from '../pages/History';
import Roadmap from '../pages/Roadmap';
import Header from '../components/Header';
// @ts-ignore
import {scrollSpy, events} from 'react-scroll'


export default function Home() {
    console.log(scrollSpy);
    console.log(events);
    return (
        <>
            <Header/>
            <Container maxW={'full'} backgroundImage={bg2}
                       backgroundAttachment={'fixed'}
                       backgroundPosition={'center'}
                       backgroundSize={'cover'}>
                <Toaster/>
                <HomePage/>
            </Container>
            <Container maxW={'full'} backgroundImage={bg1}
                       backgroundPosition="inherit"
                       backgroundRepeat="round">

                <History/>
                <Info/>
                <Roadmap/>
                <Footer/>
            </Container>
        </>
    );

}



