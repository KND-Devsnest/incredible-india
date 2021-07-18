import React from "react";
import styles from "../styles/Form.module.css";
import { PlacesData } from "./PlacesData";

const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const Form = () => {
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    phoneNo: "",
    queryMessage: "",
    isSubmitted: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    const { fullName, email, phoneNo, queryMessage } = formData;
    console.log(formData);
    if (fullName === "") {
      alert("Please Enter Your Name");
      return;
    }
    if (email === "" || !validateEmail(email)) {
      alert("Please Enter a valid Email ID");
      return;
    }
    if (phoneNo === "" || phoneNo.length !== 10) {
      alert("Please Enter a valid Phone No.");
      return;
    }
    if (queryMessage === "") {
      alert("Please Enter your Query!!");
      return;
    }
    setFormData({ ...formData, isSubmitted: true });
  };
  console.log(PlacesData);

  return (
    <div className={styles.container}>
      {formData.isSubmitted ? (
        <div className={styles["submitted-div"]}>
          <img
            src="https://www.pngall.com/wp-content/uploads/8/Green-Check-Mark-PNG-Image.png"
            alt="Form Submitted"
          />
          <div className={styles.title}>Form Submitted</div>
        </div>
      ) : (
        <>
          <div className={styles.title}>Contact Us</div>

          <div className={styles["input-div"]}>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              placeholder="Ex. Destro Buva"
              id="fullName"
              onChange={handleChange}
            />
          </div>

          <div className={styles["input-div"]}>
            <label htmlFor="email">Email ID</label>
            <input
              type="email"
              placeholder="Ex. destro@knd.com"
              id="email"
              onChange={handleChange}
            />
          </div>

          <div className={styles["input-div"]}>
            <label htmlFor="phoneNo">Phone No</label>
            <input
              placeholder="Ex. 9800521035"
              id="phoneNo"
              onChange={handleChange}
            />
          </div>

          <div className={styles["input-div"]}>
            <label htmlFor="queryMessage">Query Message</label>
            <textarea
              rows="5"
              placeholder="Ex. How are you?"
              id="queryMessage"
              onChange={handleChange}
            />
          </div>

          <button className={styles["submit-button"]} onClick={handleSubmit}>
            Submit
          </button>
        </>
      )}
    </div>
  );
};

export default Form;
