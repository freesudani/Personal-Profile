import React from "react";
import phoneImg from "../images/arif-riyanto-vJP-wZ6hGBg-unsplash.jpg";
import { useGlobalContext } from "./context";
import { motion } from "framer-motion";
import { PhotoVariant } from "./Variants";
import { ParagVariant } from "./Variants";
import "./Hero.css";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <motion.h2
            variants={ParagVariant}
            initial="hidden"
            animate="visible"
            transition={{ ease: "easeOut", duration: 2.5 }}
          >
            PROFESSIONAL FREELANCE <br />
            WEB DESIGNER&nbsp;&&nbsp;DEVELOPER
          </motion.h2>
          <motion.h4
            variants={ParagVariant}
            initial="hidden"
            animate="visible"
            transition={{ ease: "easeIn", duration: 2.5 }}
          >
            I'm a front-end ddeveloper and web designer with the unique skills
            they need to build and develop responsive websites, with deep
            knowledge Responsive HTML5, CSS3, Javascript&nbsp;&&nbsp;ReactJS.
            <br />
            <span className="hero-nameit">you name it, I can make it!</span>
          </motion.h4>
        </article>
        <motion.article
          className="hero-images"
          variants={PhotoVariant}
          initial="hidden"
          animate="visible"
          transition={{ ease: "easeIn", duration: 1.5 }}
        >
          <img src={phoneImg} className="phone-img" alt="phone" />
        </motion.article>
      </div>
    </section>
  );
};

export default Hero;
