import React from "react";
import { showBackdropSelector } from "../../../Selectors";
import { useSelector, useDispatch } from "react-redux";
import clases from "./Backdrop.css";
import { burgerBuilderActions, sideDrawerAction } from "../../../Actions";

const backdrop = props => {
  let showModal = useSelector(showBackdropSelector);
  const dispatch = useDispatch();

  // if (props.source === "Modal") {
  //   showModal = useSelector(purchaseSelector);
  // } else if (props.source === "SideDrawer") {
  //   showModal = useSelector(toggledSelector);
  // }

  const onClickHandler = () => {
    // if (props.source === "Modal") {
    //   dispatch(cancelPurchaseBurger());
    // } else if (props.source === "SideDrawer") {
    //   dispatch(toggledSideDrawer(false));
    // }
    dispatch(burgerBuilderActions.closeBackdrop());
    dispatch(sideDrawerAction.toggledSideDrawer(false));
  };

  return showModal ? (
    <div className={clases.Backdrop} onClick={() => onClickHandler()}>
      {props.children}
    </div>
  ) : null;
};

export default backdrop;
