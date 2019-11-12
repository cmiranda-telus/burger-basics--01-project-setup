import React from "react";
import clasess from "./DrawerToggle.css";
import { sideDrawerAction } from "../../../../Actions/";
import { useDispatch } from "react-redux";

const drawerToggle = props => {
  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch(sideDrawerAction.toggledSideDrawer(true));
  };

  return (
    <div className={clasess.DrawerToggle} onClick={() => toggleHandler()}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default drawerToggle;
