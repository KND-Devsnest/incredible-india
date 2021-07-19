import React from "react";
import styles from "../styles/Hero.module.css";
import Img from "../assets/images/hero.jpg";

const Hero = () => {
  return (
    <div id="heroSection" className={styles.container}>
      <video
        poster={Img}
        preload="auto"
        autoPlay="autoplay"
        muted="muted"
        loop="loop"
      >
        <source
          src="https://aguyran.me/media/tourIndia1080Full.mp4"
          type="video/mp4"
        />
      </video>
      <div className={styles.overlay}></div>
      <h2 className={styles.heroCaption}>
        Incredible
        <br />
        <span>India</span>
      </h2>
    </div>
  );
};

export default Hero;
