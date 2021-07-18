import React from "react";
import styles from "../styles/Hero.module.css";
import Img from "../assets/images/hero.jpg";

const Hero = () => {
  return (
    <div className={styles.container}>
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
      <h2 className={styles.heroCaption}>Incredible India</h2>
    </div>
  );
};

export default Hero;
