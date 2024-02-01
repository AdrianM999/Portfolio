import React from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  width: 100vw;
  scroll-snap-align: center;
  color: whitesmoke;
  background-color: #000;
  display: flex;
`;


const ContainerLeft = styled.div`
  flex: 1;
  background-color: white;
`;

const ContainerRight = styled.div`
  flex: 1;
  background-color: #2c2c2c;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Skills = () => {
  return (
    <>
      <Section id="skills">
      <ContainerLeft></ContainerLeft>
      <ContainerRight></ContainerRight>
      </Section>
    </>
  );
};

export default Skills;
