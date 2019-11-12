import { sideDrawerConstants } from "../Constants/constants";

const initialState = {
  toggled: false
};

const sideDrawerReducer = (state = initialState, action) => {
  switch (action.type) {
    case sideDrawerConstants.SIDEDRAWER_DISPLAY:
      return {
        ...state,
        toggled: action.payload.toggled
      };
    default:
      return state;
  }
};

export default sideDrawerReducer;
