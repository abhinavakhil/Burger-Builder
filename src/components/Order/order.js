// how 1 order shoul look like
import React from "react";

import classes from "./order.css";

const order = (props) => {
  // since ingredients is an obj so we need to convert it into an array , we can convert it here or in orders.js
  // we can use this way as we did in burger.js
  //    let transformedIngredients = Object.keys(props.ingredients)
  // .map((igKey) => {
  //     return [...Array(props.ingredients[igKey])].map((_, i) => {
  //       return <BurgerIngredient key={igKey + i} type={igKey} />;
  //     });
  //   })
  //   .reduce((arr, el) => {
  //     // flatten the array using reduce()
  //     return arr.concat(el); // take the elt to which we are lopping and add it to the array(arr)
  //   }, []);
  // or this way
  const ingredients = [];
  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName],
    });
  }

  const ingredientOutput = ingredients.map((ig) => {
    return (
      <span
        key={ig.name}
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px",
        }}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutput} </p>
      <p>
        Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default order;
