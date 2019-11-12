import React from "react";
import burgerLogo from "../../assets/images/burger-logo.png";
import clasess from "./Logo.css";

const logo = props => {
  return (
    <div className={clasess.Logo}>
      <img src={burgerLogo} alt="MyBurger" />
    </div>
  );
};

export default logo;
