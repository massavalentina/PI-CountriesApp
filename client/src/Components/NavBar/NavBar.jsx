import React from "react";

import { NavLink } from "react-router-dom";
// import Img from './images/lupa.png';
import Search from "../Search/Search";
import s from "./Navbar.module.css";

function Navbar() {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Cairo+Play&display=swap"
        rel="stylesheet"
      />

      <div className={s.navbar}>
        <div className={s.title}>Countries App</div>

        <div>
          <NavLink exact to="/">
            <button className={s.buttonsH}>Landing</button>
          </NavLink>
        </div>

        <div>
          <NavLink exact to="/home">
            <button className={s.buttons}>HOME</button>
          </NavLink>
        </div>

        <div>
          <NavLink exact to="/create/activities">
            <button className={s.buttons}>Create Activity</button>
          </NavLink>
        </div>

        <div>
          <NavLink exact to="/climateapp">
            <button className={s.buttons}>Weather App</button>
          </NavLink>
        </div>

        <div>
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
