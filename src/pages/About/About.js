import React from "react";

export default function About() {
  return (
    <div className="container my-5 w-50 text-center">
      <h5 className="text">About</h5>
      <p>
        TheMealDB was built in 2016 to provide a free data source api for
        recipes online in the hope that developers would build applications and
        cool projects ontop of it. TheMealDB originated on the Kodi forums as a
        way to browse recpies on your TV.
      </p>
      <img
        className="navbar-brand"
        src="./assets/about/icon.png"
        alt="TheMealDB"
      />
    </div>
  );
}
