import React, { useEffect } from "react";
import clasess from "./Burger.css";
import { useSelector, useDispatch } from "react-redux";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import { ingredientsSelector } from "../../Selectors";
import { burgerBuilderActions } from "../../Actions";

import Spinner from "../UI/Spinner/Spinner";

const burger = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(burgerBuilderActions.getIngredients());
  }, []);

  const ingredientsToDisplay = useSelector(ingredientsSelector);

  let jsxIngredients = <Spinner />;

  if (ingredientsToDisplay) {
    jsxIngredients = Object.keys(ingredientsToDisplay)
      .map(igKey => {
        return [...Array(ingredientsToDisplay[igKey])].map((_, index) => {
          return <BurgerIngredient key={igKey + index} type={igKey} />;
        });
      })
      .reduce((after, before) => {
        return after.concat(before);
      }, []);

    if (jsxIngredients.length === 0) {
      jsxIngredients = <p>Please start adding ingredients!</p>;
    }
  }

  return (
    <div className={clasess.Burger}>
      <BurgerIngredient type="bread-top"></BurgerIngredient>
      {jsxIngredients}
      <BurgerIngredient type="bread-bottom"></BurgerIngredient>
    </div>
  );
};

export default burger;
