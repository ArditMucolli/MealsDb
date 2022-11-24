import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Meals() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  const { letter } = useParams();

  useEffect(() => {
    axios.get(`www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
  }, []);

  return (
    <div className="container my-5">
      {loading && "Loading your favourite meals..."}
    </div>
  );
}
