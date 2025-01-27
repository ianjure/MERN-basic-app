import { Container, Flex, Text, HStack, Button, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { PlusSquareIcon } from "@chakra-ui/icons";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { HiLogout } from "react-icons/hi";

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode(); // for toggling between light and dark mode

    return (
        <Container maxW={"100vw"} px={4}>
            <Flex
                h={16}
                alignItems={"center"}
                justifyContent={"space-between"}
                flexDir={{ base: "column", md: "row" }}
                >
                <Text
                    fontSize={{ base: "22", sm: "28" }}
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                    textAlign={"center"}
                    bgGradient={"linear(to-r, cyan.400, blue.500)"}
                    bgClip={"text"}
                    >
                    <Link to={"/"}>
                        Store 🛒
                    </Link>
                </Text>

                <HStack spacing={4} alignItems={"center"}>
                    <Link to={"/create"}>
                        <Button>
                            <PlusSquareIcon fontSize={20}/>
                        </Button>
                    </Link>
                    <Button onClick={toggleColorMode}>
                        {colorMode === "light" ? <IoMoon size="20" /> : <LuSun size="20" />}
                    </Button>
                    <Link to={"/login"}>
                        <Button>
                            <HiLogout size="20" />
                        </Button>
                    </Link>
                </HStack>
            </Flex>
        </Container>
    )
};

export default Navbar;