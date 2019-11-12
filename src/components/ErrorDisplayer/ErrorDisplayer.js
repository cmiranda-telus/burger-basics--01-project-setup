import React from "react";
import { errorMessageSelector } from "../../Selectors";
import { useSelector } from "react-redux";
const errorDisplayer = props => {
  const errorMessage = useSelector(errorMessageSelector);

  return <div>{errorMessage}</div>;
};

export default errorDisplayer;
