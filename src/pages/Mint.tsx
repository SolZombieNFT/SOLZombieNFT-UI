import {useEffect, useState, Component} from "react";
import {
    Box,
    chakra,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    Container,
    Stack,
    Heading,
    Text,
    FormControl,
    FormLabel,
    FormHelperText,
    Center,
    Grid,
    GridItem,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper, Button,
    Badge,
} from '@chakra-ui/react';

import bg1 from '../assets/img/main-banner-bg2.jpg';
// @ts-ignore
import GlitchText from 'react-glitch-effect/core/GlitchText';
import Footer from '../components/Footer';

import {WalletMultiButton, WalletDisconnectButton} from "@solana/wallet-adapter-react-ui";
import useCandyMachine from "../hooks/useCandyMachine";
import useWalletBalance from "../hooks/useWalletBalance";
import {useWallet} from "@solana/wallet-adapter-react";

import {Toaster} from "react-hot-toast";
import Countdown from "react-countdown";
import useWalletNfts from "../hooks/useWalletNFTS";
import AnNFT from "../components/NFT";
import Header from '../components/HeaderForMintPage';

const MINT_PRICE_SOL: number = parseFloat(process.env.REACT_APP_PUBLIC_MINT_PRICE!);
require('../style/style.css');

interface StatsCardProps {
    title: string;
    stat: string;
}

function StatsCard(props: StatsCardProps) {
    const {title, stat} = props;
    return (
        <Stat

            px={{base: 2, md: 4}}
            py={'5'}
            shadow={'xl'}
            border={'1px solid'}
            borderColor={'blackAlpha.300'}
            boxShadow={'dark-lg'}
            rounded={'lg'}>
            <Flex justifyContent={'center'} textAlign={'center'}>
                <Box>
                    <StatLabel fontSize={'4xl'} fontWeight={'medium'} isTruncated>
                        {title}
                    </StatLabel>
                    <StatNumber fontSize={'6xl'} fontWeight={'medium'}>
                        {stat}
                    </StatNumber>
                </Box>
                <Box
                    my={'auto'}
                    alignContent={'center'}>
                </Box>
            </Flex>
        </Stat>
    );
}

export default function Home() {
    const [balance] = useWalletBalance();
    const {
        isSoldOut,
        mintStartDate,
        isMinting,
        startMint,
        startMintMultiple,
        nftsData,
    } = useCandyMachine();

    const [isLoading, nfts] = useWalletNfts();

    const {connected} = useWallet();

    const [isMintLive, setIsMintLive] = useState(false);

    useEffect(() => {
        console.log(new Date(mintStartDate).getTime());
        console.log(Date.now());
        console.log(new Date(mintStartDate).getTime() < Date.now());
        if (new Date(mintStartDate).getTime() < Date.now()) {
            setIsMintLive(true);
        }
    }, []);

    const MintMany = () => {
        const [mintCount, setMintCount] = useState(1);

        return (
            <Box maxW="md">

                <Center>
                    <Text
                        fontSize={{base: '4xl', sm: '3xl', lg: '4xl'}}
                        colorScheme="red"> YOUR BALANCE {balance.toFixed(4)} SOL

                    </Text>
                </Center>

                <Center><FormLabel fontSize={{base: '3xl', sm: '3xl', lg: '4xl'}}><b>AMOUNT</b></FormLabel></Center>

                <NumberInput
                    w="full"
                    max={nftsData.itemsRemaining}
                    min={1}
                    size="lg"
                    borderColor={'zombie.100'}
                    focusBorderColor={'zombie.100'}
                    disabled={isMinting}
                    allowMouseWheel={true}
                    onChange={(val) =>
                        setMintCount(val as any)
                    }
                >
                    <NumberInputField fontSize={{base: '2xl', sm: '2xl', lg: '3xl'}}
                                      value={mintCount}
                    />
                    <NumberInputStepper>
                        <NumberIncrementStepper/>
                        <NumberDecrementStepper/>
                    </NumberInputStepper>
                </NumberInput>


                <Button my={1} w="full" onClick={() => startMintMultiple(mintCount)}
                        disabled={isMinting} colorScheme="red" fontSize={'xl'}>
                    {isMinting ? "loading" : `MINT ${mintCount} NFT`}
                </Button>

                <Center>
                    <Text
                        my={4}
                        fontSize={{base: '4xl', sm: '3xl', lg: '4xl'}}
                        colorScheme="red">TOTAL {(mintCount * MINT_PRICE_SOL).toFixed(4)} SOL </Text>
                </Center>
                <Center>
                    <WalletDisconnectButton/>
                </Center>
            </Box>
        );
    };

    return (
        <>
            <Header/>
            <Container maxW={'full'} backgroundImage={bg1}
                       backgroundAttachment={'fixed'}
                       backgroundPosition={'center'}
                       backgroundSize={'cover'}>
                <Toaster/>
                <Stack
                    mt={-200}
                    align={'center'}
                    spacing={{base: 6, md: 8}}
                    py={{base: 20, md: 20}}
                    direction={{base: 'column', md: 'row'}}>
                    <Stack flex={1} spacing={{base: 5, md: 10}} mt={200}>
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
                                    <b>MINT NFT</b>
                                </Text>
                            </Heading>
                        </GlitchText>
                        <Text color={'white'} lineHeight={1.0}
                              align={'center'}
                              fontWeight={200}
                              fontSize={{base: '3xl', sm: '2xl', lg: '3xl'}}>
                            There are no bonding curves, no price tiers here. Buying a fairly distributed SOL ZOMBIE NFT costs currently {MINT_PRICE_SOL} SOL.
                        </Text>

                    </Stack>
                </Stack>

                {connected ? (
                    <>
                        {new Date(mintStartDate).getTime() < Date.now() ? (
                            <>
                                {isSoldOut ? (
                                    <>
                                        <Center>
                                            <Text fontSize={'6xl'} mb={250}>SOLD OUT</Text>
                                        </Center>
                                    </>
                                ) : (
                                    <>
                                        <FormControl id="amount" mb={'75'}>
                                            <Center>
                                                <MintMany/>
                                            </Center>

                                        </FormControl>

                                    </>
                                )}
                            </>
                        ) : (isMintLive ? (
                                <>
                                    <FormControl id="amount" mb={'75'}>
                                        <Center>
                                            <MintMany/>
                                        </Center>
                                    </FormControl>

                                </>
                            ) : (
                                <Center>
                                    <Text fontSize={'4xl'} mb={300}>
                                        <Countdown
                                            date={mintStartDate}
                                            onMount={({completed}) => completed && setIsMintLive(true)}
                                            onComplete={() => setIsMintLive(true)}
                                        />
                                    </Text>
                                </Center>
                            )
                        )}
                    </>
                ) : (
                    <Box mb={'265'}>
                        <Center fontSize={'4xl'}>CONNECT WALLET TO MINT</Center>
                        <Center> <WalletMultiButton/></Center>
                    </Box>
                )}


                {/*<Box maxW="lg" mx={'auto'} pt={5} px={{base: 2, sm: 12, md: 17}}>*/}
                {/*    <SimpleGrid columns={{base: 3, md: 3}} spacing={{base: 3}}>*/}
                {/*        <StatsCard*/}
                {/*            title={'Available'}*/}
                {/*            stat={nftsData.itemsRemaining}*/}
                {/*        />*/}
                {/*        <StatsCard*/}
                {/*            title={'Minted'}*/}
                {/*            stat={nftsData.itemsRedeemed}*/}
                {/*        />*/}
                {/*        <StatsCard*/}
                {/*            title={'Total'}*/}
                {/*            stat={nftsData.itemsAvailable}*/}
                {/*        />*/}
                {/*    </SimpleGrid>*/}
                {/*</Box>*/}
                <br/>
                <Footer/>
            </Container>
        </>
    );
}
