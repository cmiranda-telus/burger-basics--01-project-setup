import React from "react";
import {
  ingredientsSelector,
  priceSelector,
  addingOrderSelector,
  displayOrderSelector
} from "../../../Selectors";
import { useSelector, useDispatch } from "react-redux";
import Aux from "../../../hoc/Auxilary";
import Button from "../../UI/Button/Button";
import { burgerBuilderActions, orderActions } from "../../../Actions/";
import Spinner from "../../UI/Spinner/Spinner";

const orderSummary = props => {
  const ingredients = useSelector(ingredientsSelector);
  const total = useSelector(priceSelector);
  const dispatch = useDispatch();
  const addingOrderFlag = useSelector(addingOrderSelector);
  const purchasing = useSelector(displayOrderSelector);

  const cancelHandler = () => {
    dispatch(burgerBuilderActions.cancelOrder());
  };

  const continueHandler = () => {
    const newOrder = {
      ingredients: ingredients,
      total: total,
      customer: {
        name: "Jhon Doe",
        address: {
          street: "Teststreet 1",
          zipCode: "41351",
          country: "Germany"
        },
        email: "test@test.com"
      },
      deliveryMethod: "fastest"
    };
    dispatch(orderActions.addOrder(newOrder));
  };

  const componentsToDisplay = () => {
    if (addingOrderFlag) {
      return (
        <Aux>
          <Spinner />
        </Aux>
      );
    } else if (purchasing) {
      return (
        <Aux>
          <h3> Your Order</h3>
          <p> A delicious burger with the following ingredients:</p>
          <ul>
            {Object.keys(ingredients).map(ingKey => {
              return (
                <li key={ingKey}>
                  <p>
                    <span style={{ textTransform: "capitalize" }}>
                      {ingKey}
                    </span>{" "}
                    <strong>{ingredients[ingKey]}</strong>
                  </p>
                </li>
              );
            })}
          </ul>
          <p>
            <strong>Total Price: ${total}</strong>
          </p>
          <p>Continue to Checkout? </p>
          <Button btnType="Danger" clicked={cancelHandler}>
            {" "}
            CANCEL
          </Button>
          <Button btnType="Success" clicked={continueHandler}>
            CONTINUE
          </Button>
        </Aux>
      );
    } else {
      return null;
    }
  };

  return componentsToDisplay();
};

export default orderSummary;
