import React from "react";

export default function Footer() {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark gap-5">
      <div className="ms-5 p-2">
        <p className="text-light mb-1">
          &copy;{new Date().getFullYear()} TheMealDB
        </p>
        <p className="text-light mb-0">Proudly built in the UK</p>
      </div>
      <div className="ms-auto me-5 gap-5 ">
        <img
          className="navbar-brand"
          src="./assets/footer/logo-tcdb.png"
          alt="TheCocktailDB"
        />
        <img
          className="navbar-brand"
          src="./assets/footer/logo-tadb.png"
          alt="TheAudioDB"
        />
        <img
          className="navbar-brand"
          src="./assets/footer/logo-tsdb.png"
          alt="TheSportsDB"
        />
      </div>
    </div>
  );
}
