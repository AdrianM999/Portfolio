import React from "react";
import styled from "styled-components";
import { FaHome } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { Box } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

const CircleContainer = styled(Link)`
  position: relative;
  width: 50px;
  height: 50px;
  background-color: #252525;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: background-color 0.3s ease;
  text-decoration: none;
  color: inherit;

  &:hover {
    background-color: #d2a034;
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

const Icon = styled.div`
  color: white;
  font-size: 25px;
`;

const CircleWithIcon = () => {
  const location = useLocation();

  const icons = [
    { icon: FaHome, key: 1, text: "Home", to: "/" },
    { icon: IoPerson, key: 2, text: "Profile", to: "/about" },
    { icon: MdWork, key: 3, text: "Work", to: "/portfolio" },
    { icon: HiOutlineMailOpen, key: 4, text: "Mail", to: "/contact" },
  ];

  return (
    <div>
      {icons.map(({ icon: IconComponent, key, text, to }) => (
        <CircleContainer
          key={key}
          to={to}
          className={location.pathname === to ? "selected" : ""}
        >
          <Icon as={IconComponent} width={10} height={10} />
          <Box className="popover">{text}</Box>
        </CircleContainer>
      ))}
    </div>
  );
};

export default CircleWithIcon;
