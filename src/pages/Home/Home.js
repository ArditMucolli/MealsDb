import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  const [letters, setLetters] = useState([
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    " H",
    " I",
    " J",
    " K",
    " L",
    " M",
    " N",
    " O",
    " P",
    " Q",
    " R",
    " S",
    " T",
    " U",
    " V",
    "W",
    " X",
    " Y",
    " Z",
  ]);
  return (
    <main>
      <section className="d-flex text-center" style={{ height: "300px" }}>
        <div className="container align-self-center">
          <h1>Welcome to TheMealDB</h1>
          <p>
            Welcome to TheMealDB: An open, crowd-sourced database of RecipesG
            from around the world.
          </p>
        </div>
      </section>
      <div className="container text-center">
        <Link to={`/meals`} className="btn btn-dark p-3">
          Search by Name
        </Link>
      </div>
      <section className="my-5">
        <div className="container">
          <h3 className="text-center">Browse By Name</h3>
          <div className="letters d-flex d-flex flex-wrap justify-content-center">
            {letters.map(letter => (
              <Link to={`/meals/${letter}`}>{letter}</Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
