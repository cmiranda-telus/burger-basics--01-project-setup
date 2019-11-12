import React from "react";
// import { useSelector } from "react-redux";
// import { errorMessageSelector } from "../../Selectors/";
import Aux from "../Auxilary";
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = WrappedComponent => {
  return props => {
    return (
      <Aux>
        <Modal />
        <WrappedComponent {...props} />
      </Aux>
    );
  };
};

export default withErrorHandler;
