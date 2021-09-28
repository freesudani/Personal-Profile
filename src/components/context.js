import React, { useState, useContext, useRef } from "react";
import sublinks from "../data/data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [page, setPage] = useState({ page: "", links: [] });
  const [location, setLocation] = useState({});
  const [showPhone, setShowPhone] = useState(false);
  const [index, setIndex] = useState(0);

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const nameInputRef2 = useRef();
  const emailInputRef2 = useRef();
  const messageInputRef = useRef();
  const packageInputRef = useRef();
  const [error, setError] = useState(false);
  const [showSuggestionsForm, setShowSuggestionsForm] = useState(false);
  const [showPackageForm, setShowPackageForm] = useState(true);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  const ShowPhoneNumber = () => {
    setShowPhone(true);
  };

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
    /* props.onSend(enteredName, enteredEmail, eneteredMessage);
    nameInputRef.current.value = "";
    emailInputRef.current.value = "";
    messageInputRef.current.value = ""; */
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
    /* props.onDemand(enteredName2, enteredEmail2, enteredPackage);
    nameInputRef2.current.value = "";
    emailInputRef2.current.value = "";
    packageInputRef.current.value = ""; */
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
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        page,
        location,
        ShowPhoneNumber,
        showPhone,
        index,
        setIndex,
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
