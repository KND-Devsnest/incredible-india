import { useState } from "react";
import styles from "../styles/content.module.css";
import { Places as places } from "./Places";
const Content = () => {
  const [current, setCurrent] = useState("");
  const truncate = (text, n) => {
    return text?.length > n ? text.substr(0, n - 1) + "..." : text;
  };
  return (
    <section className={styles.contentSection}>
      {current ? (
        <div className={styles.descriptionContainer}>
          <h1>{current.title}</h1>
          <button onClick={() => setCurrent("")}>X</button>

          <div
            className={styles.imageTest}
            style={{ backgroundImage: `url('${current.image}')` }}
          ></div>
          <div className={styles.Content}>
            <p>{current.info}</p>
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          {places.map((place, i) => (
            <div className={styles.random} key={i}>
              <img src={place.image} alt="title" />
              <h3 className={styles.placeTitle}>{place.title}</h3>
              <p className={styles.summary}>{truncate(place.info, 110)}</p>
              <button onClick={() => setCurrent(place)}>Read More</button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Content;
