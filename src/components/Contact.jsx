import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import {
  Heading,
  Box,
  Flex,
  Text,
  VStack,
  Icon,
  Image,
  HStack,
} from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMailOpen, IoCall } from "react-icons/io5";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import AnimatedButton from "./assets/AnimatedButton";
import me from "../assets/images/NoBgEmoji.png";
import { motion } from "framer-motion";
import PageTitle from "./assets/PageTitle";

const GlobalStyles = createGlobalStyle`
  .commonColor {
    color: white;
  }
`;

const Section = styled.div`
  height: 100vh;
  width: 100vw;
  scroll-snap-align: center;
  color: whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
`;

const Container = styled.div`
  position: relative;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled(motion.div)`
  width: 80%;
  height: 100%;
  display: flex;
`;

const ContainerText = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const CircleContainer = styled(Box)`
  position: relative;
  width: 50px;
  height: 50px;
  background-color: #252525;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;
  text-decoration: none;
  color: inherit;

  &:hover {
    background-color: #d2a034;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

  .popover {
    position: absolute;
    left: -80px;
    top: 50%;
    transform: translateY(-50%);
    background-color: #d2a034;
    color: white;
    padding: 8px;
    border-radius: 4px;
    display: none;
    transition: all 0.3s ease;
  }

  &:hover .popover {
    display: block;
    transition: all 0.3s ease;
  }

  &.selected {
    background-color: #d2a034;
  }
`;

const detailsBox = [
  {
    icon: FaMapMarkerAlt,
    heading: "ADDRESS POINT",
    text: "BUCHAREST, ROMANIA",
  },
  { icon: IoMailOpen, heading: "MAIL ME", text: "mititeluadian9@gmail.com" },
  { icon: IoCall, heading: "CALL ME", text: "+40 756-973-748" },
];

const Contact = () => {
  return (
    <>
      <GlobalStyles />
      <Section>
        <Container>
          <PageTitle mainText="CONTACT" Text="GET IN" subText="TOUCH" />
        </Container>
        <Wrapper
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <ContainerText>
            <Box width="50%">
              <Heading size="lg" mb={4} className="commonColor">
                LET'S HAVE A CHAT !
              </Heading>
              <Text color="#c5c5c5" className="commonColor">
                Please don't hesitate to contact me. I'm eager to explore new
                projects, discuss creative ideas, or learn about opportunities
                to contribute to your vision. Let's keep the conversation alive
                and delve into the possibilities together.
              </Text>
            </Box>
            <Flex width="50%">
              <VStack align="start" spacing={6}>
                {detailsBox.map((item, index) => (
                  <HStack key={index} spacing={4}>
                    <Box>
                      <Icon as={item.icon} boxSize={10} color="#d2a034" />
                    </Box>
                    <VStack align="start">
                      <Heading
                        fontSize="sm"
                        color="#c5c5c5"
                        className="commonColor"
                      >
                        {item.heading}
                      </Heading>
                      <Text
                        color="#ffffff"
                        fontWeight="bold"
                        className="commonColor"
                      >
                        {item.text}
                      </Text>
                    </VStack>
                  </HStack>
                ))}
              </VStack>
            </Flex>
            <Flex width="50%">
              <a
                href="https://www.linkedin.com/in/adrian-mititelu-57aa8b264/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CircleContainer>
                  <Icon as={FaLinkedinIn} boxSize={6} />
                </CircleContainer>
              </a>
              <a
                href="https://github.com/AdrianM999"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CircleContainer>
                  <Icon as={FaGithub} boxSize={6} />
                </CircleContainer>
              </a>
            </Flex>
          </ContainerText>

          <Flex width="50%" flexDirection="column" gap="2rem">
            <Box>
              <Image src={me} align="top" borderRadius="full" />
            </Box>

            <Flex width="50%" justifyContent="center">
              <a
                href="mailto:mititeluadrian9@gmail"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AnimatedButton text="SEND MESSAGE" />
              </a>
            </Flex>
          </Flex>
        </Wrapper>
      </Section>
    </>
  );
};

export default Contact;
