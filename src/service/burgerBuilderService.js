import axios from "axios";
import { serviceConstants } from "../Constants/";

const getIngredients = async () => {
  try {
    return axios
      .get(serviceConstants.URL + "/ingredients.json")
      .then(response => {
        return response.data;
      });
  } catch (error) {
    console.log(error.message);
  }
};

export const BurgerBuilderService = {
  getIngredients
};
