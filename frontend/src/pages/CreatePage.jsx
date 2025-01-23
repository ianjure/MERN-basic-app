import { Container, VStack, Heading, Box, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";

const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({ // newProduct is an object with three properties: name, price, and image
        name: "",
        price: "",
        image: ""
    });

    return (
        <Container maxW={"container.sm"}>
            <VStack
                spacing={8}
                >
                <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
                    Create a new Product
                </Heading>
                <Box
                    w={"full"}
                    bg={useColorModeValue("white", "gray.800")}
                    p={6}
                    rounded={"lg"}
                    shadow={"lg"}
                >
                </Box>
            </VStack>
        </Container>
    )
};

export default CreatePage;