import axios from "axios";
import { serviceConstants } from "../Constants/";

const addOrder = async order => {
  try {
    return axios
      .post(serviceConstants.URL + "/orders.json", order)
      .then(response => {
        console.table(response.headers["content-type"]);
      });
  } catch (error) {
    console.log(error.message);
  }
};

export const ServiceOrders = {
  addOrder
};
