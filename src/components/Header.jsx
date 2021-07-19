import React from "react";
import style from "../styles/Header.module.css";
const Header = () => {
  return (
    <div className={style.header}>
      <h2 className={style.title}>
        <a>Incredible India!</a>
      </h2>
      <nav className={style.nav}>
        <ul className={style.nav_links}>
          <li>
            <a href="">Top Places</a>
          </li>
          <li>
            <a href="">All Places</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        {/* <button className={style.button}>button1</button> */}
      </nav>
    </div>
  );
};

export default Header;
