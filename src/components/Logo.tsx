import React from "react"
import {Box, Image} from "@chakra-ui/react"
import logo from "../assets/img/logo.png";

export default function Logo(props: any) {
    return (
        <Box {...props}>
            <Image
                alt={'Sol Zombie Logo'}
                h={'70'}
                src={logo}
            />
        </Box>
    )
}
