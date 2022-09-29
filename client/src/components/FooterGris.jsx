import React from "react";
import "../css/FooterGris.css";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { Link } from 'react-router-dom';

export default function FooterGris() {
  return (
    <footer className="divContainer1Gris">
      <div className="div1">
        <Link to="/avislegal"
          rel="noreferrer"
          className="h3Gris"
        >
          <h3>Avís legal</h3>
        </Link>
      </div>
      <div className="div2">
        <h3 className="h3Gris">lasoterrania@gmail.com</h3>
      </div>
      <div className="div3">
        <Link to="https://www.instagram.com/lasoterrania/"
          rel="noreferrer"
          target="_blank"
          className="link-divGris"
        >
          <AiFillInstagram />
        </Link>
        <Link to="https://www.facebook.com/La-soterr%C3%A0nia-101259562713131"
          rel="noreferrer"
          target="_blank"
          className="link-divGris"
        >
          <AiFillFacebook />
        </Link>
        <Link to="https://www.youtube.com/c/lasoterr%C3%A0nia"
          rel="noreferrer"
          target="_blank"
          className="link-divGris"
        >
          <AiFillYoutube />
        </Link>
      </div>
    </footer>
  );
}
