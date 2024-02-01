import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";

const InfoBoxes = () => {
  const colors = {
    label: "#b3b3b3",
    value: "whitesmoke",
  };

  const personalInfo = {
    details: [
      { label: "First Name:", value: "Adrian" },
      { label: "Age:", value: "24 Years" },
      { label: "Freelance:", value: "Available" },
      { label: "Phone:", value: "+40756973748" },
      { label: "Email:", value: "mititeluadrian9@gmail.com" },
    ],
  };

  const additionalInfo = {
    details: [
      { label: "Last Name:", value: "Mititelu" },
      { label: "Nationality:", value: "Moldovian" },
      { label: "Address:", value: "Bucharest, Romania" },
      { label: "Phone:", value: "+40756973748" },
      { label: "Languages:", value: "Romanian, English, Russian" },
    ],
  };

  return (
    <Flex height="100%" gap="2rem" alignItems="center">
      <InfoBox colors={colors} details={personalInfo.details} />
      <InfoBox colors={colors} details={additionalInfo.details} />
    </Flex>
  );
};

const InfoBox = ({ details, colors }) => (
  <Box color="white" height="80%" lineHeight="3rem">
    {details.map((detail, index) => (
      <Text key={index}>
        <span style={{ color: colors.label }}>{detail.label}</span>{" "}
        <span style={{ color: colors.value }}>{detail.value}</span>
      </Text>
    ))}
  </Box>
);

export default InfoBoxes;
