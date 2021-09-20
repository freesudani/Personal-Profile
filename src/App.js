import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Submenu from "./components/Submenu";
import Packages from "./components/Packages";
import "./index.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
      <Packages />
    </>
  );
};

export default App;
