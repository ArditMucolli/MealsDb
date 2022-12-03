import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function MealsForSpecificLetter() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const { letter } = useParams();

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${letter}`)
      .then(resp => {
        setMeals(resp.data.meals);
        setLoading(false);
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <div className="container my-5">
      {loading && "Loading your favourite meals..."}
      <div className="meals mt-5">
        {meals &&
          meals.map(meal => (
            <div key={meal.idMeal} className="card">
              <img
                src={meal.strMealThumb}
                className="card-img-top"
                alt={meal.strMeal}
              />
              <div className="card-body">
                <h5 className="card-title">{meal.strMeal}</h5>
                <p className="card-text">
                  {meal.strInstructions.substring(0, 100)}...
                </p>
                <Link
                  to={`/meal/ingridients/${meal.idMeal}`}
                  className="btn btn-dark"
                >
                  Ingridients
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
