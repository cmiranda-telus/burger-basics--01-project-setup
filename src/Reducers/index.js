import { combineReducers } from "redux";
import burgerBuilderReducer from "./burgerBuilderReducer";
import sideDrawerReducer from "./sideDrawerReducer";

const reducer = combineReducers({
  burgerBuilderState: burgerBuilderReducer,
  sideDrawerState: sideDrawerReducer
});

export default reducer;
