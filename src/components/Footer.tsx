import {
    Link,
    Box,
    Flex,
    Text,
    Center, Image, Spacer,
    chakra,
    VisuallyHidden,
} from "@chakra-ui/react";
import socials4 from '../assets/img/twitter.png';
import socials5 from '../assets/img/discord.png';
import {ReactNode} from 'react';
import {FaMediumM, FaMailBulk} from 'react-icons/fa';

const SocialButton =
    ({
         children,
         label,
         href,
         target,
     }: {
        children: ReactNode;
        label: string;
        href: string;
        target: string;
    }) => {
        return (
            <chakra.button
                bg={'whiteAlpha.100'}
                w={12}
                h={12}
                mx={4}
                mb={4}
                cursor={'pointer'}
                as={'a'}
                href={href}
                target={target}
                display={'inline-flex'}
                alignItems={'center'}
                justifyContent={'center'}
                transition={'background 0.3s ease'}
                _hover={{
                    bg: 'zombie.100',
                }}>
                <VisuallyHidden>{label}</VisuallyHidden>
                {children}
            </chakra.button>
        );
    };
export default function Footer() {

    return (
        <Flex mt={125} pb={50} px={90} direction={'column'}>
            <Box>
                <Center>
                    <Link
                        href="https://twitter.com/SolZombieNFT"
                        target={'_blank'}
                    >
                        <Image
                            _hover={{
                                transform: 'scale(1.1)',
                                transition: 'all 1.0s'
                            }}
                            h={{base: '50', sm: '50', lg: '70'}}
                            cursor={'pointer'}
                            px={{base: '15', sm: '15', lg: '30'}}
                            alt={'Twitter Logo'}
                            src={socials4}
                        />
                    </Link>
                    <Link
                        href="https://discord.com/invite/VbbxGrUmdA"
                        target={'_blank'}
                        ml={{base: '0', lg: '350'}}
                    >
                        <Image
                            _hover={{
                                transform: 'scale(1.1)',
                                transition: 'all 1.0s'
                            }}
                            h={{base: '50', sm: '50', lg: '70'}}
                            cursor={'pointer'}
                            px={{base: '15', sm: '15', lg: '30'}}
                            alt={'Discord Logo'}
                            src={socials5}
                        />
                    </Link>
                </Center>
            </Box>
            <Box p="2" textAlign={"center"} mt={5}>
                <Text
                    fontSize={'2xl'}
                >
                    ©2021 SOL ZOMBIE All rights reserved.
                </Text>
                <Spacer/>
                <Center mt={5}>
                    <SocialButton label={'Mail'} href={'mailto:contact@solzombie.com'}
                                  target={'_blank'}>
                        <FaMailBulk/>
                    </SocialButton>
                    <SocialButton label={'Medium'} href={'https://medium.com/@SolZombie_NFT'}
                                  target={'_blank'}>
                        <FaMediumM/>
                    </SocialButton>
                </Center>
            </Box>

            <Spacer/>

        </Flex>

    );
}
