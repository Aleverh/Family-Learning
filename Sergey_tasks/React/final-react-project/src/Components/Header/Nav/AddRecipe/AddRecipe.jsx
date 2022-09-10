import React from "react";
import "./main.css";

function AddRecipe(){
   return(
      <li className="nav__item">
         <button className="nav__btn nav__btn--add-recipe">
            <svg className="nav__icon">
               <use href="img/icons.svg#icon-edit"></use>
            </svg>
            <span>Add recipe</span>
         </button>
      </li>
   )
}
export default AddRecipe;