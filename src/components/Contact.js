import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FormVariant } from "./Variants";
import "./Contact.css";

const Contact = (props) => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const nameInputRef2 = useRef();
  const emailInputRef2 = useRef();
  const messageInputRef = useRef();
  const packageInputRef = useRef();

  const [error, setError] = useState(false);
  const [showSuggestionsForm, setShowSuggestionsForm] = useState(false);
  const [showPackageForm, setShowPackageForm] = useState(true);

  const sendSuggestionHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const eneteredMessage = messageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredEmail.trim().length === 0) {
      setError({
        title: "invalid input",
        message: "Please enter a valid name or an Email",
      });
      return;
    }
    if (!enteredEmail.includes("@")) {
      setError({
        title: "invalid E-mail address",
        message: "Please enter a valid Email",
      });
      return;
    }
    if (eneteredMessage.trim().length < 10) {
      setError({
        title: "invalid message",
        message: "Incluse a message",
      });
      return;
    }
    props.onSend(enteredName, enteredEmail, eneteredMessage);
    nameInputRef.current.value = "";
    emailInputRef.current.value = "";
    messageInputRef.current.value = "";
  };
  const sendPackageHandler = (event) => {
    event.preventDefault();
    const enteredName2 = nameInputRef2.current.value;
    const enteredEmail2 = emailInputRef2.current.value;
    const enteredPackage = packageInputRef.current.value;
    if (enteredName2.trim().length === 0 || enteredEmail2.trim().length === 0) {
      setError({
        title: "invalid input",
        message: "Please enter a valid name or an Email",
      });
      return;
    }
    if (!enteredEmail2.includes("@")) {
      setError({
        title: "invalid E-mail address",
        message: "Please enter a valid Email",
      });
      return;
    }
    if (enteredPackage) {
      setError({
        title: "Package",
        message: "Please Choose a package",
      });
      return;
    }
    props.onDemand(enteredName2, enteredEmail2, enteredPackage);
    nameInputRef2.current.value = "";
    emailInputRef2.current.value = "";
    packageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  const suggestionFormHandler = () => {
    setShowPackageForm(false);
    setShowSuggestionsForm(true);
  };
  const packageFormHandler = () => {
    setShowSuggestionsForm(false);
    setShowPackageForm(true);
  };

  return (
    <div className="contact">
      <div className="instructions">
        <h2>We're happy to hear from you</h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero beatae
          dolore labore reiciendis deleniti iusto repudiandae doloremque a eum
          esse explicabo similique aliquam nemo commodi voluptate, totam nisi
          repellendus quam.
        </h3>
      </div>

      <div className="form-selection">
        {showSuggestionsForm && (
          <motion.form
            className="form-container"
            onSubmit={sendSuggestionHandler}
            variants={FormVariant}
            initial="hidden"
            animate="visible"
            transition={{ ease: "easeIn", duration: 2.5 }}
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
            transition={{ ease: "easeIn", duration: 2.5 }}
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
