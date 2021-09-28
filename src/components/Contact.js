import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FormVariant } from "./Variants";
import { BsArrowLeft } from "react-icons/bs";
import { useGlobalContext } from "./context";
import "./Contact.css";

const Contact = () => {
  const {
    showSuggestionsForm,
    sendSuggestionHandler,
    nameInputRef,
    emailInputRef,
    messageInputRef,
    showPackageForm,
    sendPackageHandler,
    nameInputRef2,
    emailInputRef2,
    packageInputRef,
    suggestionFormHandler,
    packageFormHandler,
  } = useGlobalContext();

  return (
    <div className="contact">
      <div className="instructions">
        <h2>We're happy to hear from you</h2>
        <h3>
          Please feel free to contact me on for any suggestions or complains ,
          and also explore our packages options , we delighted to explore new
          opportunities with our clients and get to know more people who want to
          engage with me on a new journy together.
        </h3>
        <div>
          <BsArrowLeft /> <span>Please Choose</span>
        </div>
      </div>

      <div className="form-selection">
        {showSuggestionsForm && (
          <motion.form
            className="form-container"
            onSubmit={sendSuggestionHandler}
            variants={FormVariant}
            initial="hidden"
            animate="visible"
            transition={{ ease: "easeIn", duration: 1 }}
          >
            <h4>Suggestions and complains</h4>
            <div>
              <label htmlFor="username">name</label>
              <input id="username" type="text" ref={nameInputRef} />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" ref={emailInputRef} />
            </div>
            <div>
              <label htmlFor="textarea">
                Please Write your suggestion or complain
              </label>
              <textarea id="textarea" type="text" ref={messageInputRef} />
            </div>
            <button type="submit" className="btn-submit">
              Submit
            </button>
          </motion.form>
        )}
        {showPackageForm && (
          <motion.form
            className="form-container"
            onSubmit={sendPackageHandler}
            variants={FormVariant}
            initial="hidden"
            animate="visible"
            transition={{ ease: "easeIn", duration: 1 }}
          >
            <h4>Pick a Package</h4>
            <div>
              <label htmlFor="username">name</label>
              <input id="username" type="text" ref={nameInputRef2} />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" ref={emailInputRef2} />
            </div>
            <div>
              <label htmlFor="package">Choose a Package</label>
              <select
                id="package"
                name="package"
                size="3"
                ref={packageInputRef}
              >
                <option value="Personal Website">Personal Website</option>
                <option value="Business Website">Business Website</option>
                <option value="Cooperation Website">Cooperation Website</option>
              </select>
            </div>
            <button type="submit" className="btn-submit">
              Submit
            </button>
          </motion.form>
        )}
        <div className="buttons-container">
          <button
            className="select-btn"
            type="button"
            onClick={suggestionFormHandler}
          >
            Suggestions/Complains Form
          </button>
          <button
            className="select-btn"
            type="button"
            onClick={packageFormHandler}
          >
            Pick a Package
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
