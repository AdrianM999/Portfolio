import React from "react";
import styled from "styled-components";
import { Heading } from "@chakra-ui/react";

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CustomHeading = styled(Heading)`
  position: relative;
  z-index: 0;
  color: #252525;
`;

const CustomSubHeading = styled(Heading)`
  position: absolute;
  color: white;
  span {
    color: #d2a034;
  }
`;

const PageTitle = ({ mainText, Text, subText }) => {
  return (
    <Container>
      <CustomHeading fontSize="10rem">{mainText}</CustomHeading>
      <CustomSubHeading fontSize="4.5rem">
        {Text} <span>{subText}</span>
      </CustomSubHeading>
    </Container>
  );
};

export default PageTitle;
