import { SiRedux } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiChakraui } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { FaSalesforce } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiMicrosoftoffice } from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import { VscTerminalCmd } from "react-icons/vsc";
import { LuNetwork } from "react-icons/lu";
import { FaComputer } from "react-icons/fa6";
import { MdHardware } from "react-icons/md";

const icons = {
  software: [
    { id: 1, title: "Redux", icon: SiRedux },
    { id: 2, title: "Bootstrap", icon: FaBootstrap },
    { id: 3, title: "ChakraUI", icon: SiChakraui },
    { id: 4, title: "StyledComponents", icon: SiStyledcomponents },
    { id: 5, title: "Salesforce", icon: FaSalesforce },
    { id: 6, title: "Github", icon: FaGithub },
  ],
  hardware: [
    { id: 7, title: "Microsfot Office", icon: SiMicrosoftoffice },
    { id: 8, title: "Operating system Windows", icon: FaWindows },
    { id: 9, title: "CMD", icon: VscTerminalCmd },
    { id: 10, title: "Networking", icon: LuNetwork },
    { id: 11, title: "Hardware", icon: FaComputer },
    { id: 12, title: "Troubleshooting", icon: MdHardware },
  ],
};

export default icons;
