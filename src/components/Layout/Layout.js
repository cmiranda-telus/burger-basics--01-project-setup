import React from "react";
import Aux from "../../hoc/Auxilary";
import classes from "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Backdrop from "../../components/UI/Backdrop/Backdrop";

const layout = props => (
  <Aux>
    <Backdrop />
    <Toolbar />
    <SideDrawer />
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default layout;
