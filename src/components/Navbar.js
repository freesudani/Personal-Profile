import React from "react";
import { useGlobalContext } from "./context";
import { FaBars } from "react-icons/fa";
import phoneImg from "../images/phone-call-icon.svg";
import logo from "../images/df541ece3e1e46bab776fdb05964ef38.png";
import "../index.css";
import "./Navbar.css";

const Navbar = () => {
  const { ShowPhoneNumber, showPhone, openSidebar, openSubmenu, closeSubmenu } =
    useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };
  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="logo" />
          <button className="btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              About Me
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              Contact
            </button>
          </li>
        </ul>
        <button className="btn contact-btn" onMouseOut={ShowPhoneNumber}>
          <img src={phoneImg} className="phone-img" alt="phone" />
          <div className="extended-phone">.</div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
