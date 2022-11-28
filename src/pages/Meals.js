import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Meals.css";
import { useParams } from "react-router-dom";

export default function Meals() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  const { letter } = useParams();

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
      .then(resp => {
        setMeals(resp.data.meals);
        setLoading(false);
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <div className="container meals my-5">
      {loading && "Loading your favourite meals..."}
      {meals &&
        meals.map(meal => (
          <div key={meal.idMeal} className="card" style={{ width: "18rem" }}>
            <img
              src={meal.strMealThumb}
              className="card-img-top"
              alt={meal.strMeal}
            ></img>
            <div className="card-body">
              <h5 className="card-title">{meal.strMeal}</h5>
              <p className="card-text">
                {meal.strInstructions.substring(0, 100)}...
              </p>
              <a href="#" className="btn btn-dark">
                Ingridients
              </a>
            </div>
          </div>
        ))}
    </div>
  );
}
