import React from "react";
import "../styles/footer.css";

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
              <img src="footer_images/icons/phone.svg" alt="" />
              <a href="#1">+1 323-913-4688</a>
            </li>
            <li>
              <img src="footer_images/icons/mail.svg" alt="" />
              <a href="#2">info@demolink.org</a>
            </li>
            <li>
              <img src="footer_images/icons/send.svg" alt="" />
              <a href="#3">4730 Crystal Springs Dr, Los Angeles, CA 90027</a>
            </li>
          </ul>
          <div className="social-buttons">
            <div>
              <img src="footer_images/icons/facebook.svg" alt="" />
            </div>
            <div>
              <img src="footer_images/icons/instagram.svg" alt="" />
            </div>
            <div>
              <img src="footer_images/icons/twitter.svg" alt="" />
            </div>
            <div>
              <img src="footer_images/icons/linkedin.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="move-to-top">
        <img src="footer_images/incredible-cropped.svg" alt="" />
      </div>
    </footer>
  );
};

export default Footer;
