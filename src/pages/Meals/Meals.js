import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Meals.css";
import { Link } from "react-router-dom";

export default function Meals() {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then(resp => {
        setMeals(resp.data.meals);
        setLoading(false);
      })
      .catch(e => console.log(e));
  }, [search]);

  const handleSearch = e => {
    e.preventDefault();
    switch (e.keyCode) {
      case 13:
        setSearch(e.target.value);
        setLoading(false);
        break;
    }
  };

  return (
    <div className="container my-5">
      {loading && "Loading your favourite meals..."}
      <input
        type="text"
        className="form-control"
        onKeyUp={handleSearch}
        placeholder="Enter your favourite meals name"
      />
      <div className="meals mt-5">
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
