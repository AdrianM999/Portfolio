import React from "react";
import styled from "styled-components";

import { Heading, Box, Text, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

import CV from "../assets/CV.pdf";

import InfoBoxes from "./assets/InfoBoxes";
import AnimatedButton from "./assets/AnimatedButton";
import icons from "./assets/iconsData";
import ChakraDev from "./assets/ChakraDev";
import ExperienceInfo from "./assets/ExperienceInfo";
import PageTitle from "./assets/PageTitle";

const IconBox = ({ category }) => {
  const categoryIcons = icons[category];

  return (
    <Box
      width="80%"
      height="100%"
      p={5}
      border="1px solid #252525"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="0px 1px 4px #252525"
    >
      <Heading as="h2" size="md" mb="1.5rem" color="#d2a034">
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </Heading>
      <Flex flexWrap="wrap" justifyContent="space-evenly" gap="1rem">
        {categoryIcons.map(({ id, title, icon: Icon }) => (
          <Flex
            key={id}
            alignItems="center"
            flexDirection="column"
            mr={4}
            mb={2}
          >
            <Icon size={24} color="white" />
            <Text ml={2} color="white">
              {title}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

const Section = styled(motion.div)`
  width: 100vw;
  height: 250vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5rem;

  .title {
    color: white;
  }
`;

const PersonalinfoContainer = styled(motion.div)`
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContainerWrapper = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
`;

const TextContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const ContainerSkills = styled.div`
  width: 90%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5rem;
`;

const ContainerExperience = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const About = () => {
  return (
    <Section
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <Box position="relative">
        <PageTitle mainText="RESUME" Text="ABOUT" subText=" ME" />
      </Box>

      <ContainerWrapper>
        <TextContainer>
          <Box width="40%">
            <Text className="title">
              My name is Adrian Mititelu and I am a young and passionate tech
              enthusiast, driven by a profound and a deep love for the
              programming world, demonstrating focus, motivation, and clear
              goals and aspirations: GROWTH and EXCEL. I believe that achieving
              personal and professional excellence is a continuous journey.
            </Text>
          </Box>
          <Flex width="40%">
            <a href={CV} download="Adrian Mititelu CV" title="Download CV">
              <AnimatedButton text="DOWNLOAD CV" />
            </a>
          </Flex>
        </TextContainer>

        <PersonalinfoContainer>
          <Flex justifyContent="center" width="57%" alignItems="center">
            <Heading className="title">Personal Info</Heading>
          </Flex>
          <Flex height="100%" justifyContent="space-around" alignItems="center">
            <InfoBoxes />
          </Flex>
        </PersonalinfoContainer>
      </ContainerWrapper>

      <ContainerSkills>
        <Heading className="title" size="lg">
          MY CHAKRA OF A WEB DEVELOPER
        </Heading>
        <ChakraDev />
        <Heading className="title" size="lg">
          ADDITIONAL SKILLS
        </Heading>
        <Flex gap={5} height="60%">
          <IconBox category="software" />
          <IconBox category="hardware" />
        </Flex>
      </ContainerSkills>

      <ContainerExperience>
        <ExperienceInfo />
      </ContainerExperience>
    </Section>
  );
};

export default About;
