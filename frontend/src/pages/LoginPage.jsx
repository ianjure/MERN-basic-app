import { Container, VStack, Heading, Box, Input, Button, useToast, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";

const LoginPage = () => {
    // State variables
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [currentUser, setCurrentUser] = useState(null);

    // Function that will return current user and also update current username
    const getCurrentUser = async function () {
        const currentUser = await Parse.User.current();
        // Update state variable holding current user
        setCurrentUser(currentUser);
        return currentUser;
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
                    Login
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
                            name="username"
                            placeholder="Username"
                            value={newProduct.name}
                            onChange={(event) => setUsername(event.target.value)}
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