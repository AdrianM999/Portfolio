import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Image, Text, Box, Flex, Icon, useDisclosure } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import projectsData from "./assets/projectsData";
import { FaFileAlt, FaGithub, FaCode } from "react-icons/fa";
import PageTitle from "./assets/PageTitle";

const GlobalStyles = createGlobalStyle`
  .commonColor {
    color: white;
  }
`;

const SectionStyles = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  scroll-snap-align: center;
  color: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const Container = styled.div`
  position: relative;
  width: 80%;
  display: flex;
  justify-content: center;
`;

const ImageContainerStyles = styled(Box)`
  overflow: hidden;
  position: relative;
  width: 30%;
  height: 40%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
  }

  &:hover {
    cursor: pointer;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background-color: #d2a034;
      border-radius: 1rem;
    }

    .hover-content {
      opacity: 1;
    }
  }
`;

const ProjectInformation = ({ project }) => (
  <Flex flexDirection="column" width="70%" gap={5}>
    <Box>
      <Text className="commonColor">
        <Icon as={FaFileAlt} mr={3} />
        <strong>Project:</strong> {project.type}
      </Text>
    </Box>
    <Box>
      <Text className="commonColor">
        <Icon as={FaCode} className="commonColor" mr={3} />
        <strong>Technologies used:</strong> {project.skills.join(", ")}
      </Text>
    </Box>
  </Flex>
);

const ProjectModal = ({ selectedProject, isOpen, onClose }) => {
  if (!selectedProject) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
      <ModalOverlay />
      <ModalContent width="35%" maxW="100%" backgroundColor="#252525" p={5}>
        <ModalHeader color="#d2a034" textAlign="center">
          {selectedProject.title}
        </ModalHeader>
        <ModalCloseButton className="commonColor" />
        <ModalBody>
          <Flex width="100%" mb={3}>
            <ProjectInformation project={selectedProject} />
            <Box width="30%">
              <Text className="commonColor">
                <Icon as={FaGithub} mr={3} />
                <strong>Github Link: </strong>
                {selectedProject.gitlink ? (
                  <a
                    href={selectedProject.gitlink}
                    target="_blank"
                    className="commonColor"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "underline" }}
                  >
                    {selectedProject.gitlink}
                  </a>
                ) : (
                  "Private"
                )}
              </Text>
            </Box>
          </Flex>
          <Box height="10%">
            <Image
              src={selectedProject.secondimage || selectedProject.image}
              borderRadius={5}
            />
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    onOpen();
  };

  return (
    <>
      <GlobalStyles />
      <SectionStyles
        initial={{ height: 0 }}
        animate={{ height: "100vh" }}
        exit={{ y: "window.innerHeight" }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <Container>
          <PageTitle mainText="WORKS" Text="MY" subText="PORTFOLIO" />
        </Container>

        <Flex
          height="70%"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          width="80%"
          p={4}
          gap={5}
        >
          {Object.values(projectsData).map((project) => (
            <AnimatePresence key={project.id}>
              <ImageContainerStyles onClick={() => handleProjectClick(project)}>
                <motion.div
                  whileHover={{ y: 100, opacity: 1 }}
                  initial={{ y: 0, opacity: 0 }}
                  style={{
                    zIndex: 1,
                    position: "absolute",
                    top: 10,
                    left: 0,
                    right: 10,
                    bottom: 0,
                    textAlign: "center",
                  }}
                >
                  <Text>{project.title}</Text>
                </motion.div>

                <motion.img src={project.image} alt={project.title} />
              </ImageContainerStyles>
            </AnimatePresence>
          ))}
        </Flex>
      </SectionStyles>
      <ProjectModal
        selectedProject={selectedProject}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export default Projects;
