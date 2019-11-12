import { sideDrawerConstants } from "../Constants/";

const toggledSideDrawer = toggled => {
  return {
    type: sideDrawerConstants.SIDEDRAWER_DISPLAY,
    payload: {
      toggled
    }
  };
};

export const sideDrawerAction = { toggledSideDrawer };
