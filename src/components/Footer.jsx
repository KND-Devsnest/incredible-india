import React from "react";
import "../styles/footer.css";
import logo from "../assets/incredible-cropped.svg";
import fb from "../assets/icons/facebook.svg";
import insta from "../assets/icons/instagram.svg";
import twitter from "../assets/icons/twitter.svg";
import lk from "../assets/icons/linkedin.svg";
import phone from "../assets/icons/phone.svg";
import mail from "../assets/icons/mail.svg";
import send from "../assets/icons/send.svg";

const Footer = () => {
  return (
    <footer>
      <div className="main-footer">
        <div className="footer-explore">
          <h4>Explore</h4>
          <ul className="explore-items">
            <li>
              <a href="#1">Home</a>
            </li>
            <li>
              <a href="#2">Places</a>
            </li>
            <li>
              <a href="#3">About</a>
            </li>
            <li>
              <a href="#4">Popular</a>
            </li>
          </ul>
        </div>
        <div className="footer-legal">
          <h4>Legal</h4>
          <ul className="legal-items">
            <li>
              <a href="#1">Legal</a>
            </li>
            <li>
              <a href="#2">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-random">
          <h4>Popular</h4>
          <ul className="random-items">
            <li>
              <a href="#1">Place1</a>
            </li>
            <li>
              <a href="#2">Place2</a>
            </li>
            <li>
              <a href="#3">Place3</a>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <ul className="contact-items">
            <li>
              <img src={phone} alt="" />
              <a href="#1">+1 323-913-4688</a>
            </li>
            <li>
              <img src={mail} alt="" />
              <a href="#2">info@demolink.org</a>
            </li>
            <li>
              <img src={send} alt="" />
              <a href="#3">4730 Crystal Springs Dr, Los Angeles, CA 90027</a>
            </li>
          </ul>
          <div className="social-buttons">
            <div>
              <img src={fb} alt="" />
            </div>
            <div>
              <img src={insta} alt="" />
            </div>
            <div>
              <img src={twitter} alt="" />
            </div>
            <div>
              <img src={lk} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        {/* <img src={logo} alt="" /> */}
        Incredible India
      </div>
    </footer>
  );
};

export default Footer;
