import React from "react";
import { FaBaby, FaBookOpen, FaTrophy, FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";

const sublinks = [
  {
    page: "About Me",
    links: [
      { label: "Biography", icon: <FaBaby />, url: "/biography" },
      { label: "Education", icon: <FaBookOpen />, url: "/education" },
      { label: "Achievments", icon: <FaTrophy />, url: "/achievments" },
    ],
  },
  {
    page: "Contact",
    links: [
      {
        label: "Github",
        icon: <FaGithub />,
        url: "https://github.com/freesudani",
      },
      {
        label: "Netlify",
        icon: <SiNetlify />,
        url: "https://app.netlify.com/teams/freesudani/overview",
      },
    ],
  },
];

export default sublinks;
