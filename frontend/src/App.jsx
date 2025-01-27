import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";

function App() {
  const { fetchProducts, products } = useProductStore();
  
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
      <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      {products.length === 0 && ( // if no products are found
      <Text
          fontSize={"xl"}
          fontWeight={"bold"}
          color={"gray.500"}
          textAlign={"center"}
          >
          No products found 😢{" "}
          <Link to={"/create"}>
              <Text
                  as={"span"}
                  color={"blue.500"}
                  _hover={{ textDecoration: "underline" }}
                  >
                  Create one now!
              </Text>
          </Link>
      </Text>
      )}
    </Box>
  )
};

export default App;
