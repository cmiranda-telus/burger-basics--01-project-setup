import { orderConstanst } from "../Constants";

const addOrder = order => {
  return {
    type: orderConstanst.ADD_ORDER,
    payload: {
      newOrder: order
    }
  };
};

export const orderActions = {
  addOrder
};
