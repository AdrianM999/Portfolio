import React from "react";
import {
  Heading,
  Image,
  Box,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import styled from "styled-components";
import me2 from "../assets/images/meBG.png";
import Timeline from "./assets/Timeline";
import AnimatedButton from "./assets/AnimatedButton";
import { motion } from "framer-motion";

const Section = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(75deg, #d2a034 25%, #161616 25%, #161616 100%);
`;

const LeftContainer = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RightContiner = styled(motion.div)`
  width: 65vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerText = styled.div`
  height: 100%;
  width: 90%;
  gap: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Section
      initial={{ height: 0 }}
      animate={{ height: "100vh" }}
      exit={{ y: "window.innerHeight" }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <LeftContainer>
        <Box height="800px" width="600px" position="relative">
          <Image
            as="img"
            src={me2}
            height="100%"
            width="100%"
            objectFit="cover"
            backgroundColor="black"
            borderRadius="3rem"
            boxShadow="black 0px 1px 2px 0px, black 0px 2px 6px 2px"
          />
        </Box>
      </LeftContainer>
      <RightContiner
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <ContainerText>
          <Box width="100%" display="flex" gap="1rem" justifyContent="center">
            <Box height="5vh" display="flex" alignItems="center">
              <hr
                style={{
                  width: "2rem",
                  backgroundColor: "#d2a034",
                  height: ".25rem",
                  border: "none",
                }}
              />
            </Box>
            <Flex gap={5} flexDirection="column">
              <Heading size="2xl" zIndex="1" color="#d2a034">
                I'M ADRIAN MITITELU.
              </Heading>

              <Heading size="xl" color="#fafaf5">
                Frontend Developer
              </Heading>
            </Flex>
          </Box>
          <Box width="45%" display="flex">
            <AnimatedButton onClick={onOpen} text="MORE ABOUT ME" />
          </Box>
        </ContainerText>
      </RightContiner>

      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent bg="transparent">
          <ModalCloseButton color="black" backgroundColor="white" />
          <ModalBody
            display="flex"
            justifyContent="center"
            alignItems="center"
            background="rgba(0, 0, 0, 0.5)"
            backdrop-filter="blur(10px)"
          >
            <Box>
              <Timeline />
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Section>
  );
};

export default Home;
