import React from 'react';
import './RecipeTile.css';

export default function RecipeTile({recipe}) {
  return (
    recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/)!=null &&(
    <div className="recipeTile">
        <img className="recipe_img" src={recipe["recipe"]["image"]} alt=""></img>
        <p className="recipe-name">{recipe["recipe"]["label"]}</p>
        <p >Calories: {recipe["recipe"]["calories"]}</p>
        <p>Type: {recipe["recipe"]["dishType"]}</p>
        <p>Serves: {recipe["recipe"]["yield"]}</p>
       
    </div>
  )
  );
}
