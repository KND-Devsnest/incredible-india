import { useState } from "react";
import styles from "../styles/content.module.css";
import { PlacesData as places } from "./PlacesData";
const Content = () => {
  const [current, setCurrent] = useState("");
  const truncate = (text, n) => {
    return text?.length > n ? text.substr(0, n - 1) + "..." : text;
  };
  return (
    <section id="contentSection" className={styles.contentSection}>
      {current ? (
        <div className={styles.descriptionContainer}>
          <h1>{current.title}</h1>
          <button onClick={() => setCurrent("")}>X</button>

          <img
            className={styles.imageTest}
            src={current.image}
            alt={current.title}
          />
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
              <button
                onClick={() => {
                  setCurrent(place);
                  window.location.href = "#contentSection";
                }}
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Content;
