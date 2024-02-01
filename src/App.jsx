import React from "react";
import { ChakraProvider, Box, Flex } from "@chakra-ui/react";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/assets/Navbar";
import AnimatedRoutes from "./components/assets/AnimatedRoutes";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  .app-container {
    font-family: 'Roboto', sans-serif;
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #111111;
  display: flex;
  justify-content: space-between;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const App = () => {
  return (
    <ChakraProvider>
      <GlobalStyles />
      <Wrapper className="app-container">
        <AnimatePresence mode="wait">
          <Box width="95%">
            <AnimatedRoutes />
          </Box>
        </AnimatePresence>
        <Flex
          width="5%"
          position="sticky"
          top={0}
          bottom={0}
          justifyContent="center"
          alignItems="center"
        >
          <Navbar />
        </Flex>
      </Wrapper>
    </ChakraProvider>
  );
};

export default App;
