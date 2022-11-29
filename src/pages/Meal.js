import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Meal.css";

export default function Meal() {
  const [meal, setMeal] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(resp => {
        setMeal(resp.data.meals[0]);
        setLoading(false);
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <div>
      {loading && "Please wait..."}
      <div className="container my-5">
        <div className="row">
          <div className="col-md-5">
            <figure>
              <img
                src={meal.strMealThumb}
                className="card-img-top rounded"
                alt={meal.strMeal}
              />
              <figcaption>{meal.strMeal}</figcaption>
            </figure>
          </div>
          <div className="col-md-6 offset-md-1">
            <h2>{meal.strMeal}</h2>
            <h3 className="mt-3">Ingridients</h3>
            <div className="ingredients">
              <div className="card p-2 mb-1">
                <span>{meal.strIngredient1}</span>
                <span>{meal.strMeasure1}</span>
              </div>
              <div className="card p-2 mb-1">
                <span>{meal.strIngredient2}</span>
                <span>{meal.strMeasure2}</span>
              </div>
              <div className="card p-2 mb-1">
                <span>{meal.strIngredient3}</span>
                <span>{meal.strMeasure3}</span>
              </div>
            </div>
            <h3 className="mt-3">Instructions</h3>
            <p className="my-2">{meal.strInstructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
