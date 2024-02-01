import React from "react";
import styled from "styled-components";
import {
  Flex,
  Heading,
  Icon,
  Text,
  List,
  ListItem,
  ListIcon,
  Divider,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { BsPersonWorkspace } from "react-icons/bs";

const circleContainerStyles = {
  width: "3rem",
  height: "3rem",
  backgroundColor: "#d2a034",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const ExperienceItem = styled(Flex)`
  width: 40%;
  height: 100%;
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 1rem;
  display: flex;

  .title {
    color: white;
    margin-bottom: 0.5rem;
  }

  .listItems,
  span, .text {
    color: #b3b3b3;
  }
`;

const CircleContainer = styled.div`
  ${circleContainerStyles}
`;

const ExperienceInfo = () => {
  const experiences = [
    {
      date: "2023-PRESENT",
      position: "IT ADMINISTRATOR",
      company: "EVERIENCE",
      description:
        "As an IT Administrator, I gained precious hands-on experience.",
      hardSkills: [
        "Interact with network infrastructure (server room)",
        "Developed practical networking skills",
        "Configuring and remotely managing the company's domain (user management, device management, and other resources) using Active Directory",
        "Utilizing SCCM for streamlined software deployment, configuration management, and efficient monitoring of network performance",
        "Proficient in incident resolution through ticketing system",
        "Facilitated equipment setup for employees, software installation, and domain integration, providing necessary access rights",
      ],
      softSkills: [
        "Collaborated effectively in team environments, gaining insights into corporate dynamics",
        "Participated in bi-weekly IT department meetings",
        "Interacted seamlessly with diverse groups and levels within the IT department",
        "Strong communication and interpersonal skills in a professional IT setting",
      ],
    },
    {
      date: "2023-PRESENT",
      position: "REACT SALESFORCE DEVELOPER",
      company: "OSF DIGITAL",
      description:
        "As a Student of React Salesforce Developer Academy, I gained precious hard and soft skills.",
      hardSkills: [
        "Interacted with a real e-commerce application built using the PWA Kit",
        "Completed all required tasks, incorporating new functionalities using React.js and customizing applications using Chakra UI as needed",
        "Implemented API calls to bridge the gap between the front end and backend in the headless architecture-based application",
        "Studied the application thoroughly to understand its web application flow",
        "Utilized Git and GitHub to set up a private repository, employing separate branches for task-oriented development. Submitted pull requests for approval by the project lead",
        "Configured Prettier and ESLint to ensure clean code practices, while also handling Server-Side Rendering (SSR) configurations for defining permissible inputs and restrictions",
        "Verified API calls using Postman, ensuring the accuracy and functionality of the requests",
      ],
      softSkills: [
        "Simulated the developer work environment, participating in Scrum meetings twice a week",
        "Planned upcoming tasks and discussed progress with both the team and the trainer",
      ],
    },
  ];

  return (
    <>
      <Heading className="title">Experience</Heading>
      <Flex justifyContent="space-evenly">
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} alignItems="center" gap={2}>
            <Flex height="90%">
              <CircleContainer>
                <Icon as={BsPersonWorkspace} color="white" />
              </CircleContainer>
              <Divider
                orientation="vertical"
                height="95%"
                position="relative"
                right="50%"
                top="8%"
              />
            </Flex>
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="flex-start"
            >
              <Text
                className="text"
                backgroundColor="#212121"
                height="40%"
                p={2}
                borderRadius="1rem"
              >
                {experience.date}
              </Text>
              <Heading size="lg" className="title">
                {experience.position}
                <span> - {experience.company}</span>
              </Heading>
              <Text className="title">{experience.description}</Text>
              <Heading size="md" className="title">
                Hard Skills:
              </Heading>
              <List spacing={3} className="listItems" mb={4}>
                {experience.hardSkills.map((skill, index) => (
                  <ListItem key={index}>
                    <ListIcon as={CheckCircleIcon} color="#d2a034" />
                    {skill}
                  </ListItem>
                ))}
              </List>
              <Heading size="md" className="title">
                Soft Skills:
              </Heading>
              <List spacing={3} className="listItems">
                {experience.softSkills.map((skill, index) => (
                  <ListItem key={index}>
                    <ListIcon as={CheckCircleIcon} color="#d2a034" />
                    {skill}
                  </ListItem>
                ))}
              </List>
            </Flex>
          </ExperienceItem>
        ))}
      </Flex>
    </>
  );
};

export default ExperienceInfo;
