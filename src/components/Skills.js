import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiSass,
  SiNextDotJs,
  SiTypescript,
} from "react-icons/si";
import { ParagVariant } from "./Variants";
import "./Skills.css";

const Skills = () => {
  return (
    <motion.div
      className="skills"
      variants={ParagVariant}
      initial="hidden"
      animate="visible"
      transition={{ ease: "easeIn", duration: 2.5 }}
    >
      <div>
        <SiHtml5 />
      </div>
      <div>
        <SiCss3 />
      </div>
      <div>
        <SiJavascript />
      </div>
      <div>
        <SiSass />
      </div>
      <div>
        <SiReact />
      </div>
      <div>
        <SiNextDotJs />
      </div>
      <div>
        <SiTypescript />
      </div>
    </motion.div>
  );
};

export default Skills;
