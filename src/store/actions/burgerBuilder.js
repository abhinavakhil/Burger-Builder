import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";
// here we are creating actionCreators
// addIngredients require a argument as we have in conatiner->burgerBuilder
export const addIngredient = (igname) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: igname,
  };
};

export const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name,
  };
};

// get ingredients as argument and return
export const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients,
  };
};

export const fethIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED,
  };
};

export const initIngredients = () => {
  return (dispatch) => {
    // here we can use async code
    axios
      .get("https://react-burger-builder-cd4fb.firebaseio.com/ingredients.json")
      .then((response) => {
        // this.setState({ ingredients: response.data });
        dispatch(setIngredients(response.data));
      })
      .catch((error) => {
        // this.setState({ error: true });
        dispatch(fethIngredientsFailed());
      });
  };
};
