import React from "react";
import { FaBaby, FaBookOpen, FaTrophy, FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";

const sublinks = [
  {
    page: "About Me",
    link: [
      { label: "Biography", icon: <FaBaby />, url: "/biography" },
      { label: "Education", icon: <FaBookOpen />, url: "/education" },
      { label: "Achievments", icon: <FaTrophy />, url: "/achievments" },
    ],
  },
  {
    page: "Contact",
    link: [
      { label: "Github", icon: <FaGithub />, url: "/github" },
      { label: "Netlify", icon: <SiNetlify />, url: "/netlify" },
    ],
  },
];

export default sublinks;
