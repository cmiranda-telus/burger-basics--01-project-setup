import { createSelector } from "reselect";

const burgerBuilderStateSelector = state => state.burgerBuilderState;

const ingredientsSelector = createSelector(
  burgerBuilderStateSelector,
  burgerBuilderState => burgerBuilderState.ingredients
);

const priceSelector = createSelector(
  burgerBuilderStateSelector,
  burgerBuilderState => burgerBuilderState.price
);

const displayOrderSelector = createSelector(
  burgerBuilderStateSelector,
  burgerBuilderState => burgerBuilderState.displayOrder
);

const addingOrderSelector = createSelector(
  burgerBuilderStateSelector,
  burgerBuilderState => burgerBuilderState.addingOrder
);

const showModalSelector = createSelector(
  burgerBuilderStateSelector,
  burgerBuilderState => burgerBuilderState.showModal
);

const errorMessageSelector = createSelector(
  burgerBuilderStateSelector,
  burgerBuilderState => burgerBuilderState.errorMessage
);

const showBackdropSelector = createSelector(
  burgerBuilderStateSelector,
  burgerBuilderState => burgerBuilderState.showBackdrop
);

export {
  ingredientsSelector,
  priceSelector,
  displayOrderSelector,
  addingOrderSelector,
  showModalSelector,
  errorMessageSelector,
  showBackdropSelector
};
