import React from "react";
import classes from "./SideDrawer.css";
import Logo from "../../Logo/Logo";
import NavigationsItems from "../NavigationItems/NavigationItems";
import { useSelector } from "react-redux";
import { toggledSelector } from "../../../Selectors";
import Aux from "../../../hoc/Auxilary";

const sideDrawer = props => {
  const toggled = useSelector(toggledSelector);

  return (
    <Aux>
      <div
        className={[
          classes.SideDrawer,
          toggled ? classes.Open : classes.Close
        ].join(" ")}
      >
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationsItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
