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
import { IconContext } from "react-icons";
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
      <IconContext.Provider value={{ className: "htmlIcon" }}>
        <div>
          <SiHtml5 />
        </div>
      </IconContext.Provider>
      <IconContext.Provider value={{ className: "cssIcon" }}>
        <div>
          <SiCss3 />
        </div>
      </IconContext.Provider>
      <IconContext.Provider value={{ className: "jsIcon" }}>
        <div>
          <SiJavascript />
        </div>
      </IconContext.Provider>
      <IconContext.Provider value={{ className: "SassIcon" }}>
        <div>
          <SiSass />
        </div>
      </IconContext.Provider>
      <IconContext.Provider value={{ className: "reactIcon" }}>
        <div>
          <SiReact />
        </div>
      </IconContext.Provider>
      <IconContext.Provider value={{ className: "nextIcon" }}>
        <div>
          <SiNextDotJs />
        </div>
      </IconContext.Provider>
      <IconContext.Provider value={{ className: "typeScriptIcon" }}>
        <div>
          <SiTypescript />
        </div>
      </IconContext.Provider>
    </motion.div>
  );
};

export default Skills;
