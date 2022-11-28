import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function Meal() {
  const [meal, setMeal] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(resp => {
        setMeals(resp.data.meals[0]);
        setLoading(false);
      })
      .catch(e => console.log(e));
  }, []);

  return <div>{loading && "Please wait..."}</div>;
}
