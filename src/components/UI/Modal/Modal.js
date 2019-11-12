import React from "react";
import clasess from "./Modal.css";
import { showModalSelector } from "../../../Selectors";
import { useSelector } from "react-redux";

const modal = props => {
  let showModal = false;
  if (!props.show) {
    showModal = useSelector(showModalSelector);
  } else {
    showModal = props.show;
  }

  return (
    <div
      className={clasess.Modal}
      style={{
        transform: showModal ? "translateY(0)" : "translateY(-100vh)",
        opacity: showModal ? "1" : "0"
      }}
    >
      {props.children}
    </div>
  );
};

export default modal;
