import {
  burgerBuilderConstants,
  orderConstanst,
  sideDrawerConstants
} from "../Constants";

const intialState = {
  price: 4,
  ingredients: null,
  displayOrder: false,
  addingOrder: false,
  errorMessage: "",
  showModal: false,
  showBackdrop: false
};

const burgerBuilderReducer = (state = intialState, action) => {
  let price = Number(state.price);
  let ingredients = { ...state.ingredients };
  switch (action.type) {
    case burgerBuilderConstants.SET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.payload.ingredients
      };
    case burgerBuilderConstants.ADD_SALAD:
      price = price + 0.2;
      ingredients["salad"] = ingredients["salad"] + 1;
      return {
        ...state,
        price: price.toFixed(2),
        ingredients
      };
    case burgerBuilderConstants.ADD_BACON:
      price = price + 0.7;
      ingredients["bacon"] = ingredients["bacon"] + 1;
      return {
        ...state,
        price: price.toFixed(2),
        ingredients
      };
    case burgerBuilderConstants.ADD_CHEESE:
      price = price + 0.5;
      ingredients["cheese"] = ingredients["cheese"] + 1;
      return {
        ...state,
        price: price.toFixed(2),
        ingredients
      };
    case burgerBuilderConstants.ADD_MEAT:
      price = price + 1.5;
      ingredients["meat"] = ingredients["meat"] + 1;
      return {
        ...state,
        price: price.toFixed(2),
        ingredients
      };
    case burgerBuilderConstants.SUBTRAC_SALAD:
      price = price - 0.2;
      ingredients["salad"] = ingredients["salad"] - 1;
      return {
        ...state,
        price: price.toFixed(2),
        ingredients
      };
    case burgerBuilderConstants.SUBTRAC_CHEESE:
      price = price - 0.5;
      ingredients["cheese"] = ingredients["cheese"] - 1;
      return {
        ...state,
        price: price.toFixed(2),
        ingredients
      };
    case burgerBuilderConstants.SUBTRAC_BACON:
      price = price - 0.7;
      ingredients["bacon"] = ingredients["bacon"] - 1;
      return {
        ...state,
        price: price.toFixed(2),
        ingredients
      };
    case burgerBuilderConstants.SUBTRAC_MEAT:
      price = price - 1.5;
      ingredients["meat"] = ingredients["meat"] - 1;
      return {
        ...state,
        price: price.toFixed(2),
        ingredients
      };
    case burgerBuilderConstants.DISPLAY_ORDER:
      return {
        ...state,
        displayOrder: true,
        showModal: true,
        showBackdrop: true
      };
    case burgerBuilderConstants.CANCEL_ORDER:
      return {
        ...state,
        displayOrder: false,
        showModal: false,
        showBackdrop: false
      };
    case orderConstanst.ADD_ORDER:
      return {
        ...state,
        addingOrder: true
      };
    case orderConstanst.RETURN_HOME:
      return {
        ...state,
        addingOrder: action.payload.addingOrder,
        purchasing: action.payload.purchasing,
        showModal: false
      };
    case burgerBuilderConstants.CLOSE_BACKDROP:
      return {
        ...state,
        showBackdrop: false,
        showModal: false,
        errorMessage: ""
      };
    case sideDrawerConstants.SIDEDRAWER_DISPLAY:
      return {
        ...state,
        showBackdrop: action.payload.toggled
      };
    case burgerBuilderConstants.ERROR:
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
        showBackdrop: true,
        showModal: true
      };
    default:
      return state;
  }
};

export default burgerBuilderReducer;
