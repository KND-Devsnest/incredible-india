import React from "react";
import style from "../styles/Header.module.css";
import { useEffect, useState } from "react";
const Header = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
  });
  return (
    <div className={show ? style.header : style.headerDark}>
      <h2 className={style.title}>
        <a href="#heroSection">Incredible India</a>
      </h2>
      <nav className={style.nav}>
        <ul className={style.nav_links}>
          <li>
            <a href="#placeSection">Top Places</a>
          </li>
          <li>
            <a href="#contentSection">All Places</a>
          </li>
          <li>
            <a href="#formSection">Contact</a>
          </li>
        </ul>
        {/* <button className={style.button}>button1</button> */}
      </nav>
    </div>
  );
};

export default Header;
