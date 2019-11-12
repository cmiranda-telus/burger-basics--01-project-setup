import React from "react";
import Aux from "../../hoc/Auxilary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { useSelector } from "react-redux";
import { errorMessageSelector } from "../../Selectors";
import ErrorDisplayer from "../../components/ErrorDisplayer/ErrorDisplayer";

const burgerBuilder = props => {
  const errorMessage = useSelector(errorMessageSelector);

  return (
    <Aux>
      <Modal>
        {errorMessage === "" ? <OrderSummary /> : <ErrorDisplayer />}
      </Modal>

      <Burger></Burger>
      <BuildControls></BuildControls>
    </Aux>
  );
};

export default withErrorHandler(burgerBuilder);
