import { burgerBuilderConstants } from "../Constants/constants";

const addIngredient = type => {
  switch (type) {
    case "salad":
      return {
        type: burgerBuilderConstants.ADD_SALAD
      };
    case "bacon":
      return {
        type: burgerBuilderConstants.ADD_BACON
      };
    case "meat":
      return {
        type: burgerBuilderConstants.ADD_MEAT
      };
    case "cheese":
      return {
        type: burgerBuilderConstants.ADD_CHEESE
      };
    default:
      return null;
  }
};

const subtractIngredient = type => {
  switch (type) {
    case "salad":
      return {
        type: burgerBuilderConstants.SUBTRAC_SALAD
      };
    case "bacon":
      return {
        type: burgerBuilderConstants.SUBTRAC_BACON
      };
    case "meat":
      return {
        type: burgerBuilderConstants.SUBTRAC_MEAT
      };
    case "cheese":
      return {
        type: burgerBuilderConstants.SUBTRAC_CHEESE
      };
    default:
      return null;
  }
};

const displayOrder = () => {
  return {
    type: burgerBuilderConstants.DISPLAY_ORDER
  };
};

const cancelOrder = () => {
  return {
    type: burgerBuilderConstants.CANCEL_ORDER
  };
};

const closeBackdrop = () => {
  return {
    type: burgerBuilderConstants.CLOSE_BACKDROP
  };
};

const getIngredients = ingredients => {
  return {
    type: burgerBuilderConstants.GET_INGREDIENTS
  };
};

export const burgerBuilderActions = {
  addIngredient,
  subtractIngredient,
  displayOrder,
  cancelOrder,
  closeBackdrop,
  getIngredients
};
