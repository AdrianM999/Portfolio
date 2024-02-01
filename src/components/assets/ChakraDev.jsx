import { Box, Text, Divider, Flex, Icon } from "@chakra-ui/react";
import { FaHtml5 } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import styled from "styled-components";
import chakra from "../../assets/images/chakra.png";
import React from "react";

const ContainerSkills = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  .title {
    position: relative;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 50%;
  height: 500px;
  background-image: url(${chakra});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  display: flex;
  justify-content: center;
`;

const ContainerIcons = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DividerWithIconRigth = styled(Divider)`
  height: 1%;
  position: relative;
  bottom: 4%;
  right: 70%;
`;

const DividerWithIconLeft = styled(Divider)`
  height: 1%;
  position: relative;
  bottom: 11%;
  left: 70%;
`;

const skillsData = [
  { icon: DiMongodb, text: "MONGO DB(In Progress)", color: "#252525" },
  { icon: FaNodeJs, text: "NODE JS(In Progress)", color: "#252525" },
  { icon: SiExpress, text: "EXPRESS(In Progress)", color: "#252525" },
  { icon: FaReact, text: "React", color: "#d2a034" },
  { icon: RiJavascriptFill, text: "JavaScript", color: "#d2a034" },
  { icon: FaCss3Alt, text: "CSS", color: "#d2a034" },
  { icon: FaHtml5, text: "HTML", color: "#d2a034" },
];

const ChakraDev = () => {
  return (
    <ContainerSkills>
      <ImageContainer>
        <ContainerIcons>
          <Flex direction="column" alignItems="center" height="80%" width="30%">
            {skillsData.map(({ icon: Icon, color, text }, index) => (
              <React.Fragment key={index}>
                <Box>
                  <Icon color={color} fontSize="1.7rem" />
                </Box>
                {index < skillsData.length &&
                  (index < 3 ? (
                    <>
                      <Text className="title" left="165%" bottom="7%">
                        {text}
                      </Text>
                      <DividerWithIconLeft color={color} />
                    </>
                  ) : (
                    <>
                      <DividerWithIconRigth color={color} />
                      <Text className="title" right="140%" bottom="8%">
                        {text}
                      </Text>
                    </>
                  ))}
              </React.Fragment>
            ))}
          </Flex>
        </ContainerIcons>
      </ImageContainer>
    </ContainerSkills>
  );
};

export default ChakraDev;
