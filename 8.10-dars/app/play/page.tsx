import React from "react";

const Play = () => {
  return (
    <>
      <a href="/">
        <button className="back">{`<- back`}</button>
      </a>
      <div>
        <h1 className="text-blue-400 text-center text-5xl">Pick a Category</h1>
        <ul className="text-white grid grid-cols-3 gap-11 mt-11 text-center p-11">
          <li className="link_btn">
            <a href="/play/movies">MOVIES</a>
          </li>
          <li className="link_btn">
            <button>
              <a href="/play/shows">TV SHOWS</a>
            </button>
          </li>
          <li className="link_btn">
            <a href="/play/countries">COUNTRIES</a>
          </li>
          <li className="link_btn">
            <a href="/play/cities">CAPITAL CITIES</a>
          </li>
          <li className="link_btn">
            <a href="/play/animals">ANIMALS</a>
          </li>
          <li className="link_btn">
            <a href="/play/sports">SPORTS</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Play;
