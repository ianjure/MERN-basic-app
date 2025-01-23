import { Container, VStack, Heading, Box, Input, Button, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";

const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({ // newProduct is an object with three properties: name, price, and image
        name: "",
        price: "",
        image: "",
    });

    const handleAddProduct = () => {
        console.log(newProduct);
    };

    return (
        <Container maxW={"container.sm"}>
            <VStack spacing={2}>
                <Heading
                    as={"h1"}
                    size={"2xl"}
                    textAlign={"center"}
                    mt={12}
                    mb={4}
                    >
                    Create New Product
                </Heading>

                <Box
                    w={"full"}
                    bg={useColorModeValue("white", "gray.800")}
                    p={6}
                    rounded={"lg"}
                    shadow={"lg"}
                    >
                    <VStack spacing={4}>
                        <Input
                            name="name"
                            placeholder="Product Name"
                            value={newProduct.name}
                            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                            />
                        <Input
                            name="price"
                            placeholder="Price"
                            type="number"
                            value={newProduct.price}
                            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                            />
                        <Input
                            name="image"
                            placeholder="Image URL"
                            value={newProduct.image}
                            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                            />

                        <Button colorScheme="blue" onClick={handleAddProduct} w="full">
                            Add Product
                        </Button>
                    </VStack>
                </Box>
            </VStack>
        </Container>
    )
};

export default CreatePage;