import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Icon } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const CtaButton = styled(motion.div)`
  position: relative;
  padding: 18px 22px;
  border: 2px solid #d2a034;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:before {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    border-radius: 28px;
    background: #d2a034;
    width: 56px;
    height: 56px;
    transition: all 0.3s ease;
  }

  span {
    position: relative;
    font-size: 16px;
    line-height: 18px;
    font-weight: 900;
    color: whitesmoke;
  }

  &:hover {
    &:before {
      width: 102%;
      background: #d2a034;
    }

    svg {
      transform: translateX(0);
    }
  }
`;

const AnimatedButton = ({ text, onClick }) => {
  return (
    <CtaButton
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1 }}
      initial={{ borderRadius: "28px" }}
      animate={{ borderRadius: "28px" }}
      onClick={onClick}
    >
      <Icon as={ArrowForwardIcon} position="relative" right="5px" mr={8} />
      <span>{text}</span>
    </CtaButton>
  );
};

export default AnimatedButton;
