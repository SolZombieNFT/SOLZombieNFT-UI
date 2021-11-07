import React, {useState} from "react";
import {
    Link,
    Box,
    Flex,
    Text,
    Stack,
    useColorModeValue,
} from "@chakra-ui/react";
import {NavLink as LinkRouter} from 'react-router-dom';
import Logo from "./Logo";
import "@fontsource/teko/400.css"
import "@fontsource/teko/700.css"
// @ts-ignore
import {Link as RSLink, animateScroll as scroll, Events, scrollSpy, scroller} from "react-scroll";
import {useScrollPosition} from '@n8tb1t/use-scroll-position'


const NavBar = (props: any) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggle: any = () => setIsOpen(!isOpen);

    return (

        <NavBarContainer {...props}>
            <LinkRouter to={'/'}
                        exact>
                <Logo/>
            </LinkRouter>
            <MenuToggle toggle={toggle} isOpen={isOpen}/>
            <MenuLinks isOpen={isOpen}/>
        </NavBarContainer>
    );
};

const CloseIcon = () => (
    <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
        <title>Close</title>
        <path
            fill="white"
            d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
        />
    </svg>
);

const MenuIcon = () => (
    <svg
        width="24px"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
    >
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
    </svg>
);

// @ts-ignore
const MenuToggle = ({toggle, isOpen}) => {
    return (
        <Box display={{base: "block", md: "none"}} cursor={'pointer'} onClick={toggle}>
            {isOpen ? <CloseIcon/> : <MenuIcon/>}
        </Box>
    );
};
// @ts-ignore
const MenuItem = ({children, isLast = null, to = "/", ...rest}) => {
    return (
        <Link>
            <Text display="block" {...rest}>
                {children}
            </Text>
        </Link>
    );
};
// @ts-ignore
const MenuLinks = ({isOpen}) => {
    // @ts-ignore
    return (
        <Box
            display={{base: isOpen ? "block" : "none", md: "block"}}
            flexBasis={{base: "100%", md: "auto"}}
        >
            <Stack
                spacing={8}
                align="center"
                justify={["center", "space-between", "flex-end", "flex-end"]}
                direction={["column", "row", "row", "row"]}
                pt={[4, 4, 0, 0]}
                as={'nav'}
                fontSize={{base: '2xl', sm: 'md', lg: '2xl'}}

            >

                <RSLink
                    activeClass="active"
                    to="home"
                    spy={true}
                    hashSpy={true}
                    smooth={true}
                    offset={-1000}
                    duration={850}

                    exact>
                    {/*@ts-ignore*/}
                    <MenuItem
                        px={2}
                        py={2}
                        rounded={'md'}
                        _hover={{
                            textDecoration: 'none',
                            bg: useColorModeValue('zombie.100', 'zombie.100'),
                        }} to="/">
                        HOME
                    </MenuItem>
                </RSLink>
                <RSLink
                    activeClass="active"
                    to="history"
                    spy={true}
                    hashSpy={true}
                    smooth={true}
                    // offset={-70}
                    duration={850}

                    exact>
                    {/*@ts-ignore*/}
                    <MenuItem
                        px={2}
                        py={2}
                        rounded={'md'}
                        _hover={{
                            textDecoration: 'none',
                            bg: useColorModeValue('zombie.100', 'zombie.100'),
                        }}>
                        HISTORY
                    </MenuItem>
                </RSLink>
                <RSLink
                    activeClass="active"
                    to="info"
                    spy={true}
                    hashSpy={true}
                    smooth={true}
                    // offset={-70}
                    duration={850}

                    exact>
                    {/*@ts-ignore*/}
                    <MenuItem
                        px={2}
                        py={2}
                        rounded={'md'}
                        _hover={{
                            textDecoration: 'none',
                            bg: useColorModeValue('zombie.100', 'zombie.100'),
                        }}>
                        INFO
                    </MenuItem>
                </RSLink>
                <RSLink
                    activeClass="active"
                    to="roadmap"
                    spy={true}
                    hashSpy={true}
                    smooth={true}
                    // offset={-70}
                    duration={850}

                    exact>
                    {/*@ts-ignore*/}
                    <MenuItem
                        px={2}
                        py={2}
                        rounded={'md'}
                        _hover={{
                            textDecoration: 'none',
                            bg: useColorModeValue('zombie.100', 'zombie.100'),
                        }}>
                        ROADMAP
                    </MenuItem>
                </RSLink>
                <LinkRouter to={'/mint'}
                            exact>
                    {/*@ts-ignore*/}
                    <MenuItem
                        px={2}
                        py={2}
                        rounded={'md'}
                        backgroundColor={'#101921'}
                        _hover={{
                            textDecoration: 'none',
                            bg: useColorModeValue('zombie.100', 'zombie.100'),
                        }}>
                        MINT NFT
                    </MenuItem>
                </LinkRouter>
            </Stack>
        </Box>
    );
};

// @ts-ignore
const NavBarContainer = ({children, ...props}) => {
    const [headerStyle, setHeaderStyle] = useState('rgba(0, 0, 0, 0)');

    useScrollPosition(
        ({prevPos, currPos}) => {
            let shouldBeStyle: any;
            if (currPos.y != prevPos.y) {
                shouldBeStyle = 'rgba(0, 0, 0, ' + (currPos.y * -1 / 1000) + ')';
            }

            if (JSON.stringify(shouldBeStyle) === JSON.stringify(headerStyle)) return

            setHeaderStyle(shouldBeStyle)
        },
        [headerStyle]
    )

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            px={16}
            py={5}
            mb={10}
            sx={{
                position: '-webkit-sticky', /* Safari */
                // @ts-ignore
                position: 'sticky',
                top: '0',
                'z-index': "999",
            }}
            bgColor={headerStyle}

            color={["white", "white", "primary.700", "primary.700"]}

            {...props}
        >
            {children}
        </Flex>
    );
};

export default NavBar;