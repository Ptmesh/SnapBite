import React from 'react';


const Recipe = ({ title, image, cal, ingredients }) => {
  return (
    <div className="recipe">
      <div className="recipe-content">
        <h1 className="recipe-title">{title}</h1>
        <img src={image} alt="" className="recipe-image" />
        <p className="recipe-cal">Total Calories:{cal}</p>
        <ul className="ingredient-list">
          <h4>Ingredients</h4>
          {ingredients.map((item, index) => (
            <li key={index} className="ingredient-item">
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recipe;
