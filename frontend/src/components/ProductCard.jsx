import { Box, Image, Heading, Text, HStack, IconButton, useColorModeValue } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

const ProductCard = ({product}) => {
    const textColor = useColorModeValue("gray.800", "white"); // for text color: black in light mode, white in dark mode
    const bgColor = useColorModeValue("white", "gray.800"); // for background color: white in light mode, gray.800 in dark mode

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
                    <IconButton icon={<EditIcon />} colorScheme={"blue"}/>
                    <IconButton icon={<DeleteIcon />} colorScheme={"red"}/>
                </HStack>
            </Box>
        </Box>
    )
};

export default ProductCard;