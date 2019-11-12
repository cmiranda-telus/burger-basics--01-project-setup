import React from "react";
import clasess from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = props => {
  return (
    <ul className={clasess.NavigationItems}>
      <NavigationItem link="/" active>
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
  );
};

export default navigationItems;
