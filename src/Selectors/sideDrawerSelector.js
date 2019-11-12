import { createSelector } from "reselect";

const sideDrawerStateSelector = state => state.sideDrawerState;

const toggledSelector = createSelector(
  sideDrawerStateSelector,
  sideDrawerState => sideDrawerState.toggled
);

export { toggledSelector };
