import { Box, Button, Heading, HStack, VStack, IconButton, Image, Input, Text, useColorModeValue, useDisclosure, useToast,
         Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { useProductStore } from "../store/product.js";
import { useState } from "react";

const ProductCard = ({product}) => {
    const [updatedProduct, setUpdatedProduct] = useState(product); // updatedProduct is an object with three properties: name, price, and image

    const textColor = useColorModeValue("gray.800", "white"); // for text color: black in light mode, white in dark mode
    const bgColor = useColorModeValue("white", "gray.800"); // for background color: white in light mode, gray.800 in dark mode

    const toast = useToast(); // use the toast hook from Chakra UI
    const { deleteProduct, updateProduct } = useProductStore(); // get the created deleteProduct hook
    const { isOpen, onOpen, onClose } = useDisclosure(); // get the isOpen, onOpen, and onClose hooks from Chakra UI

    const handleDeleteProduct = async (id) => { // function to handle deleting a product
        const {success, message} = await deleteProduct(id); // call the deleteProduct hook

        if(!success) { // if the product was not deleted successfully, show an error toast
            toast({
                title: "Error",
                description: message,
                status: "error",
                duration: 2500,
                isClosable: true
            });
        } else { // if the product was deleted successfully, show a success toast
            toast({
                title: "Success",
                description: message,
                status: "success",
                duration: 2500,
                isClosable: true
            });
        }
    };

    const handleUpdateProduct = async (id, updatedProduct) => { // function to handle updating a product
		const { success, message } = await updateProduct(id, updatedProduct); // call the updateProduct hook
		onClose(); // close the modal

		if (!success) {
			toast({
				title: "Error",
				description: message,
				status: "error",
				duration: 2500,
				isClosable: true
			});
		} else {
			toast({
				title: "Success",
				description: "Product updated successfully.",
				status: "success",
				duration: 2500,
				isClosable: true
			});
		}
	};

    return (
        <Box
            shadow={"lg"}
            rounded={"lg"}
            overflow={"hidden"}
            transition={"all 0.3s"}
            _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
            bg={bgColor}
            >
            <Image
                src={product.image}
                alt={product.name}
                h={48}
                w={"full"}
                objectFit={"cover"}
                >
            </Image>

            <Box p={4}>
                <Heading
                    as={"h3"}
                    size={"md"}
                    mb={2}
                    >
                    {product.name}
                </Heading>

                <Text
                    fontWeight={"bold"}
                    fontSize={"xl"}
                    color={textColor}
                    mb={4}
                    >
                    ${product.price}
                </Text>

                <HStack spacing={2}>
                    <IconButton
                        icon={<EditIcon />}
                        onClick={onOpen}
                        colorScheme={"blue"}
                        />
                    <IconButton
                        icon={<DeleteIcon />}
                        onClick={() => handleDeleteProduct(product._id)}
                        colorScheme={"red"}
                        />
                </HStack>
            </Box>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />

                <ModalContent>
                    <ModalHeader>
                        Update Product
                    </ModalHeader>
                    <ModalCloseButton />

                    <ModalBody>
                        <VStack spacing={4}>
                            <Input
                                name='name'
                                placeholder='Product Name'
                                value={updatedProduct.name}
                                onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
                                />
                            <Input
                                name='price'
                                placeholder='Price'
                                type='number'
                                value={updatedProduct.price}
                                onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
                                />
                            <Input
                                name='image'
                                placeholder='Image URL'
                                value={updatedProduct.image}
                                onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
                                />
                        </VStack>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            colorScheme='blue'
                            mr={3}
                            onClick={() => handleUpdateProduct(product._id, updatedProduct)}
                            >
                            Update
                        </Button>
                        <Button colorScheme='red' onClick={onClose}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
};

export default ProductCard;