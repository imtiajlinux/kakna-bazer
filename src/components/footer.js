import React from "react";
import "./footerStyle.css";
import FotterLogo from "../assets/footer-logo.png";
import { Link } from "react-router-dom";
import { AiFillCopyrightCircle } from "react-icons/ai";
import {
  FaFacebook,
  FaTwitter,
  FaGithubSquare,
  FaGooglePlus,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer-section">
        <div className="footer">
          <div className="footer-brand-logo footer-fix-width">
            <img src={FotterLogo} alt="foote" />
            <address>manikganj , dhaka, bangladesh 1800</address>
          </div>
          <div className="footer-category footer-fix-width">
            <h2>category</h2>
            <h4>
              <Link to="#">phone</Link>
            </h4>
            <h4>
              <Link to="#">laptop</Link>
            </h4>
            <h4>
              <Link to="#">bag</Link>
            </h4>
            <h4>
              <Link to="#">shoe</Link>
            </h4>
          </div>
          <div className="footer-service footer-fix-width">
            <h2>let us help you</h2>
            <h4>
              <Link to="/contact">contact</Link>
            </h4>
            <h4>
              <Link to="/warranty">warranty</Link>
            </h4>
            <h4>
              <Link to="/about">aboutUs</Link>
            </h4>
            <h4 className="footer-icons">
              <Link to="#">
                <FaFacebook />
              </Link>
              <Link to="#">
                <FaTwitter />
              </Link>
              <Link to="#">
                <FaGithubSquare />
              </Link>
              <Link to="#">
                <FaGooglePlus />
              </Link>
            </h4>
          </div>
        </div>
        <div className="copy-right">
          <h3>
            <AiFillCopyrightCircle /> 2023 all copyright resolved foysal imtiaj.
          </h3>
        </div>
      </footer>
    </>
  );
};

export default Footer;
