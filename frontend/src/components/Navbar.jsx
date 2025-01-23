import { PlusSquareIcon } from '@chakra-ui/icons';
import { Container, Flex, HStack, Button, Text } from '@chakra-ui/react';
import React from 'react';

const Navbar = () => {
  return (
    <Container
        maxW={"1140px"}
        px={4}
        >
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
            <HStack
                spacing={4}
                alignItems={"center"}
                >
                <Link to={"/create"}>
                    <Button>
                        <PlusSquareIcon fontSize={20}/>
                    </Button>
                </Link>
            </HStack>
        </Flex>
    </Container>
  )
};

export default Navbar;