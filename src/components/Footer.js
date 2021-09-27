import React from "react";
import logo from "../images/df541ece3e1e46bab776fdb05964ef38.png";
import sublinks from "../data/data";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="logo-head">
        <img src={logo} className="footer-logo" alt="logo" />
      </div>
      <div className="copy-right">
        <h4>All Rights Reserved for D-Coding 2021</h4>
      </div>
      <div className="social-media">
        <ul className="social-list">
          {sublinks[1].links.map((link, index) => {
            return (
              <li key={index}>
                <a href={link.url}>{link.icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Footer;
