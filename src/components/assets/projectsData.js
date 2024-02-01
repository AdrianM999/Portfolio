import salesforce from "../../assets/images/salesforce.jpg";
import photos from "../../assets/images/photos.png";
import calculator from "../../assets/images/calculator.png";

import ecommerce from "../../assets/images/OSFacademy.png";

let projectsData = {
  project1: {
    id: 1,
    title: "E-commerce app",
    type: "Website",
    description:
      "During the academy, I worked on practical tasks that involved: Creating an ecommerce app with PWA KIT. Each practical exercise had to be done on a separate branch, and the solutions were submitted through pull requests(work in GitHub). I practiced React concepts, integrating Chakra UI components with React, and logical thinking in solving tasks. Additionally, I explored headless architecture concepts and worked with API calls to integrate the backend with the frontend.",
    skills: [
      "React.js",
      "PWA Kit",
      "Chakra UI",
      "Headless Arhitecture",
      "API Calls",
      "GitHub",
      "Postman",
      "SandBox",
      "NPM",
      "ESLint",
      "Prettier",
      "Agile Methodologies",
    ],
    image: salesforce,
    secondimage: ecommerce,
  },
  project2: {
    id: 2,
    title: "Photo blog website",
    type: "Website(Personal Project)",
    description:
      "This project is primarily focused on HTML and CSS, with a special emphasis on CSS grid. It is a straightforward project where I honed my skills in CSS layout and CSS grid",
    skills: ["HTML/CSS", "JavaScript", "Css grid", "GitHub"],
    image: photos,
    gitlink: "https://github.com/AdrianM999/PhotoBlog",
  },
  project3: {
    id: 3,
    title: "Calculator",
    type: "Calculator APP(Personal Project)",
    description:
      "This project is primarily focused on JavaScript and involves more logical thinkin",
    skills: ["HTML/CSS", "JavaScript", "DOM Manipulation", "Functions"],
    image: calculator,
    gitlink: "https://github.com/AdrianM999/Calculator",
  },
};

export default projectsData;
