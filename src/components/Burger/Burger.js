import React from "react";

import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  // Object.key() method will extract the keys of object and gives us an array

  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      // console.log(props.ingredients);
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      // flatten the array using reduce()
      return arr.concat(el); // take the elt to which we are lopping and add it to the array(arr)
    }, []);
  // console.log(transformedIngredients[0]);
  // if no ingredients show this
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
