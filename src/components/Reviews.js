import React from "react";
import people from "../data/reviewData";
import { useGlobalContext } from "./context";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { ParagVariant } from "./Variants";
import "./Reviews.css";

const Reviews = () => {
  const { index, setIndex } = useGlobalContext();
  const { name, job, img, text } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };
  return (
    <div className="reviews">
      <article className="review">
        <div className="img-container">
          <img src={img} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h2 className="author">{name}</h2>
        <h3 className="job">{job}</h3>
        <motion.h3
          className="info"
          variants={ParagVariant}
          initial="hidden"
          animate="visible"
          transition={{ ease: "easeIn", duration: 2.5 }}
        >
          {text}
        </motion.h3>
        <div className="button-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="random-btn" onClick={randomPerson}>
          random
        </button>
      </article>
    </div>
  );
};

export default Reviews;
