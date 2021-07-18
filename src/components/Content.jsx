import { useState } from "react";
import styles from "../styles/content.module.css";
const Content = () => {
  const [current, setCurrent] = useState("");
  const truncate = (text, n) => {
    return text?.length > n ? text.substr(0, n - 1) + "..." : text;
  };
  const places = [
    {
      url: "https://www.azamara.com/sites/default/files/heros/kochi-india.jpg",
      title: "Kochi",
      description: "Kochi India",
    },
    {
      url: "https://assets.serenity.co.uk/58000-58999/58779/720x480.jpg",
      title: "Goa",
      description: "Very nice beach",
    },
    {
      url: "https://www.india-briefing.com/news/wp-content/uploads/2013/07/India-Briefing-Economy-of-Mumbai-Indias-Major-Commercial-Hub.jpg",
      title: "Mumbai",
      description: "Sacred Games Time",
    },
    {
      url: "https://www.azamara.com/sites/default/files/heros/kochi-india.jpg",
      title: "Kochi",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    },
    {
      url: "https://assets.serenity.co.uk/58000-58999/58779/720x480.jpg",
      title: "Goa",
      description: "Very nice beach",
    },
    {
      url: "https://www.india-briefing.com/news/wp-content/uploads/2013/07/India-Briefing-Economy-of-Mumbai-Indias-Major-Commercial-Hub.jpg",
      title: "Mumbai",
      description: "Sacred Games Time",
    },
    {
      url: "https://www.azamara.com/sites/default/files/heros/kochi-india.jpg",
      title: "Kochi",
      description: "Kochi India",
    },
    {
      url: "https://assets.serenity.co.uk/58000-58999/58779/720x480.jpg",
      title: "Goa",
      description: "Very nice beach",
    },
    {
      url: "https://www.india-briefing.com/news/wp-content/uploads/2013/07/India-Briefing-Economy-of-Mumbai-Indias-Major-Commercial-Hub.jpg",
      title: "Mumbai",
      description: "Sacred Games Time",
    },
  ];
  return (
    <section className={styles.contentSection}>
      {current ? (
        <div className={styles.descriptionContainer}>
          <h1>{current.title}</h1>
          <button onClick={() => setCurrent("")}>X</button>

          <div
            className={styles.imageTest}
            style={{ backgroundImage: `url('${current.url}')` }}
          ></div>
          <div className={styles.Content}></div>

          <p>{current.description}</p>
        </div>
      ) : (
        <div className={styles.container}>
          {places.map((place, i) => (
            <div className={styles.random} key={i}>
              <img src={place.url} alt="title" />
              <h3 className={styles.placeTitle}>{place.title}</h3>
              <p className={styles.summary}>
                {truncate(place.description, 150)}
              </p>
              <button onClick={() => setCurrent(place)}>Read More</button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Content;
