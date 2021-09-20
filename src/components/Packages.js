import React from "react";
import packageDeals from "../data/packageData";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import "./Packages.css";

const Packages = () => {
  return (
    <div className="packages">
      <h1 className="packages-header"> Packages</h1>
      <Card1 list={packageDeals[0]} />
      <Card2 list={packageDeals[1]} />
      <Card3 list={packageDeals[2]} />
    </div>
  );
};

export default Packages;
