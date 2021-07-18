import React from "react";
import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>
      <video
        poster="/content/dam/incredibleindia/video/home/monsoon-banner.jpg/jcr:content/renditions/cq5dam.web.1800.737.jpeg"
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
