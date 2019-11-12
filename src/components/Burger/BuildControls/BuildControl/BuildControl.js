import React from "react";
import classes from "./BuildControl.css";
import { burgerBuilderActions } from "../../../../Actions";
import { useDispatch } from "react-redux";

const buildControl = props => {
  const dispatch = useDispatch();

  const moreHandler = type => {
    dispatch(burgerBuilderActions.addIngredient(type));
  };

  const lessHandler = type => {
    dispatch(burgerBuilderActions.subtractIngredient(type));
  };

  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button
        disabled={props.disabled}
        className={classes.Less}
        onClick={() => lessHandler(props.type)}
      >
        Less
      </button>
      <button className={classes.More} onClick={() => moreHandler(props.type)}>
        More
      </button>
    </div>
  );
};

export default buildControl;
