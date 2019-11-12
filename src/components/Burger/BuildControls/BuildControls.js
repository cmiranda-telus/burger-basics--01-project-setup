import React from "react";

import BuildControl from "./BuildControl/BuildControl";
import clasess from "./BuildControls.css";

import {
  ingredientsSelector,
  priceSelector
  // displayOrderSelector
} from "../../../Selectors";
import { useSelector, useDispatch } from "react-redux";
import { burgerBuilderActions } from "../../../Actions";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const buildControls = props => {
  const dispatch = useDispatch();
  const disableIngredients = { ...useSelector(ingredientsSelector) };
  const total = useSelector(priceSelector);

  for (let ingredient in disableIngredients) {
    disableIngredients[ingredient] = disableIngredients[ingredient] <= 0;
  }

  const displayOrderHandler = type => {
    dispatch(burgerBuilderActions.displayOrder());
  };

  return (
    <div className={clasess.BuildControls}>
      <h3>Current Price:$ {total}</h3>
      {controls.map(control => {
        return (
          <BuildControl
            label={control.label}
            type={control.type}
            key={control.label}
            disabled={disableIngredients[control.type]}
          ></BuildControl>
        );
      })}
      <button
        className={clasess.OrderButton}
        disabled={!(total > 4)}
        onClick={() => displayOrderHandler()}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default buildControls;
