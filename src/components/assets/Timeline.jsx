import React from "react";
import styled from "styled-components";
import timelineElements from "./timelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchoolOutline as SchoolIcon } from "react-icons/io5";
import { BsPersonWorkspace as WorkIcon } from "react-icons/bs";
import { Heading, Text } from "@chakra-ui/react";

const Section = styled.div`
  height: 90vh;
  width: 60vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #212320;
  border-radius: 0.5rem;
  overflow: hidden;
  border: 1px solid #252525;
  position: relative;
  box-shadow: 0px 1px 4px #252525;
`;

const StyledTimeline = styled(VerticalTimeline)`
  height: 110%;
  width: 100%;
  overflow: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  margin-top: 3rem;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledSchoolIcon = styled(SchoolIcon)`
  color: white;
`;

const Timeline = () => {
  return (
    <Section>
      <StyledTimeline>
        {timelineElements.map((element, index) => {
          let isWorkIcon = element.icon === "work";

          return (
            <VerticalTimelineElement
              key={index}
              date={element.date}
              dateClassName="date"
              icon={isWorkIcon ? <WorkIcon /> : <StyledSchoolIcon />}
              iconStyle={
                isWorkIcon
                  ? { background: "#fdd947" }
                  : { background: "#444444" }
              }
              contentStyle={{ background: "white", color: "white" }}
            >
              <Heading className="vertical-timeline-element-title">
                {element.title}
              </Heading>
              <Heading className="vertical-timeline-element-subtitle">
                {element.location}
              </Heading>
              <Text id="description" color="black">
                {element.description}
              </Text>
            </VerticalTimelineElement>
          );
        })}
      </StyledTimeline>
    </Section>
  );
};

export default Timeline;
